import Hero from "@/components/Hero";
import ParallaxBackground from "@/components/ParallaxBackground";
import {FormField} from "@/components/ContactForm";
import {getMetadata, getVisaPageData} from "../../../sanity/api";
import React from "react";
import TravelFeaturesGrid from "@/components/ServiceIcon";
import Nav from "@/components/Nav";
import {Metadata} from "next";
import {urlFor} from "../../../sanity/sanity";

interface HeroButton {
    title: string;
    link: string;
}

interface Hero {
    image: string;
    title: string;
    description: string;
    buttonText: HeroButton[];
}

interface TravelService {
    url: string;
    title: string;
    isBigger: boolean;
}

interface VisaSection {
    title: string;
    description: string;
    travelServices: TravelService[];
}

// interface Parallax {
//     title: string;
//     description: string;
//     image: string;
// }

interface VisaData {
    _id: string;
    hero: {
        title: string;
        description: string;
        buttonText: HeroButton[];
        image: { asset: { url: string } };
    };
    visaSection: {
        title: string;
        description: string;
        travelServices: Array<{
            title: string;
            isBigger: boolean;
            url: { asset: { url: string }; alt: string };
        }>;
    };
    parallax: {
        title: string;
        description: string;
        image: { asset: { url: string } };
    };
}

interface ParallaxProps {
    title: string;
    description: string;
    image: string;
    formFields: FormField[];
    pageSource: string;
}

const VisaPage = async () => {
    let hero: Hero = {
        image: "",
        title: "",
        description: "",
        buttonText: [],
    };
    let parallax: ParallaxProps = {
        title: "",
        description: "",
        image: "",
        formFields: [],
        pageSource: "",
    };
    let visaSection: VisaSection = {
        title: "",
        description: "",
        travelServices: [],
    };

    try {
        const visaData: VisaData = await getVisaPageData();
        console.log("------visa data (server): ", visaData);

        // Map hero data
        hero = {
            image: visaData?.hero?.image?.asset?.url || "",
            title: visaData?.hero?.title || "Visa Services",
            description:
                visaData?.hero?.description ||
                "Seamless visa assistance for your travel needs.",
            buttonText:
                visaData?.hero?.buttonText?.map((btn) => ({
                    title: btn.title || "Explore Now",
                    link: btn.link || "#",
                })) || [],
        };

        // Map visa section data
        visaSection = {
            title:
                visaData?.visaSection?.title || "Visa Solutions for All Travelers",
            description:
                visaData?.visaSection?.description ||
                "Navigate the visa process with ease through our expert assistance. Contact us to ensure a smooth and stress-free visa application experience.",
            travelServices:
                visaData?.visaSection?.travelServices?.map((service) => ({
                    url: service?.url?.asset?.url || "/default-icon.png",
                    title: service?.title || "Visa Service",
                    isBigger: service?.isBigger || false,
                })) || [],
        };

        // Map parallax data
        parallax = {
            title:
                visaData?.parallax?.title || "",
            description:
                visaData?.parallax?.description ||
                "",
            image: visaData?.parallax?.image?.asset?.url || "",
            formFields: [
                {
                    type: "toggle",
                    name: "travelType",
                    options: [
                        {value: "corporate", label: "Corporate Travel"},
                        {value: "mice", label: "MICE Travel"},
                    ],
                    required: true,
                },
                {
                    type: "select",
                    name: "title",
                    placeholder: "Title",
                    options: [
                        {value: "Mr", label: "Mr"},
                        {value: "Mrs", label: "Mrs"},
                        {value: "Miss", label: "Miss"},
                        {value: "Rev", label: "Rev"},
                        {value: "Dr", label: "Dr"},
                    ],
                    required: true,
                },
                {type: "text", name: "name", placeholder: "Name", required: true},
                {
                    type: "text",
                    name: "contactNumber",
                    placeholder: "Contact Number",
                    required: true,
                },
                {type: "email", name: "email", placeholder: "Email", required: true},
                {
                    type: "text",
                    name: "company",
                    placeholder: "Company",
                    required: false,
                },
                {
                    type: "text",
                    name: "designation",
                    placeholder: "Designation",
                    required: true,
                },
                {
                    type: "textarea",
                    name: "inquiry",
                    placeholder: "Inquiry",
                    rows: 3,
                    required: true,
                },
            ],
            pageSource: "Visa Inquiry",
        };
    } catch (error) {
        console.error("Error fetching visa page data:", error);
        return (
            <div className="min-h-screen bg-white lato flex items-center justify-center">
                <p className="text-red-500 text-lg">
                    Failed to load visa page data. Please try again later.
                </p>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-white lato">
            <Nav/>
            <Hero hero={hero}/>
            <div className="py-6 my-0 lg:py-12 lg:my-8 bg-white relative overflow-hidden lato">
                <div id="visa-explore" className="container mx-auto px-4">
                    <h2 className="text-[22px] sm:text-[30px] lg:text-[45px] leading-6 md:leading-10 font-bold text-[#3C3C3C] text-center mb-4 md:mb-8">
                        {visaSection.title}
                    </h2>
                    <p className="text-[#737373] text-[14px] sm:text-[16px] lg:text-[20px] text-center mb-8 max-w-4xl mx-auto">
                        {/*Navigate the visa process with ease through our expert assistance. Contact Acorn Travels today*/}
                        {/*via our inquiry form, and we&#39;ll guide you through every step to ensure a smooth and*/}
                        {/*stress-free visa application experience.*/}
                        {visaSection.description}
                    </p>

                    {/*<div className="mt-6 sm:mt-10 max-w-2xl mx-auto justify-center">*/}
                    {/*    /!*<div className="grid grid-cols-2 sm:grid-cols-3 4 mx-auto gap-2">                        *!/*/}
                    {/*        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center">*/}
                    {/*        {visaSection.travelServices.map((service, index) => (*/}
                    {/*            <TravelFeatures*/}
                    {/*                key={index}*/}
                    {/*                url={service.url}*/}
                    {/*                title={service.title}*/}
                    {/*                isBigger={service.isBigger}*/}
                    {/*            />*/}
                    {/*        ))}*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center">*/}
                    <TravelFeaturesGrid featuresSection={visaSection} isBigger={true}/>
                    {/*</div>*/}

                </div>
            </div>
            <ParallaxBackground
                parallax={parallax}
                formFields={parallax.formFields}
                pageSource={parallax.pageSource}
            />
        </div>
    );
}

export default VisaPage;


export async function generateMetadata(): Promise<Metadata> {
    const mdata = await getMetadata("visa");

    return {
        title: mdata?.title || "Acorn Travel - Visa",
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