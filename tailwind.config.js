const { colors } = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
        './src/components/*.{ts,tsx}',
    ],
    theme: {
        screens: {
            mobile: { min: '320px', max: '480px' },
            small: { min: '481px', max: '767px' },
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
                'h-small-xm': ['28px', { lineHeight: '140%', fontWeight: '400', }],
                'h-small-x': ['24px', { lineHeight: '140%', fontWeight: '400', }],

                't-base': ['24px', { lineHeight: '160%', fontWeight: '400', }],
                't-medium': ['18px', { lineHeight: '160%', fontWeight: '400', }],
                't-small': ['16px', { lineHeight: '160%', fontWeight: '400', }],
                't-small-x': ['14px', { lineHeight: '140%', fontWeight: '400', }],
            },
            backgroundImage: {
                none: 'unset',
                'gradient-radial': 'radial-gradient(circle 1000px at 10% -30%, rgb(157 0 254 / 70%), transparent), radial-gradient( circle 1000px at 90% 140%, rgb(55 93 191 / 70%), transparent);',
                'gradient-desktop': 'linear-gradient(119.27deg, #42156F 9.03%, #291B46 34.33%, #1F1D37 49.87%, #23264A 72.39%, #1D2668 94.25%);',
                'gradient-mobile': 'linear-gradient(125.29deg, #42156F 8.25%, #291B46 30.83%, #1F1D37 44.7%, #23264A 64.8%, #1D2668 84.31%);',
            },
            colors: {
                ...colors,
                main: {
                    dark: '#1f1d37',
                    light: '#ffffff',
                    'light-gray': '#9995B0',
                },
                panel: '#2a2746',
                popup: 'rgba(6, 5, 21, 0.6)',
                'blue-button': '#0a97fe',
                blue: '#005fee',
                hover: '#cccddd',
            },
            dropShadow: {
                'hover-simple': [
                    '0px 2px 10px rgba(21, 233, 233, 0.59)',
                    '0px 10px 30px rgba(21, 68, 233, 0.6)'
                ],
            },
            backdropBlur: {
                popup: '70px',
            }
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
