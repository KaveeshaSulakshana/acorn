// import Hero from "@/components/Hero";
// import Image from "next/image";
// import ParallaxBackground from "@/components/ParallaxBackground";
// import {FormField} from "@/components/ContactForm";
// import {getLeisurePageData} from "../../../sanity/api";
// import Link from "next/link";
// import React from "react";
// import TravelFeatures from "@/components/ServiceIcon";
//
// interface Hero {
//     image: string;
//     title: string;
//     description: string;
//     buttonLink: string;
//     buttonText: string[];
// }
//
// interface Section {
//     title: string;
//     description: string;
//     logo: string;
//     image: string;
// }
//
// interface ParallaxProps {
//     title: string,
//     description: string,
//     image: string,
//     formFields: FormField[],
//     pageSource: string
// }
//
// interface Sec {
//     title: string;
//     description: string;
//     logo: {
//         asset: {
//             url: string;
//         };
//     };
//     image: {
//         asset: {
//             url: string;
//         };
//     };
// }
//
// interface FeatureProps {
//     url: string,
//     title: string,
// }
//
//
// const LeisureTravel = async () => {
//
//     let hero: Hero = {image: "", title: "", description: "", buttonLink: "", buttonText: []};
//     let sections: Section[] = [];
//     let parallax: ParallaxProps = {
//         title: "",
//         description: "",
//         image: "",
//         formFields: [],
//         pageSource: "",
//     };
//
//     try {
//         const leisureData = await getLeisurePageData();
//         console.log("------leisure data (server): ", leisureData);
//
//         hero = {
//             image: leisureData?.hero?.image?.asset?.url || "",
//             title: leisureData?.hero?.title || "",
//             description: leisureData?.hero?.description || "",
//             buttonLink: leisureData?.hero?.buttonLink || "#",
//             buttonText: leisureData?.hero?.buttonText || [],
//         };
//
//         sections = (leisureData?.sections || []).map((section: Sec) => ({
//             title: section?.title || "",
//             description: section?.description || "",
//             logo: section?.logo?.asset?.url || "",
//             image: section?.image?.asset?.url || "",
//         }));
//
//         parallax = {
//             title: leisureData?.parallax?.title || "",
//             description: leisureData?.parallax?.description || "",
//             image: leisureData?.parallax?.image?.asset?.url || "",
//             formFields: [
//                 {
//                     type: "select",
//                     name: "title",
//                     placeholder: "Title",
//                     options: [
//                         {value: "Mr", label: "Mr"},
//                         {value: "Mrs", label: "Mrs"},
//                         {value: "Miss", label: "Miss"},
//                         {value: "Rev", label: "Rev"},
//                         {value: "Dr", label: "Dr"},
//                     ],
//                     required: true
//                 },
//                 {type: "text", name: "name", placeholder: "Name", required: true},
//                 {
//                     type: "select",
//                     name: "tourOfChoice",
//                     placeholder: "Tour of Choice",
//                     options: [
//                         {value: "Customized Tours", label: "Customized Tours"},
//                         {value: "Royal Caribbean Cruises", label: "Royal Caribbean Cruises"},
//                         {value: "Celebrity Cruises", label: "Celebrity Cruises"},
//                         {value: "Avalon River Cruises", label: "Avalon River Cruises"},
//                         {value: "Globus Coach Tours", label: "Clobus Coach Tours"},
//                         {value: "Cosmos Coach Tours", label: "Cosmos Coach Tours"},
//                     ],
//                     required: true
//                 },
//                 {type: "text", name: "contactNumber", placeholder: "Contact Number", required: true},
//                 {type: "email", name: "email", placeholder: "Email", required: true},
//                 {type: "textarea", name: "inquiry", placeholder: "Inquiry", rows: 3, required: true},
//             ],
//             pageSource: "Leisure Travel Inquiry"
//         }
//     } catch (error) {
//         console.error("Error fetching leisure travel data:", error);
//     }
//
//
//     const fallbackHero: Hero = {
//         image: "/leisure-hero.png",
//         title: "Discover Inspiring Journeys",
//         description:
//             "Embark on unforgettable adventures crafted just for you. From serene escapes to\n" +
//             "thrilling explorations, let us turn your travel dreams into reality.",
//         buttonLink: "#",
//         buttonText: ["Customized tours", "Cruises", "Coach Tours"],
//     };
//
//     const fallbackSections: Section[] = [
//         {
//             title: "Set Off on Your Dream Gateway Plan your Customized Tour",
//             description: "Dreaming of an incredible vacation? We’re here to turn your dreams into reality! Planning a\n" +
//                 "                            trip can be overwhelming, which is why it’s essential to work with a travel agent who truly\n" +
//                 "                            understands your needs and specializes in creating your perfect journey.",
//             logo: "/company-logos/hotelrack.png",
//             image: "/hotelrack-image.png"
//         },
//         {
//             title: "Set Sail with \n" +
//                 "Royal Caribbean Cruises",
//             description: "Discover the magic of cruising with Royal Caribbean, offering a variety of unforgettable voyages—whether it’s a weekend getaway, romantic retreat, adventurous journey, or a family trip of a lifetime.",
//             logo: "/company-logos/royal-caribbean.png",
//             image: "/royal-image.png"
//         },
//         {
//             title: "Celebrity Cruises offers tailor made vacations for every traveller",
//             description: "Be it a family cruise, Mediterranean cruise or a mere weekend getaway, your idyllic cruise vacation has been tailor made by Celebrity Cruises. Experience a gamut of uncharted territories and mysterious places, all the while discovering the mesmerizing sites & wonders of the seven continents of the world.",
//             logo: "/company-logos/celebrity-cruises.png",
//             image: "/celebrity-image.png"
//         },
//         {
//             title: "Experience world-class river cruises",
//             description: "Experience world-class river cruises across Europe, Southeast Asia, and South America with Avalon’s ingeniously designed Suite Ships. Featuring panoramic views, open-air balconies, and luxurious interiors, Avalon combines comfort with unforgettable journeys through stunning, ever-changing landscapes.",
//             logo: "/company-logos/Avalon.png",
//             image: "/avalon-image.png"
//         },
//         {
//             title: "A world of ways to explore the world",
//             description: "Globus meets every travel need, from breathtaking sightseeing and authentic cuisines to centrally located hotels. With expert tour guides delivering VIP service, Globus is dedicated to enhancing every traveler’s experience, ensuring unforgettable journeys tailored to your desires.",
//             logo: "/company-logos/globus.png",
//             image: "/globus-image.png"
//         },
//         {
//             title: "Priceless experiences at your price",
//             description: "With over 50 years of expertise, Cosmos turns travel dreams into reality by offering exceptional destinations and experiences for both seasoned travelers and first-time adventurers. Combining the perks of group travel with the freedom to explore independently, Cosmos ensures unforgettable journeys.",
//             logo: "/company-logos/Cosmos.png",
//             image: "/cosmos-image.png"
//         },
//     ];
//
//     const fallbackParallax: ParallaxProps = {
//         title: "Tailor-Made Leisure Travel & Fixed Tour Solutions",
//         description: "Make your vacations effortless with our expertly curated leisure travel packages. Whether you're looking for a customized itinerary or want to explore our exciting, fixed tours, Acorn Travels has you covered. Reach out to us via our inquiry form, and we'll ensure a seamless travel experience tailored to your preferences.",
//         image: "/leisure-bg.png",
//         formFields: parallax.formFields,
//         pageSource: parallax.pageSource
//     };
//
//     const travelServices: FeatureProps[] = [
//         {
//             url: "/doc.png",
//             title: "Tailor-Made Itineraries",
//         },
//         {
//             url: "/doc.png",
//             title: "Personalized Experiences",
//         },
//         {
//             url: "/doc.png",
//             title: "Hassle-Free Travel Planning",
//         }
//     ]
//
//     return (
//         <div className="min-h-screen bg-[#F6F6F6] lato">
//             <Hero hero={hero.image ? hero : fallbackHero}/>
//             <div className="mx-auto container">
//                 {(sections.length > 0 ? sections : fallbackSections).map((section, index) => (
//                     <div id="customized-tours"
//                          key={index}
//                          className="flex flex-col odd:md:flex-row even:md:flex-row-reverse sm:gap-20 p-8 sm:p-6 md:p-8 lg:py-12 xl:py-16 lg:px-18 xl:px-20 odd:bg-[#F6F6F6] even:bg-white m-0 sm:m-0 md:m-8 lg:m-0 xl:m-0"
//                     >
//                         <div className="w-full md:w-3/5 mb-6 md:mb-0 flex flex-col justify-between">
//                             <div className="">
//                                 <h2 className="font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-15 text-[#3C3C3C] max-w-xl">
//                                     {section.title}
//                                 </h2>
//                                 <p className="text-base sm:text-lg md:text-xl font-normal mt-4 sm:mt-6 text-[#737373] max-w-2xl leading-10">
//                                     {section.description}
//                                 </p>
//                                 {
//                                     section.logo.length > 0 ? (
//                                         <div className="mt-8 flex flex-row items-center justify-between max-w-2xl">
//                                             <Image
//                                                 src={section.logo}
//                                                 alt="Section Logo"
//                                                 height={50}
//                                                 width={200}
//                                                 className="object-contain"
//                                             />
//
//                                             <div>
//                                                 <Link href="">
//                                                     <button
//                                                         className="bg-[#2B5597] cursor-pointer text-white text-xs lg:text-sm font-bold px-3 sm:px-4 py-3 rounded-md hover:bg-blue-950 transition-colors lato"
//                                                     >
//                                                         Explore More
//                                                     </button>
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                     ) : (
//                                         <div className="mt-8">
//                                             <Link href="">
//                                                 <button
//                                                     className="bg-[#2B5597] cursor-pointer text-white text-xs lg:text-sm font-bold px-3 sm:px-4 py-3 rounded-md hover:bg-blue-950 transition-colors lato"
//                                                 >
//                                                     Explore More
//                                                 </button>
//                                             </Link>
//                                         </div>
//                                     )
//                                 }
//                             </div>
//
//                             <div className="relative">
//                                 <div className="flex flex-row justify-items-start mt-8">
//                                     {travelServices.map((service, index) => (
//                                         <div key={index}>
//                                             <TravelFeatures url={service.url} title={service.title}/>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//
//                         <div className="w-full md:w-2/5">
//                             <Image
//                                 src={section.image}
//                                 alt="Section Image"
//                                 width={400}
//                                 height={600}
//                                 className="rounded-lg object-cover w-full h-auto"
//                             />
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <ParallaxBackground parallax={parallax.image ? parallax : fallbackParallax}/>
//         </div>
//     );
// }
//
// export default LeisureTravel;
//
// export const revalidate = 60;


import Hero from "@/components/Hero";
import Image from "next/image";
import ParallaxBackground from "@/components/ParallaxBackground";
import {FormField} from "@/components/ContactForm";
import {getLeisurePageData} from "../../../sanity/api";
import Link from "next/link";
import React from "react";
import TravelFeaturesGrid from "@/components/ServiceIcon";
import Nav from "@/components/Nav";

// interface HeroButton {
//     title: string;
//     link: string;
// }
//
// interface Hero {
//     image: string;
//     title: string;
//     description: string;
//     buttonText: HeroButton[];
// }
//
// interface TravelService {
//     url: string;
//     title: string;
//     isBigger: boolean;
//     alt?: string;
// }
//
// interface Section {
//     title: string;
//     description: string;
//     logo: string;
//     logoAlt?: string;
//     image: string;
//     imageAlt?: string;
//     buttonText?: string;
//     buttonLink?: string;
//     sectionLink?: string;
//     travelServices: TravelService[];
// }
//
// interface ParallaxProps {
//     title: string;
//     description: string;
//     image: string;
//     formFields: FormField[];
//     pageSource: string;
// }

interface HeroButton {
    title: string;
    link: string;
}

// Interface for the hero section
interface Hero {
    image: string;
    title: string;
    description: string;
    buttonText: HeroButton[];
}

// Interface for a section
interface Section {
    title: string;
    description: string;
    logo: string; // Corrected to string (URL)
    logoAlt?: string;
    image: string; // Corrected to string (URL)
    imageAlt?: string;
    buttonText?: string;
    buttonLink: string;
    sectionLink?: string;
    travelServices: {
        url: string; // Corrected to string (URL)
        title: string;
        isBigger: boolean;
    }[];
}

// Interface for the parallax section
interface ParallaxProps {
    title: string;
    description: string;
    image: string;
    formFields: FormField[];
    pageSource: string;
}

interface SanityImage {
    asset: {
        _id: string;
        url: string;
    };
    alt?: string;
}

// Interface for a travel service as it comes directly from Sanity
interface SanityTravelService {
    url: SanityImage;
    title: string;
    isBigger: boolean;
}

interface SanitySection {
    title: string;
    description: string;
    logo: SanityImage;
    image: SanityImage;
    buttonText?: string;
    buttonLink?: string;
    sectionLink?: string;
    travelServices: SanityTravelService[];
}

const LeisureTravel = async () => {
    let hero: Hero = {
        image: "",
        title: "",
        description: "",
        buttonText: [],
    };
    let sections: Section[] = [];
    let parallax: ParallaxProps = {
        title: "",
        description: "",
        image: "",
        formFields: [],
        pageSource: "",
    };


    try {
        const leisureData = await getLeisurePageData();
        console.log("------leisure data (server): ", leisureData);

        // Map hero data
        hero = {
            image: leisureData?.hero?.image?.asset?.url || "",
            title: leisureData?.hero?.title || "Welcome to Leisure Travel",
            description:
                leisureData?.hero?.description ||
                "Explore unforgettable travel experiences tailored to you.",
            buttonText:
                leisureData?.hero?.buttonText?.map((btn: HeroButton) => ({
                    title: btn.title || "Explore Now",
                    link: btn.link || "#",
                })) || [],
        };

        // Map sections data
        sections = (leisureData?.sections || []).map((section: SanitySection) => ({ // Using 'any' for the incoming section to avoid type conflicts with `SanityImage` during mapping
            title: section?.title,
            description: section?.description,
            logo: section?.logo?.asset?.url, // This is now directly the URL string
            logoAlt: section?.logo?.alt,
            image: section?.image?.asset?.url, // This is now directly the URL string
            imageAlt: section?.image?.alt,
            buttonText: section?.buttonText,
            buttonLink: section?.buttonLink,
            sectionLink: section?.sectionLink,
            travelServices: (section?.travelServices || []).map((service) => ({ // Using 'any' here too
                url: service?.url?.asset?.url, // This is now directly the URL string
                alt: service?.url?.alt,
                title: service?.title,
                isBigger: service?.isBigger || false,
            })),
        }));

        // Map parallax data
        parallax = {
            title:
                leisureData?.parallax?.title || "Contact Us for Your Next Adventure",
            description:
                leisureData?.parallax?.description ||
                "Reach out to plan your perfect leisure travel experience.",
            image: leisureData?.parallax?.image?.asset?.url || "",
            formFields: [
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
                    type: "select",
                    name: "tourOfChoice",
                    placeholder: "Tour of Choice",
                    options: [
                        {value: "Customized Tours", label: "Customized Tours"},
                        {value: "Royal Caribbean Cruises", label: "Royal Caribbean Cruises"},
                        {value: "Celebrity Cruises", label: "Celebrity Cruises"},
                        {value: "Avalon River Cruises", label: "Avalon River Cruises"},
                        {value: "Globus Coach Tours", label: "Globus Coach Tours"},
                        {value: "Cosmos Coach Tours", label: "Cosmos Coach Tours"},
                    ],
                    required: true,
                },
                {
                    type: "text",
                    name: "contactNumber",
                    placeholder: "Contact Number",
                    required: true,
                },
                {type: "email", name: "email", placeholder: "Email", required: true},
                {
                    type: "textarea",
                    name: "inquiry",
                    placeholder: "Inquiry",
                    rows: 3,
                    required: true,
                },
            ],
            pageSource: "Leisure Travel Inquiry",
        };
    } catch (error) {
        console.error("Error fetching leisure travel data:", error);
        return (
            <div className="min-h-screen bg-white lato flex items-center justify-center">
                <p className="text-red-500 text-lg">
                    Failed to load travel data. Please try again later.
                </p>
            </div>
        );
    }

    // Render nothing or a placeholder if critical data is missing
    if (!hero.title || sections.length === 0) {
        return (
            <div className="min-h-screen bg-white lato flex items-center justify-center">
                <p className="text-gray-500 text-lg">
                    No travel data available at this time.
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen relative bg-white lato">
            <Nav/>
            <Hero hero={hero}/>
            <div className="mx-auto">
                {sections.map((section, index) => (
                    <div
                        id={section.sectionLink}
                        key={index}
                        className="flex flex-col md:flex-row md:odd:flex-row md:even:flex-row-reverse gap-6 sm:gap-12 md:gap-20 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 odd:bg-[#F6F6F6] even:bg-white m-0"
                    >
                        <div className="w-full md:w-3/5 mb-6 md:mb-0 flex flex-col justify-between">
                            <div>
                                <h2 className="font-bold text-xl sm:text-2xl md:text-[32px] lg:text-[40px] md:leading-10 text-[#3C3C3C] max-w-2xl">
                                    {section.title}
                                </h2>
                                <div className="w-full block my-3 md:hidden md:w-2/5">
                                    <Image
                                        src={section.image}
                                        alt="Section Image"
                                        width={400}
                                        height={600}
                                        className="rounded-lg object-cover w-full h-full md:h-[400px] lg:h-[600px]"
                                    />
                                </div>
                                <p className="text-sm sm:text-[15px] md:text-xl font-normal mt-4 sm:mt-6 text-[#737373] max-w-2xl leading-relaxed">
                                    {section.description}
                                </p>
                                <div className="mx-auto">
                                    <TravelFeaturesGrid featuresSection={section} isBigger={false}/>
                                </div>
                            </div>
                            {section.logo ? (
                                <div
                                    className={`mt-6 sm:mt-8 items-center content-end flex flex-row ${index % 2 == 0 ? "sm:flex-row" : "sm:flex-row-reverse"} sm:items-center justify-between max-w-2xl gap-4`}>
                                    <Image
                                        src={section.logo}
                                        alt="Section Logo"
                                        height={40}
                                        width={160}
                                        className="object-contain w-32 sm:w-40 md:w-48"
                                    />
                                    <div className="flex justify-end right-0 content-end self-end">
                                        <Link href={section.buttonLink}>
                                            <button
                                                className="bg-[#2B5597] cursor-pointer text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 sm:py-3 rounded-md hover:bg-blue-950 transition-colors lato"
                                            >
                                                {section.buttonText}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="mt-6 sm:mt-8 flex justify-end">
                                    {/*<Link href="" className="items-end self-end justify-end">*/}
                                    {/*    <button*/}
                                    {/*        className="bg-[#2B5597] cursor-pointer items-end self-end text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 sm:py-3 rounded-md hover:bg-blue-950 transition-colors lato"*/}
                                    {/*    >*/}
                                    {/*        {section.buttonText}*/}
                                    {/*    </button>*/}
                                    {/*</Link>*/}
                                    <Link href={section.buttonLink} className="inline-block">
                                        <button
                                            className="bg-[#2B5597] cursor-pointer text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 sm:py-3 rounded-md hover:bg-blue-950 transition-colors lato"
                                        >
                                            {section.buttonText}
                                        </button>
                                    </Link>
                                </div>
                            )}
                            {/*<div className="mt-6 sm:mt-8 justify-center lg:justify-start">*/}
                            {/*    <div className="grid grid-cols-2 sm:grid-cols-3  gap-4 sm:gap-6">*/}
                            {/*        {section.travelServices.map((service, index) => (*/}
                            {/*            <TravelFeatures key={index} url={service.url} title={service.title}*/}
                            {/*                            isBigger={service.isBigger}/>*/}
                            {/*        ))}*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*<TravelFeaturesGrid featuresSection={section} isBigger={false}/>*/}
                        </div>
                        <div className="w-full hidden my-3 md:block md:w-2/5">
                            <Image
                                src={section.image}
                                alt="Section Image"
                                width={400}
                                height={600}
                                className="rounded-lg object-cover w-full h-full md:h-[400px] lg:h-[600px]"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/*<div className="mx-auto">*/}
            {/*    {sections.map((section, index) => (*/}
            {/*        <div*/}
            {/*            id={section.sectionLink}*/}
            {/*            key={index}*/}
            {/*            className="flex flex-col md:flex-row md:odd:flex-row md:even:flex-row-reverse gap-6 sm:gap-12 md:gap-20 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 odd:bg-[#F6F6F6] even:bg-white m-0"*/}
            {/*        >*/}
            {/*            <div className="w-full md:w-3/5 flex flex-col justify-between">*/}
            {/*                /!* Mobile order: title, image, description, TravelFeaturesGrid, logo & button *!/*/}
            {/*                <div className="flex flex-col space-y-6 sm:space-y-8">*/}
            {/*                    /!* Title *!/*/}
            {/*                    <h2 className="font-bold text-xl sm:text-2xl md:text-[32px] lg:text-[40px] leading-10 text-[#3C3C3C] max-w-2xl order-1">*/}
            {/*                        {section.title}*/}
            {/*                    </h2>*/}

            {/*                    /!* Image (moved here for mobile) *!/*/}
            {/*                    <div className="order-2 md:hidden">*/}
            {/*                        <Image*/}
            {/*                            src={section.image}*/}
            {/*                            alt="Section Image"*/}
            {/*                            width={400}*/}
            {/*                            height={600}*/}
            {/*                            className="rounded-lg object-cover w-full h-full md:h-[400px] lg:h-[600px]"*/}
            {/*                        />*/}
            {/*                    </div>*/}

            {/*                    /!* Description *!/*/}
            {/*                    <p className="text-sm sm:text-base md:text-xl font-normal text-[#737373] max-w-2xl leading-relaxed order-3">*/}
            {/*                        {section.description}*/}
            {/*                    </p>*/}

            {/*                    /!* TravelFeaturesGrid *!/*/}
            {/*                    <div className="order-4">*/}
            {/*                        <TravelFeaturesGrid featuresSection={section} isBigger={false} />*/}
            {/*                    </div>*/}

            {/*                    /!* Logo & Button *!/*/}
            {/*                    {section.logo ? (*/}
            {/*                        <div*/}
            {/*                            className={`items-center flex flex-row ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} sm:items-center justify-between max-w-2xl gap-4 order-5`}*/}
            {/*                        >*/}
            {/*                            <Image*/}
            {/*                                src={section.logo}*/}
            {/*                                alt="Section Logo"*/}
            {/*                                height={40}*/}
            {/*                                width={160}*/}
            {/*                                className="object-contain w-32 sm:w-40 md:w-48"*/}
            {/*                            />*/}
            {/*                            <div className="flex justify-end right-0 content-end self-end">*/}
            {/*                                <Link href={section.buttonLink}>*/}
            {/*                                    <button*/}
            {/*                                        className="bg-[#2B5597] cursor-pointer text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 sm:py-3 rounded-md hover:bg-blue-950 transition-colors lato"*/}
            {/*                                    >*/}
            {/*                                        {section.buttonText}*/}
            {/*                                    </button>*/}
            {/*                                </Link>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    ) : (*/}
            {/*                        <div className="flex justify-end order-5">*/}
            {/*                            <Link href={section.buttonLink} className="inline-block">*/}
            {/*                                <button*/}
            {/*                                    className="bg-[#2B5597] cursor-pointer text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 sm:py-3 rounded-md hover:bg-blue-950 transition-colors lato"*/}
            {/*                                >*/}
            {/*                                    {section.buttonText}*/}
            {/*                                </button>*/}
            {/*                            </Link>*/}
            {/*                        </div>*/}
            {/*                    )}*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            /!* Image for md and larger screens *!/*/}
            {/*            <div className="hidden md:block w-full md:w-2/5">*/}
            {/*                <Image*/}
            {/*                    src={section.image}*/}
            {/*                    alt="Section Image"*/}
            {/*                    width={400}*/}
            {/*                    height={600}*/}
            {/*                    className="rounded-lg object-cover w-full h-full md:h-[400px] lg:h-[600px]"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}

            <div id="inquiry">
                <ParallaxBackground parallax={parallax} formFields={parallax.formFields}
                                    pageSource={parallax.pageSource}/>
            </div>
        </div>
    );
}

export default LeisureTravel;

export const revalidate = 60;