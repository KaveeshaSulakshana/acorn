import Hero from "@/components/Hero";
import Image from "next/image";
import Partners from "@/components/Partners";
import {getAboutUsPageData} from "../../../sanity/api";
import Strengths from "@/components/Strenghts";
import Nav from "@/components/Nav";
import React from "react";

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

interface AboutContent {
    title: string;
    description: string;
    features: string[];
    image: string;
    alt: string;
}

interface BrandPromise {
    title: string;
    description: string;
    featuresTitle: string;
    image: string;
    alt: string;
}

interface Branch {
    title: string;
    address: string;
    phone: string;
    emails: string[];
    emergencyPhone: string;
}

interface Strength {
    icon: { asset?: { url: string } };
    title: string;
    description: string;
    link: string;
}

interface AboutUsData {
    _id: string;
    hero?: {
        title: string;
        description: string;
        buttonText?: HeroButton[];
        image?: { asset: { url: string } };
    };
    aboutContent?: {
        title: string;
        description: string;
        features: string[];
        image?: { asset: { url: string }; alt: string };
    };
    brandPromise?: {
        title: string;
        description: string;
        featuresTitle: string;
        image?: { asset: { url: string }; alt: string };
    };
    branches?: Branch[];
    strengths?: Strength[];
}

const AboutUs = async () => {
    let hero: Hero = { image: "", title: "", description: "", buttonText: [] };
    let aboutContent: AboutContent = { title: "", description: "", features: [], image: "", alt: "" };
    let brandPromise: BrandPromise = { title: "", description: "", featuresTitle: "", image: "", alt: "" };
    let branches: Branch[] = [];
    let strengths: Strength[] = [];

    try {
        const aboutUsData: AboutUsData = await getAboutUsPageData();
        console.log("------about us data (server): ", aboutUsData);

        // Map hero data
        hero = {
            image: aboutUsData?.hero?.image?.asset?.url || "",
            title: aboutUsData?.hero?.title || "About Us",
            description:
                aboutUsData?.hero?.description ||
                "Discover our passion for creating seamless travel experiences.",
            buttonText: Array.isArray(aboutUsData?.hero?.buttonText)
                ? aboutUsData.hero.buttonText.map((btn) => ({
                    title: btn?.title || "Explore Now",
                    link: btn?.link || "#",
                }))
                : [],
        };

        // Map aboutContent data
        aboutContent = {
            title: aboutUsData?.aboutContent?.title || "About Acorn Travels",
            description:
                aboutUsData?.aboutContent?.description ||
                "We specialize in delivering exceptional travel solutions for corporate and leisure clients.",
            features: Array.isArray(aboutUsData?.aboutContent?.features) ? aboutUsData.aboutContent.features : [],
            image: aboutUsData?.aboutContent?.image?.asset?.url || "",
            alt: aboutUsData?.aboutContent?.image?.alt || "About content image",
        };

        // Map brandPromise data
        brandPromise = {
            title: aboutUsData?.brandPromise?.title || "Our Brand Promise",
            description:
                aboutUsData?.brandPromise?.description ||
                "We are committed to creating inspiring journeys with peace of mind for every traveler.",
            featuresTitle:
                aboutUsData?.brandPromise?.featuresTitle || "How We Make It Happen",
            image: aboutUsData?.brandPromise?.image?.asset?.url || "",
            alt: aboutUsData?.brandPromise?.image?.alt || "Brand promise image",
        };

        // Map branches data
        branches = Array.isArray(aboutUsData?.branches)
            ? aboutUsData.branches.map((branch) => ({
                title: branch?.title || "Branch",
                address: branch?.address || "No address provided",
                phone: branch?.phone || "No phone provided",
                emails: Array.isArray(branch?.emails) ? branch.emails : [],
                emergencyPhone: branch?.emergencyPhone || "No emergency contact provided",
            }))
            : [];

        // Map strengths data
        strengths = Array.isArray(aboutUsData?.strengths)
            ? aboutUsData.strengths.map((strength) => ({
                icon: { asset: { url: strength?.icon?.asset?.url || "/default-icon.png" } },
                title: strength?.title || "Strength",
                description: strength?.description || "We provide exceptional service.",
                link: strength?.link || "#",
            }))
            : [];
    } catch (error) {
        console.error("Error fetching about us data:", error);
        return (
            <div className="min-h-screen lato flex items-center justify-center">
                <p className="text-red-500 text-lg">
                    Failed to load about us data. Please try again later.
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen lato">
            <Nav/>
            <Hero hero={hero}/>
            <div id="about-explore" className="py-8 sm:py-12 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-15">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                        <div className="lg:w-1/2">
                            <h2 className="text-2xl sm:text-3xl md:text-[52px] font-bold text-[#3C3C3C] mb-4">
                                {aboutContent.title}
                            </h2>
                            <p className="text-[#737373] text-sm sm:text-base md:text-xl whitespace-pre-line leading-6 sm:leading-8 md:leading-10 font-normal mb-6 sm:mb-8">
                                {aboutContent.description}
                            </p>

                        </div>

                        <div className="lg:w-1/2">
                            {aboutContent.image && (
                                <Image
                                    // src={aboutContent.image || fallbackAboutContent.image}
                                    src={aboutContent.image}
                                    alt="Traveler with suitcase"
                                    width={800}
                                    height={800}
                                    className="w-full h-auto object-cover"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-8 sm:py-12 bg-[#F6F6F6]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-15">
                    <h2 className="text-2xl justify-center text-center sm:text-3xl md:text-[52px] font-bold text-[#3C3C3C] mb-4">
                        {brandPromise.title}
                    </h2>
                    <p className="text-[#737373] text-sm sm:text-base md:text-xl font-normal leading-6 sm:leading-8 md:leading-10 mb-6">
                        {/*As a pioneer in the travel industry, Acorn Travels prides itself in creating Inspiring*/}
                        {/*Journeys’ for every person who travels with us, for our employees and everyone that*/}
                        {/*interacts with us.*/}
                        {/*<br/>*/}
                        {/*We believe in providing complete peace of mind for every customer, together with a*/}
                        {/*memorable travel experience.*/}
                        {brandPromise.description}
                    </p>
                    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                        <div className="lg:w-1/2 flex flex-col lg:flex-row gap-4">
                            {brandPromise.image && (
                                <div className="flex-1">
                                    <Image
                                        src={brandPromise.image}
                                        alt="brand promises"
                                        width={500}
                                        height={500}
                                        className="w-full h-48 sm:h-64 md:h-90 object-cover rounded-tl-xl rounded-br-xl"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="lg:w-1/2 md:px-10">
                            <p className="text-[#000000] text-sm sm:text-base md:text-xl leading-6 sm:leading-8 md:leading-10 font-bold mb-6 sm:mb-8">
                                Here’s a glimpse of how we make it happen:
                            </p>
                            {aboutContent.features.length > 0 && (
                                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                                    {aboutContent.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            {/*<svg*/}
                                            {/*    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-4 flex-shrink-0 mt-1"*/}
                                            {/*    width="19"*/}
                                            {/*    height="16"*/}
                                            {/*    viewBox="0 0 19 16"*/}
                                            {/*    fill="none"*/}
                                            {/*    xmlns="http://www.w3.org/2000/svg"*/}
                                            {/*>*/}
                                            {/*    <path*/}
                                            {/*        d="M8.11168 15.7656C8.10922 15.7656 8.10635 15.7656 8.10389 15.7656C8.00217 15.7635 7.9062 15.7201 7.83729 15.6454L0.804751 7.99846C0.684161 7.86721 0.673091 7.66951 0.778501 7.52555C0.883911 7.38199 1.07586 7.33277 1.23746 7.40824L7.67405 10.4221C7.72819 10.4475 7.79217 10.4352 7.8336 10.3921L17.6519 0.130429C17.7848 -0.00861141 18.0022 -0.0237915 18.1531 0.0959785C18.3041 0.215739 18.3389 0.430659 18.2335 0.591859L8.46688 15.5535C8.45293 15.5753 8.43653 15.595 8.41848 15.6134L8.37541 15.6565C8.30528 15.7262 8.21012 15.7656 8.11168 15.7656Z"*/}
                                            {/*        fill="#2B5597"*/}
                                            {/*    />*/}
                                            {/*</svg>*/}

                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                 height="24" viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="lucide lucide-check w-4 h-4 sm:h-5 sm:w-5 mr-3 flex-shrink-0 mt-1 md:mt-3">
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                            <span
                                                className="text-[#737373] text-sm sm:text-base md:text-xl leading-6 sm:leading-8 md:leading-10 font-normal">
                                          {feature}
                                        </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Strengths strengths={strengths} />

            <Partners/>

            <div className="py-8 sm:py-12 lg:py-15 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-15">
                    <h2 className="text-2xl sm:text-3xl md:text-[52px] text-center font-bold text-[#3C3C3C] mb-8 sm:mb-12">
                        Our Branches
                    </h2>

                    <div className="grid grid-cols-1 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {branches.map((branch, index) => (
                            <div key={index} className="bg-[#F6F6F6] rounded-2xl shadow-md p-4 sm:p-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">{branch.title}</h3>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex gap-3 sm:gap-4 items-start">
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="13" cy="13" r="13" fill="#2B5597"/>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.6285 7.18097C15.0242 7.18097 16.9618 9.11859 16.9618 11.5143C16.9618 14.7643 12.6285 19.5619 12.6285 19.5619C12.6285 19.5619 8.29517 14.7643 8.29517 11.5143C8.29517 9.11859 10.2328 7.18097 12.6285 7.18097ZM9.53326 11.5143C9.53326 13.2786 11.3409 15.9776 12.6285 17.6305C13.9409 15.9653 15.7237 13.2972 15.7237 11.5143C15.7237 9.80573 14.3371 8.41906 12.6285 8.41906C10.9199 8.41906 9.53326 9.80573 9.53326 11.5143ZM12.6285 13.0619C11.7738 13.0619 11.0809 12.369 11.0809 11.5143C11.0809 10.6596 11.7738 9.96668 12.6285 9.96668C13.4832 9.96668 14.1761 10.6596 14.1761 11.5143C14.1761 12.369 13.4832 13.0619 12.6285 13.0619Z"
                                                fill="#E4E7EC"
                                            />
                                        </svg>
                                        <p className="text-[#737373] font-normal text-xs sm:text-sm whitespace-pre-line">{branch.address}</p>
                                    </div>
                                    <div className="flex gap-3 sm:gap-4 items-start">
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="13" cy="13" r="13" fill="#2B5597"/>
                                            <rect x="5.94287" y="6.6857" width="13.3714" height="13.3714"
                                                  fill="url(#pattern0_1090_6440)"/>
                                            <defs>
                                                <pattern id="pattern0_1090_6440" patternContentUnits="objectBoundingBox"
                                                         width="1" height="1">
                                                    <use xlinkHref="#image0_1090_6440" transform="scale(0.01)"/>
                                                </pattern>
                                                <image
                                                    id="image0_1090_6440"
                                                    width="100"
                                                    height="100"
                                                    preserveAspectRatio="none"
                                                    xlinkHref="data:image/png;base64,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"
                                                />
                                            </defs>
                                        </svg>
                                        <p className="text-[#737373] font-normal text-xs sm:text-sm">{branch.phone}</p>
                                    </div>
                                    <div className="flex gap-3 sm:gap-4 items-start">
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="13" cy="13" r="13" fill="#2B5597"/>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M18.8189 9.65715C18.8189 8.97619 18.2618 8.41905 17.5808 8.41905H7.67608C6.99513 8.41905 6.43799 8.97619 6.43799 9.65715V17.0857C6.43799 17.7667 6.99513 18.3238 7.67608 18.3238H17.5808C18.2618 18.3238 18.8189 17.7667 18.8189 17.0857V9.65715ZM17.5808 9.65715L12.6285 12.7524L7.67608 9.65715H17.5808ZM17.5808 17.0857H7.67608V10.8952L12.6285 13.9905L17.5808 10.8952V17.0857Z"
                                                fill="white"
                                                fillOpacity="0.92"
                                            />
                                        </svg>
                                        <div className="flex flex-col">
                                            {branch.emails.map((email, index) => (
                                                <p key={index}
                                                   className="text-[#737373] font-normal text-xs sm:text-sm">{email}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex gap-3 sm:gap-4 items-start">
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="13" cy="13" r="13" fill="#2B5597"/>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M9.24842 9.0381C9.28557 9.58905 9.37842 10.1276 9.527 10.6414L8.78414 11.3843C8.53033 10.6414 8.36938 9.85524 8.31366 9.0381H9.24842ZM15.3525 16.4791C15.8787 16.6276 16.4172 16.7205 16.962 16.7576V17.68C16.1449 17.6243 15.3587 17.4633 14.6096 17.2157L15.3525 16.4791ZM9.84284 7.8H7.67618C7.3357 7.8 7.05713 8.07857 7.05713 8.41905C7.05713 14.2319 11.7681 18.9429 17.5809 18.9429C17.9214 18.9429 18.2 18.6643 18.2 18.3238V16.1633C18.2 15.8229 17.9214 15.5443 17.5809 15.5443C16.8133 15.5443 16.0643 15.4205 15.3709 15.1914C15.309 15.1667 15.2409 15.1605 15.179 15.1605C15.0181 15.1605 14.8633 15.2224 14.7395 15.34L13.3776 16.7019C11.6257 15.8043 10.1895 14.3743 9.29808 12.6224L10.66 11.2605C10.8333 11.0871 10.8828 10.8457 10.8147 10.6291C10.5857 9.93572 10.4619 9.19286 10.4619 8.41905C10.4619 8.07857 10.1833 7.8 9.84284 7.8Z"
                                                fill="white"
                                                fillOpacity="0.82"
                                            />
                                        </svg>
                                        <p className="text-[#737373] font-normal text-xs sm:text-sm">{branch.emergencyPhone}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;