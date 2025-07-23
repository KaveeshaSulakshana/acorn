// import Carousel from "@/components/Carousel";
// import Partners from "@/components/Partners";
// import Services from "@/components/Services";
// import Strengths from "@/components/Strenghts";
// import Offers from "@/components/Offers";
// import {getHomePageData} from "../../sanity/api";
//
// interface Offer {
//     image: string;
//     title: string;
//     contact: string;
//     link: string;
//     topRated: boolean;
// }
//
// interface OfferProps {
//     title: string;
//     description: string;
//     offers: Offer[]
// }
//
// // interface Slide {
// //     image: string;
// //     title: string;
// //     description: string;
// //     buttonText: string[];
// //     buttonLink: string;
// // }
//
//
// export default async function Home() {
//
//     let slides = [];
//     let offersData = {title: "", description: "", items: [] as Offer[]};
//
//     try {
//         const homeData = await getHomePageData();
//         console.log("------home data (server): ", homeData); // Logs on server-side
//
//         slides = homeData.slides.map((slide: any) => ({
//             image: slide.image.asset.url,
//             title: slide.title,
//             description: slide.description,
//             buttonText: slide.buttonText || [],
//             buttonLink: slide.buttonLink,
//         })) || [];
//
//         offersData = {
//             title: homeData.offers.title,
//             description: homeData.offers.description,
//             items: homeData.offers.items.map((item: any) => ({
//                 image: item.image.asset.url,
//                 alt: item.image.alt || "",
//                 title: item.title,
//                 contact: item.contact,
//                 link: item.link,
//                 topRated: item.topRated,
//             })) || [],
//         };
//     } catch (error) {
//         console.error("Error fetching home page data:", error);
//     }
//
//
//     const slidesd = [
//         {
//             image: "/women-slider.png",
//             title: "Business Travel Solutions Tailored For You",
//             description:
//                 "Streamline your corporate travel with personalized services, cost-saving strategies, and\n" +
//                 "24/7 support. Let us handle the details while you focus on business.",
//             buttonText: "Connect Me with an Corporate Travel Expert",
//             buttonLink: "#",
//         },
//         {
//             image: "/women2-slider.png",
//             title: "Discover Inspiring Journeys",
//             description:
//                 "Embark on unforgettable adventures crafted just for you. From serene escapes to\n" +
//                 "thrilling explorations, let us turn your travel dreams into reality.",
//             buttonText: "Plan my Journey",
//             buttonLink: "#",
//         },
//         {
//             image: "/women3-slider.png",
//             title: "Seamless Flight Bookings",
//             description:
//                 "Effortlessly book flights to your dream destinations with our expert assistance. Enjoy\n" +
//                 "competitive fares, flexible options, and hassle-free service every step of the way.",
//             buttonText: "Explore flight options",
//             buttonLink: "#",
//         },
//         {
//             image: "/women4-slider.png",
//             title: "Hassle-Free Visa Assistance",
//             description:
//                 "Navigate your travel plans effortlessly with our expert visa services. From guidance to\n" +
//                 "approvals, we’re here to make your journey smooth and stress-free.",
//             buttonText: "Connect Me with An Visa Expert",
//             buttonLink: "#",
//         },
//     ];
//
//     const offersPack: OfferProps = {
//         title: "Offers and Promotions",
//         description: "Quality as judged by customers. Book at the ideal price!",
//         offers: [
//             {
//                 image: "/offers/gulf-air.png",
//                 title: "Gulf Air | 40% off Airfares",
//                 contact: "011 4 704 705",
//                 link: "#",
//                 topRated: true,
//             },
//             {
//                 image: "/offers/anthem-seas.png",
//                 title: "Anthem of the Seas | Singapore Cruise",
//                 contact: "011 4 704 705",
//                 link: "#",
//                 topRated: true,
//             },
//             {
//                 image: "/offers/scenic-train.png",
//                 title: "Scenic Switzerland By Train",
//                 contact: "011 4 704 705",
//                 link: "#",
//                 topRated: true,
//             },
//             {
//                 image: "/offers/romantic-rhine.png",
//                 title: "Romantic Rhine",
//                 contact: "011 4 704 705",
//                 link: "#",
//                 topRated: true,
//             },
//             {
//                 image: "/offers/student-air.png",
//                 title: "Cathay Pacific | Student Airfares",
//                 contact: "011 4 704 705",
//                 link: "#",
//                 topRated: true,
//             },
//             {
//                 image: "/offers/essential-europe.png",
//                 title: "Essential Europe",
//                 contact: "011 4 704 705",
//                 link: "#",
//                 topRated: true,
//             },
//         ]
//     };
//
//     const homeData = getHomePageData();
//     console.log("------home data: ", homeData);
//
//     return (
//         <div className="min-h-screen">
//             <Carousel slides={slides} autoSlide={true} autoSlideInterval={5000}/>
//             <Partners/>
//             <Services/>
//             <Strengths/>
//             <div className="bg-[#F6F6F6]">
//                 <Offers offersPack={offersPack}/>
//             </div>
//         </div>
//     );
// }

import Carousel from "@/components/Carousel";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Offers from "@/components/Offers";
import {getHomePageData} from "../../sanity/api";
import Image from "next/image";
import React from "react";
import TestimonialSlider from "@/components/TestimonialSlider";
import Nav from "@/components/Nav";

interface Slide {
    image: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

// interface Offer {
//     _key?: string;
//     image: string;
//     alt: string;
//     title: string;
//     link: string;
//     topRated: boolean;
//     duration?: string;
//     guests?: string;
//     price?: string;
// }

// interface Offer {
//     _key?: string;
//     image: string;
//     alt: string;
//     title: string;
//     link: string;
//     topRated: boolean;
//     duration?: string;
//     guests?: string;
//     price?: string;
// }

interface Testimonial {
    _key: string;
    title: string;
    description: string;
    name: string;
    image: string;
    rate: number;
}

interface Sld {
    image: { asset: { url: string } };
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

// interface Item {
//     image: { asset: { url: string }; alt: string };
//     title: string;
//     link: string;
//     topRated: boolean;
//     duration?: string;
//     guests?: string;
//     price?: string;
// }

interface ItemData {
    title: string;
    slug: { current: string };
    image: { asset: { url: string }; alt: string };
    topRated: boolean;
    duration?: string;
    guests?: string;
    price?: string;
    inclusionCard?: string[];
}

interface Testi {
    _key: string;
    title: string;
    description: string;
    name: string;
    image?: { asset: { url: string }; alt: string };
    rate: string;
}

// interface Service {
//     image: { asset: { url: string } },
//     title: string,
//     description: string,
//     link: string,
// }

interface Service {
    _key: string;
    title: string;
    description: string;
    link: string;
    image: {
        alt: string | null;
        asset: {
            _id: string;
            url: string;
        };
    };
}

interface ServiceProp {
    image: string;
    title: string;
    description: string;
    link: string;
}


// interface Services {
//     services: Service[];
// }

export default async function Home() {
    let slides: Slide[] = [];
    // let offersData = {title: "", description: "", offers: [] as Offer[]};
    let testimonials: Testimonial[] = [];
    let services: ServiceProp[] = [];

    const homeData = await getHomePageData();
    console.log(homeData);

    if (!homeData) {
        return <div>Error loading home page data. Please try again later.</div>;
    }

    slides = (homeData?.slides || []).map((slide: Sld) => ({
        image: slide.image?.asset?.url || "",
        title: slide.title || "",
        description: slide.description || "",
        buttonText: slide.buttonText || "",
        buttonLink: slide.buttonLink || "#",
    }));

    // offersData = {
    //     title: homeData?.offers?.title || "",
    //     description: homeData?.offers?.description || "",
    //     offers: (homeData?.offers?.items || []).map((item: Item) => ({
    //         image: item.image?.asset?.url || "",
    //         alt: item.image?.alt || "",
    //         title: item.title || "",
    //         link: item.link || "#",
    //         topRated: item.topRated || false,
    //         duration: item.duration || "",
    //         guests: item.guests || "",
    //         price: item.price || "",
    //     })),
    // };

    services = (homeData?.services || []).map((service: Service) => ({
        image: service.image?.asset?.url || "/demo.png",
        title: service.title || "",
        description: service.description || "",
        link: service.link || "#",
    }));


    const offersData = {
        title: homeData?.offers?.title || '',
        description: homeData?.offers?.description || '',
        offers: (homeData?.offers?.items || []).map((item: ItemData) => ({
            image: item.image?.asset?.url || '/demo.png',
            alt: item.image?.alt || '',
            title: item.title || '',
            link: item.slug?.current ? `/offers/${item.slug.current}` : '#',
            topRated: item.topRated || false,
            duration: item.duration || '',
            guests: item.guests || '',
            price: item.price || '',
            inclusions: item.inclusionCard || '',
        })),
    };


    testimonials = (homeData?.testimonials?.items || []).map((item: Testi) => ({
        _key: item._key || "",
        title: item.title || "",
        description: item.description || "",
        name: item.name || "",
        // image: item.image?.asset?.url || "",
        rate: item.rate || 0,
    }));


    return (
        <div className="min-h-screen">
            <Nav/>
            <Carousel
                slides={slides}
                autoSlide={true}
                autoSlideInterval={5000}
            />
            <Services services={services}/>
            <div className="bg-white">
                <Offers
                    offersPack={offersData}
                    type="home"
                />
            </div>
            <div className="bg-[#F6F6F6]">
                <Partners/>
            </div>


            <section className="py-8 sm:py-10 md:py-12 bg-white lato">
                <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="w-full md:w-1/2 mb-6 sm:mb-8 md:mb-0">
                        <h2 className="text-3xl sm:text-4xl md:text-[52px] font-bold lato max-w-xl px-4 sm:px-6 md:px-8 text-black mb-3 sm:mb-4">
                            {homeData.testimonials.title}
                        </h2>
                        <p className="text-[#737373] px-4 sm:px-6 md:px-8 max-w-xl font-normal text-base sm:text-lg md:text-lg lato mb-4 sm:mb-6">
                            {homeData.testimonials.description}
                        </p>
                        <div className="relative">
                            <div className="w-full h-full">
                                <Image
                                    src="/plane-line.png"
                                    alt="plane"
                                    width={200}
                                    height={110}
                                    className="w-48 sm:w-60 md:w-[270px] h-auto"
                                />
                            </div>
                        </div>
                    </div>
                    <TestimonialSlider testimonials={testimonials}/>
                </div>
            </section>
        </div>
    )
        ;
}

export const revalidate = 60;