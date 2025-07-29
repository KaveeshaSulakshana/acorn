// import Hero from "@/components/Hero";
// import ContactForm, {FormField} from "@/components/ContactForm";
//
// interface Hero {
//     image: string;
//     title: string;
//     description: string;
//     buttonLink: string;
//     buttonText: string[];
// }
//
// const ContactUsPage = () => {
//     const hero: Hero = {
//         image: "/contact-hero.png",
//         title: "We are ready for you anytime!",
//         description: "",
//         buttonLink: "#",
//         buttonText: ["Plan your Next Trip"],
//     };
//
//     const formFields: FormField[] = [
//         {type: "text", name: "name", placeholder: "Name", required: true},
//         {type: "email", name: "email", placeholder: "Email", required: true},
//         {type: "text", name: "contactNumber", placeholder: "Contact Number", required: true},
//         {type: "text", name: "requirement", placeholder: "Requirement", required: true},
//         {type: "text", name: "company", placeholder: "Company Name", required: false},
//         {type: "textarea", name: "inquiry", placeholder: "Inquiry", rows: 3, required: true},
//     ];
//
//     return (
//         <div className="min-h-screen volkhov">
//             <Hero hero={hero}/>
//             <div className=" w-full">
//                 <div className="">
//                     <div
//                         className="flex flex-col md:flex-row justify-between p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 bg-white m-4 sm:m-6 md:m-0 lg:m-0 xl:m-0 mx-auto">
//                         <div className="w-full md:w-1/2 mb-0 md:mb-0 md:pr-12">
//                             <h2 className="font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[45px] leading-tight text-[#3C3C3C] mb-6">
//                                 Contact Us
//                             </h2>
//                             <p className="text-base sm:text-lg font-normal text-[#737373] max-w-2xl leading-10 mb-8">
//                                 Looking forward to a stress-free business trip or dreaming of an unforgettable vacation?
//                                 Let us make it happen for you! Planning a journey can be overwhelming, which is why it’s
//                                 essential to work with a travel agent who truly understands your needs and specializes
//                                 in crafting the perfect experience for you.
//                             </p>
//
//                             <div className="mb-8">
//                                 <h3 className="font-bold text-[18px] sm:text-[20px] md:text-[24px] text-[#3C3C3C] mb-4">
//                                     Head Office - Colombo Fort
//                                 </h3>
//                                 <div className="flex items-start mb-2">
//                                     <div className="flex flex-row gap-12">
//                                         <div className="flex gap-3 sm:gap-4 items-start">
//                                             <svg width="32" height="32" viewBox="0 0 26 26" fill="none"
//                                                  xmlns="http://www.w3.org/2000/svg">
//                                                 <circle cx="13" cy="13" r="13" fill="#E1251B"/>
//                                                 <path
//                                                     fillRule="evenodd"
//                                                     clipRule="evenodd"
//                                                     d="M12.6285 7.18097C15.0242 7.18097 16.9618 9.11859 16.9618 11.5143C16.9618 14.7643 12.6285 19.5619 12.6285 19.5619C12.6285 19.5619 8.29517 14.7643 8.29517 11.5143C8.29517 9.11859 10.2328 7.18097 12.6285 7.18097ZM9.53326 11.5143C9.53326 13.2786 11.3409 15.9776 12.6285 17.6305C13.9409 15.9653 15.7237 13.2972 15.7237 11.5143C15.7237 9.80573 14.3371 8.41906 12.6285 8.41906C10.9199 8.41906 9.53326 9.80573 9.53326 11.5143ZM12.6285 13.0619C11.7738 13.0619 11.0809 12.369 11.0809 11.5143C11.0809 10.6596 11.7738 9.96668 12.6285 9.96668C13.4832 9.96668 14.1761 10.6596 14.1761 11.5143C14.1761 12.369 13.4832 13.0619 12.6285 13.0619Z"
//                                                     fill="#E4E7EC"
//                                                 />
//                                             </svg>
//                                             <p className="text-[#737373] leading-8 font-normal max-w-62 text-sm sm:text-base whitespace-pre-line">Hemas
//                                                 Building, 36
//                                                 Sir Razik Fareed Mawatha,
//                                                 Colombo 00100</p>
//                                         </div>
//                                         <div className="flex flex-col space-y-4">
//                                             <div className="flex gap-3 sm:gap-4 items-center">
//                                                 <svg width="32" height="32" viewBox="0 0 26 26" fill="none"
//                                                      xmlns="http://www.w3.org/2000/svg">
//                                                     <circle cx="13" cy="13" r="13" fill="#E1251B"/>
//                                                     <rect x="5.94287" y="6.6857" width="13.3714" height="13.3714"
//                                                           fill="url(#pattern0_1090_6440)"/>
//                                                     <defs>
//                                                         <pattern id="pattern0_1090_6440"
//                                                                  patternContentUnits="objectBoundingBox"
//                                                                  width="1" height="1">
//                                                             <use xlinkHref="#image0_1090_6440" transform="scale(0.01)"/>
//                                                         </pattern>
//                                                         <image
//                                                             id="image0_1090_6440"
//                                                             width="100"
//                                                             height="100"
//                                                             preserveAspectRatio="none"
//                                                             xlinkHref="data:image/png;base64,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"
//                                                         />
//                                                     </defs>
//                                                 </svg>
//                                                 <p className="text-[#737373] font-normal text-sm sm:text-base">0114 704
//                                                     704/705</p>
//                                             </div>
//                                             <div className="flex gap-3 sm:gap-4 items-center">
//                                                 <svg width="32" height="32" viewBox="0 0 26 26" fill="none"
//                                                      xmlns="http://www.w3.org/2000/svg">
//                                                     <circle cx="13" cy="13" r="13" fill="#E1251B"/>
//                                                     <path
//                                                         fillRule="evenodd"
//                                                         clipRule="evenodd"
//                                                         d="M18.8189 9.65715C18.8189 8.97619 18.2618 8.41905 17.5808 8.41905H7.67608C6.99513 8.41905 6.43799 8.97619 6.43799 9.65715V17.0857C6.43799 17.7667 6.99513 18.3238 7.67608 18.3238H17.5808C18.2618 18.3238 18.8189 17.7667 18.8189 17.0857V9.65715ZM17.5808 9.65715L12.6285 12.7524L7.67608 9.65715H17.5808ZM17.5808 17.0857H7.67608V10.8952L12.6285 13.9905L17.5808 10.8952V17.0857Z"
//                                                         fill="white"
//                                                         fillOpacity="0.92"
//                                                     />
//                                                 </svg>
//                                                 <p className="text-[#737373] font-normal text-sm sm:text-base">inquiries.travels@acorn.lk</p>
//                                             </div>
//                                             <div className="flex gap-3 sm:gap-4 items-center">
//                                                 <svg width="32" height="32" viewBox="0 0 26 26" fill="none"
//                                                      xmlns="http://www.w3.org/2000/svg">
//                                                     <circle cx="13" cy="13" r="13" fill="#E1251B"/>
//                                                     <path
//                                                         fillRule="evenodd"
//                                                         clipRule="evenodd"
//                                                         d="M9.24842 9.0381C9.28557 9.58905 9.37842 10.1276 9.527 10.6414L8.78414 11.3843C8.53033 10.6414 8.36938 9.85524 8.31366 9.0381H9.24842ZM15.3525 16.4791C15.8787 16.6276 16.4172 16.7205 16.962 16.7576V17.68C16.1449 17.6243 15.3587 17.4633 14.6096 17.2157L15.3525 16.4791ZM9.84284 7.8H7.67618C7.3357 7.8 7.05713 8.07857 7.05713 8.41905C7.05713 14.2319 11.7681 18.9429 17.5809 18.9429C17.9214 18.9429 18.2 18.6643 18.2 18.3238V16.1633C18.2 15.8229 17.9214 15.5443 17.5809 15.5443C16.8133 15.5443 16.0643 15.4205 15.3709 15.1914C15.309 15.1667 15.2409 15.1605 15.179 15.1605C15.0181 15.1605 14.8633 15.2224 14.7395 15.34L13.3776 16.7019C11.6257 15.8043 10.1895 14.3743 9.29808 12.6224L10.66 11.2605C10.8333 11.0871 10.8828 10.8457 10.8147 10.6291C10.5857 9.93572 10.4619 9.19286 10.4619 8.41905C10.4619 8.07857 10.1833 7.8 9.84284 7.8Z"
//                                                         fill="white"
//                                                         fillOpacity="0.82"
//                                                     />
//                                                 </svg>
//                                                 <p className="text-[#737373] font-normal text-sm sm:text-base">077 2 775
//                                                     679 (Emergency)</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//
//                             <div className="my-18 py-12 border-y-2 border-[#D2D2D2]">
//                                 <div className="flex flex-row justify-between">
//                                     <div className="flex flex-col">
//                                         <h3 className="font-normal text-sm md:text-base text-[#3C3C3C] mb-1">
//                                             General Inquiries & Package Inquiries
//                                         </h3>
//                                         <p className="text-[#737373] text-xs sm:text-sm">
//                                             inquiries@acorntravels.lk
//                                         </p>
//                                     </div>
//
//                                     <div className="flex flex-col">
//                                         <h3 className="font-normal text-sm md:text-base text-[#3C3C3C] mb-1">
//                                             Comments & Compliments
//                                         </h3>
//                                         <p className="text-[#737373] text-xs sm:text-sm">
//                                             feedback@acorntravels.lk
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//
//                             <div className="mb-8">
//                                 <div className="flex flex-row gap-12">
//                                     <div className="flex flex-col space-y-4">
//                                         <h3 className="font-bold text-[18px] sm:text-[20px] md:text-[24px] text-[#3C3C3C] mb-4">
//                                             Nawala Branch
//                                         </h3>
//                                         <div className="flex gap-3 sm:gap-4 items-start">
//                                             <svg width="32" height="32" viewBox="0 0 26 26" fill="none"
//                                                  xmlns="http://www.w3.org/2000/svg">
//                                                 <circle cx="13" cy="13" r="13" fill="#E1251B"/>
//                                                 <path
//                                                     fillRule="evenodd"
//                                                     clipRule="evenodd"
//                                                     d="M12.6285 7.18097C15.0242 7.18097 16.9618 9.11859 16.9618 11.5143C16.9618 14.7643 12.6285 19.5619 12.6285 19.5619C12.6285 19.5619 8.29517 14.7643 8.29517 11.5143C8.29517 9.11859 10.2328 7.18097 12.6285 7.18097ZM9.53326 11.5143C9.53326 13.2786 11.3409 15.9776 12.6285 17.6305C13.9409 15.9653 15.7237 13.2972 15.7237 11.5143C15.7237 9.80573 14.3371 8.41906 12.6285 8.41906C10.9199 8.41906 9.53326 9.80573 9.53326 11.5143ZM12.6285 13.0619C11.7738 13.0619 11.0809 12.369 11.0809 11.5143C11.0809 10.6596 11.7738 9.96668 12.6285 9.96668C13.4832 9.96668 14.1761 10.6596 14.1761 11.5143C14.1761 12.369 13.4832 13.0619 12.6285 13.0619Z"
//                                                     fill="#E4E7EC"
//                                                 />
//                                             </svg>
//                                             <p className="text-[#737373] leading-8 font-normal max-w-62 text-sm sm:text-base whitespace-pre-line">Hemas
//                                                 162 A Nawala Rd,
//                                                 Nugegoda 10280</p>
//                                         </div>
//                                         <div className="flex gap-3 sm:gap-4 items-center">
//                                             <svg width="32" height="32" viewBox="0 0 26 26" fill="none"
//                                                  xmlns="http://www.w3.org/2000/svg">
//                                                 <circle cx="13" cy="13" r="13" fill="#E1251B"/>
//                                                 <rect x="5.94287" y="6.6857" width="13.3714" height="13.3714"
//                                                       fill="url(#pattern0_1090_6440)"/>
//                                                 <defs>
//                                                     <pattern id="pattern0_1090_6440"
//                                                              patternContentUnits="objectBoundingBox"
//                                                              width="1" height="1">
//                                                         <use xlinkHref="#image0_1090_6440" transform="scale(0.01)"/>
//                                                     </pattern>
//                                                     <image
//                                                         id="image0_1090_6440"
//                                                         width="100"
//                                                         height="100"
//                                                         preserveAspectRatio="none"
//                                                         xlinkHref="data:image/png;base64,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"
//                                                     />
//                                                 </defs>
//                                             </svg>
//                                             <p className="text-[#737373] font-normal text-sm sm:text-base">011 4 704
//                                                 700</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex flex-col space-y-4">
//                                         <h3 className="font-bold text-[18px] sm:text-[20px] md:text-[24px] text-[#3C3C3C] mb-4">
//                                             Kandy Branch
//                                         </h3>
//                                         <div className="flex gap-3 sm:gap-4 items-start">
//                                             <svg width="32" height="32" viewBox="0 0 26 26" fill="none"
//                                                  xmlns="http://www.w3.org/2000/svg">
//                                                 <circle cx="13" cy="13" r="13" fill="#E1251B"/>
//                                                 <path
//                                                     fillRule="evenodd"
//                                                     clipRule="evenodd"
//                                                     d="M12.6285 7.18097C15.0242 7.18097 16.9618 9.11859 16.9618 11.5143C16.9618 14.7643 12.6285 19.5619 12.6285 19.5619C12.6285 19.5619 8.29517 14.7643 8.29517 11.5143C8.29517 9.11859 10.2328 7.18097 12.6285 7.18097ZM9.53326 11.5143C9.53326 13.2786 11.3409 15.9776 12.6285 17.6305C13.9409 15.9653 15.7237 13.2972 15.7237 11.5143C15.7237 9.80573 14.3371 8.41906 12.6285 8.41906C10.9199 8.41906 9.53326 9.80573 9.53326 11.5143ZM12.6285 13.0619C11.7738 13.0619 11.0809 12.369 11.0809 11.5143C11.0809 10.6596 11.7738 9.96668 12.6285 9.96668C13.4832 9.96668 14.1761 10.6596 14.1761 11.5143C14.1761 12.369 13.4832 13.0619 12.6285 13.0619Z"
//                                                     fill="#E4E7EC"
//                                                 />
//                                             </svg>
//                                             <p className="text-[#737373] leading-8 font-normal max-w-62 text-sm sm:text-base whitespace-pre-line">Hemas
//                                                 45 DS Senanayake Veediya,
//                                                 Kandy 20000</p>
//                                         </div>
//                                         <div className="flex gap-3 sm:gap-4 items-center">
//                                             <svg width="32" height="32" viewBox="0 0 26 26" fill="none"
//                                                  xmlns="http://www.w3.org/2000/svg">
//                                                 <circle cx="13" cy="13" r="13" fill="#E1251B"/>
//                                                 <rect x="5.94287" y="6.6857" width="13.3714" height="13.3714"
//                                                       fill="url(#pattern0_1090_6440)"/>
//                                                 <defs>
//                                                     <pattern id="pattern0_1090_6440"
//                                                              patternContentUnits="objectBoundingBox"
//                                                              width="1" height="1">
//                                                         <use xlinkHref="#image0_1090_6440" transform="scale(0.01)"/>
//                                                     </pattern>
//                                                     <image
//                                                         id="image0_1090_6440"
//                                                         width="100"
//                                                         height="100"
//                                                         preserveAspectRatio="none"
//                                                         xlinkHref="data:image/png;base64,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"
//                                                     />
//                                                 </defs>
//                                             </svg>
//                                             <p className="text-[#737373] font-normal text-sm sm:text-base">0814 501
//                                                 444</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="w-full md:w-1/2 md:pl-0">
//                             <ContactForm fields={formFields} title="Make an Inquiry" pageSource="Contact US Inquiry"/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//             <div className="pt-12">
//                 <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6258238167666!2d79.84263637481291!3d6.935245618242023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25926a09e330b%3A0xf49711a21bc6397!2sAcorn%20Travels%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1744100687760!5m2!1sen!2slk"
//                     width="100%"
//                     height="600"
//                     style={{border: 0}}
//                     allowFullScreen
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"></iframe>
//             </div>
//         </div>
//     );
// }
//
// export default ContactUsPage;

import Hero from "@/components/Hero";
import ContactForm, {FormField} from "@/components/ContactForm";
import {getContactUsPageData, getMetadata} from "../../../sanity/api";
import Nav from "@/components/Nav";
import React from "react";
import {Metadata} from "next";
import {urlFor} from "../../../sanity/sanity";
import AnimatedSection from "@/components/AnimatedSection";

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

interface Intro {
    title: string;
    description: string;
}

interface Branch {
    title: string;
    address: string;
    phone: string;
    email: string;
    emergencyPhone: string;
}

interface EmailInquiries {
    generalInquiries: { label: string; email: string };
    commentsCompliments: { label: string; email: string };
}

const ContactUsPage = async () => {
    let hero: Hero = {
        image: "",
        title: "",
        description: "",
        buttonText: [],
    };
    let intro: Intro = {title: "", description: ""};
    let branches: Branch[] = [];
    let emailInquiries: EmailInquiries = {
        generalInquiries: {label: "", email: ""},
        commentsCompliments: {label: "", email: ""},
    };
    let mapEmbed: string = "";

    try {
        const contactUsData = await getContactUsPageData();
        console.log("------contact us data (server): ", contactUsData);

        hero = {
            image: contactUsData.hero?.image?.asset?.url || "/default-hero.png",
            title: contactUsData.hero?.title || "Seamless Flight Bookings",
            description:
                contactUsData.hero?.description || "",
            // "Book flights effortlessly with competitive fares and expert assistance.",
            buttonText: Array.isArray(contactUsData.hero?.buttonText)
                ? contactUsData.hero.buttonText.map((btn: { title: string, link: string }) => ({
                    title: btn?.title || "Explore Now",
                    link: btn?.link || "#",
                }))
                : [],
        };

        intro = {
            title: contactUsData?.intro?.title || "",
            description: contactUsData?.intro?.description || "",
        };

        branches = (contactUsData?.branches || []).map((branch: Branch) => ({
            title: branch.title || "",
            address: branch.address || "",
            phone: branch.phone || "",
            email: branch.email || "",
            emergencyPhone: branch.emergencyPhone || "",
        }));

        emailInquiries = {
            generalInquiries: {
                label: contactUsData?.emailInquiries?.generalInquiries?.label || "",
                email: contactUsData?.emailInquiries?.generalInquiries?.email || "",
            },
            commentsCompliments: {
                label: contactUsData?.emailInquiries?.commentsCompliments?.label || "",
                email: contactUsData?.emailInquiries?.commentsCompliments?.email || "",
            },
        };

        mapEmbed = contactUsData?.mapEmbed || "";
    } catch (error) {
        console.error("Error fetching contact us data:", error);
    }

    const fallbackIntro: Intro = {
        title: "Contact Us",
        description:
            "Looking forward to a stress-free business trip or dreaming of an unforgettable vacation? Let us make it happen for you! Planning a journey can be overwhelming, which is why it’s essential to work with a travel agent who truly understands your needs and specializes in crafting the perfect experience for you.",
    };

    const fallbackBranches: Branch[] = [
        {
            title: "Head Office - Colombo Fort",
            address: "Hemas Building, 36 Sir Razik Fareed Mawatha, Colombo 00100",
            phone: "0114 704 704/705",
            email: "inquiries.travels@acorn.lk",
            emergencyPhone: "077 2 775 679 (Emergency)",
        },
        {
            title: "Nawala Branch",
            address: "Hemas 162 A Nawala Rd, Nugegoda 10280",
            phone: "011 4 704 700",
            email: "inquiries.travels@acorn.lk",
            emergencyPhone: "077 2 775 679 (Emergency)",
        },
        {
            title: "Kandy Branch",
            address: "Hemas 45 DS Senanayake Veediya, Kandy 20000",
            phone: "0814 501 444",
            email: "inquiries.travels@acorn.lk",
            emergencyPhone: "077 2 775 679 (Emergency)",
        },
    ];

    const fallbackEmailInquiries: EmailInquiries = {
        generalInquiries: {
            label: "General Inquiries & Package Inquiries",
            email: "inquiries@acorntravels.lk",
        },
        commentsCompliments: {
            label: "Comments & Compliments",
            email: "feedback@acorntravels.lk",
        },
    };

    const fallbackMapEmbed: string =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6258238167666!2d79.84263637481291!3d6.935245618242023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25926a09e330b%3A0xf49711a21bc6397!2sAcorn%20Travels%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1744100687760!5m2!1sen!2slk";

    const formFields: FormField[] = [
        {type: "text", name: "name", placeholder: "Name", required: true},
        {type: "email", name: "email", placeholder: "Email", required: true},
        {type: "text", name: "contactNumber", placeholder: "Contact Number", required: true},
        {type: "text", name: "requirement", placeholder: "Requirement", required: true},
        {
            type: "select",
            name: "service",
            placeholder: "Select a Service",
            options: [
                {value: "Corporate Travel", label: "Corporate Travel"},
                {value: "Leisure Travel", label: "Leisure Travel"},
                {value: "MICE Travel", label: "MICE Travel"},
                {value: "Student Travel", label: "Student Travel"},
                {value: "Visa Services", label: "Visa Services"},
                {value: "Flight Bookings", label: "Flight Bookings"},
                {value: "Travel Insurance", label: "Travel Insurance"},
                {value: "Hotel Bookings", label: "Hotel Bookings"},
                {value: "Foreign Currency Exchange", label: "Foreign Currency Exchange"},
                {value: "Other", label: "Other"},
            ],
            required: true,
        },
        {type: "text", name: "company", placeholder: "Company Name", required: false},
        {type: "textarea", name: "inquiry", placeholder: "Inquiry", rows: 3, required: true},
    ];

    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

    return (
        <div className="min-h-screen lato bg-white">
            <Nav/>
            <Hero hero={hero}/>
            <div className="w-full">
                <div id="explore" className="container mx-auto px-4 sm:px-6 lg:px-15">
                    <div
                        className="flex flex-col md:flex-row justify-between
                       py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16
                       mx-4 sm:mx-6 md:mx-0"
                    >
                        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-6 lg:pr-8 xl:pr-12">
                            <AnimatedSection delay={0.1}>
                                <h2
                                    className="font-bold text-[22px] sm:text-[30px] lg:text-[45px]
                           leading-tight text-[#3C3C3C] mb-4 sm:mb-6 md:mb-8"
                                >
                                    {intro.title || fallbackIntro.title}
                                </h2>
                            </AnimatedSection>
                            <AnimatedSection delay={0.2}>
                                <p
                                    className="text-[14px] sm:text-[16px] lg:text-lg font-normal text-[#737373]
                           max-w-xl leading-relaxed mb-6 sm:mb-8"
                                >
                                    {intro.description || fallbackIntro.description}
                                </p>
                            </AnimatedSection>

                            {(branches.length > 0 ? branches : fallbackBranches).map((branch, index) => (
                                <AnimatedSection key={index} delay={0.1 * (index + 3)}>
                                    <div className="mb-6 sm:mb-8">
                                        <h3
                                            className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl
                             text-[#3C3C3C] mb-3 sm:mb-4"
                                        >
                                            {branch.title}
                                        </h3>
                                        <div className="flex flex-col sm:flex-row sm:gap-8 lg:gap-12">
                                            <div className="flex gap-3 sm:gap-4 items-start mb-4 sm:mb-0">
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 26 26"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                                                >
                                                    <circle cx="13" cy="13" r="13" fill="#2B5597"/>
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M12.6285 7.18097C15.0242 7.18097 16.9618 9.11859 16.9618 11.5143C16.9618 14.7643 12.6285 19.5619 12.6285 19.5619C12.6285 19.5619 8.29517 14.7643 8.29517 11.5143C8.29517 9.11859 10.2328 7.18097 12.6285 7.18097ZM9.53326 11.5143C9.53326 13.2786 11.3409 15.9776 12.6285 17.6305C13.9409 15.9653 15.7237 13.2972 15.7237 11.5143C15.7237 9.80573 14.3371 8.41906 12.6285 8.41906C10.9199 8.41906 9.53326 9.80573 9.53326 11.5143ZM12.6285 13.0619C11.7738 13.0619 11.0809 12.369 11.0809 11.5143C11.0809 10.6596 11.7738 9.96668 12.6285 9.96668C13.4832 9.96668 14.1761 10.6596 14.1761 11.5143C14.1761 12.369 13.4832 13.0619 12.6285 13.0619Z"
                                                        fill="#E4E7EC"
                                                    />
                                                </svg>
                                                <p
                                                    className="text-[#737373] leading-relaxed font-normal
                                 text-xs sm:text-sm md:text-base max-w-56 sm:max-w-64"
                                                >
                                                    {branch.address}
                                                </p>
                                            </div>
                                            <div className="flex flex-col gap-3 sm:gap-4">
                                                <div className="flex gap-3 sm:gap-4 items-center">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 26 26"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                                                    >
                                                        <circle cx="13" cy="13" r="13" fill="#2B5597"/>
                                                        <rect
                                                            x="5.94287"
                                                            y="6.6857"
                                                            width="13.3714"
                                                            height="13.3714"
                                                            fill="url(#pattern0_1090_6440)"
                                                        />
                                                        <defs>
                                                            <pattern
                                                                id="pattern0_1090_6440"
                                                                patternContentUnits="objectBoundingBox"
                                                                width="1"
                                                                height="1"
                                                            >
                                                                <use xlinkHref="#image0_1090_6440"
                                                                     transform="scale(0.01)"/>
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
                                                    <p className="text-[#737373] font-normal text-xs sm:text-sm md:text-base">
                                                        {branch.phone}
                                                    </p>
                                                </div>
                                                <div className="flex gap-3 sm:gap-4 items-center">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 26 26"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                                                    >
                                                        <circle cx="13" cy="13" r="13" fill="#2B5597"/>
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M18.8189 9.65715C18.8189 8.97619 18.2618 8.41905 17.5808 8.41905H7.67608C6.99513 8.41905 6.43799 8.97619 6.43799 9.65715V17.0857C6.43799 17.7667 6.99513 18.3238 7.67608 18.3238H17.5808C18.2618 18.3238 18.8189 17.7667 18.8189 17.0857V9.65715ZM17.5808 9.65715L12.6285 12.7524L7.67608 9.65715H17.5808ZM17.5808 17.0857H7.67608V10.8952L12.6285 13.9905L17.5808 10.8952V17.0857Z"
                                                            fill="white"
                                                            fillOpacity="0.92"
                                                        />
                                                    </svg>
                                                    <p className="text-[#737373] font-normal text-xs sm:text-sm md:text-base">
                                                        {branch.email}
                                                    </p>
                                                </div>
                                                {branch.emergencyPhone && (
                                                    <div className="flex gap-3 sm:gap-4 items-center">
                                                        <svg
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 26 26"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                                                        >
                                                            <circle cx="13" cy="13" r="13" fill="#2B5597"/>
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M9.24842 9.0381C9.28557 9.58905 9.37842 10.1276 9.527 10.6414L8.78414 11.3843C8.53033 10.6414 8.36938 9.85524 8.31366 9.0381H9.24842ZM15.3525 16.4791C15.8787 16.6276 16.4172 16.7205 16.962 16.7576V17.68C16.1449 17.6243 15.3587 17.4633 14.6096 17.2157L15.3525 16.4791ZM9.84284 7.8H7.67618C7.3357 7.8 7.05713 8.07857 7.05713 8.41905C7.05713 14.2319 11.7681 18.9429 17.5809 18.9429C17.9214 18.9429 18.2 18.6643 18.2 18.3238V16.1633C18.2 15.8229 17.9214 15.5443 17.5809 15.5443C16.8133 15.5443 16.0643 15.4205 15.3709 15.1914C15.309 15.1667 15.2409 15.1605 15.179 15.1605C15.0181 15.1605 14.8633 15.2224 14.7395 15.34L13.3776 16.7019C11.6257 15.8043 10.1895 14.3743 9.29808 12.6224L10.66 11.2605C10.8333 11.0871 10.8828 10.8457 10.8147 10.6291C10.5857 9.93572 10.4619 9.19286 10.4619 8.41905C10.4619 8.07857 10.1833 7.8 9.84284 7.8Z"
                                                                fill="white"
                                                                fillOpacity="0.82"
                                                            />
                                                        </svg>
                                                        <p className="text-[#737373] font-normal text-xs sm:text-sm md:text-base">
                                                            {branch.emergencyPhone}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                            <AnimatedSection delay={0.6}>
                                <div
                                    className="my-8 sm:my-10 md:my-12 py-6 sm:py-8 md:py-10
                           border-y-2 border-[#D2D2D2]"
                                >
                                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-6">
                                        <div className="flex flex-col">
                                            <h3 className="font-normal text-xs sm:text-sm md:text-base text-[#3C3C3C] mb-1">
                                                {emailInquiries.generalInquiries.label ||
                                                    fallbackEmailInquiries.generalInquiries.label}
                                            </h3>
                                            <p className="text-[#737373] text-xs sm:text-sm">
                                                {emailInquiries.generalInquiries.email ||
                                                    fallbackEmailInquiries.generalInquiries.email}
                                            </p>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="font-normal text-xs sm:text-sm md:text-base text-[#3C3C3C] mb-1">
                                                {emailInquiries.commentsCompliments.label ||
                                                    fallbackEmailInquiries.commentsCompliments.label}
                                            </h3>
                                            <p className="text-[#737373] text-xs sm:text-sm">
                                                {emailInquiries.commentsCompliments.email ||
                                                    fallbackEmailInquiries.commentsCompliments.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>

                            <div className="mb-6 sm:mb-8">
                                <div className="flex flex-col sm:flex-row sm:gap-8 lg:gap-12">
                                    <div className="flex flex-col mb-6 sm:mb-0">
                                        <h3
                                            className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl
                                 text-[#3C3C3C] mb-3 sm:mb-4"
                                        >
                                            Nawala Branch
                                        </h3>
                                        <div className="flex gap-3 sm:gap-4 items-start mb-3 sm:mb-4">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 26 26"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                                            >
                                                <circle cx="13" cy="13" r="13" fill="#2B5597"/>
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12.6285 7.18097C15.0242 7.18097 16.9618 9.11859 16.9618 11.5143C16.9618 14.7643 12.6285 19.5619 12.6285 19.5619C12.6285 19.5619 8.29517 14.7643 8.29517 11.5143C8.29517 9.11859 10.2328 7.18097 12.6285 7.18097ZM9.53326 11.5143C9.53326 13.2786 11.3409 15.9776 12.6285 17.6305C13.9409 15.9653 15.7237 13.2972 15.7237 11.5143C15.7237 9.80573 14.3371 8.41906 12.6285 8.41906C10.9199 8.41906 9.53326 9.80573 9.53326 11.5143ZM12.6285 13.0619C11.7738 13.0619 11.0809 12.369 11.0809 11.5143C11.0809 10.6596 11.7738 9.96668 12.6285 9.96668C13.4832 9.96668 14.1761 10.6596 14.1761 11.5143C14.1761 12.369 13.4832 13.0619 12.6285 13.0619Z"
                                                    fill="#E4E7EC"
                                                />
                                            </svg>
                                            <p
                                                className="text-[#737373] leading-relaxed font-normal
                                   text-xs sm:text-sm md:text-base max-w-56 sm:max-w-64"
                                            >
                                                Hemas 162 A Nawala Rd, Nugegoda 10280
                                            </p>
                                        </div>
                                        <div className="flex gap-3 sm:gap-4 items-center">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 26 26"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                                            >
                                                <circle cx="13" cy="13" r="13" fill="#2B5597"/>
                                                <rect
                                                    x="5.94287"
                                                    y="6.6857"
                                                    width="13.3714"
                                                    height="13.3714"
                                                    fill="url(#pattern0_1090_6440)"
                                                />
                                                <defs>
                                                    <pattern
                                                        id="pattern0_1090_6440"
                                                        patternContentUnits="objectBoundingBox"
                                                        width="1"
                                                        height="1"
                                                    >
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
                                            <p className="text-[#737373] font-normal text-xs sm:text-sm md:text-base">
                                                011 4 704 700
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3
                                            className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl
                                 text-[#3C3C3C] mb-3 sm:mb-4"
                                        >
                                            Kandy Branch
                                        </h3>
                                        <div className="flex gap-3 sm:gap-4 items-start mb-3 sm:mb-4">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 26 26"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                                            >
                                                <circle cx="13" cy="13" r="13" fill="#2B5597"/>
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12.6285 7.18097C15.0242 7.18097 16.9618 9.11859 16.9618 11.5143C16.9618 14.7643 12.6285 19.5619 12.6285 19.5619C12.6285 19.5619 8.29517 14.7643 8.29517 11.5143C8.29517 9.11859 10.2328 7.18097 12.6285 7.18097ZM9.53326 11.5143C9.53326 13.2786 11.3409 15.9776 12.6285 17.6305C13.9409 15.9653 15.7237 13.2972 15.7237 11.5143C15.7237 9.80573 14.3371 8.41906 12.6285 8.41906C10.9199 8.41906 9.53326 9.80573 9.53326 11.5143ZM12.6285 13.0619C11.7738 13.0619 11.0809 12.369 11.0809 11.5143C11.0809 10.6596 11.7738 9.96668 12.6285 9.96668C13.4832 9.96668 14.1761 10.6596 14.1761 11.5143C14.1761 12.369 13.4832 13.0619 12.6285 13.0619Z"
                                                    fill="#E4E7EC"
                                                />
                                            </svg>
                                            <p
                                                className="text-[#737373] leading-relaxed font-normal
                                   text-xs sm:text-sm md:text-base max-w-56 sm:max-w-64"
                                            >
                                                Hemas 45 DS Senanayake Veediya, Kandy 20000
                                            </p>
                                        </div>
                                        <div className="flex gap-3 sm:gap-4 items-center">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 26 26"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                                            >
                                                <circle cx="13" cy="13" r="13" fill="#2B5597"/>
                                                <rect
                                                    x="5.94287"
                                                    y="6.6857"
                                                    width="13.3714"
                                                    height="13.3714"
                                                    fill="url(#pattern0_1090_6440)"
                                                />
                                                <defs>
                                                    <pattern
                                                        id="pattern0_1090_6440"
                                                        patternContentUnits="objectBoundingBox"
                                                        width="1"
                                                        height="1"
                                                    >
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
                                            <p className="text-[#737373] font-normal text-xs sm:text-sm md:text-base">
                                                0814 501 444
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="inquiry" className="w-full md:w-1/2 md:pl-6 lg:pl-8 xl:pl-12">
                            <AnimatedSection delay={0.3} direction="right">
                                <ContactForm
                                    fields={formFields}
                                    title="Make an Inquiry"
                                    pageSource="Contact US Inquiry"
                                    reCaptchaSiteKey={recaptchaSiteKey}
                                />
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatedSection delay={0.5}>
                <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-12">
                    <iframe
                        src={mapEmbed || fallbackMapEmbed}
                        width="100%"
                        height="400"
                        className="sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px]"
                        style={{border: 0}}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default ContactUsPage;


export async function generateMetadata(): Promise<Metadata> {
    const mdata = await getMetadata("contact");

    return {
        title: mdata?.title || "Acorn Travel - Contact Us",
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