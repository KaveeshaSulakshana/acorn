import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
                pathname: "/**",
            },
        ],
        // unoptimized: true,
    },
    async redirects() {
        return [
            {
                source: '/book-online',
                destination: '/contact-us#inquiry',
                permanent: true,
            },
            {
                source: '/blog/categories/tour-packages',
                destination: '/leisure-travel#customized-tours',
                permanent: true,
            },
            {
                source: '/about-7',
                destination: '/about-us',
                permanent: true,
            },
            {
                source: '/copy-of-all-promotions',
                destination: '/',
                permanent: true,
            },
            {
                source: '/blog/page/6',
                destination: '/',
                permanent: true,
            },
            {
                source: '/travtastic-sale',
                destination: '/',
                permanent: true,
            },
            {
                source: '/education',
                destination: '/student-travel',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
