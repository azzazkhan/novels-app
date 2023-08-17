/* eslint-disable no-script-url */
export const isValidPath = (path: string) => path && path !== '#' && path !== 'javascript:void(0)';

export const prefixAssetPath = (path: string) => `${process.env.NEXT_PUBLIC_BACKEND_URL}/${path}`;
export const prefixSitePath = (path: string) => `${process.env.NEXT_PUBLIC_APP_URL}/${path}`;

export const slugify = (input: string) => {
    return input
        .toLowerCase() // Convert the string to lowercase
        .replace(/\s+/g, '-') // Replace whitespace with dashes
        .replace(/[^\w-]+/g, '') // Remove non-word characters except dashes
        .replace(/--+/g, '-') // Replace consecutive dashes with a single dash
        .replace(/^-+/, '') // Trim dashes from the beginning of the string
        .replace(/-+$/, ''); // Trim dashes from the end of the string
};
