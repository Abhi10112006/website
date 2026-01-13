'use client';

import { useState, useEffect } from 'react';

interface DeviceCapabilities {
    isMobile: boolean;
    gpuTier: number;
    dpr: number;
    isLowEnd: boolean;
}

export function useDeviceCapabilities(): DeviceCapabilities {
    const [capabilities, setCapabilities] = useState<DeviceCapabilities>({
        isMobile: false,
        gpuTier: 2,
        dpr: 1,
        isLowEnd: false,
    });

    useEffect(() => {
        const detectCapabilities = async () => {
            // Detect mobile
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            ) || window.innerWidth < 768;

            // Get device pixel ratio (capped for performance)
            const rawDpr = window.devicePixelRatio || 1;
            const dpr = isMobile ? Math.min(rawDpr, 1.5) : Math.min(rawDpr, 2);

            // Simple GPU tier detection
            let gpuTier = 2; // Default to mid-tier

            try {
                const canvas = document.createElement('canvas');
                const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

                if (gl && gl instanceof WebGLRenderingContext) {
                    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                    if (debugInfo) {
                        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
                        const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);

                        // Check for integrated graphics or low-end
                        const lowEndIndicators = [
                            'Intel HD',
                            'Intel UHD',
                            'Mali',
                            'Adreno 3',
                            'Adreno 4',
                            'PowerVR',
                            'SwiftShader',
                        ];

                        const highEndIndicators = [
                            'NVIDIA',
                            'GeForce RTX',
                            'GeForce GTX',
                            'Radeon RX',
                            'Apple M1',
                            'Apple M2',
                            'Apple M3',
                        ];

                        if (lowEndIndicators.some(indicator => renderer.includes(indicator))) {
                            gpuTier = 1;
                        } else if (highEndIndicators.some(indicator =>
                            renderer.includes(indicator) || vendor.includes(indicator)
                        )) {
                            gpuTier = 3;
                        }
                    }
                }
            } catch (e) {
                // Fallback to mid-tier if detection fails
                gpuTier = 2;
            }

            // Mobile devices get lower tier by default
            if (isMobile) {
                gpuTier = Math.min(gpuTier, 2);
            }

            const isLowEnd = gpuTier <= 1 || isMobile;

            setCapabilities({
                isMobile,
                gpuTier,
                dpr,
                isLowEnd,
            });
        };

        detectCapabilities();

        // Re-detect on resize
        const handleResize = () => {
            detectCapabilities();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return capabilities;
}
