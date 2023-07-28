/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'localhost',
                pathname: '**',
            },
            {
                protocol: process.env.NODE_ENV === 'production' ? 'https' : 'http',
                hostname: process.env.NEXT_PUBLIC_IMAGES_HOSTNAME || 'localhost',
                pathname: process.env.NEXT_PUBLIC_IMAGES_PATHNAME || '**',
            },
        ],
    },
};

module.exports = nextConfig;
