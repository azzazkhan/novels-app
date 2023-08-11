// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
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
            screens: {
                xs: '480px',
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                special: ['var(--font-merienda)'],
                lora: ['var(--font-lora)'],
                merriweather: ['var(--font-merriweather)'],
                roboto: ['var(--font-roboto)'],
            },
            fontSize: {
                xxxs: '.5rem',
                xxs: '.625rem',
            },
            colors: {
                primary: '#2563EB',
            },
            spacing: {
                4.5: '1.125rem',
                18: '4.5rem',
                22: '5.5rem',
                76: '19rem',
                82: '20.5rem',
                84: '21rem',
                88: '22rem',
                90: '22.5rem',
                92: '23rem',
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
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                pop: 'pop 300ms ease',
                shine: 'shine 2s infinite linear',
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
