// import Image from "next/image";
// import React from "react";
//
// interface Offer {
//     image: string;
//     title: string;
//     contact: string;
//     link: string;
//     topRated: boolean;
//     alt?: string
// }
//
// interface OfferProps {
//     title: string;
//     description: string;
//     offers: Offer[];
// }
//
// const Offers = ({offersPack}: { offersPack: OfferProps }) => {
//     return (
//         <div className="py-8 md:py-16">
//             <div className="container mx-auto px-3">
//                 <h2 className="text-2xl md:text-[52px] font-bold text-[#3C3C3C] text-center mb-6 lato">
//                     {offersPack.title}
//                 </h2>
//                 <p className="text-[#737373] text-base md:text-xl text-center mb-6 md:mb-8 max-w-2xl mx-auto lato">
//                     {offersPack.description}
//                 </p>
//
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 px-4 md:px-8 lg:px-28">
//                     {offersPack.offers.map((offer, index) => (
//                         <div
//                             key={index}
//                             className="bg-white rounded-md border-2 border-[#E4E6E8] overflow-hidden shadow-lg transition-shadow duration-300 relative"
//                         >
//                             {/* Image Section */}
//                             <div className="relative h-48 md:h-64">
//                                 <Image
//                                     src={offer.image}
//                                     alt={offer.title}
//                                     fill
//                                     className="object-cover rounded-t-md"
//                                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                                     quality={85}
//                                 />
//                                 {offer.topRated && (
//                                     <span
//                                         className="absolute top-3 left-3 md:top-4 md:left-4 bg-white text-[#F09814] text-xs md:text-sm font-bold px-2 py-1 md:px-3 md:py-1 rounded-full lato">
//                                         Top Rated
//                                     </span>
//                                 )}
//                                 {/*<button*/}
//                                 {/*    className="absolute top-3 right-3 md:top-4 md:right-4 text-black bg-white rounded-full p-1.5 md:p-2 hover:text-blue-950 transition-colors duration-200"*/}
//                                 {/*    aria-label="Add to favorites"*/}
//                                 {/*>*/}
//                                 {/*    <svg*/}
//                                 {/*        className="w-5 h-5 md:w-6 md:h-6"*/}
//                                 {/*        fill="none"*/}
//                                 {/*        stroke="currentColor"*/}
//                                 {/*        viewBox="0 0 24 24"*/}
//                                 {/*        xmlns="http://www.w3.org/2000/svg"*/}
//                                 {/*    >*/}
//                                 {/*        <path*/}
//                                 {/*            strokeLinecap="round"*/}
//                                 {/*            strokeLinejoin="round"*/}
//                                 {/*            strokeWidth="2"*/}
//                                 {/*            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"*/}
//                                 {/*        />*/}
//                                 {/*    </svg>*/}
//                                 {/*</button>*/}
//                             </div>
//
//                             <div
//                                 className="relative -mt-4 md:-mt-6 bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 border-t-2 border-white">
//                                 <h3 className="text-lg md:text-2xl font-bold text-[#3C3C3C] mb-2 md:mb-3 lato line-clamp-2 min-h-16">
//                                     {offer.title}
//                                 </h3>
//                                 <div
//                                     className="flex flex-row justify-between items-center text-[#737373] text-sm md:text-base gap-2">
//                                     <div className="flex items-center text-[#737373] text-sm md:text-base gap-2">
//                                         <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
//                                              xmlns="http://www.w3.org/2000/svg">
//                                             <g clipPath="url(#clip0_2163_4849)">
//                                                 <path
//                                                     d="M8.00008 0.666504C6.54969 0.666504 5.13186 1.0966 3.9259 1.9024C2.71994 2.70819 1.78001 3.8535 1.22497 5.19349C0.669925 6.53349 0.524701 8.00797 0.807659 9.4305C1.09062 10.853 1.78905 12.1597 2.81464 13.1853C3.84022 14.2109 5.1469 14.9093 6.56942 15.1923C7.99195 15.4752 9.46644 15.33 10.8064 14.775C12.1464 14.2199 13.2917 13.28 14.0975 12.074C14.9033 10.8681 15.3334 9.45024 15.3334 7.99984C15.3311 6.05562 14.5578 4.19169 13.183 2.81692C11.8082 1.44215 9.9443 0.668798 8.00008 0.666504ZM10.4714 10.4712C10.3464 10.5962 10.1769 10.6664 10.0001 10.6664C9.82331 10.6664 9.65377 10.5962 9.52875 10.4712L7.52875 8.47117C7.40372 8.34618 7.33346 8.17664 7.33342 7.99984V3.99984C7.33342 3.82303 7.40366 3.65346 7.52868 3.52843C7.6537 3.40341 7.82327 3.33317 8.00008 3.33317C8.1769 3.33317 8.34647 3.40341 8.47149 3.52843C8.59651 3.65346 8.66675 3.82303 8.66675 3.99984V7.72384L10.4714 9.52851C10.5964 9.65352 10.6666 9.82306 10.6666 9.99984C10.6666 10.1766 10.5964 10.3462 10.4714 10.4712Z"
//                                                     fill="#D6D7D8"/>
//                                             </g>
//                                             <defs>
//                                                 <clipPath id="clip0_2163_4849">
//                                                     <rect width="16" height="16" fill="white"/>
//                                                 </clipPath>
//                                             </defs>
//                                         </svg>
//
//                                         {/*<span className="volkhov">Contact Us - {offer.contact}</span>*/}
//                                         <span className="lato">2 days 3 nights</span>
//                                     </div>
//                                     <div className="flex items-center text-[#737373] text-sm md:text-base gap-2">
//                                         <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
//                                              xmlns="http://www.w3.org/2000/svg">
//                                             <path
//                                                 d="M4.92325 4.66667C4.92325 2.92067 6.34392 1.5 8.08992 1.5C9.83592 1.5 11.2565 2.92067 11.2565 4.66667C11.2565 6.41267 9.83592 7.83333 8.08992 7.83333C6.34392 7.83333 4.92325 6.41267 4.92325 4.66667ZM10.0899 8.83333H6.08992C3.97659 8.83333 2.25659 10.5533 2.25659 12.6667C2.25659 13.678 3.07859 14.5 4.08992 14.5H12.0899C13.1012 14.5 13.9232 13.678 13.9232 12.6667C13.9232 10.5533 12.2032 8.83333 10.0899 8.83333Z"
//                                                 fill="#D6D7D8"/>
//                                         </svg>
//                                         <span className="lato">4-6 guests</span>
//                                     </div>
//                                 </div>
//                                 <h3 className="text-sm md:text-base pt-5 font-bold text-[#2B5597] lato line-clamp-2 min-h-16">
//                                     Starting From - LKR 200 000
//                                 </h3>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Offers;


import Image from "next/image";
import React from "react";
import Link from "next/link";

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
    contact?: string;
    inclusion?: string;
}

interface OfferProps {
    title: string;
    description: string;
    offers: Offer[];
}

const Offers = ({offersPack, type}: { offersPack: OfferProps, type: string }) => {

    console.log("offersss---",offersPack);

    return (
        <div className="py-6 sm:py-8 md:py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-xl sm:text-2xl md:text-[52px] font-bold text-[#3C3C3C] text-center mb-4 sm:mb-6 lato">
                    {offersPack.title}
                </h2>
                <p className="text-[#737373] text-sm sm:text-base md:text-xl text-center mb-4 sm:mb-6 md:mb-8 leading-8 max-w-2xl mx-auto lato">
                    {offersPack.description}
                </p>

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-0 sm:px-4 md:px-8 lg:px-28">
                    {offersPack.offers?.map((offer, index) => (
                        // <Link href={offer.link} >
                        <div
                            key={index}
                            className="bg-white rounded-md border-2 border-[#E4E6E8] overflow-hidden shadow-lg transition-shadow duration-300 relative"
                        >
                            {/* Image Section */}
                            <div className="relative h-40 sm:h-48 md:h-64">
                                <Image
                                    src={offer.image}
                                    alt={offer.alt || offer.title}
                                    fill
                                    className="object-cover rounded-t-md"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    quality={85}
                                />
                                {offer.topRated && (
                                    <span
                                        className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 bg-white text-[#F09814] text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full lato">
                                        Top Rated
                                    </span>
                                )}
                            </div>

                            <div
                                className="relative -mt-3 sm:-mt-4 md:-mt-6 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 border-t-2 border-white">
                                <h3 className="text-base sm:text-lg md:text-2xl font-bold text-[#3C3C3C] mb-2 sm:mb-3 lato line-clamp-2 min-h-12 sm:min-h-14 md:min-h-16">
                                    {offer.title}
                                </h3>

                                {
                                    type === "home" ? (
                                        <div>
                                            <div
                                                className="flex flex-row flex-wrap justify-between items-center text-[#737373] text-xs sm:text-sm md:text-base gap-2">
                                                {/*{offer.duration && (*/}
                                                {/*    <div*/}
                                                {/*        className="flex items-center text-[#737373] gap-1 sm:gap-2">*/}
                                                {/*        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"*/}
                                                {/*             xmlns="http://www.w3.org/2000/svg"*/}
                                                {/*             className="w-4 h-4 sm:w-5 sm:h-5">*/}
                                                {/*            <g clipPath="url(#clip0_2163_4849)">*/}
                                                {/*                <path*/}
                                                {/*                    d="M8.00008 0.666504C6.54969 0.666504 5.13186 1.0966 3.9259 1.9024C2.71994 2.70819 1.78001 3.8535 1.22497 5.19349C0.669925 6.53349 0.524701 8.00797 0.807659 9.4305C1.09062 10.853 1.78905 12.1597 2.81464 13.1853C3.84022 14.2109 5.1469 14.9093 6.56942 15.1923C7.99195 15.4752 9.46644 15.33 10.8064 14.775C12.1464 14.2199 13.2917 13.28 14.0975 12.074C14.9033 10.8681 15.3334 9.45024 15.3334 7.99984C15.3311 6.05562 14.5578 4.19169 13.183 2.81692C11.8082 1.44215 9.9443 0.668798 8.00008 0.666504ZM10.4714 10.4712C10.3464 10.5962 10.1769 10.6664 10.0001 10.6664C9.82331 10.6664 9.65377 10.5962 9.52875 10.4712L7.52875 8.47117C7.40372 8.34618 7.33346 8.17664 7.33342 7.99984V3.99984C7.33342 3.82303 7.40366 3.65346 7.52868 3.52843C7.6537 3.40341 7.82327 3.33317 8.00008 3.33317C8.1769 3.33317 8.34647 3.40341 8.47149 3.52843C8.59651 3.65346 8.66675 3.82303 8.66675 3.99984V7.72384L10.4714 9.52851C10.5964 9.65352 10.6666 9.82306 10.6666 9.99984C10.6666 10.1766 10.5964 10.3462 10.4714 10.4712Z"*/}
                                                {/*                    fill="#D6D7D8"/>*/}
                                                {/*            </g>*/}
                                                {/*            <defs>*/}
                                                {/*                <clipPath id="clip0_2163_4849">*/}
                                                {/*                    <rect width="16" height="16" fill="white"/>*/}
                                                {/*                </clipPath>*/}
                                                {/*            </defs>*/}
                                                {/*        </svg>*/}
                                                {/*        <span className="lato">{offer.duration}</span>*/}
                                                {/*    </div>*/}
                                                {/*)}*/}
                                                {/*{offer.guests && (*/}
                                                {/*    <div*/}
                                                {/*        className="flex items-center text-[#737373] gap-1 sm:gap-2">*/}
                                                {/*        <svg width="15" height="14" viewBox="0 0 17 16" fill="none"*/}
                                                {/*             xmlns="http://www.w3.org/2000/svg"*/}
                                                {/*             className="w-4 h-4 sm:w-5 sm:h-5">*/}
                                                {/*            <path*/}
                                                {/*                d="M4.92325 4.66667C4.92325 2.92067 6.34392 1.5 8.08992 1.5C9.83592 1.5 11.2565 2.92067 11.2565 4.66667C11.2565 6.41267 9.83592 7.83333 8.08992 7.83333C6.34392 7.83333 4.92325 6.41267 4.92325 4.66667ZM10.0899 8.83333H6.08992C3.97659 8.83333 2.25659 10.5533 2.25659 12.6667C2.25659 13.678 3.07859 14.5 4.08992 14.5H12.0899C13.1012 14.5 13.9232 13.678 13.9232 12.6667C13.9232 10.5533 12.2032 8.83333 10.0899 8.83333Z"*/}
                                                {/*                fill="#D6D7D8"/>*/}
                                                {/*        </svg>*/}
                                                {/*        <span className="lato">{offer.guests}</span>*/}
                                                {/*    </div>*/}
                                                {/*)}*/}
                                                <p className="text-[#737373] lato whitespace-pre-line overflow-auto max-h-24">
                                                    {offer.inclusion}
                                                </p>
                                            </div>
                                            <h3 className="text-xs sm:text-sm md:text-base pt-4 sm:pt-5 font-bold text-[#2B5597] lato line-clamp-2 min-h-10 sm:min-h-12 md:min-h-16">
                                                Starting From - {offer.price}
                                            </h3>
                                            {/*<Link href={offer.link}>*/}
                                            {/*    <button*/}
                                            {/*        className="bg-[#2B5597] cursor-pointer flex justify-center items-center text-white text-xs sm:text-sm md:text-sm lg:text-xs font-bold px-3 sm:px-4 py-2 sm:py-3 rounded-md hover:bg-blue-950 transition-colors lato"*/}
                                            {/*    >*/}
                                            {/*        Inquiry Now*/}
                                            {/*    </button>*/}
                                            {/*</Link>*/}
                                            <div className="flex justify-center mt-4">
                                                <Link href={`${offer.link}#inquiry`}>
                                                    <button
                                                        className="bg-[#2B5597] cursor-pointer flex justify-center items-center text-white text-xs sm:text-sm md:text-sm lg:text-xs font-bold px-3 sm:px-4 py-2 sm:py-3 rounded-md hover:bg-blue-950 transition-colors lato"
                                                    >
                                                        Inquiry Now
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    ) : (
                                        <div
                                            className="flex items-center text-[#737373] text-sm md:text-base gap-2">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                                <rect width="20" height="20" fill="url(#pattern0_286_6480)"/>
                                                <defs>
                                                    <pattern
                                                        id="pattern0_286_6480"
                                                        patternContentUnits="objectBoundingBox"
                                                        width="1"
                                                        height="1"
                                                    >
                                                        <use xlinkHref="#image0_286_6480" transform="scale(0.01)"/>
                                                    </pattern>
                                                    <image
                                                        id="image0_286_6480"
                                                        width="100"
                                                        height="100"
                                                        preserveAspectRatio="none"
                                                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGElEQVR4nO2dSYgdVRSGn0NwAFEU52GhKKI4EIelC0XQ7NxoHBZicEAXQqsJQhYiBBUJziBils5xoyIiaIMiiD7I0HX+/1SZtrFDBkSMbbcYg1hyXzetUYlV71XVqXfr/HA2ock75//q1q07VN1ez+VyuVwul8vlcrlcLpfL5eqo8jw/fEr1qoS8HdAJQNdFFhOhNpJXhlp7bRXJMwB9HtQ9oOZdCKHuBvQ5AKf32qI8zw8D8Ciov1gbBLtYCK0neGEKY3Z29hhA326BIXkrAnwreGICI1wNQr5hbgLbFQLdbNJSlm5T5gagjQFd13wHHu6b1oWztbHQaEe/9DRlXXTe6oA+2wiM8OzdpUdbDB97GxmnJGl6dQuKzcchwuCxdiCieod1oRiXAG6tHwj5sHmhHI8g+VATQB6zLhRjEsGrmIBkQm4U0etIHtfv91ckSXr54N/A/dZmdwXIgpAvJkl20aFyCJ2lUH+wNjxuIOBX27LsrMJ5qN5obXi0QAT66czMzNFlcwH4ibXpMQLZkyTJaUPlou1uJWMJRMgHR8kH4FZr46MBIuCvSZKcOEo+JO+0Nj4aICA/GzWffr+/QsCd1uZHAUSoL1SU03pr86MAkpD3VpGTql5qbX4UQET15ipympycPNLa/DiASLqqipymp6ePtzY/CiAArq8iJyC9ydr8KICI6C2j5pPn+REAP7c2PwoggN4/aj6APm1tfExANoy4L2yjtelRARHyg6FvU+Sr1obHBwTcWfb3syw7KuwOtDY7SiAhwqa7MtMkaPmU+9gDEfKuEr99n7XJ0QMB9J2ivw3oJmuTowci4E+hXygIZIO1ydEDKTOnJZKusja5E0AAflhiEnGvtdHRAxHw96I7TkA+ZW109ECWkn+iEBDgJAHnrM2OHwg4F6bRC+bwuLXZ0QMZFCC6tsT6R+vfURl/INTd/X7/2HFeA4kKCBaLWF80l/AasrXp8QMB57IsO7lILuHvBPzW2viogaDk9iAROV/A7w/9f3KfQN8Li1lCvgTySwdSDsoBkpcUhTKVppcJNf1HS5sW8plE9dowS/xvkOk14W+8hRS+dekXZd5iDQ8DQLpaRNeIyMWFQE59c7ZAZ/yWVRAKyXt6NSu8/APqb96HFIPyY5kFrLa9yBpNp46DO/iP634Bf3HDhL7vQIqCgU70atbWHTtOGXyQzFtIkQ6e+wGsrBtKonqDAyl+RX63ffv2U+uGItCPvA8p8SicFVzuHVZAercDKdPJQ1+rs5Ov8rYV5VMW/ruT31QXlPDBGAcyHJSX6/i2YZVbjbrTQrh8+9pcdP2kiABcEN4MdiCjQfk6TdMzqxiHAESlF0zXWgiWg/tGmfdKkuQcgWrlLbi7QHTJAH03TdNzy9SjqheGMU49+XQcCBbjgJCvTGXZef9bi+gaUOfru0AcSL5sBvhHGEgC+kCYYt+yZeaE8BmP8E57+L6KgNvqb7EOJG9BC20ciH8Eky36CCbJ26yvPIxLIF1dO5Bweo55oRyPIHlF7UDCHFLVCzkxhkB3NXZsxeCYnxYUjRZH2ILUa0qD5U7oz9ZFo70xP+x3JIfW4MQy+8LzNoaQj/Sa1tJOjdeti0fLwuzIo78OBWv3DnQ0GnzT7FCwg1qK6NqOH4E0HwbM5sfm/V3hzKVwzE+XHokFumuwobvpDrzsOCUMiAYjeuiEkE/GFIBOLNaGla1qES6Xy+VyuVwul8vlcrlcLlevWf0Jiy07qx8TG6IAAAAASUVORK5CYII="
                                                    />
                                                </defs>
                                            </svg>
                                            <span className="volkhov">Contact Us - {offer.contact}</span>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        // </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Offers;