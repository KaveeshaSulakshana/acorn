// "use client";
// import React, {useState, useEffect} from "react";
// import Image from "next/image";
// import Link from "next/link";
//
// const Services = () => {
//     const services = [
//         {
//             image: "/services/corporate-travel.png",
//             title: "Corporate Travel",
//             description:
//                 "At Acorn Travels, we specialize in designing custom, reliable, and seamless corporate travel solutions.",
//             link: "#",
//         },
//         {
//             image: "/services/mice-tours.png",
//             title: "MICE Tours",
//             description:
//                 "At Acorn Travels, we excel in crafting tailored, professional, and seamless MICE experiences.",
//             link: "#",
//         },
//         {
//             image: "/services/leisure-travel.png",
//             title: "Leisure Travel",
//             description:
//                 "At Acorn Travels, we create personalized, unforgettable leisure travel experiences.",
//             link: "#",
//         },
//         {
//             image: "/services/flight-booking.png",
//             title: "Flight Booking",
//             description:
//                 "At Acorn Travels, we provide hassle-free, reliable, and customized flight booking services.",
//             link: "#",
//         },
//         {
//             image: "/services/student-travel.png",
//             title: "Student Travel",
//             description:
//                 "Experience the best of student travel with exclusive fares and special perks!",
//             link: "#",
//         },
//         {
//             image: "/services/visa-service.png",
//             title: "Visa Services",
//             description:
//                 "Our expert team simplifies the visa process with hassle-free guidance and support.",
//             link: "#",
//         },
//         {
//             image: "/services/travel-insurance.png",
//             title: "Travel Insurance",
//             description:
//                 "Stay protected with our comprehensive travel insurance solutions.",
//             link: "#",
//         },
//         {
//             image: "/services/foreign-currency.png",
//             title: "Foreign Currency Exchange",
//             description:
//                 "Secure and competitive foreign currency exchange services for your travels.",
//             link: "#",
//         },
//         {
//             image: "/services/meet-greet.png",
//             title: "Meet & Greet Services",
//             description:
//                 "Seamless airport assistance with our Meet & Greet services.",
//             link: "#",
//         },
//         {
//             image: "/services/hotel-booking.png",
//             title: "Hotel Bookings",
//             description:
//                 "Exclusive hotel booking services ensuring the best rates and comfort.",
//             link: "#",
//         },
//     ];
//
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [itemsPerView, setItemsPerView] = useState(1);
//
//     useEffect(() => {
//         const updateItemsPerView = () => {
//             if (typeof window !== "undefined") {
//                 if (window.innerWidth >= 1024) {
//                     setItemsPerView(3);
//                 } else if (window.innerWidth >= 768) {
//                     setItemsPerView(2);
//                 } else {
//                     setItemsPerView(1);
//                 }
//             }
//         };
//
//         updateItemsPerView();
//
//         window.addEventListener("resize", updateItemsPerView);
//
//         return () => window.removeEventListener("resize", updateItemsPerView);
//     }, []);
//
//     const totalSlides = Math.ceil(services.length / itemsPerView);
//
//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//     };
//
//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
//     };
//
//     return (
//         <div className="py-8 md:py-12 bg-[#F6F6F6]">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-2xl md:text-5xl font-bold text-[#3C3C3C] text-center mb-6 md:mb-8 volkhov">
//                     Our Services
//                 </h2>
//                 <p className="text-[#737373] text-base md:text-xl text-center mb-6 md:mb-8 max-w-3xl mx-auto volkhov">
//                     At Acorn Travels, we deliver tailored corporate and leisure travel solutions for seamless
//                     experiences
//                 </p>
//
//                 <div className="relative px-6 md:px-10 lg:px-16 mx-4">
//                     <div className="overflow-hidden">
//                         <div
//                             className="flex transition-transform duration-500 ease-in-out"
//                             style={{
//                                 transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
//                             }}
//                         >
//                             {services.map((service, index) => (
//                                 <div
//                                     key={index}
//                                     className={`flex-shrink-0 w-full ${itemsPerView === 2 ? "md:w-1/2" : itemsPerView === 3 ? "md:w-1/3" : ""} px-2 md:px-3`}
//                                 >
//                                     <div
//                                         className="bg-white rounded-2xl md:rounded-3xl overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow">
//                                         <div className="relative h-48 md:h-56 lg:h-64">
//                                             <Image
//                                                 src={service.image}
//                                                 alt={service.title}
//                                                 fill
//                                                 className="object-cover rounded-t-2xl md:rounded-t-3xl"
//                                                 sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                                             />
//                                         </div>
//                                         <div className="p-4 md:p-6 text-center">
//                                             <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#3C3C3C] mb-3 md:mb-4 volkhov">
//                                                 {service.title}
//                                             </h3>
//                                             <p className="text-[#737373] text-sm md:text-base mb-4 md:mb-6 volkhov line-clamp-3">
//                                                 {service.description}
//                                             </p>
//                                             <Link href={service.link}>
//                                                 <button
//                                                     className="bg-[#E1251B] text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-md hover:bg-red-600 transition-colors volkhov">
//                                                     Explore More
//                                                 </button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//
//                     <button
//                         onClick={prevSlide}
//                         className="absolute top-1/2 -left-2 md:-left-4 lg:-left-6 transform -translate-y-1/2 p-1 md:p-2 focus:outline-none"
//                         aria-label="Previous slide"
//                     >
//                         <svg width="40" height="40" className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14"
//                              viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <circle cx="30" cy="30" r="28.5" transform="rotate(-180 30 30)" stroke="#EB131B"
//                                     strokeWidth="3"/>
//                             <path d="M32.5715 22.2856L25.7144 29.9999L32.5715 37.7142" stroke="#EB131B" strokeWidth="3"
//                                   strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                     </button>
//                     <button
//                         onClick={nextSlide}
//                         className="absolute top-1/2 -right-2 md:-right-4 lg:-right-6 transform -translate-y-1/2 p-1 md:p-2 focus:outline-none"
//                         aria-label="Next slide"
//                     >
//                         <svg width="40" height="40" className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14"
//                              viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <circle cx="30" cy="30" r="28.5" transform="matrix(1 0 0 -1 0 60)" stroke="#EB131B"
//                                     strokeWidth="3"/>
//                             <path d="M27.4285 22.2856L34.2856 29.9999L27.4285 37.7142" stroke="#EB131B" strokeWidth="3"
//                                   strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Services;

// "use client";
// import React, {useState, useEffect} from "react";
// import Image from "next/image";
// import Link from "next/link";
//
// const Services = () => {
//     const services = [
//         {
//             image: "/services/corporate-travel.png",
//             title: "Corporate Travel",
//             description:
//                 "At Acorn Travels, we specialize in designing custom, reliable, and seamless corporate travel solutions.",
//             link: "#",
//         },
//         {
//             image: "/services/mice-tours.png",
//             title: "MICE Tours",
//             description:
//                 "At Acorn Travels, we excel in crafting tailored, professional, and seamless MICE experiences.",
//             link: "#",
//         },
//         {
//             image: "/services/leisure-travel.png",
//             title: "Leisure Travel",
//             description:
//                 "At Acorn Travels, we create personalized, unforgettable leisure travel experiences.",
//             link: "#",
//         },
//         {
//             image: "/services/flight-booking.png",
//             title: "Flight Booking",
//             description:
//                 "At Acorn Travels, we provide hassle-free, reliable, and customized flight booking services.",
//             link: "#",
//         },
//         {
//             image: "/services/student-travel.png",
//             title: "Student Travel",
//             description:
//                 "Experience the best of student travel with exclusive fares and special perks!",
//             link: "#",
//         },
//         {
//             image: "/services/visa-service.png",
//             title: "Visa Services",
//             description:
//                 "Our expert team simplifies the visa process with hassle-free guidance and support.",
//             link: "#",
//         },
//         {
//             image: "/services/travel-insurance.png",
//             title: "Travel Insurance",
//             description: "Stay protected with our comprehensive travel insurance solutions.",
//             link: "#",
//         },
//         {
//             image: "/services/foreign-currency.png",
//             title: "Foreign Currency Exchange",
//             description: "Secure and competitive foreign currency exchange services for your travels.",
//             link: "#",
//         },
//         {
//             image: "/services/meet-greet.png",
//             title: "Meet & Greet Services",
//             description: "Seamless airport assistance with our Meet & Greet services.",
//             link: "#",
//         },
//         {
//             image: "/services/hotel-booking.png",
//             title: "Hotel Bookings",
//             description: "Exclusive hotel booking services ensuring the best rates and comfort.",
//             link: "#",
//         },
//     ];
//
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [itemsPerView, setItemsPerView] = useState(1);
//
//     useEffect(() => {
//         const updateItemsPerView = () => {
//             if (typeof window !== "undefined") {
//                 if (window.innerWidth >= 1536) {
//                     setItemsPerView(4); // 2xl (4K, 2K)
//                 } else if (window.innerWidth >= 1024) {
//                     setItemsPerView(3); // lg (desktop)
//                 } else if (window.innerWidth >= 640) {
//                     setItemsPerView(2); // sm (tablet)
//                 } else {
//                     setItemsPerView(1); // mobile
//                 }
//             }
//         };
//
//         updateItemsPerView();
//         window.addEventListener("resize", updateItemsPerView);
//
//         return () => window.removeEventListener("resize", updateItemsPerView);
//     }, []);
//
//     const totalSlides = Math.ceil(services.length / itemsPerView);
//
//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//     };
//
//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
//     };
//
//     return (
//         <div className="relative py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 bg-[#F6F6F6]">
//             {/*<div*/}
//             {/*    className="absolute bg-[url('/pattern.png')] inset-0 w-full h-full"*/}
//             {/*></div>*/}
//             <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
//                 <h2
//                     className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[52px] font-bold
//                      text-[#3C3C3C] text-center mb-4 sm:mb-6 md:mb-8 lato"
//                 >
//                     Our Services
//                 </h2>
//                 <p
//                     className="text-[#737373] text-sm sm:text-base md:text-lg lg:text-xl
//                      text-center mb-6 sm:mb-8 md:mb-10 max-w-2xl sm:max-w-3xl mx-auto lato"
//                 >
//                     At Acorn Travels, we deliver tailored corporate and leisure travel solutions for seamless
//                     experiences
//                 </p>
//
//                 <div className="relative px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
//                     <div className="overflow-hidden">
//                         <div
//                             className="flex transition-transform duration-500 ease-in-out"
//                             style={{
//                                 transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
//                             }}
//                         >
//                             {services.map((service, index) => (
//                                 <div
//                                     key={index}
//                                     className={`flex-shrink-0 w-full
//                              sm:w-1/2
//                              lg:w-1/3
//                              2xl:w-1/4
//                              px-2 sm:px-3 md:px-4`}
//                                 >
//                                     <div
//                                         className="bg-white rounded-md
//                                overflow-hidden h-full hover:shadow-lg
//                                transition-shadow"
//                                     >
//                                         <div className="relative h-40 sm:h-48 md:h-52 lg:h-60 xl:h-64">
//                                             <Image
//                                                 src={service.image}
//                                                 alt={service.title}
//                                                 fill
//                                                 className="object-cover"
//                                                 sizes="(max-width: 640px) 100vw,
//                                 (max-width: 1024px) 50vw,
//                                 (max-width: 1536px) 33vw,
//                                 25vw"
//                                                 quality={85}
//                                                 loading="lazy"
//                                                 priority={false}
//                                             />
//                                         </div>
//                                         <div className="p-4 sm:p-5 md:p-6 text-center">
//                                             <h3
//                                                 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold
//                                    text-[#3C3C3C] mb-2 sm:mb-3 md:mb-4 lato"
//                                             >
//                                                 {service.title}
//                                             </h3>
//                                             <p
//                                                 className="text-[#737373] text-xs
//                                    mb-4 sm:mb-5 md:mb-6 lato line-clamp-3 min-h-12"
//                                             >
//                                                 {service.description}
//                                             </p>
//                                             <Link href={service.link}>
//                                                 <button
//                                                     className="bg-[#2B5597] cursor-pointer text-white text-xs font-bold px-3 sm:px-4 py-3 rounded-md hover:bg-blue-950 transition-colors lato"
//                                                 >
//                                                     Explore More
//                                                 </button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//
//                     {/* Navigation Buttons */}
//                     <button
//                         onClick={prevSlide}
//                         className="absolute top-1/2 left-2 sm:left-4 md:left-6 lg:left-8
//                        transform -translate-y-1/2 p-1 sm:p-2 focus:outline-none"
//                         aria-label="Previous slide"
//                     >
//                         {/*<svg*/}
//                         {/*    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"*/}
//                         {/*    viewBox="0 0 60 60"*/}
//                         {/*    fill="#2B5597"*/}
//                         {/*    xmlns="http://www.w3.org/2000/svg"*/}
//                         {/*>*/}
//                         {/*    <circle cx="30" cy="30" r="28.5" transform="rotate(-180 30 30)" stroke="none"*/}
//                         {/*            strokeWidth="3"/>*/}
//                         {/*    <path*/}
//                         {/*        d="M32.5715 22.2856L25.7144 29.9999L32.5715 37.7142"*/}
//                         {/*        stroke="none"*/}
//                         {/*        strokeWidth="3"*/}
//                         {/*        strokeLinecap="round"*/}
//                         {/*        strokeLinejoin="round"*/}
//                         {/*    />*/}
//                         {/*</svg>*/}
//                         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <circle cx="30" cy="30" r="28.5" transform="rotate(-180 30 30)" fill="#2B5597"
//                                     stroke="#2B5597" strokeWidth="3"/>
//                             <path d="M32.5715 22.2852L25.7144 29.9994L32.5715 37.7137" stroke="white" strokeWidth="3"
//                                   strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//
//                     </button>
//                     <button
//                         onClick={nextSlide}
//                         className="absolute top-1/2 -right-0 sm:-right-0 md:-right-0 lg:right-8
//                        transform -translate-y-1/2 p-1 focus:outline-none"
//                         aria-label="Next slide"
//                     >
//                         {/*<svg*/}
//                         {/*    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"*/}
//                         {/*    viewBox="0 0 60 60"*/}
//                         {/*    fill="none"*/}
//                         {/*    xmlns="http://www.w3.org/2000/svg"*/}
//                         {/*>*/}
//                         {/*    <circle cx="30" cy="30" r="28.5" transform="matrix(1 0 0 -1 0 60)" stroke="#EB131B"*/}
//                         {/*            strokeWidth="3"/>*/}
//                         {/*    <path*/}
//                         {/*        d="M27.4285 22.2856L34.2856 29.9999L27.4285 37.7142"*/}
//                         {/*        stroke="#EB131B"*/}
//                         {/*        strokeWidth="3"*/}
//                         {/*        strokeLinecap="round"*/}
//                         {/*        strokeLinejoin="round"*/}
//                         {/*    />*/}
//                         {/*</svg>*/}
//                         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <circle cx="30" cy="30" r="28.5" transform="matrix(1 0 0 -1 0 60)" fill="#2B5597"
//                                     stroke="#2B5597" strokeWidth="3"/>
//                             <path d="M27.4285 22.2861L34.2856 30.0004L27.4285 37.7147" stroke="white" strokeWidth="3"
//                                   strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//
//                     </button>
//
//                 </div>
//
//                 <div
//                     className="absolute justify-center mt-8 mb-4 transform left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-2.5 xl:space-x-3"
//                 >
//                     {services.map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => setCurrentIndex(index)}
//                             className={`w-2 h-1 sm:w-3 sm:h-1 md:w-4 md:h-1.5 lg:w-6 lg:h-1.5 xl:w-8 xl:h-2 2xl:w-10 2xl:h-2
//                        rounded-full transition-all duration-300 ${
//                                 index === currentIndex ? "bg-[#2B5597]" : "bg-[#DDDDDD] hover:bg-gray-400"
//                             }`}
//                             aria-label={`Go to slide ${index + 1}`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Services;


// "use client";
// import React, {useState, useEffect} from "react";
// import Image from "next/image";
// import Link from "next/link";
//
// const Services = () => {
//     const services = [
//         {
//             image: "/services/corporate-travel.png",
//             title: "Corporate Travel",
//             description:
//                 "At Acorn Travels, we specialize in designing custom, reliable, and seamless corporate travel solutions.",
//             link: "#",
//         },
//         {
//             image: "/services/mice-tours.png",
//             title: "MICE Tours",
//             description:
//                 "At Acorn Travels, we excel in crafting tailored, professional, and seamless MICE experiences.",
//             link: "#",
//         },
//         {
//             image: "/services/leisure-travel.png",
//             title: "Leisure Travel",
//             description:
//                 "At Acorn Travels, we create personalized, unforgettable leisure travel experiences.",
//             link: "#",
//         },
//         {
//             image: "/services/flight-booking.png",
//             title: "Flight Booking",
//             description:
//                 "At Acorn Travels, we provide hassle-free, reliable, and customized flight booking services.",
//             link: "#",
//         },
//         {
//             image: "/services/student-travel.png",
//             title: "Student Travel",
//             description:
//                 "Experience the best of student travel with exclusive fares and special perks!",
//             link: "#",
//         },
//         {
//             image: "/services/visa-service.png",
//             title: "Visa Services",
//             description:
//                 "Our expert team simplifies the visa process with hassle-free guidance and support.",
//             link: "#",
//         },
//         {
//             image: "/services/travel-insurance.png",
//             title: "Travel Insurance",
//             description: "Stay protected with our comprehensive travel insurance solutions.",
//             link: "#",
//         },
//         {
//             image: "/services/foreign-currency.png",
//             title: "Foreign Currency Exchange",
//             description: "Secure and competitive foreign currency exchange services for your travels.",
//             link: "#",
//         },
//         {
//             image: "/services/meet-greet.png",
//             title: "Meet & Greet Services",
//             description: "Seamless airport assistance with our Meet & Greet services.",
//             link: "#",
//         },
//         {
//             image: "/services/hotel-booking.png",
//             title: "Hotel Bookings",
//             description: "Exclusive hotel booking services ensuring the best rates and comfort.",
//             link: "#",
//         },
//     ];
//
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [itemsPerView, setItemsPerView] = useState(1);
//
//     useEffect(() => {
//         const updateItemsPerView = () => {
//             if (typeof window !== "undefined") {
//                 if (window.innerWidth >= 1536) {
//                     setItemsPerView(4); // 2xl (4K, 2K)
//                 } else if (window.innerWidth >= 1024) {
//                     setItemsPerView(3); // lg (desktop)
//                 } else if (window.innerWidth >= 640) {
//                     setItemsPerView(2); // sm (tablet)
//                 } else {
//                     setItemsPerView(1); // mobile
//                 }
//             }
//         };
//
//         updateItemsPerView();
//         window.addEventListener("resize", updateItemsPerView);
//
//         return () => window.removeEventListener("resize", updateItemsPerView);
//     }, []);
//
//     // Slider logic: 3 indicators
//     // Indicator 1: Cards 0-3 (4 cards)
//     // Indicator 2: Cards 4-7 (4 cards)
//     // Indicator 3: Cards 6-9 (2 from previous + last 2, total 4 cards)
//     const indicators = [
//         {start: 0, end: 4},   // First 4 cards
//         {start: 4, end: 8},   // Next 4 cards
//         {start: 6, end: 10},  // Last 2 from previous + last 2
//     ];
//
//     const totalIndicators = indicators.length;
//
//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % totalIndicators);
//     };
//
//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + totalIndicators) % totalIndicators);
//     };
//
//     const getVisibleServices = () => {
//         const {start, end} = indicators[currentIndex];
//         return services.slice(start, end);
//     };
//
//     return (
//         <div className="relative py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 bg-[#F6F6F6]">
//             <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
//                 <h2
//                     className="text-xl sm:text-2xl md:text-3xl lg:text-[52px] font-bold text-[#3C3C3C] text-center mb-4 sm:mb-6 md:mb-8 lato"
//                 >
//                     Our Services
//                 </h2>
//                 <p
//                     className="text-[#737373] text-sm sm:text-base md:text-lg lg:text-xl text-center mb-6 sm:mb-8 md:mb-10 max-w-2xl sm:max-w-3xl mx-auto lato"
//                 >
//                     At Acorn Travels, we deliver tailored corporate and leisure travel solutions for seamless
//                     experiences
//                 </p>
//
//                 <div className="relative px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
//                     <div className="overflow-hidden">
//                         <div
//                             className="flex transition-transform duration-500 ease-in-out"
//                             style={{
//                                 transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
//                             }}
//                         >
//                             {getVisibleServices().map((service, index) => (
//                                 <div
//                                     key={index}
//                                     className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4 px-2 sm:px-3 md:px-4`}
//                                 >
//                                     <div
//                                         className="bg-white rounded-md overflow-hidden h-full hover:shadow-lg transition-shadow"
//                                     >
//                                         <div className="relative h-40 sm:h-48 md:h-52 lg:h-60 xl:h-64">
//                                             <Image
//                                                 src={service.image}
//                                                 alt={service.title}
//                                                 fill
//                                                 className="object-cover"
//                                                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
//                                                 quality={85}
//                                                 loading="lazy"
//                                                 priority={false}
//                                             />
//                                         </div>
//                                         <div className="p-4 sm:p-5 md:p-6 text-center">
//                                             <h3
//                                                 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#3C3C3C] mb-2 sm:mb-3 md:mb-4 lato"
//                                             >
//                                                 {service.title}
//                                             </h3>
//                                             <p
//                                                 className="text-[#737373] text-xs sm:text-sm md:text-base lg:text-base mb-4 sm:mb-5 md:mb-6 lato line-clamp-3 min-h-12 sm:min-h-14 md:min-h-16"
//                                             >
//                                                 {service.description}
//                                             </p>
//                                             <Link href={service.link}>
//                                                 <button
//                                                     className="bg-[#2B5597] cursor-pointer text-white text-xs sm:text-sm lg:text-sm font-bold px-3 sm:px-4 py-2 sm:py-3 rounded-md hover:bg-blue-950 transition-colors lato"
//                                                 >
//                                                     Explore More
//                                                 </button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//
//                     {/* Navigation Buttons */}
//                     <button
//                         onClick={prevSlide}
//                         className="absolute top-1/2 left-0 sm:left-2 md:left-4 lg:left-6 transform -translate-y-1/2 p-1 sm:p-2 focus:outline-none"
//                         aria-label="Previous slide"
//                     >
//                         <svg
//                             width="40"
//                             height="40"
//                             viewBox="0 0 60 60"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
//                         >
//                             <circle cx="30" cy="30" r="28.5" transform="rotate(-180 30 30)" fill="#2B5597"
//                                     stroke="#2B5597" strokeWidth="3"/>
//                             <path d="M32.5715 22.2852L25.7144 29.9994L32.5715 37.7137" stroke="white" strokeWidth="3"
//                                   strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                     </button>
//                     <button
//                         onClick={nextSlide}
//                         className="absolute top-1/2 right-0 sm:right-2 md:right-4 lg:right-6 transform -translate-y-1/2 p-1 sm:p-2 focus:outline-none"
//                         aria-label="Next slide"
//                     >
//                         <svg
//                             width="40"
//                             height="40"
//                             viewBox="0 0 60 60"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
//                         >
//                             <circle cx="30" cy="30" r="28.5" transform="matrix(1 0 0 -1 0 60)" fill="#2B5597"
//                                     stroke="#2B5597" strokeWidth="3"/>
//                             <path d="M27.4285 22.2861L34.2856 30.0004L27.4285 37.7147" stroke="white" strokeWidth="3"
//                                   strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                     </button>
//                 </div>
//
//                 {/* Indicators */}
//                 <div
//                     className="flex justify-center mt-6 sm:mt-8 md:mt-10 mb-4 sm:mb-6 space-x-1 sm:space-x-1.5 md:space-x-2"
//                 >
//                     {indicators.map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => setCurrentIndex(index)}
//                             className={`w-2 h-1 sm:w-3 sm:h-1.5 md:w-4 md:h-2 lg:w-5 lg:h-2 rounded-full transition-all duration-300 ${
//                                 index === currentIndex ? "bg-[#2B5597]" : "bg-[#DDDDDD] hover:bg-gray-400"
//                             }`}
//                             aria-label={`Go to slide ${index + 1}`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Services;


"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
    const services = [
        {
            image: "/services/corporate-travel.png",
            title: "Corporate Travel",
            description:
                "At Acorn Travels, we specialize in designing custom, reliable, and seamless corporate travel solutions.",
            link: "/corporate-travel#corporate-travel",
        },
        {
            image: "/services/mice-tours.png",
            title: "MICE Tours",
            description:
                "At Acorn Travels, we excel in crafting tailored, professional, and seamless MICE experiences.",
            link: "/corporate-travel#mice-travel",
        },
        {
            image: "/services/leisure-travel.png",
            title: "Leisure Travel",
            description:
                "At Acorn Travels, we create personalized, unforgettable leisure travel experiences.",
            link: "/leisure-travel",
        },
        {
            image: "/services/flight-booking.png",
            title: "Flight Booking",
            description:
                "At Acorn Travels, we provide hassle-free, reliable, and customized flight booking services.",
            link: "/flight-booking",
        },
        {
            image: "/services/student-travel.png",
            title: "Student Travel",
            description:
                "Experience the best of student travel with exclusive fares and special perks!",
            link: "/student-travel",
        },
        {
            image: "/services/visa-service.png",
            title: "Visa Services",
            description:
                "Our expert team simplifies the visa process with hassle-free guidance and support.",
            link: "/visa",
        },
        {
            image: "/services/travel-insurance.png",
            title: "Travel Insurance",
            description: "Stay protected with our comprehensive travel insurance solutions.",
            link: "#",
        },
        {
            image: "/services/foreign-currency.png",
            title: "Foreign Currency Exchange",
            description: "Secure and competitive foreign currency exchange services for your travels.",
            link: "#",
        },
        {
            image: "/services/travel-insurance.png",
            title: "Travel Insurance",
            description: "Stay protected with our comprehensive travel insurance solutions.",
            link: "#",
        },
        {
            image: "/services/foreign-currency.png",
            title: "Foreign Currency Exchange",
            description: "Secure and competitive foreign currency exchange services for your travels.",
            link: "#",
        },
        {
            image: "/services/meet-greet.png",
            title: "Meet & Greet Services",
            description: "Seamless airport assistance with our Meet & Greet services.",
            link: "#",
        },
        {
            image: "/services/hotel-booking.png",
            title: "Hotel Bookings",
            description: "Exclusive hotel booking services ensuring the best rates and comfort.",
            link: "#",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

    useEffect(() => {
        const updateItemsPerView = () => {
            if (typeof window !== "undefined") {
                if (window.innerWidth >= 1280) {
                    setItemsPerView(4); // lg and above (desktop) - 4 items per slide
                }
                else if (window.innerWidth >= 820 ){
                    setItemsPerView(3);
                }
                else if (window.innerWidth >= 640) {
                    setItemsPerView(2); // sm to md (tablet) - 2 items per slide
                } else {
                    setItemsPerView(1); // mobile - 1 item per slide
                }
            }
        };

        updateItemsPerView();
        window.addEventListener("resize", updateItemsPerView);

        return () => window.removeEventListener("resize", updateItemsPerView);
    }, []);

    // Calculate total slides based on items per view
    const totalSlides = Math.ceil(services.length / itemsPerView);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (slideIndex: number ) => {
        setCurrentIndex(slideIndex);
    };

    // Get current slide services
    // const getCurrentSlideServices = () => {
    //     const startIndex = currentIndex * itemsPerView;
    //     return services.slice(startIndex, startIndex + itemsPerView);
    // };

    return (
        <div className="relative py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 bg-[#F6F6F6]">
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[52px] font-bold
                     text-[#3C3C3C] text-center mb-4 sm:mb-6 md:mb-8 lato"
                >
                    Our Services
                </h2>
                <p
                    className="text-[#737373] text-base sm:text-lg md:text-xl leading-8
                     text-center mb-4 sm:mb-6 md:mb-8 max-w-2xl sm:max-w-3xl mx-auto lato"
                >
                    At Acorn Travels, we deliver tailored corporate and leisure travel solutions for seamless
                    experiences
                </p>

                <div className="relative px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    className="flex-shrink-0 w-full flex"
                                >
                                    {services
                                        .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
                                        .map((service, serviceIndex) => (
                                            <div
                                                key={`${slideIndex}-${serviceIndex}`}
                                                className={`flex-shrink-0 ${
                                                    itemsPerView === 1
                                                        ? 'w-full'
                                                        : itemsPerView === 2
                                                            ? 'w-1/2' : itemsPerView === 3 ? 'w-1/3'
                                                            : 'w-1/4'
                                                } px-2 sm:px-3 md:px-4`}
                                            >
                                                <div
                                                    className="bg-white rounded-md
                                           overflow-hidden h-full hover:shadow-lg
                                           transition-shadow"
                                                >
                                                    <div className="relative h-32 sm:h-40 md:h-48 lg:h-60 xl:h-64">
                                                        <Image
                                                            src={service.image}
                                                            alt={service.title}
                                                            fill
                                                            className="object-cover"
                                                            sizes="(max-width: 640px) 100vw,
                                                            (max-width: 1024px) 50vw,
                                                            25vw"
                                                            quality={85}
                                                            loading="lazy"
                                                            priority={false}
                                                        />
                                                    </div>
                                                    <div className="p-3 sm:p-4 md:p-5 lg:p-6 text-center">
                                                        <h3
                                                            className="text-lg sm:text-xl md:text-xl lg:text-2xl min-h-16 font-bold
                                                   text-[#3C3C3C] mb-2 sm:mb-3 md:mb-4 lato"
                                                        >
                                                            {service.title}
                                                        </h3>
                                                        <p
                                                            className="text-[#737373] text-sm sm:text-base md:text-base lg:text-base
                                                   mb-3 sm:mb-4 md:mb-5 lg:mb-6 lato line-clamp-3 min-h-16"
                                                        >
                                                            {service.description}
                                                        </p>
                                                        <Link href={service.link}>
                                                            <button
                                                                className="bg-[#2B5597] cursor-pointer text-white text-xs sm:text-sm md:text-sm lg:text-xs font-bold px-3 sm:px-4 py-2 sm:py-3 rounded-md hover:bg-blue-950 transition-colors lato"
                                                            >
                                                                Explore More
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    {/* Fill empty spaces in the last slide if needed */}
                                    {slideIndex === totalSlides - 1 &&
                                        services.slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView).length < itemsPerView &&
                                        Array.from({
                                            length: itemsPerView - services.slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView).length
                                        }).map((_, emptyIndex) => (
                                            <div
                                                key={`empty-${slideIndex}-${emptyIndex}`}
                                                className={`flex-shrink-0 ${
                                                    itemsPerView === 1
                                                        ? 'w-full'
                                                        : itemsPerView === 2
                                                            ? 'w-1/2'
                                                            : 'w-1/4'
                                                } px-2 sm:px-3 md:px-4`}
                                            >
                                                <div className="invisible">
                                                    {/* Invisible placeholder to maintain layout */}
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-0 sm:left-2 md:left-4 lg:left-6
                       transform -translate-y-1/2 p-1 sm:p-2 focus:outline-none z-10"
                        aria-label="Previous slide"
                    >
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 60 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12"
                        >
                            <circle cx="30" cy="30" r="28.5" transform="rotate(-180 30 30)" fill="#2B5597"
                                    stroke="#2B5597" strokeWidth="3"/>
                            <path d="M32.5715 22.2852L25.7144 29.9994L32.5715 37.7137" stroke="white" strokeWidth="3"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-0 sm:right-2 md:right-4 lg:right-6
                       transform -translate-y-1/2 p-1 sm:p-2 focus:outline-none z-10"
                        aria-label="Next slide"
                    >
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 60 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12"
                        >
                            <circle cx="30" cy="30" r="28.5" transform="matrix(1 0 0 -1 0 60)" fill="#2B5597"
                                    stroke="#2B5597" strokeWidth="3"/>
                            <path d="M27.4285 22.2861L34.2856 30.0004L27.4285 37.7147" stroke="white" strokeWidth="3"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                {/* Slide Indicators */}
                <div
                    className="hidden lg:flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3"
                >
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-2 2xl:w-10 2xl:h-2 
                       rounded-full transition-all duration-300 ${
                                index === currentIndex ? "bg-[#2B5597]" : "bg-[#DDDDDD] hover:bg-gray-400"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;