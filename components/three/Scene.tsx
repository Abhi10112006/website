'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useMemo } from 'react';
import { useDeviceCapabilities } from '@/hooks/useDeviceCapabilities';
import ParticleField from './ParticleField';
import GlowingOrbs from './GlowingOrbs';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export default function Scene() {
    const { isMobile, gpuTier, dpr } = useDeviceCapabilities();

    const canvasConfig = useMemo(() => ({
        dpr: dpr,
        gl: {
            powerPreference: isMobile ? 'low-power' : 'high-performance' as WebGLPowerPreference,
            antialias: !isMobile,
            alpha: true,
        },
        camera: {
            position: [0, 0, 5] as [number, number, number],
            fov: 75,
            near: 0.1,
            far: 100,
        },
    }), [isMobile, dpr]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1]">
            <Canvas {...canvasConfig}>
                <Suspense fallback={null}>
                    {/* Ambient lighting */}
                    <ambientLight intensity={0.2} />

                    {/* Particle field background */}
                    <ParticleField isMobile={isMobile} />

                    {/* Glowing ambient orbs */}
                    <GlowingOrbs />

                    {/* Post-processing effects - desktop only */}
                    {!isMobile && gpuTier >= 2 && (
                        <EffectComposer>
                            <Bloom
                                intensity={0.5}
                                luminanceThreshold={0.2}
                                luminanceSmoothing={0.9}
                                radius={0.8}
                            />
                        </EffectComposer>
                    )}
                </Suspense>
            </Canvas>
        </div>
    );
}
