'use client';

import { useState } from 'react';
import Image from 'next/image';
import AndroidInstallModal from './AndroidInstallModal';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);

    const handleLaunchApp = (e: React.MouseEvent) => {
        e.preventDefault();
        const userAgent = navigator.userAgent.toLowerCase();
        if (/android/.test(userAgent)) {
            setIsInstallModalOpen(true);
        } else {
            window.open('https://ledger69.vercel.app/', '_blank');
        }
    };

    return (
        <footer className="py-12 border-t border-border-subtle">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    {/* Logo & Copyright */}
                    <div>
                        <div className="flex items-center gap-2 font-bold text-lg mb-2">
                            <div className="w-7 h-7 rounded-lg overflow-hidden bg-gradient-to-br from-accent-amber to-accent-orange p-1">
                                <Image
                                    src="/logo.jpg"
                                    alt="Abhi's Ledger"
                                    width={28}
                                    height={28}
                                    className="w-full h-full rounded object-cover invert"
                                />
                            </div>
                            Abhi&apos;s Ledger
                        </div>
                        <p className="text-sm text-text-muted">
                            © {currentYear} Abhinav Yaduvanshi. All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-8">
                        <a
                            href="https://ledger69.vercel.app/"
                            onClick={handleLaunchApp}
                            className="text-text-secondary hover:text-text-primary transition-colors text-sm no-underline cursor-pointer"
                        >
                            Launch App
                        </a>
                        <a
                            href="#features"
                            className="text-text-secondary hover:text-text-primary transition-colors text-sm no-underline"
                        >
                            Features
                        </a>
                    </div>

                    {/* Contact Link */}
                    <div className="text-right">
                        <a
                            href="#contact"
                            className="text-text-secondary hover:text-accent-amber transition-colors text-sm font-medium no-underline"
                        >
                            Contact Support →
                        </a>
                    </div>
                </div>
            </div>

            <AndroidInstallModal
                isOpen={isInstallModalOpen}
                onClose={() => setIsInstallModalOpen(false)}
            />
        </footer >
    );
}
