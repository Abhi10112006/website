'use client';

import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, CheckCircle2, AlertTriangle, ShieldCheck, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import classNames from 'classnames';

interface AndroidInstallModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AndroidInstallModal({ isOpen, onClose }: AndroidInstallModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Ledger.apk';
        link.download = 'Ledger.apk';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[2001] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0A0A0A]">
                            <div>
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-amber to-accent-orange p-1 flex items-center justify-center">
                                        <Image
                                            src="/logo.jpg"
                                            alt="Logo"
                                            width={24}
                                            height={24}
                                            className="rounded object-cover invert"
                                        />
                                    </div>
                                    Install Ledger
                                </h2>
                                <p className="text-sm text-gray-400 mt-1">Follow these steps to install safely</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">

                            {/* Step 1: Download & Warning */}
                            <div className="relative pl-8 border-l-2 border-accent-amber/30 pb-2">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-amber box-content border-4 border-[#0A0A0A]" />
                                <h3 className="text-lg font-semibold text-white mb-2">1. Download & Trust</h3>
                                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                    <div className="flex items-start gap-3 mb-3">
                                        <AlertTriangle className="text-accent-amber shrink-0 mt-1" size={20} />
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-300">
                                                Your browser might say this file is <span className="text-accent-amber font-medium">potentially harmful</span> or <span className="text-accent-amber font-medium">can't be downloaded securely</span>.
                                            </p>
                                            <p className="text-sm text-gray-300">
                                                This happens because it's a direct download.
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-white font-medium pl-8">
                                        Tap "Download anyway" or "Keep". The file is 100% secure.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2: Open & Install */}
                            <div className="relative pl-8 border-l-2 border-accent-amber/30 pb-2">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-amber box-content border-4 border-[#0A0A0A]" />
                                <h3 className="text-lg font-semibold text-white mb-2">2. Open & Install</h3>
                                <div className="space-y-4">
                                    <p className="text-sm text-gray-300">
                                        Go to your <strong>File Manager</strong>, find the APK, and tap to open it. Click <strong className="text-white">Install</strong> when asked.
                                    </p>
                                    <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden border border-white/10 bg-black/50">
                                        <Image
                                            src="/install-guide/play-protect-scan.jpg"
                                            alt="Play Protect Scan"
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Step 3: Play Protect Scan */}
                            <div className="relative pl-8 border-l-2 border-accent-amber/30 pb-2">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-amber box-content border-4 border-[#0A0A0A]" />
                                <h3 className="text-lg font-semibold text-white mb-2">3. Play Protect Scan</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <ShieldCheck className="text-green-500 shrink-0 mt-1" size={20} />
                                        <p className="text-sm text-gray-300">
                                            Google Play Protect might ask to scan the app since it's new.
                                        </p>
                                    </div>
                                    <p className="text-sm text-white font-medium pl-8">
                                        Click <strong className="text-accent-amber">Scan app</strong> to verify it's safe.<br />
                                        <span className="text-gray-400 font-normal text-xs mt-1 block">
                                            Or click "Install without scanning" if you want to skip this step.
                                        </span>
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden border border-white/10 bg-black/50">
                                            <Image
                                                src="/install-guide/play-protect-details.jpg"
                                                alt="Scan Details"
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                        <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden border border-white/10 bg-black/50">
                                            <Image
                                                src="/install-guide/play-protect-safe.jpg"
                                                alt="Safe to Install"
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4: Verified Safe & Install */}
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-amber box-content border-4 border-[#0A0A0A]" />
                                <h3 className="text-lg font-semibold text-white mb-2">4. Verified Safe & Install</h3>
                                <div className="space-y-4">
                                    <p className="text-sm text-gray-300">
                                        After scanning, you'll see a confirmation that the app is safe. Tap <strong className="text-white">Install</strong> to finish the setup.
                                    </p>
                                    <div className="relative aspect-[2/1] w-full rounded-lg overflow-hidden border border-white/10 bg-black/50">
                                        <Image
                                            src="/install-guide/install-prompt.jpg"
                                            alt="Install Prompt"
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-white/10 bg-[#0A0A0A] flex flex-col gap-3">
                            <button
                                onClick={handleDownload}
                                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-accent-amber via-accent-orange to-accent-yellow text-bg-deep rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent-amber/20"
                            >
                                <Download size={20} />
                                Download Ledger.apk
                            </button>
                            <button
                                onClick={onClose}
                                className="w-full py-3 bg-transparent hover:bg-white/5 text-gray-400 hover:text-white rounded-xl font-medium text-sm transition-colors border border-transparent hover:border-white/10"
                            >
                                I've already installed it
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
