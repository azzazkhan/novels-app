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
                special: ['var(--font-merienda)'],
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
                22: '5.5rem',
                76: '19rem',
                82: '20.5rem',
                84: '21rem',
                88: '22rem',
                176: '44rem',
                192: '48rem',
            },
            keyframes: {
                pop: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(0.85)' },
                },
                shine: {
                    '0%': { backgroundPosition: 'var(--skeleton-start)' },
                    '60%, 100%': { backgroundPosition: 'var(--skeleton-end)' },
                },
            },
            animation: {
                pop: 'pop 300ms ease',
                shine: 'shine 2s infinite linear',
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/typography')],
};
