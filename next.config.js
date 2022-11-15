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

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true
    },
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
    i18n: {
        locales: ['ru', 'en'],
        defaultLocale: 'ru',
        localeDetection: false,
        domains: [
            {
                domain: 'vxcontrol.ru',
                defaultLocale: 'ru',
                // an optional http field can also be used to test
                // locale domains locally with http instead of https
                http: true
            },
            {
                domain: 'vxcontrol.com',
                defaultLocale: 'en'
            }
        ]
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

module.exports = nextConfig;
