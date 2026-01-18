'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import AndroidInstallModal from './AndroidInstallModal';

const currencies = ['Rupee', 'Dollar', 'Euro', 'Pound', 'Yen'];

export default function Hero() {
    const [currentWord, setCurrentWord] = useState('Rupee');
    const [displayText, setDisplayText] = useState('Rupee');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const handleLaunchApp = (e: React.MouseEvent) => {
        e.preventDefault();
        const userAgent = navigator.userAgent.toLowerCase();
        if (/android/.test(userAgent)) {
            setIsInstallModalOpen(true);
        } else {
            window.open('https://ledger69.vercel.app/', '_blank');
        }
    };

    // Typewriter effect
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const wordIndex = currencies.indexOf(currentWord);

        if (!isDeleting) {
            if (displayText.length < currentWord.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentWord.slice(0, displayText.length + 1));
                }, 100);
            } else {
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, 2000);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, 50);
            } else {
                setIsDeleting(false);
                setCurrentWord(currencies[(wordIndex + 1) % currencies.length]);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentWord]);

    const stats = [
        { value: '100%', label: 'Private & Offline' },
        { value: '5+', label: 'Currencies' },
        { value: '∞', label: 'Free Forever' },
    ];

    // Magnetic button effect hook
    const useMagnetic = () => {
        const ref = useRef<HTMLAnchorElement>(null);
        const [position, setPosition] = useState({ x: 0, y: 0 });

        const handleMouse = (e: React.MouseEvent) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = ref.current!.getBoundingClientRect();
            const middleX = clientX - (left + width / 2);
            const middleY = clientY - (top + height / 2);
            setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
        };

        const reset = () => setPosition({ x: 0, y: 0 });

        return { ref, position, handleMouse, reset };
    };

    const primaryBtn = useMagnetic();
    const secondaryBtn = useMagnetic();

    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden"
        >
            <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
                <div className="text-center max-w-[900px] mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent-amber/10 border border-accent-amber/20 rounded-full text-sm font-semibold text-accent-amber mb-8 backdrop-blur-md"
                    >
                        <span className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse-glow" />
                        Now with AI Trust Scores
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 tracking-tight"
                    >
                        Track Every{' '}
                        <span className="gradient-text relative inline-block">
                            {displayText}
                            <span className="absolute -bottom-2 left-0 right-0 h-[6px] bg-gradient-to-r from-accent-amber to-transparent opacity-50 blur-sm" />
                        </span>
                        <span className="animate-pulse ml-1 text-accent-amber">|</span>
                        <br />
                        <span className="relative inline-block mt-2">
                            Trust No One.
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={isInView ? { scaleX: 1 } : {}}
                                transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                                className="absolute bottom-2 left-0 right-0 h-[0.3em] bg-accent-amber/20 -z-10 origin-left rounded"
                            />
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl text-text-secondary max-w-[600px] mx-auto mb-12 leading-relaxed"
                    >
                        The smart ledger that remembers who owes you what. AI-powered trust
                        scores, automatic interest calculations, and beautiful shareable
                        statements.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-wrap justify-center gap-5 mb-20"
                    >
                        <motion.a
                            href="https://ledger69.vercel.app/"
                            onClick={handleLaunchApp}
                            ref={primaryBtn.ref}
                            onMouseMove={primaryBtn.handleMouse}
                            onMouseLeave={primaryBtn.reset}
                            animate={{ x: primaryBtn.position.x, y: primaryBtn.position.y }}
                            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-amber via-accent-orange to-accent-yellow text-bg-deep font-bold text-base rounded-2xl shadow-glow-amber hover:shadow-glow-amber transition-shadow relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start Tracking Free
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </motion.a>

                        <motion.a
                            href="#features"
                            ref={secondaryBtn.ref}
                            onMouseMove={secondaryBtn.handleMouse}
                            onMouseLeave={secondaryBtn.reset}
                            animate={{ x: secondaryBtn.position.x, y: secondaryBtn.position.y }}
                            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                            className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/5 text-text-primary font-semibold text-base rounded-2xl border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-accent-amber/50 no-underline"
                        >
                            See Features
                            <ArrowDown className="w-4 h-4" />
                        </motion.a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex justify-center gap-12 md:gap-16"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-extrabold gradient-text">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-text-muted font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <AndroidInstallModal
                isOpen={isInstallModalOpen}
                onClose={() => setIsInstallModalOpen(false)}
            />
        </section >
    );
}
