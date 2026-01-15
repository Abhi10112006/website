'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Clock, Zap } from 'lucide-react';

export default function ContactSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section id="contact" className="py-24 relative" ref={sectionRef}>
            <div className="max-w-[1000px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="premium-card rounded-[40px] p-8 md:p-16 text-center relative overflow-hidden group"
                >
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-amber/10 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-rose/10 border border-accent-rose/20 rounded-full text-sm font-semibold text-accent-rose mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-rose opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-rose"></span>
                            </span>
                            Direct Line to Developer
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black mb-6">
                            Found a Bug? <span className="text-accent-emerald">Want a Feature?</span> <br />
                            <span className="gradient-text">We Listen. Fast.</span>
                        </h2>

                        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-12">
                            Don't deal with automated bots or 3-day wait times.
                            Report an issue or suggest a new feature and get a personal response.
                        </p>

                        {/* Guarantee Card */}
                        <div className="inline-flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-black/40 border border-border-subtle rounded-2xl mb-12 backdrop-blur-sm hover:border-accent-amber/30 transition-colors text-left">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-accent-amber/10 rounded-xl text-accent-amber">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <div className="text-xs text-text-muted uppercase tracking-wider font-bold">Response Time</div>
                                    <div className="text-xl font-bold">Under 10 Hours.</div>
                                </div>
                            </div>
                            <div className="hidden md:block w-px h-12 bg-border-subtle" />
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-accent-emerald/10 rounded-xl text-accent-emerald">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <div className="text-xs text-text-muted uppercase tracking-wider font-bold">Guarantee</div>
                                    <div className="text-xl font-bold">100% Personal Reply.</div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Action */}
                        <div>
                            <a
                                href="mailto:abhiyaduvanshi@zohomail.in?subject=Bug%20Report%20%2F%20Feature%20Request%20-%20Abhi's%20Ledger"
                                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-text-primary text-bg-deep font-bold text-lg rounded-2xl overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20 no-underline"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    <Mail className="w-5 h-5" />
                                    Email Me Directly
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                            <p className="mt-4 text-xs text-text-muted">
                                *I usually reply within 2 hours if I'm awake.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
