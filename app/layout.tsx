import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Abhi's Ledger — Track Every Rupee. Trust No One.",
    description:
        'The smartest way to track money you lend to friends. AI-powered trust scores, automatic interest calculations, beautiful PDF statements, and more.',
    keywords: 'ledger, money tracker, loan tracker, friend lending, personal finance, PWA',
    authors: [{ name: 'Abhinav Yaduvanshi' }],
    openGraph: {
        title: "Abhi's Ledger — Track Every Rupee",
        description:
            'The smart ledger that remembers who owes you what. AI trust scores, instant PDF statements, and more.',
        type: 'website',
        url: 'https://ledger69.vercel.app/',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
            <body className="font-sans">
                {/* Background Effects */}
                <div className="bg-grid" />
                <div className="film-grain" />

                {/* Main Content */}
                {children}
            </body>
        </html>
    );
}
