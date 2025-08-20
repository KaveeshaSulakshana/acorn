import {getMetadata, getPrivacyData} from "../../../sanity/api";
import {PortableText, PortableTextReactComponents} from "next-sanity";
import Nav from "@/components/Nav";
import React from "react";
import {Metadata} from "next";
import {urlFor} from "../../../sanity/sanity";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";


const portableTextComponents: Partial<PortableTextReactComponents> = {
    // Handle block types (e.g., headings, normal text)
    block: {
        // normal: ({ children }) => (
        //     <p className="mb-1">{children}</p>
        // ),
        normal: ({children}) => {
            if (!children || (Array.isArray(children) && children.every(child => child === '\n' || !child))) {
                return <p
                    className="text-[#000000] text-sm sm:text-base whitespace-pre-line lg:text-lg leading-relaxed my-4 md:my-6"></p>;
            }
            return (
                <p className="text-[#000000] text-sm sm:text-base whitespace-pre-line lg:text-lg leading-relaxed">
                    {children}
                </p>
            );
        },
        h1: ({children}) => (
            <h1 className="text-3xl font-bold mb-3">{children}</h1>
        ),
        h2: ({children}) => (
            <h2 className="text-2xl font-bold mb-2">{children}</h2>
        ),
        h3: ({children}) => (
            <h3 className="text-xl font-bold mb-1">{children}</h3>
        ),
        bullet: ({children}) => <li className="list-disc whitespace-pre-line ml-6">{children}</li>,
        numbered: ({children}) => <li className="list-decimal whitespace-pre-line ml-6">{children}</li>,
    },
    // Handle list types (bullet and numbered lists)
    list: {
        bullet: ({children}) => (
            <ul className="list-disc pl-6 mb-2 text-sm sm:text-base lg:text-lg">{children}</ul>
        ),
        number: ({children}) => (
            <ol className="list-decimal pl-6 mb-2 text-sm sm:text-base lg:text-lg">{children}</ol>
        ),
    },
    // Handle list items
    listItem: {
        bullet: ({children}) => (
            <li className="mb-1 pl-6">{children}</li>
        ),
        number: ({children}) => (
            <li className="mb-1 pl-6">{children}</li>
        ),
    },

    marks: {
        strong: ({children}) => <strong className="font-bold">{children}</strong>,
        em: ({children}) => <em className="italic">{children}</em>,
        link: ({children, value}) => (
            <a
                href={value.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
            >
                {children}
            </a>
        ),
    },
    types: {
        span: ({value}) => {
            if (value.text === '\n') {
                return <br/>;
            }
            return <span>{value.text}</span>;
        },

        image: ({value}) => {
            const {alt, caption} = value;
            return (
                <figure>
                    <Image
                        src={urlFor(value).url()}
                        alt={alt || "Image"}
                        height={400}
                        width={600}
                        className="w-auto h-auto rounded-[10px] object-contain max-w-[700px]"
                    />
                    {caption && <figcaption className="text-sm text-center mt-2">{caption}</figcaption>}
                </figure>
            );
        }
    },
};

const PrivacyAndPolicy = async () => {
    const privacyData = await getPrivacyData();
    console.log("privacy: ", privacyData);

    return (
        <div className="min-h-screen py-16 bg-white lato">
            <Nav/>
            <AnimatedSection direction="up" delay={0.2}>
                <h1 className="lato mt-15 md:mt-20 lg:mt-30 font-bold text-[#3C3C3C] text-center mb-6 text-[22px] sm:text-[30px] lg:text-[45px]">{privacyData.title || "Privacy & Policy"}</h1>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.4}>
                <div
                    className="font-light justify-left leading-12 px-4 sm:px-6 md:px-15 mt-6 text-[14px] sm:text-[16px] lg:text-[20px]">
                    <PortableText
                        value={privacyData.body || ""}
                        components={portableTextComponents}
                    />
                </div>
            </AnimatedSection>
        </div>
    );
}

export default PrivacyAndPolicy;


export async function generateMetadata(): Promise<Metadata> {
    const mdata = await getMetadata("privacy");

    return {
        title: mdata?.title || "Acorn Travel - Privacy & Conditions",
        description: mdata?.description || "Embark on unforgettable adventures with Acorn Travels. We offer tailored corporate and leisure travel, flight bookings, visa assistance, and more for seamless experiences.",
        keywords: mdata?.keywords?.join(", ") || "Acorn Travels, travel agency, corporate travel, leisure travel, flight booking, visa services, MICE tours, student travel, travel insurance, foreign currency exchange, hotel booking, Sri Lanka travel, international travel",
        openGraph: {
            title: mdata?.ogTitle || mdata?.title || "Acorn Travels - Your Journey Starts Here",
            description: mdata?.ogDescription || mdata?.description || "Discover inspiring journeys, effortless flight bookings, and reliable visa assistance with Acorn Travels. Your trusted partner for seamless travel experiences since 1973.",
            images: mdata?.ogImage ? urlFor(mdata.ogImage).url() : "/nav_logo.png",
            url: mdata?.canonicalUrl || "https://acorn-omega.vercel.app/",
            type: "website",
        },
        alternates: {
            canonical: mdata?.canonicalUrl || "https://acorn-omega.vercel.app/",
        },
    };
}