import type {Metadata} from "next";
import {Lato} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import {getFooterData} from "../../sanity/api";
import {urlFor} from "../../sanity/sanity";

const lato = Lato({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--font-lato",
});


export const metadata: Metadata = {
    title: "Acorn Travels",
    description: "Your premier travel partner.",
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {

    const footerData = await getFooterData();

    return (
        <html lang="en">
        <head>
            {footerData?.favicon?.url && (
                <>
                    <link rel="icon" href={urlFor(footerData.favicon).url()}/>
                    <link rel="shortcut icon" href={urlFor(footerData.favicon).url()}/>
                    <link rel="apple-touch-icon" href={urlFor(footerData.favicon).url()}/>
                </>
            )}

            {footerData?.headerScripts && (
                <script
                    id="header-scripts"
                    dangerouslySetInnerHTML={{__html: footerData.headerScripts}}
                />
            )}
        </head>
        <body
            className={lato.className}
        >
        {/*<Navbar/>*/}
        {children}
        <Footer/>
        {footerData?.footerScripts && (
            <script
                id="footer-scripts"
                dangerouslySetInnerHTML={{__html: footerData.footerScripts}}
            />
        )}
        </body>
        </html>
    );
}
