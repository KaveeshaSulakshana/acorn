import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import ParallaxBackground from "@/components/ParallaxBackground";
import {FormField} from "@/components/ContactForm";
import {getFlightBookingPageData} from "../../../sanity/api";
import React from "react";
import Image from "next/image";
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

interface Offer {
    _key?: string;
    image: string;
    alt: string;
    title: string;
    link: string;
    topRated: boolean;
    duration?: string;
    guests?: string;
    price?: string;
}

interface OfferProps {
    title: string;
    description: string;
    offers: Offer[];
}

interface ParallaxProps {
    title: string;
    description: string;
    image: string;
    formFields: FormField[];
    pageSource: string;
}

interface TravelService {
    _key?: string;
    url: string;
    alt: string;
    title: string;
    isBigger: boolean;
}

interface FeaturesSection {
    title: string;
    description: string;
    travelServices: TravelService[];
}

interface TravelAgentSection {
    title: string;
    description: string;
    image: string;
    alt: string;
}

interface ItemData {
    title: string;
    slug: { current: string };
    image: { asset: { url: string }; alt: string };
    topRated: boolean;
    duration?: string;
    guests?: string;
    price?: string;
    contactDetails: { phone: string };
}

interface FlightBookingData {
    _id?: string;
    hero: {
        image: { asset: { url: string }; alt?: string };
        title: string;
        description: string;
        buttonText: { title: string; link: string }[];
    };
    offers: {
        title: string;
        description: string;
        items: ItemData[];
    };
    featuresSection: {
        title: string;
        description: string;
        travelServices: {
            url: { asset: { url: string }; alt?: string };
            title: string;
            isBigger: boolean;
        }[];
    };
    parallax: {
        title: string;
        description: string;
        image: { asset: { url: string } };
    };
    travelAgentSection: {
        title: string;
        description: string;
        image: { asset: { url: string }; alt?: string };
    };
}

const FlightBookingPage = async () => {

    let hero: Hero = {
        image: "",
        title: "",
        description: "",
        buttonText: [],
    };
    let offersPack: OfferProps = {
        title: "",
        description: "",
        offers: [],
    };
    let parallax: ParallaxProps = {
        title: "",
        description: "",
        image: "",
        formFields: [],
        pageSource: "",
    };
    let featuresSection: FeaturesSection = {
        title: "",
        description: "",
        travelServices: [],
    };
    let travelAgentSection: TravelAgentSection = {
        title: "",
        description: "",
        image: "",
        alt: "",
    };

    try {
        const flightBookingData: FlightBookingData | null = await getFlightBookingPageData();
        console.log("------flight booking data (server): ", flightBookingData);

        if (flightBookingData) {
            // Map hero data
            hero = {
                image: flightBookingData.hero?.image?.asset?.url || "/default-hero.png",
                title: flightBookingData.hero?.title || "Seamless Flight Bookings",
                description:
                    flightBookingData.hero?.description ||
                    "Book flights effortlessly with competitive fares and expert assistance.",
                buttonText: Array.isArray(flightBookingData.hero?.buttonText)
                    ? flightBookingData.hero.buttonText.map((btn) => ({
                        title: btn?.title || "Explore Now",
                        link: btn?.link || "#",
                    }))
                    : [],
            };

            // Map offers data
            // offersPack = {
            //     title: flightBookingData.offers?.title || "Special Flight Offers",
            //     description:
            //         flightBookingData.offers?.description ||
            //         "Discover exclusive deals tailored for your travel needs.",
            //     offers: Array.isArray(flightBookingData.offers?.items)
            //         ? flightBookingData.offers.items.map((item, index) => ({
            //             _key: `offer-${index}`,
            //             image: item?.image?.asset?.url || "/default-offer.png",
            //             alt: item?.image?.alt || "Offer image",
            //             title: item?.title || "Offer",
            //             link: item?.link || "#",
            //             topRated: item?.topRated || false,
            //             duration: item?.duration || "",
            //             guests: item?.guests || "",
            //             price: item?.price || "",
            //         }))
            //         : [],
            // };


            offersPack = {
                title: flightBookingData.offers?.title || "Special Flight Offers",
                description:
                    flightBookingData.offers?.description ||
                    "Discover exclusive deals tailored for your travel needs.",
                offers: Array.isArray(flightBookingData.offers?.items)
                    ? flightBookingData.offers.items.map((item: ItemData) => ({
                        image: item.image?.asset?.url || "/default-offer.png",
                        alt: item.image?.alt || "Offer image",
                        title: item.title || "Offer",
                        link: item.slug?.current ? `/offers/${item.slug.current}` : "#",
                        topRated: item.topRated || false,
                        duration: item.duration || "",
                        guests: item.guests || "",
                        price: item.price || "",
                        contact: item.contactDetails?.phone || "",
                    }))
                    : [],
            };

            // Map features section data
            featuresSection = {
                title:
                    flightBookingData.featuresSection?.title ||
                    "Why Choose Our Flight Booking Services",
                description:
                    flightBookingData.featuresSection?.description ||
                    "Enjoy personalized and hassle-free travel planning with our expert services.",
                travelServices: Array.isArray(flightBookingData.featuresSection?.travelServices)
                    ? flightBookingData.featuresSection.travelServices.map((service, index) => ({
                        _key: `service-${index}`,
                        url: service?.url?.asset?.url || "/default-icon.png",
                        alt: service?.url?.alt || "Service image",
                        title: service?.title || "Service",
                        isBigger: service?.isBigger || false,
                    }))
                    : [],
            };

            // Map parallax data
            parallax = {
                title:
                    flightBookingData.parallax?.title || "Book Your Next Flight Today",
                description:
                    flightBookingData.parallax?.description ||
                    "Contact our team to arrange your flight with ease and efficiency.",
                image: flightBookingData.parallax?.image?.asset?.url || "/default-parallax.png",
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
                        type: "text",
                        name: "contactNumber",
                        placeholder: "Contact Number",
                        required: true,
                    },
                    {type: "email", name: "email", placeholder: "Email", required: true},
                    {type: "text", name: "company", placeholder: "Company"},
                    {
                        type: "textarea",
                        name: "inquiry",
                        placeholder: "Inquiry",
                        rows: 3,
                        required: true,
                    },
                ],
                pageSource: "Flight Booking Inquiry",
            };

            // Map travel agent section data
            travelAgentSection = {
                title:
                    flightBookingData.travelAgentSection?.title ||
                    "Streamline Your Ticketing with Our Travel Agent Solutions",
                description:
                    flightBookingData.travelAgentSection?.description ||
                    "Partner with us for exclusive fares and seamless ticketing services.",
                image: flightBookingData.travelAgentSection?.image?.asset?.url || "/default-agent.png",
                alt: flightBookingData.travelAgentSection?.image?.alt || "Travel agent image",
            };
        }
    } catch (error) {
        console.error("Error fetching flight booking data:", error);
        return (
            <div className="min-h-screen bg-[#F6F6F6] lato flex items-center justify-center">
                <p className="text-red-500 text-lg">
                    Failed to load flight booking data. Please try again later.
                </p>
            </div>
        );
    }

    // Render nothing if critical data is missing
    if (!hero.title || !offersPack.title || !featuresSection.title) {
        return (
            <div className="min-h-screen bg-[#F6F6F6] lato flex items-center justify-center">
                <p className="text-gray-500 text-lg">
                    No flight booking data available at this time.
                </p>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-[#F6F6F6] lato">
            <Hero hero={hero}/>
            <div id="offers" className="bg-white">
                <Offers offersPack={offersPack} type="flightBooking"/>
            </div>
            <div className="py-12 my-8 bg-[#F6F6F6] relative overflow-hidden lato">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-[45px] font-bold text-[#3C3C3C] text-center mb-8">
                        {featuresSection.title}
                    </h2>
                    <p className="text-[#737373] text-base md:text-xl text-center mb-8 max-w-4xl mx-auto">
                        {featuresSection.description}
                    </p>
                    {/*{featuresSection.travelServices.length > 0 && (*/}
                    {/*    <div className="mt-6 sm:mt-10 max-w-2xl mx-auto justify-center">*/}
                    {/*        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">*/}
                    {/*            {featuresSection.travelServices.map((service, index) => (*/}
                    {/*                <div key={index}>*/}
                    {/*                    <TravelFeatures url={service.url} title={service.title}*/}
                    {/*                                    isBigger={service.isBigger}/>*/}
                    {/*                </div>*/}
                    {/*            ))}*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*)}*/}

                    <TravelFeaturesGrid featuresSection={featuresSection} isBigger={true}/>
                </div>
            </div>
            <div className="bg-white">
                <ParallaxBackground parallax={parallax} formFields={parallax.formFields} pageSource={parallax.pageSource}/>
            </div>
            {travelAgentSection.image && (
                <div
                    className="flex flex-col items-start md:flex-row-reverse sm:gap-20 p-8 sm:p-6 md:p-8 lg:py-12 xl:py-16 lg:px-18 xl:px-20 bg-[#F6F6F6] m-0 sm:m-0 md:m-8 lg:m-0 xl:m-0"
                >
                    <div className="w-full md:w-3/5 justify-between mb-6 md:mb-0">
                        <h2 className="font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[45px] leading-tight text-[#3C3C3C] max-w-2xl">
                            {travelAgentSection.title}
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl font-normal mt-4 sm:mt-6 whitespace-pre-line text-[#737373] max-w-2xl leading-relaxed">
                            {travelAgentSection.description}
                        </p>
                    </div>

                    <div className="w-full md:w-2/5">
                        <Image
                            src={travelAgentSection.image}
                            alt="Travel Agent Solutions"
                            width={400}
                            height={600}
                            className="rounded-lg object-cover w-full h-auto"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default FlightBookingPage;