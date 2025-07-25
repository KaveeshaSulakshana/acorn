import {getMetadata, getPrivacyData} from "../../../sanity/api";
import {PortableText} from "next-sanity";
import Nav from "@/components/Nav";
import React from "react";
import {Metadata} from "next";
import {urlFor} from "../../../sanity/sanity";

const PrivacyAndPolicy = async () => {

    const privacyData = await getPrivacyData();
    console.log("privacy: ", privacyData);

    return (
        <div className="min-h-screen py-16 bg-white lato">
            <Nav/>
            <h1 className="lato mt-15 md:mt-20 lg:mt-30 font-bold text-[#3C3C3C] text-center mb-6 text-[22px] sm:text-[30px] lg:text-[45px]">{privacyData.title || "Privacy & Policy"}</h1>
            <div
                className="font-light justify-left leading-12 px-4 sm:px-6 md:px-15 mt-6 text-[14px] sm:text-[16px] lg:text-[20px]">
                <PortableText
                    value={privacyData.body || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante eros. Donec congue eu mi non efficitur. Nunc vitae ultricies augue, at blandit tellus. Mauris eget sapien sed nisi bibendum convallis non eget leo. Curabitur vehicula a est quis commodo. Vestibulum faucibus a purus ac laoreet. Morbi tincidunt aliquam facilisis. Phasellus eget lobortis lorem. Proin quis semper ex. Pellentesque dignissim nulla tellus, lacinia porttitor tellus aliquam vitae. Fusce nec urna sit amet metus ullamcorper volutpat. Curabitur dapibus dolor ex, non gravida dui congue sed. Cras varius consectetur enim at mollis. Integer feugiat ex non vestibulum mollis."}/>
            </div>
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