'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    visual?: string;
    isTall?: boolean;
}

export default function FeatureCard({
    icon,
    title,
    description,
    visual,
    isTall,
}: FeatureCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const [trustScore, setTrustScore] = useState(0);

    // Animate trust score when in view
    useEffect(() => {
        if (visual === 'trust-score') {
            const interval = setInterval(() => {
                setTrustScore((prev) => {
                    if (prev < 78) return prev + 1;
                    clearInterval(interval);
                    return 78;
                });
            }, 20);
            return () => clearInterval(interval);
        }
    }, [visual]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
    };

    const renderVisual = () => {
        switch (visual) {
            case 'trust-score':
                return (
                    <div className="mt-6 p-6 bg-black/30 rounded-2xl border border-border-subtle">
                        <div className="flex items-center gap-4">
                            <div className="relative w-20 h-20">
                                {/* Trust score circle */}
                                <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                                    <circle
                                        cx="40"
                                        cy="40"
                                        r="35"
                                        fill="none"
                                        stroke="rgba(100, 116, 139, 0.3)"
                                        strokeWidth="6"
                                    />
                                    <circle
                                        cx="40"
                                        cy="40"
                                        r="35"
                                        fill="none"
                                        stroke="#10b981"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                        strokeDasharray={`${(trustScore / 100) * 220} 220`}
                                        className="transition-all duration-300"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-2xl font-extrabold text-accent-emerald">
                                        {trustScore}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-text-muted uppercase tracking-wider">
                                    Trust Rating
                                </span>
                                <span className="text-base font-bold text-accent-emerald">
                                    ✓ Reliable
                                </span>
                            </div>
                        </div>
                    </div>
                );

            case 'calculator':
                return (
                    <div className="mt-6 p-6 bg-black/30 rounded-2xl border border-border-subtle font-mono text-sm">
                        <div className="flex justify-between py-2 border-b border-border-subtle">
                            <span className="text-text-muted">Principal</span>
                            <span>₹10,000</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border-subtle">
                            <span className="text-text-muted">Interest (2% monthly)</span>
                            <span>₹600</span>
                        </div>
                        <div className="flex justify-between py-2 font-bold text-accent-amber">
                            <span className="text-text-muted">Total Due</span>
                            <span>₹10,600</span>
                        </div>
                    </div>
                );

            case 'pdf':
                return (
                    <div className="mt-auto pt-6">
                        <div className="p-6 bg-black/30 rounded-2xl border border-border-subtle">
                            <div className="space-y-2">
                                <div className="h-3 bg-white/10 rounded w-4/5" />
                                <div className="h-3 bg-white/10 rounded w-full" />
                                <div className="h-3 bg-white/10 rounded w-3/5" />
                                <div className="mt-4 h-6 bg-accent-rose/20 border border-accent-rose/40 rounded flex items-center justify-center w-1/2">
                                    <span className="text-[10px] text-accent-rose font-bold tracking-widest">
                                        CONFIDENTIAL
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`relative premium-card rounded-[32px] p-8 overflow-hidden group ${isTall ? 'flex flex-col h-full' : ''
                }`}
            style={{
                '--mouse-x': `${mousePosition.x}%`,
                '--mouse-y': `${mousePosition.y}%`,
            } as React.CSSProperties}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(245,158,11,0.08),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon */}
            <div className="relative w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                {icon}
            </div>

            {/* Title */}
            <h3 className="relative text-xl font-bold mb-4 group-hover:text-accent-amber transition-colors duration-300">
                {title}
            </h3>

            {/* Description */}
            <p className="relative text-text-secondary text-[15px] leading-relaxed mb-6">
                {description}
            </p>

            {/* Visual */}
            <div className="relative mt-auto">
                {renderVisual()}
            </div>
        </motion.div>
    );
}
