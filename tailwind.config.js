// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'pages/**/*.{ts,tsx}',
        'components/**/*.{ts,tsx}',
        'layouts/**/*.{ts,tsx}',
        'app/**/*.{ts,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                xxxs: '.5rem',
                xxs: '.625rem',
            },
            colors: {
                primary: '#2563EB',
            },
            spacing: {
                18: '4.5rem',
            },
            keyframes: {
                pop: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(0.85)' },
                },
            },
            animation: {
                pop: 'pop 300ms ease',
            },
        },
    },
    daisyui: {
        themes: [],
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
