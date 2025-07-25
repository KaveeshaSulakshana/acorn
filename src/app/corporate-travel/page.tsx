import React from "react";
import Hero from "@/components/Hero";
import ParallaxBackground from "@/components/ParallaxBackground";
import {FormField} from "@/components/ContactForm";
import {getCorporatePageData, getMetadata} from "../../../sanity/api";
import FeatureSlider from "@/components/FeatureSlider";
import Nav from "@/components/Nav";
import {Metadata} from "next";
import {urlFor} from "../../../sanity/sanity";

// interface Slide {
//     _key: string;
//     url: string;
//     title: string;
// }
//
// interface HeroProps {
//     image: string;
//     title: string;
//     description: string;
//     buttonLink: string;
//     buttonText: string;
// }
//
// interface ParallaxProps {
//     title: string;
//     description: string;
//     image: string;
//     formFields: FormField[];
//     pageSource: string;
// }

interface SanityCorporateTravelData {
    hero: {
        image: { asset: { url: string } };
        title: string;
        description: string;
        buttonText: Array<{ _key: string; title: string; link: string }>;
    };
    corporateTravel: {
        title: string;
        description: string;
        slides: Array<{ _key: string; url: { asset: { url: string } }; title: string }>;
    };
    parallax: {
        title: string;
        description: string;
        image: { asset: { url: string } };
    };
    miceTravel: {
        title: string;
        description: string;
        slides: Array<{ _key: string; url: { asset: { url: string } }; title: string }>;
    };
}

const CorporateTravel = async () => {
        // let hero: HeroProps = {
        //     image: "",
        //     title: "",
        //     description: "",
        //     buttonLink: "",
        //     buttonText: "",
        // };
        // let parallax: ParallaxProps = {
        //     title: "",
        //     description: "",
        //     image: "",
        //     formFields: [],
        //     pageSource: "",
        // };
        // let corporateTravelSlides: Slide[] = [];
        // let miceTravelSlides: Slide[] = [];
        //
        //
        //     const corporateData = await getCorporatePageData();
        //     console.log(corporateData);
        //
        //     hero = {
        //         image: corporateData?.hero?.image?.asset?.url || "",
        //         title: corporateData?.hero?.title || "",
        //         description: corporateData?.hero?.description || "",
        //         buttonLink: corporateData?.hero?.buttonLink || "#",
        //         buttonText: corporateData?.hero?.buttonText || "",
        //     };
        //
        //     parallax = {
        //         title: corporateData?.parallax?.title || "",
        //         description: corporateData?.parallax?.description || "",
        //         image: corporateData?.parallax?.image?.asset?.url || "",
        //         formFields: [
        //             {
        //                 type: "toggle",
        //                 name: "travelType",
        //                 options: [
        //                     {value: "corporate", label: "Corporate Travel"},
        //                     {value: "mice", label: "MICE Travel"},
        //                 ],
        //                 required: true,
        //             },
        //             {
        //                 type: "select",
        //                 name: "title",
        //                 placeholder: "Title",
        //                 options: [
        //                     {value: "Mr", label: "Mr"},
        //                     {value: "Mrs", label: "Mrs"},
        //                     {value: "Miss", label: "Miss"},
        //                     {value: "Rev", label: "Rev"},
        //                     {value: "Dr", label: "Dr"},
        //                 ],
        //                 required: true,
        //             },
        //             {type: "text", name: "name", placeholder: "Name", required: true},
        //             {type: "text", name: "contactNumber", placeholder: "Contact Number", required: true},
        //             {type: "email", name: "email", placeholder: "Email", required: true},
        //             {type: "text", name: "company", placeholder: "Company", required: false},
        //             {type: "text", name: "designation", placeholder: "Designation", required: true},
        //             {type: "textarea", name: "inquiry", placeholder: "Inquiry", rows: 3, required: true},
        //         ],
        //         pageSource: "Corporate Travel Inquiry",
        //     };
        //
        //     corporateTravelSlides = (corporateData?.corporateTravel?.slides || []).map((slide: Slide) => ({
        //         _key: slide._key || "",
        //         url: slide.url?.asset?.url || "/placeholder.png",
        //         title: slide.title || "",
        //     }));
        //
        //     miceTravelSlides = (corporateData?.miceTravel?.slides || []).map((slide: Slide) => ({
        //         _key: slide._key || "",
        //         url: slide.url?.asset?.url || "/placeholder.png",
        //         title: slide.title || "",
        //     }));
        //
        //     // console.error("Error fetching corporate travel data:", error);
        //     // return <div>Error loading corporate travel data. Please try again later.</div>;


        let corporateData: SanityCorporateTravelData | null = null;
        let error: Error | null = null;

        try {
            corporateData = await getCorporatePageData();
            console.log("Fetched corporate data:", corporateData);
        } catch (e) {
            error = e as Error;
            console.error("Error fetching corporate travel data:", error);
        }

        if (error) {
            return <div>Error loading corporate travel data: {error.message}. Please try again later.</div>;
        }

        if (!corporateData) {
            // Handle case where data might be null even without an explicit error (e.g., no document found)
            return <div>No corporate travel page data found.</div>;
        }

        // Prepare props for components, ensuring null/undefined checks
        const heroProps = {
            image: corporateData.hero?.image?.asset?.url || "/placeholder-hero.jpg",
            title: corporateData.hero?.title || "Corporate Travel",
            description: corporateData.hero?.description || "Your premier partner for corporate travel solutions.",
            buttonText: corporateData.hero?.buttonText || [], // Ensure it's an array
        };

        const parallaxProps = {
            title: corporateData.parallax?.title || "Ready to Plan Your Next Trip?",
            description: corporateData.parallax?.description || "Contact us today for personalized travel management.",
            image: corporateData.parallax?.image?.asset?.url || "/placeholder-parallax.jpg",
        };

        const corporateTravelSlides = (corporateData.corporateTravel?.slides || []).map((slide) => ({
            _key: slide._key,
            url: slide.url?.asset?.url,
            title: slide.title || "",
        }));

        const miceTravelSlides = (corporateData.miceTravel?.slides || []).map((slide) => ({
            _key: slide._key,
            url: slide.url?.asset?.url || "",
            title: slide.title || "",
        }));

        // Define form fields for the ContactForm (these are static, not from Sanity schema for parallax)
        const contactFormFields: FormField[] = [
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
            {type: "text", name: "contactNumber", placeholder: "Contact Number", required: true},
            {type: "email", name: "email", placeholder: "Email", required: true},
            {type: "text", name: "company", placeholder: "Company", required: false},
            {type: "text", name: "designation", placeholder: "Designation", required: true},
            {type: "textarea", name: "inquiry", placeholder: "Inquiry", rows: 3, required: true},
        ];
        const contactFormPageSource = "Corporate Travel Inquiry";


        return (
            <div className="lato bg-[#F6F6F6]">
                <Nav/>
                <Hero hero={heroProps}/>
                <div id="corporate-travel" className="py-12 bg-white relative overflow-hidden lato">
                    <div className="container mx-auto px-4">
                        <h2 className="text-[28px] sm:text-[38px] lg:text-[52px] font-bold text-[#3C3C3C] text-center mb-4">
                            {corporateData.corporateTravel?.title}
                        </h2>
                        <p className="text-[#737373] text-[14px] sm:text-[16px] lg:text-[20px] leading-6 md:leading-10 text-center mb-8 max-w-5xl mx-auto">
                            {corporateData?.corporateTravel?.description}
                        </p>

                        <div className="md:py-4 relative max-w-5xl mx-auto">
                            {/*<div className="flex flex-row justify-center mt-8">*/}
                            {/*{travelServices.map((service, index) => (*/}
                            {/*    <div key={index}>*/}
                            {/*        <TravelFeatures url={service.url} title={service.title}*/}
                            {/*                        isBorder={service.isBorder}/>*/}
                            {/*    </div>*/}
                            {/*))}*/}
                            <FeatureSlider slides={corporateTravelSlides} />
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                {/*<ParallaxBackground parallax={parallax}/>*/}
                <ParallaxBackground
                    parallax={parallaxProps}
                    formFields={contactFormFields}
                    pageSource={contactFormPageSource}
                />
                <div id="mice-travel" className="py-12 bg-white relative overflow-hidden lato">
                    <div className="container mx-auto px-4">
                        <h2 className="text-[28px] sm:text-[38px] lg:text-[52px] font-bold text-[#3C3C3C] text-center mb-8">
                            {corporateData?.miceTravel?.title}
                        </h2>
                        <p className="text-[#737373] text-[14px] sm:text-[16px] lg:text-[20px] leading-6 md:leading-10 text-center mb-4 max-w-5xl mx-auto">
                            {corporateData?.miceTravel?.description}
                        </p>

                        <div className="relative py-4 max-w-5xl mx-auto">
                            {/*<div className="flex flex-row justify-center mt-8">*/}
                            {/*{travelServices.map((service, index) => (*/}
                            {/*    <div key={index}>*/}
                            {/*        <TravelFeatures url={service.url} title={service.title}*/}
                            {/*                        isBorder={service.isBorder}/>*/}
                            {/*    </div>*/}
                            {/*))}*/}

                            <FeatureSlider slides={miceTravelSlides}/>
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
;

export default CorporateTravel;

export const revalidate = 60;


export async function generateMetadata(): Promise<Metadata> {
    const mdata = await getMetadata("corporate");

    return {
        title: mdata?.title || "Acorn Travel - Corporate Travel",
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





