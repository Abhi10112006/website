'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export default function GlowingOrbs() {
    const orb1Ref = useRef<THREE.Mesh>(null);
    const orb2Ref = useRef<THREE.Mesh>(null);
    const orb3Ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const time = state.clock.elapsedTime;

        // Animate orb positions with floating effect
        if (orb1Ref.current) {
            orb1Ref.current.position.x = 8 + Math.sin(time * 0.3) * 2;
            orb1Ref.current.position.y = 3 + Math.cos(time * 0.4) * 1.5;
            orb1Ref.current.position.z = -8 + Math.sin(time * 0.2) * 1;
        }

        if (orb2Ref.current) {
            orb2Ref.current.position.x = -7 + Math.cos(time * 0.25) * 2;
            orb2Ref.current.position.y = -2 + Math.sin(time * 0.35) * 1.5;
            orb2Ref.current.position.z = -6 + Math.cos(time * 0.15) * 1;
        }

        if (orb3Ref.current) {
            orb3Ref.current.position.x = 2 + Math.sin(time * 0.2) * 3;
            orb3Ref.current.position.y = -5 + Math.cos(time * 0.3) * 2;
            orb3Ref.current.position.z = -10 + Math.sin(time * 0.1) * 1;
        }
    });

    return (
        <>
            {/* Amber orb - top right */}
            <Sphere ref={orb1Ref} args={[2, 16, 16]} position={[8, 3, -8]}>
                <meshBasicMaterial
                    color="#f59e0b"
                    transparent
                    opacity={0.15}
                    blending={THREE.AdditiveBlending}
                />
            </Sphere>
            <pointLight position={[8, 3, -8]} color="#f59e0b" intensity={2} distance={15} decay={2} />

            {/* Orange orb - bottom left */}
            <Sphere ref={orb2Ref} args={[1.5, 16, 16]} position={[-7, -2, -6]}>
                <meshBasicMaterial
                    color="#f97316"
                    transparent
                    opacity={0.12}
                    blending={THREE.AdditiveBlending}
                />
            </Sphere>
            <pointLight position={[-7, -2, -6]} color="#f97316" intensity={1.5} distance={12} decay={2} />

            {/* Yellow orb - bottom center */}
            <Sphere ref={orb3Ref} args={[1.2, 16, 16]} position={[2, -5, -10]}>
                <meshBasicMaterial
                    color="#fbbf24"
                    transparent
                    opacity={0.1}
                    blending={THREE.AdditiveBlending}
                />
            </Sphere>
            <pointLight position={[2, -5, -10]} color="#fbbf24" intensity={1} distance={10} decay={2} />
        </>
    );
}
