'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function SponsorSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    const pricingTiers = [
        { weight: 'Weight 10', note: '• Maximum visibility', price: '₹100/week', featured: true },
        { weight: 'Weight 7-9', note: '• High visibility', price: '₹70-90/week' },
        { weight: 'Weight 4-6', note: '• Medium visibility', price: '₹40-60/week' },
        { weight: 'Weight 1-3', note: '• Entry level', price: '₹10-30/week' },
    ];

    const steps = [
        'Ads are shown once every 30 minutes maximum—never spammy.',
        'Each sponsor has a "weight" (1-10). Higher weight = higher chance of being selected.',
        'When it\'s time to show an ad, the system runs a weighted lottery. If you have weight 10 out of total 20, you have 50% chance.',
        'Users see a 5-second premium modal with your image/video, message, and CTA button.',
        'Frequency control: Show once per session, daily, or weekly—you choose.',
    ];

    return (
        <section id="sponsor" className="py-24" ref={sectionRef}>
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent-amber mb-4">
                        💎 Sponsorship
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Advertise to <span className="gradient-text">Engaged Users</span>
                    </h2>
                    <p className="text-lg text-text-secondary max-w-[600px] mx-auto">
                        Reach real users who open the app regularly to manage their finances.
                        Non-intrusive, premium ad placements.
                    </p>
                </motion.div>

                {/* Sponsor Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* How It Works */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="premium-card rounded-[32px] p-8"
                    >
                        <h3 className="text-2xl font-bold mb-4">⚡ The Weighted Lottery System</h3>
                        <p className="text-text-secondary mb-6">
                            Our ad system is designed to be <strong className="text-text-primary">fair for sponsors</strong> and{' '}
                            <strong className="text-text-primary">non-annoying for users</strong>. Here&apos;s how it works:
                        </p>

                        <h4 className="font-bold mb-4">How Ads Are Shown</h4>
                        <ul className="space-y-4 mb-6">
                            {steps.map((step, index) => (
                                <li key={index} className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-accent-amber/20 text-accent-amber rounded-full text-sm font-bold flex items-center justify-center">
                                        {index + 1}
                                    </span>
                                    <span className="text-text-secondary text-sm">{step}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-black/50 border border-border-subtle rounded-xl p-4 font-mono text-sm text-accent-amber">
                            probability = yourWeight / totalActiveWeights × 100%
                        </div>
                    </motion.div>

                    {/* Pricing Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="premium-card rounded-[32px] p-8"
                    >
                        <div className="inline-block px-3 py-1 bg-accent-emerald/20 text-accent-emerald text-xs font-bold rounded-full mb-4">
                            🚀 Launch Offer
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Premium Ad Placement</h3>
                        <div className="text-4xl font-extrabold gradient-text mb-1">₹100/week</div>
                        <p className="text-sm text-text-muted mb-6">
                            For maximum weight (10) • Prices scale with weight
                        </p>

                        <div className="space-y-3 mb-6">
                            {pricingTiers.map((tier, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 4, backgroundColor: 'rgba(245, 158, 11, 0.1)' }}
                                    className={`flex justify-between items-center p-3 rounded-xl transition-colors ${tier.featured
                                        ? 'bg-accent-amber/10 border border-accent-amber/30'
                                        : 'bg-black/30 border border-border-subtle'
                                        }`}
                                >
                                    <div>
                                        <span className="font-bold">{tier.weight}</span>
                                        <span className="text-text-muted text-sm"> {tier.note}</span>
                                    </div>
                                    <span className={tier.featured ? 'text-accent-amber font-bold' : 'text-text-secondary'}>
                                        {tier.price}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <p className="text-sm text-text-muted mb-6 leading-relaxed">
                            <strong className="text-accent-emerald">Why so cheap?</strong> We&apos;re just starting out!
                            These are early-adopter rates. Lock in now before prices increase as user base grows.
                        </p>

                        <a
                            href="mailto:abhiyaduvanshi@zohomail.in?subject=Sponsorship%20Inquiry%20-%20Abhi's%20Ledger&body=Hi%20Abhinav%2C%0A%0AI'm%20interested%20in%20sponsoring%20Abhi's%20Ledger.%0A%0AWeight%20I%20want%3A%20%0ABudget%3A%20%0AMy%20product%2Fservice%3A%20%0A%0AThanks!"
                            className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-accent-amber via-accent-orange to-accent-yellow text-bg-deep font-bold rounded-2xl transition-all hover:-translate-y-1 hover:shadow-glow-amber no-underline"
                        >
                            Become a Sponsor
                            <Mail className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
