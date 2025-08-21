import Hero from "@/components/Hero";
import ContactForm, {FormField} from "@/components/ContactForm";
import React from "react";
import {getOfferDetailsData} from "../../../../sanity/api";
import Nav from "@/components/Nav";
import AnimatedSection from "@/components/AnimatedSection";
import {Metadata} from "next";
import {urlFor} from "../../../../sanity/sanity";

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

// interface Props {
//     params: { id: string };
// }

// interface Props {
//     params: Promise<{ id: string }>;
// }

interface Props {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ page: string }>;
}

const OfferDetailPage = async ({params, searchParams}: Props) => {

    const {id} = await params;
    const {page: pageType} = await searchParams;
    console.log("-------type: ", pageType);

    const data = await getOfferDetailsData(id, pageType);

    const offer = data[0].offers.items[0];

    console.log("----------- slug: ", id);
    console.log("--------", data[0].offers.items[0]);

    if (!offer) {
        return <div>Offer not found.</div>;
    }

    // const hero: Hero = {
    //     image: offer.hero?.image?.asset?.url || "",
    //     title: offer.hero?.title || "Welcome to Leisure Travel",
    //     description:
    //         offer.hero?.description ||
    //         "",
    //     buttonText:
    //         offer.hero?.buttonText?.map((btn: HeroButton) => ({
    //             title: btn.title || "Explore Now",
    //             link: `${offer?.slug.current}#${btn.link}` || "#",
    //         })) || [],
    // };

    const hero: Hero = {
        image: offer?.hero?.image?.asset?.url || "",
        title: offer?.hero?.title || "Welcome to Leisure Travel",
        description: offer?.hero?.description || "",
        buttonText: Array.isArray(offer?.hero?.buttonText)
            ? offer.hero.buttonText.map((btn: { title: string; link: string; }) => ({
                title: btn?.title || "Explore Now",
                link: btn?.link ? `${offer?.slug?.current || ""}#${btn.link}` : "#",
            }))
            : [],
    };

    const formFields: FormField[] = [
        {type: "text", name: "name", placeholder: "Name", required: true},
        {type: "email", name: "email", placeholder: "Email", required: true},
        {type: "text", name: "contactNumber", placeholder: "Contact Number", required: true},
        {type: "text", name: "requirement", placeholder: "Requirement", required: true},
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
                            <AnimatedSection direction="up" delay={0.1} threshold={0.1}>
                                <h2
                                    className="font-bold text-[22px] sm:text-[30px] lg:text-[45px]
                           leading-tight text-[#3C3C3C] mb-4 sm:mb-6 md:mb-8"
                                >
                                    Package Includes
                                </h2>
                            </AnimatedSection>
                            <AnimatedSection direction="up" delay={0.2} threshold={0.1}>
                                <p
                                    className="text-[14px] sm:text-[16px] lg:text-lg font-normal text-[#737373]
                           max-w-xl leading-relaxed mb-6 sm:mb-8"
                                >
                                    {offer.packageDescription}
                                </p>
                            </AnimatedSection>

                            {
                                offer.duration && offer.guests && (
                                    <div>
                                        <AnimatedSection direction="up" delay={0.3} threshold={0.1}>
                                            <h3 className="text-xs sm:text-sm md:text-base pt-4 sm:pt-6 font-bold text-[#2B5597] lato line-clamp-2">
                                                Starting From - {offer.price}
                                            </h3>
                                        </AnimatedSection>
                                    </div>
                                )
                            }

                            <AnimatedSection direction="up" delay={0.4} threshold={0.1}>
                                <div className="flex items-center text-[#737373] mt-6 gap-1 sm:gap-2">
                                    <svg width="16" height="16" className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 16 16"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.00032 0.666626C6.54993 0.666626 5.1321 1.09672 3.92614 1.90252C2.72018 2.70831 1.78025 3.85362 1.22521 5.19361C0.670169 6.53361 0.524945 8.00809 0.807903 9.43062C1.09086 10.8531 1.78929 12.1598 2.81488 13.1854C3.84046 14.211 5.14714 14.9094 6.56966 15.1924C7.99219 15.4753 9.46668 15.3301 10.8066 14.7751C12.1466 14.22 13.2919 13.2801 14.0977 12.0741C14.9035 10.8682 15.3336 9.45036 15.3336 7.99996C15.3313 6.05574 14.558 4.19181 13.1832 2.81704C11.8084 1.44227 9.94454 0.66892 8.00032 0.666626Z"
                                            fill="#2B5597"/>
                                    </svg>

                                    <span
                                        className="text-xs sm:text-sm md:text-base font-bold text-[#2B5597] lato line-clamp-2">Inclusions</span>
                                </div>
                            </AnimatedSection>

                            <ul className="space-y-1 sm:space-y-2 mb-6 mt-5 sm:mb-8">
                                {/*{offer.inclusions.map((inclusion: string, index: number) => (*/}
                                {Array.isArray(offer.inclusions) ? (
                                    offer.inclusions.map((inclusion: string, index: number) => (
                                        <AnimatedSection key={index} direction="up" delay={0.1 * (index + 5)}
                                                         threshold={0.05}>
                                            <li className="flex items-center">
                                                {/*<svg*/}
                                                {/*    className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-4 flex-shrink-0 mt-1"*/}
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
                                                     className="lucide lucide-check w-4 h-4 mr-3 flex-shrink-0">
                                                    <path d="M20 6 9 17l-5-5"></path>
                                                </svg>
                                                <span
                                                    className="text-[#737373] text-sm sm:text-base leading-6 font-normal">
                                          {inclusion}
                                        </span>
                                            </li>
                                        </AnimatedSection>
                                        // ))}
                                    ))
                                ) : (
                                    <li className="text-[#737373] text-sm sm:text-base">No inclusions available.</li>
                                )}
                            </ul>

                            <AnimatedSection direction="up" delay={0.1 * (offer.inclusions?.length + 5)}
                                             threshold={0.1}>
                                <h3 className="text-xs sm:text-sm md:text-base pt-2 sm:pt-3 font-normal text-[#2B5597] lato line-clamp-2">
                                    {offer.terms}
                                </h3>
                            </AnimatedSection>

                            <AnimatedSection direction="up" delay={0.7} threshold={0.1}>
                                <div
                                    className="my-4 sm:my-6 md:my-8 py-4 sm:py-6 md:py-8
                                border-t-2 border-[#D2D2D2]"
                                >
                                    <div
                                        className="flex flex-col space-y-4 md:space-y-0 items-start sm:flex-row sm:gap-8 lg:gap-12">
                                        <div className="flex flex-col sm:gap-4">
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
                                                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGhElEQVR4nO2daahWRRjHx6VFLaJ9I6yMFmyjRQoyzcjc2sgiCczS+mLSJq1EVkTYAkofrKgos0JbtDLIrGgvKmmBVMpCr7cINXPJzJv6iwefi7fD+573LDNzznnf+cH9ovPOPM/8zzIzzzNzjAkEAoFAIBAIBAKBigL0AgYCdwAvA18CK4FPgVOKtq8lAHYDrgTeBP6hPt8VbWtTA/QB7gJ+Jxk/O7wrjwbOAcYCdwLTgJnAfOAzuRikff37FVirfx0RGzv/fZWWXQR8CLwFPANMAcYD5wNHAN1c+JS2A7oD1wG/JRSi09GLc7Z5FDASuBl4HHhPH4dFsh74BHgMGA3sZ7e3G3dMX71i4vgReAq4Wt8nRwI9UrTREzher3a50j8CNlANtgFfA7fLHeRajEuBdXUMWadX7ekZ6t0VOEsffwuAjTQH24F35K52IcZNqn4UeYlPBfZKWV9/vYreB/6m+fkYGGBLDHlJ1kKenf1S3AXnAdOBX2hNtgNPyqg0jxiXa0VdkTvlXnnWN/htN32HPKEv9cAOZmcVQzq0jf8jj5fRDX53MHAfsDzy28BOzsgqyurI+2JITNlTgeeBLV1+E6jNrDyPrNU6+RtWp8yJOksPJGdjo0d+nCg9Yh5Ns+qMvgKNST1FiHu3XAv8maDRQH2utyHGvsAblIu1OgSX99cjOmeSxc7BwHHAYcDe0bmSDsXl3w/SlQG5yHwyPa8Y/QseOW3VZYkZcnUB50pn5r3IIj6+5tGf+XkMHVDAI+pf4AMdQg8F9rTZ+TFrdZs8+fdVViNPAP7wZOQG4CVgjDxOrPd4Mn/v9uTr0qzvDIkfuKZNn/u9nfRyOp93B5Z58Lk9i3H344dppkQAozz4vD6LYRKL8MFlpmTgfrK7NYtRaaKCeTjElAygH7DZoc8dWYyKxpxdsMyUFHaM8FzxVxaDfETvnjUlBeityQ4uSJ+Fo9kXrplQo90RDRIY5P+GZ/Andb2STyZXswO/H8giyDe459ga7a5M8Lu2DP5kqldDC0uwu9xzQBZBXsUtq2rlNpGQDP5krldWvYFBwI2aDTNX87a6xoySsDEurtTIgQdxy1zbHReHw3p760Km5A1cA9wDPK1ZNIt1OUZWO16QpL609Xdt6BLcMtFzxyXClBXgUNwhga3DfXYcjur1isN0zedi2iyUGLuGaJ6whAFGmSIAXnHg8+J6ebDAOIpnXB3b2iPlZLvFZMkiifoj4QLgQplnAXNk1dyWIBMtOtqheb/7x4ixjeLZFhVFQ9f1UmmjQ1pJwo6y3Eq2vGad5+Un4La4CF+JxOhEbLkqYuP4HMtJEvHslVsQNeTzDAbIwtyLum8j9soooRhxopwELKyR0ek2hh4x4mwNqSbhW2ASsE/CussqRl1R1O5jgFuAeV3mGl2RkPcXwKPAmdbE6GLAGL3tarFOkw9OS1ln2cXoRGwcm9AnyWbZxfhA02Vm62hjvW4nGJsl9Koh2yqI0YnYOsY0I8AFnmIttukobP7hCn3Ju4zEuUZ2AAw2zYDmd1Vlv2AcG6zl5haFvn/W0DyskWxOU0V0T3fihAnTuD6v5WOQwU1fUyU02S5VtM1URxB0DpJozlU4esqC7EBNhamWIOgEsPCsyySnL2RaKTbVE0R4Pc0BCd7RuHOrMcOUEeBWWpfJpkwAV2RYCW0mtksfmDIAnOxxw0uZ2Zx2odXV8NbKsRmmcVtey2dkRb3IqK8R1buWHCFBe17L50ACWd2Nb4AbLDpBgva8ls/JJOMTPaDMapa8adym1/I52ZQrWzEtekhXIJ63fYkxrIEhgZ0M9SGIj+0KzcIiH5G/QDoGuRRETq52gmncttfyFpljXADs4TIublJ2mOvyluPxfYxtXO8bMSk7zHV5y1xkbKPHIDnDpOww1+UtM9XYxuYySQuy0IUgPxTtVYX53oUgvo7caEbaXQhS5czDotnsQpBWOK/dFZtcCFL0dzuqzAoXgsimnEBZ1rTCsDcXC1wIImfkBizvz88jiK+zGJuRKS4EkQNWAhYPJcgrSIiFlCkmIofG5DCo1enrQpCeFd20WTRbMn83JIEoS4v2roIscSKGClK2z1ZUgXkuBXm4aO8qyEMuBfH9AZRmYIJLQeRAmkyYikN2Bro0Sj4VFARJx4HOBKlz5B0uDkAuGxnDD+0+DBuZ0ri2et9DrBLA8BpfQY1D+mhE0XYHAoFAIBAIBAKBgKnDf8YFWqPTt9wLAAAAAElFTkSuQmCC"
                                                        />
                                                    </defs>
                                                </svg>
                                                <p className="text-[#737373] font-normal text-xs sm:text-sm md:text-base">
                                                    {/*{offer.contactDetails.phone}*/}
                                                    {offer.contactDetails?.phone || "N/A"}
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
                                                        d="M9.24842 9.0381C9.28557 9.58905 9.37842 10.1276 9.527 10.6414L8.78414 11.3843C8.53033 10.6414 8.36938 9.85524 8.31366 9.0381H9.24842ZM15.3525 16.4791C15.8787 16.6276 16.4172 16.7205 16.962 16.7576V17.68C16.1449 17.6243 15.3587 17.4633 14.6096 17.2157L15.3525 16.4791ZM9.84284 7.8H7.67618C7.3357 7.8 7.05713 8.07857 7.05713 8.41905C7.05713 14.2319 11.7681 18.9429 17.5809 18.9429C17.9214 18.9429 18.2 18.6643 18.2 18.3238V16.1633C18.2 15.8229 17.9214 15.5443 17.5809 15.5443C16.8133 15.5443 16.0643 15.4205 15.3709 15.1914C15.309 15.1667 15.2409 15.1605 15.179 15.1605C15.0181 15.1605 14.8633 15.2224 14.7395 15.34L13.3776 16.7019C11.6257 15.8043 10.1895 14.3743 9.29808 12.6224L10.66 11.2605C10.8333 11.0871 10.8828 10.8457 10.8147 10.6291C10.5857 9.93572 10.4619 9.19286 10.4619 8.41905C10.4619 8.07857 10.1833 7.8 9.84284 7.8Z"
                                                        fill="white"
                                                        fillOpacity="0.82"
                                                    />
                                                </svg>
                                                <p className="text-[#737373] font-normal text-xs sm:text-sm md:text-base">
                                                    {/*{offer.contactDetails.emergencyPhone}*/}
                                                    {offer.contactDetails?.emergencyPhone || "N/A"}
                                                </p>
                                            </div>
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
                                                {/*{offer.contactDetails.email}*/}
                                                {offer.contactDetails?.email || "N/A"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>

                        </div>
                        <div id="inquiry" className="w-full md:w-1/2 md:pl-6 lg:pl-8 xl:pl-12">
                            <AnimatedSection direction="up" delay={0.9} threshold={0.1}>
                                <ContactForm
                                    fields={formFields}
                                    title="Make an Inquiry"
                                    pageSource="Other Booking Inquiry"
                                    reCaptchaSiteKey={recaptchaSiteKey}
                                />
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OfferDetailPage;


export async function generateMetadata({params, searchParams}: {
    params: Promise<{ id: string }>,
    searchParams: Promise<{ page: string }>
}): Promise<Metadata> {
    const {id} = await params;
    const {page: pageType} = await searchParams;
    const data = await getOfferDetailsData(id, pageType);
    const blog = data[0].offers.items[0];
    if (!blog) {
        return {title: 'Blog Not Found'};
    }
    const mdata = blog.seo;

    return {
        title: mdata?.title || `Acorn Travel - ${blog.title}`,
        description: mdata?.description || 'Embark on unforgettable adventures with Acorn Travels. We offer tailored corporate and leisure travel, flight bookings, visa assistance, and more for seamless experiences.',
        keywords: mdata?.keywords?.join(', ') || 'Acorn Travels, travel agency, corporate travel, leisure travel, flight booking, visa services, MICE tours, student travel',
        openGraph: {
            title: mdata?.ogTitle || mdata?.title,
            description: mdata?.ogDescription || mdata?.description || 'Discover inspiring journeys, effortless flight bookings, and reliable visa assistance with Acorn Travels. Your trusted partner for seamless travel experiences since 1973.',
            images: mdata?.ogImage ? urlFor(mdata.ogImage).url() : '/nav_logo.png',
            url: `https://www.acorntravels.lk/offers/${id}`,
            type: 'article',
        },
    };
}

export const revalidate = 60;