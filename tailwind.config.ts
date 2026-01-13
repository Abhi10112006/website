import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'bg-deep': '#000000',
                'bg-card': 'rgba(10, 10, 10, 0.8)',
                'bg-glass': 'rgba(10, 10, 10, 0.6)',
                'text-primary': '#f8fafc',
                'text-secondary': '#94a3b8',
                'text-muted': '#64748b',
                'accent-amber': '#f59e0b',
                'accent-orange': '#f97316',
                'accent-yellow': '#fbbf24',
                'accent-emerald': '#10b981',
                'accent-rose': '#f43f5e',
                'border-subtle': 'rgba(255, 255, 255, 0.06)',
                'border-glow': 'rgba(245, 158, 11, 0.4)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            backgroundImage: {
                'gradient-main': 'linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #fbbf24 100%)',
                'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
            },
            animation: {
                'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'reveal-up': 'revealUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'float': 'float 8s ease-in-out infinite',
                'float-slow': 'float 12s ease-in-out infinite reverse',
                'shimmer': 'shimmer 2.5s linear infinite',
                'spin-slow': 'spin 30s linear infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.6', transform: 'scale(1.05)' },
                },
                fadeInUp: {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                revealUp: {
                    from: { opacity: '0', transform: 'translateY(40px) scale(0.95)' },
                    to: { opacity: '1', transform: 'translateY(0) scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
            boxShadow: {
                'glow-amber': '0 0 60px rgba(245, 158, 11, 0.3)',
                'glow-emerald': '0 0 60px rgba(16, 185, 129, 0.3)',
            },
        },
    },
    plugins: [],
};

export default config;
