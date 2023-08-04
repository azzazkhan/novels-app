import { Lora, Merriweather, Roboto } from 'next/font/google';

export const lora = Lora({
    subsets: ['latin'],
    display: 'swap',
    style: ['normal', 'italic'],
    weight: ['400', '700'],
    variable: '--font-lora',
});

export const merriweather = Merriweather({
    subsets: ['latin'],
    display: 'swap',
    style: ['normal', 'italic'],
    weight: ['400', '700'],
    variable: '--font-merriweather',
});

export const roboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    style: ['normal', 'italic'],
    weight: ['400', '700'],
    variable: '--font-roboto',
});
