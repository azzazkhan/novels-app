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
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
