/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['three'],
    images: {
        domains: ['ledger69.vercel.app'],
    },
};

module.exports = nextConfig;
