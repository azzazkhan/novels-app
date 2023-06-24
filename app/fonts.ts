import { Merienda } from 'next/font/google';
import localFont from 'next/font/local';

export const nunito = localFont({
    src: './_fonts/nunito-variable.ttf',
    display: 'swap',
    preload: true,
});

export const merienda = Merienda({
    weight: ['400'],
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-merienda',
});
