/* eslint-disable no-script-url */
export const isValidPath = (path: string) => path && path !== '#' && path !== 'javascript:void(0)';

export const prefixAssetPath = (path: string) => `${process.env.NEXT_PUBLIC_BACKEND_URL}/${path}`;
export const prefixSitePath = (path: string) => `${process.env.NEXT_PUBLIC_APP_URL}/${path}`;
