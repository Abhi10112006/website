'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/ui/Hero';
import BentoGrid from '@/components/ui/BentoGrid';
import ExtraFeatures from '@/components/ui/ExtraFeatures';
import SponsorSection from '@/components/ui/SponsorSection';
import ContactSection from '@/components/ui/ContactSection';
import CTASection from '@/components/ui/CTASection';
import Footer from '@/components/ui/Footer';
import ScrollProgress from '@/components/effects/ScrollProgress';

// Dynamically import the 3D Scene to avoid SSR issues
const Scene3D = dynamic(() => import('@/components/three/Scene'), {
    ssr: false,
    loading: () => null,
});

export default function Home() {
    return (
        <main className="relative min-h-screen">
            {/* 3D Background Scene */}
            <Scene3D />

            {/* Scroll Progress Bar */}
            <ScrollProgress />

            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <Hero />

            {/* Features Bento Grid */}
            <BentoGrid />

            {/* Extra Features */}
            <ExtraFeatures />

            {/* Sponsor Section */}
            <SponsorSection />

            {/* Contact Section */}
            <ContactSection />

            {/* CTA Section */}
            <CTASection />

            {/* Footer */}
            <Footer />
        </main>
    );
}
