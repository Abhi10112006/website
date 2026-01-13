'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#features', label: 'Features' },
        { href: '#sponsor', label: 'Sponsor' },
        { href: '#contact', label: 'Contact' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[1000] py-4 transition-all duration-300 ${isScrolled
                        ? 'bg-black/95 backdrop-blur-xl border-b border-border-subtle'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 font-extrabold text-xl text-text-primary no-underline">
                        <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-accent-amber to-accent-orange p-1.5">
                            <Image
                                src="/logo.jpg"
                                alt="Abhi's Ledger"
                                width={40}
                                height={40}
                                className="w-full h-full rounded-lg object-cover invert"
                            />
                        </div>
                        Abhi&apos;s Ledger
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8 list-none">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-text-secondary hover:text-text-primary font-medium text-sm transition-colors no-underline"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="https://ledger69.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2.5 bg-gradient-to-r from-accent-amber via-accent-orange to-accent-yellow text-bg-deep rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 hover:shadow-glow-amber no-underline"
                            >
                                Launch App →
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleMobileMenu}
                        className="flex md:hidden flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer z-[1001]"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-0.5 bg-text-primary transition-all"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block w-6 h-0.5 bg-text-primary transition-all"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-0.5 bg-text-primary transition-all"
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-[999]"
                    >
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                                onClick={closeMobileMenu}
                                className="text-text-primary text-2xl font-bold no-underline"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.a
                            href="https://ledger69.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            onClick={closeMobileMenu}
                            className="gradient-text text-2xl font-bold no-underline"
                        >
                            Launch App →
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
