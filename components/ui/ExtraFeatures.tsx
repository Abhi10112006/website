'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Keyboard } from 'lucide-react';

const extraFeatures = [
    { icon: <Keyboard className="w-8 h-8 text-accent-amber" />, title: 'Virtual Keyboard Toggle', description: 'Resizable, haptic feedback & 3 themes' },
    { icon: '🎓', title: 'Interactive Tour', description: '10-step onboarding walkthrough' },
    { icon: '⏰', title: 'Overdue Alerts', description: 'Never miss a payment deadline' },
    { icon: '🔍', title: 'Profile Search', description: 'Find anyone instantly' },
    { icon: '💾', title: 'Backup & Restore', description: 'Export/import JSON anytime' },
    { icon: '✨', title: 'Butter-Smooth UI', description: 'Framer Motion animations' },
];

export default function ExtraFeatures() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section className="py-24 pt-0" ref={sectionRef}>
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent-amber mb-4">
                        And More
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Built for <span className="gradient-text">Power Users</span>
                    </h2>
                    <p className="text-lg text-text-secondary max-w-[600px] mx-auto">
                        Every detail is crafted for the best experience.
                    </p>
                </motion.div>

                {/* Extra Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {extraFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-center gap-4 p-6 bg-bg-card border border-border-subtle rounded-2xl transition-all hover:border-border-glow hover:-translate-y-1"
                        >
                            <span className="text-3xl flex-shrink-0">{feature.icon}</span>
                            <div>
                                <h4 className="font-bold text-text-primary mb-1">
                                    {feature.title}
                                </h4>
                                <p className="text-sm text-text-muted">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
