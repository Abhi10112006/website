'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { QrCode } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
    {
        icon: '⭐',
        title: 'AI-Powered Trust Scores',
        description:
            'Our algorithm analyzes payment history, timeliness, and behavior to rate friends on a 0-100 scale. Know who you can trust before you lend.',
        size: 'large',
        visual: 'trust-score',
    },
    {
        icon: <QrCode className="w-8 h-8 text-accent-amber" />,
        title: 'UPI QR Code Generator',
        description:
            'Generate custom payment cards with specific amounts. Share directly to WhatsApp or let friends scan to pay instantly via any UPI app. No more "I\'ll pay you later" excuses.',
        size: 'large',
        visual: 'qr-code',
    },
    {
        icon: '🧮',
        title: 'Smart Interest',
        description:
            'Daily, monthly, or yearly rates. Even supports "no interest if paid by deadline" deals.',
        // visual removed as requested
    },
    {
        icon: '📊',
        title: 'Professional PDF Dossiers',
        description:
            'Generate beautifully formatted statements with trust analysis, payment timeline, and a "CONFIDENTIAL" stamp. Perfect for keeping records.',
        size: 'tall',
        visual: 'pdf',
    },
    {
        icon: '📸',
        title: 'Shareable Image Cards',
        description:
            'Create stunning payment reminders, loan receipts, and agreements. Share directly to WhatsApp with one tap.',
    },
    {
        icon: '🎨',
        title: 'Visual Engine',
        description:
            '5 themes, adjustable blur, textures, grain effects, and corner styles. Make it yours.',
    },
];

export default function BentoGrid() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section id="features" className="py-24 relative" ref={sectionRef}>
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent-amber mb-4">
                        Killer Features
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Everything You Need.{' '}
                        <span className="gradient-text">Nothing You Don&apos;t.</span>
                    </h2>
                    <p className="text-lg text-text-secondary max-w-[600px] mx-auto">
                        Built with obsessive attention to detail for people who take their
                        money seriously.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`
                ${feature.size === 'large' ? 'lg:col-span-2' : ''}
                ${feature.size === 'tall' ? 'lg:row-span-2' : ''}
              `}
                        >
                            <FeatureCard
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                visual={feature.visual}
                                isTall={feature.size === 'tall'}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
