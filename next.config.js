const nextTranslate = require('next-translate');

/** @type {import('next').NextConfig} */
const securityHeaders = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
    },
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN'
    },
    {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin'
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
    }
];

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    eslint: {
        ignoreDuringBuilds: true
    },
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });
        return config;
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: securityHeaders
            }
        ];
    }
};

module.exports = withBundleAnalyzer(nextTranslate(nextConfig));
