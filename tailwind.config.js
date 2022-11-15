const { colors } = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}'
    ],
    theme: {
        screens: {
            mobile: { max: '414px' },
            tablet: { min: '415px', max: '767px' },
            sm: { min: '768px', max: '1023px' },
            xl: { min: '1024px', max: '1439px' },
            '2xl': { min: '1440px' }
        },
        container: {
            center: true,
            padding: '1.5rem',
        },
        extend: {
            backgroundImage: {
                none: 'unset',
            },
            colors: {
                ...colors,
                'main-dark': '#1f1d37',
                'main-light': '#ffffff',
                brand: {
                    50: '#f3f3f3',
                    100: '#e7e7e7',
                    200: '#c4c4c4',
                    300: '#a0a0a0',
                    400: '#585858',
                    500: '#111111',
                    600: '#0f0f0f',
                    700: '#0d0d0d',
                    800: '#0a0a0a',
                    900: '#080808',
                    DEFAULT: '#111111',
                },
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        require('@tailwindcss/typography')
    ]
};
