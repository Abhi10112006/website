'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function CTASection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section id="contact" className="py-24" ref={sectionRef}>
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="relative bg-gradient-to-br from-accent-amber/20 to-accent-yellow/10 border border-border-glow rounded-[32px] p-16 text-center overflow-hidden"
                >
                    {/* Animated background */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(245,158,11,0.1)_0%,transparent_50%)] animate-spin-slow" />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                            Ready to <span className="gradient-text">Take Control?</span>
                        </h2>
                        <p className="text-lg text-text-secondary max-w-[500px] mx-auto mb-8">
                            Stop forgetting who owes you what. Start tracking in seconds—no signup
                            required.
                        </p>
                        <a
                            href="https://ledger69.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-accent-amber via-accent-orange to-accent-yellow text-bg-deep font-bold text-lg rounded-2xl transition-all hover:-translate-y-1 hover:shadow-glow-amber no-underline"
                        >
                            Launch Abhi&apos;s Ledger
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
