'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
    isMobile: boolean;
}

export default function ParticleField({ isMobile }: ParticleFieldProps) {
    const pointsRef = useRef<THREE.Points>(null);
    const particleCount = isMobile ? 800 : 3000;

    const { positions, colors, sizes } = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);

        // Golden amber color palette
        const colorPalette = [
            new THREE.Color('#f59e0b'), // Amber
            new THREE.Color('#f97316'), // Orange
            new THREE.Color('#fbbf24'), // Yellow
            new THREE.Color('#fcd34d'), // Light yellow
        ];

        for (let i = 0; i < particleCount; i++) {
            // Position - spread across a large sphere
            const radius = 15 + Math.random() * 25;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi) - 10;

            // Color - random from palette
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;

            // Size - varied
            sizes[i] = Math.random() * 2 + 0.5;
        }

        return { positions, colors, sizes };
    }, [particleCount]);

    useFrame((state) => {
        if (pointsRef.current) {
            const time = state.clock.elapsedTime;

            // Gentle rotation
            pointsRef.current.rotation.y = time * 0.02;
            pointsRef.current.rotation.x = Math.sin(time * 0.01) * 0.1;

            // Subtle pulsing
            const scale = 1 + Math.sin(time * 0.5) * 0.02;
            pointsRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particleCount}
                    array={colors}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-size"
                    count={particleCount}
                    array={sizes}
                    itemSize={1}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                vertexColors
                transparent
                opacity={0.6}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}
