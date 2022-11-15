const { colors } = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}'
    ],
    theme: {
        screens: {
            mobile: { min: '380px', max: '414px' },
            small: { min: '415px', max: '767px' },
            medium: { min: '768px', max: '1023px' },
            large: { min: '1024px', max: '1439px' },
            'x-large': { min: '1440px' },
        },
        container: {
            center: true,
            padding: {
                mobile: '20px',
                small: '40px',
                medium: '40px',
                large: '80px',
                'x-large': '80px',
            },
        },
        extend: {
            fontSize: {
                'h-base': ['60px', { lineHeight: '140%', fontWeight: '400', }],
                'h-medium': ['40px', { lineHeight: '140%', fontWeight: '400', }],
                'h-medium-x': ['36px', { lineHeight: '140%', fontWeight: '400', }],
                'h-small': ['32px', { lineHeight: '140%', fontWeight: '400', }],

                't-base': ['24px', { lineHeight: '160%', fontWeight: '400', }],
                't-medium': ['18px', { lineHeight: '160%', fontWeight: '400', }],
            },
            backgroundImage: {
                none: 'unset',
            },
            colors: {
                ...colors,
                main: {
                    dark: '#1f1d37',
                    light: '#ffffff',
                    'light-gray': '#9995B0',
                },
                panel: '#2a2746',
                'non-standard': {
                    blue: '#0a97fe'
                }
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        require('@tailwindcss/typography'),
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',

                    '@screen mobile': {
                        maxWidth: '414px'
                    },

                    '@screen small': {
                        maxWidth: '768px'
                    },

                    '@screen medium': {
                        maxWidth: '1024px'
                    },

                    '@screen large': {
                        maxWidth: '1440px'
                    }
                },
            });
        }
    ]
};
