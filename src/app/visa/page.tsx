import Hero from "@/components/Hero";
import ParallaxBackground from "@/components/ParallaxBackground";
import {FormField} from "@/components/ContactForm";
import {getVisaPageData} from "../../../sanity/api";
import React from "react";
import TravelFeaturesGrid from "@/components/ServiceIcon";

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
                        { value: "corporate", label: "Corporate Travel" },
                        { value: "mice", label: "MICE Travel" },
                    ],
                    required: true,
                },
                {
                    type: "select",
                    name: "title",
                    placeholder: "Title",
                    options: [
                        { value: "Mr", label: "Mr" },
                        { value: "Mrs", label: "Mrs" },
                        { value: "Miss", label: "Miss" },
                        { value: "Rev", label: "Rev" },
                        { value: "Dr", label: "Dr" },
                    ],
                    required: true,
                },
                { type: "text", name: "name", placeholder: "Name", required: true },
                {
                    type: "text",
                    name: "contactNumber",
                    placeholder: "Contact Number",
                    required: true,
                },
                { type: "email", name: "email", placeholder: "Email", required: true },
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
            <Hero hero={hero}/>
            <div className="py-6 my-0 lg:py-12 lg:my-8 bg-white relative overflow-hidden lato">
                <div id="visa-explore" className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-[45px] font-bold text-[#3C3C3C] text-center mb-8">
                        Visa Solutions for Tourist Visa and Business Visa
                    </h2>
                    <p className="text-[#737373] text-base md:text-xl text-center mb-8 max-w-4xl mx-auto">
                        Navigate the visa process with ease through our expert assistance. Contact Acorn Travels today
                        via our inquiry form, and we&#39;ll guide you through every step to ensure a smooth and
                        stress-free visa application experience.
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