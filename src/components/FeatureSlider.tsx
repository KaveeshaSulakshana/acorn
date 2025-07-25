// // "use client";
// // import React, {useState} from 'react';
// // import Image from "next/image";
// //
// // interface Slide {
// //     url: string;
// //     title: string;
// // }
// //
// // interface ServiceSliderProps {
// //     slides: Slide[];
// // }
// //
// // const ServiceSlider: React.FC<ServiceSliderProps> = ({slides}) => {
// //     const [currentIndex, setCurrentIndex] = useState(0);
// //
// //     // Define items per view for different breakpoints
// //     const itemsPerView = {
// //         mobile: 3,
// //         tablet: 2,
// //         desktop: 2,
// //     };
// //
// //     // Handle dot click to navigate
// //     const handleDotClick = (index: number) => {
// //         setCurrentIndex(index);
// //     };
// //
// //     // Calculate total number of slide groups (for dots)
// //     const totalSlides = Math.max(1, Math.ceil(slides.length / itemsPerView.desktop));
// //
// //     // Prevent rendering if no slides
// //     if (!slides || slides.length === 0) {
// //         return <div className="text-center py-8">No slides available</div>;
// //     }
// //
// //     return (
// //         <div className="relative max-w-7xl mx-auto overflow-hidden py-8 mb-6 md:py-16">
// //             {/* Slider Container */}
// //             <div
// //                 className="flex transition-transform duration-500 ease-in-out"
// //                 style={{
// //                     transform: `translateX(-${(currentIndex * 100) / itemsPerView.desktop}%)`,
// //                 }}
// //             >
// //                 {slides.map((slide, index) => (
// //                     <div
// //                         key={index}
// //                         className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-4 sm:px-2 md:px-4"
// //                     >
// //                         <div className="flex flex-col items-center">
// //                             <div
// //                                 className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-white
// //                 hover:bg-[#64646F33]/40 transition-colors rounded-full
// //                 flex items-center justify-center shadow-2xl"
// //                             >
// //                                 <Image
// //                                     src={slide.url}
// //                                     alt={slide.title}
// //                                     width={48}
// //                                     height={48}
// //                                     className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
// //                                 />
// //                             </div>
// //                             <p
// //                                 className="mt-4 text-[#000000] text-base sm:text-lg md:text-xl
// //                 font-normal volkhov text-center max-w-xs sm:max-w-sm md:max-w-md"
// //                             >
// //                                 {slide.title}
// //                             </p>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //
// //             {/* Navigation Dots */}
// //             {slides.length > itemsPerView.desktop && (
// //                 <div
// //                     className="absolute mt-5 bottom-4 sm:bottom-6 md:bottom-8 left-1/2
// //           transform -translate-x-1/2 flex gap-x-2 sm:gap-x-3 md:gap-x-4 z-10"
// //                 >
// //                     {Array.from({length: totalSlides}).map((_, index) => (
// //                         <button
// //                             key={index}
// //                             onClick={() => handleDotClick(index)}
// //                             className={`w-4 h-1 sm:w-6 sm:h-2 md:w-9 md:h-2 rounded-full
// //                 transition-all duration-300
// //                 ${index === currentIndex ? 'bg-[#2B5597] scale-125' : 'bg-[#DDDDDD] hover:bg-gray-400 scale-100'}`}
// //                             aria-label={`Go to slide group ${index + 1}`}
// //                         />
// //                     ))}
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };
// //
// // export default ServiceSlider;
//
//
// // "use client";
// // import React from 'react';
// // import Image from "next/image";
// //
// // interface Slide {
// //     url: string;
// //     title: string;
// // }
// //
// // interface ServiceSliderProps {
// //     slides: Slide[];
// // }
// //
// // const ServiceSlider: React.FC<ServiceSliderProps> = ({slides}) => {
// //     // Prevent rendering if no slides
// //     if (!slides || slides.length === 0) {
// //         return <div className="text-center py-8">No slides available</div>;
// //     }
// //
// //     return (
// //         <div className="relative max-w-6xl mx-auto">
// //             <div
// //                 className="grid grid-flow-col auto-cols-[minmax(280px,1fr)] sm:auto-cols-[minmax(296px,1fr)]
// //           gap-1 overflow-x-auto snap-x snap-mandatory scroll-smooth py-4
// //           scrollbar-hide"
// //                 style={{scrollbarWidth: "none", msOverflowStyle: "none"}}
// //             >
// //                 {slides.map((slide, index) => (
// //                     <div
// //                         key={index}
// //                         className="flex flex-col items-center justify-center snap-center w-full h-full"
// //                     >
// //                         <div
// //                             className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-white
// //                 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl
// //                 transition-shadow duration-300"
// //                         >
// //                             <Image
// //                                 src={slide.url}
// //                                 alt={slide.title}
// //                                 width={48}
// //                                 height={48}
// //                                 className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
// //                             />
// //                         </div>
// //                         <p
// //                             className="mt-4 text-[#000000] text-base sm:text-lg md:text-xl
// //                 font-normal text-center max-w-xs sm:max-w-sm md:max-w-md"
// //                         >
// //                             {slide.title}
// //                         </p>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };
// //
// // export default ServiceSlider;
//
// // "use client";
// // import React, { useState, useEffect } from 'react';
// // import Image from "next/image";
// //
// // interface Slide {
// //     url: string;
// //     title: string;
// // }
// //
// // interface ServiceSliderProps {
// //     slides: Slide[];
// // }
// //
// // const ServiceSlider: React.FC<ServiceSliderProps> = ({ slides }) => {-
// //     return (
// //         <div className="relative max-w-7xl mx-auto py-8 md:py-16">
// //             {
// //                 slides.map((service, index) => (
// //                     <div className="flex" key={index}>
// //                         <div className="flex flex-col items-center md:mt-8 text-center">
// //                             <div className={`lg:w-35 lg:h-35 w-18 h-18 sm:w-25 sm:h-25 bg-white transition-colors rounded-full hover:bg-[#64646F33]/60 flex items-center justify-center shadow-2xl`}>
// //                                 <Image src={service.url} alt="doc" width={40} height={40} className={`"sm:w-16 sm:h-16" `} />
// //                             </div>
// //                             <p className="mt-2 text-[#000000] text-sm sm:text-base md:text-lg font-normal lato max-w-[120px] sm:max-w-[150px]">
// //                                 {service.title}
// //                             </p>
// //                         </div>
// //                     </div>
// //                 ))
// //             }
// //
// //             {slides.length > itemsPerView.desktop && (
// //                 <div
// //                     className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2
// //           transform -translate-x-1/2 flex gap-x-2 sm:gap-x-3 md:gap-x-4 z-10 mt-5"
// //                 >
// //                     {Array.from({ length: totalSlides }).map((_, index) => (
// //                         <button
// //                             key={index}
// //                             onClick={() => handleDotClick(index)}
// //                             className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full
// //                 transition-all duration-300
// //                 ${index === currentIndex ? 'bg-[#2B5597] scale-125' : 'bg-[#DDDDDD] hover:bg-gray-400 scale-100'}`}
// //                             aria-label={`Go to slide group ${index + 1}`}
// //                         />
// //                     ))}
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };
// //
// // export default ServiceSlider;
//
// "use client";
// import React, {useState, useEffect, useRef, useCallback} from 'react';
// import Image from "next/image";
//
// interface Slide {
//     url: string;
//     title: string;
// }
//
// interface ServiceSliderProps {
//     slides: Slide[];
//     className?: string;
// }
//
// interface ItemsPerView {
//     mobile: number;
//     tablet: number;
//     desktop: number;
// }
//
// const ServiceSlider: React.FC<ServiceSliderProps> = ({
//                                                          slides,
//                                                          className = ""
//                                                      }) => {
//     const [currentIndex, setCurrentIndex] = useState<number>(0);
//     const [itemsPerView, setItemsPerView] = useState<ItemsPerView>({
//         mobile: 2,
//         tablet: 3,
//         desktop: 4
//     });
//     const [currentBreakpoint, setCurrentBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
//     const [isClient, setIsClient] = useState<boolean>(false);
//     const [isDragging, setIsDragging] = useState<boolean>(false);
//     const [startX, setStartX] = useState<number>(0);
//     const [scrollLeft, setScrollLeft] = useState<number>(0);
//
//     const sliderRef = useRef<HTMLDivElement>(null);
//     const containerRef = useRef<HTMLDivElement>(null);
//
//     // Handle client-side mounting
//     useEffect(() => {
//         setIsClient(true);
//     }, []);
//
//     // Responsive breakpoint detection
//     const updateBreakpoint = useCallback(() => {
//         if (typeof window === 'undefined') return;
//
//         const width = window.innerWidth;
//         if (width >= 1024) {
//             setCurrentBreakpoint('desktop');
//         } else if (width >= 768) {
//             setCurrentBreakpoint('tablet');
//         } else {
//             setCurrentBreakpoint('mobile');
//         }
//     }, []);
//
//     useEffect(() => {
//         if (!isClient) return;
//
//         updateBreakpoint();
//
//         const handleResize = () => {
//             updateBreakpoint();
//         };
//
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, [isClient, updateBreakpoint]);
//
//     // Calculate current items per view and total slides
//     const getCurrentItemsPerView = (): number => {
//         return itemsPerView[currentBreakpoint];
//     };
//
//     const totalSlides = Math.ceil(slides.length / getCurrentItemsPerView());
//     const showIndicators = currentBreakpoint === 'desktop' && slides.length > getCurrentItemsPerView();
//
//     // Navigation handlers
//     const handleDotClick = useCallback((index: number) => {
//         setCurrentIndex(index);
//     }, []);
//
//     const handleNext = useCallback(() => {
//         setCurrentIndex(prev => (prev + 1) % totalSlides);
//     }, [totalSlides]);
//
//     const handlePrev = useCallback(() => {
//         setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides);
//     }, [totalSlides]);
//
//     // Touch/Mouse drag handlers for mobile and tablet
//     const handleMouseDown = useCallback((e: React.MouseEvent) => {
//         if (currentBreakpoint === 'desktop') return;
//
//         setIsDragging(true);
//         const pageX = e.pageX;
//         const slider = sliderRef.current;
//         if (slider) {
//             setStartX(pageX - slider.offsetLeft);
//             setScrollLeft(slider.scrollLeft);
//         }
//     }, [currentBreakpoint]);
//
//     const handleTouchStart = useCallback((e: React.TouchEvent) => {
//         if (currentBreakpoint === 'desktop') return;
//
//         setIsDragging(true);
//         const touch = e.touches[0];
//         const slider = sliderRef.current;
//         if (slider) {
//             setStartX(touch.pageX - slider.offsetLeft);
//             setScrollLeft(slider.scrollLeft);
//         }
//     }, [currentBreakpoint]);
//
//     const handleMouseMove = useCallback((e: React.MouseEvent) => {
//         if (!isDragging || currentBreakpoint === 'desktop') return;
//
//         e.preventDefault();
//         const pageX = e.pageX;
//         const slider = sliderRef.current;
//         if (slider) {
//             const x = pageX - slider.offsetLeft;
//             const walk = (x - startX) * 2;
//             slider.scrollLeft = scrollLeft - walk;
//         }
//     }, [isDragging, startX, scrollLeft, currentBreakpoint]);
//
//     const handleTouchMove = useCallback((e: React.TouchEvent) => {
//         if (!isDragging || currentBreakpoint === 'desktop') return;
//
//         const touch = e.touches[0];
//         const slider = sliderRef.current;
//         if (slider) {
//             const x = touch.pageX - slider.offsetLeft;
//             const walk = (x - startX) * 2;
//             slider.scrollLeft = scrollLeft - walk;
//         }
//     }, [isDragging, startX, scrollLeft, currentBreakpoint]);
//
//     const handleDragEnd = useCallback(() => {
//         setIsDragging(false);
//     }, []);
//
//     // Keyboard navigation
//     useEffect(() => {
//         const handleKeyDown = (e: KeyboardEvent) => {
//             if (currentBreakpoint !== 'desktop' || !showIndicators) return;
//
//             switch (e.key) {
//                 case 'ArrowLeft':
//                     e.preventDefault();
//                     handlePrev();
//                     break;
//                 case 'ArrowRight':
//                     e.preventDefault();
//                     handleNext();
//                     break;
//             }
//         };
//
//         window.addEventListener('keydown', handleKeyDown);
//         return () => window.removeEventListener('keydown', handleKeyDown);
//     }, [currentBreakpoint, showIndicators, handleNext, handlePrev]);
//
//     // Auto-play functionality (optional)
//     useEffect(() => {
//         if (currentBreakpoint !== 'desktop' || !showIndicators) return;
//
//         const interval = setInterval(() => {
//             handleNext();
//         }, 5000); // Auto-advance every 5 seconds
//
//         return () => clearInterval(interval);
//     }, [currentBreakpoint, showIndicators, handleNext]);
//
//     // Render slide content
//     const renderSlides = () => {
//         if (currentBreakpoint === 'desktop') {
//             // Desktop: Paginated slides with indicators
//             return (
//                 <div className="overflow-hidden">
//                     <div
//                         className="flex transition-transform duration-500 ease-in-out"
//                         style={{
//                             transform: `translateX(-${currentIndex * 100}%)`
//                         }}
//                     >
//                         {Array.from({length: totalSlides}).map((_, slideIndex) => (
//                             <div
//                                 key={slideIndex}
//                                 className="flex-shrink-0 w-full flex justify-center gap-4 lg:gap-6 xl:gap-8"
//                             >
//                                 {slides
//                                     .slice(slideIndex * getCurrentItemsPerView(), (slideIndex + 1) * getCurrentItemsPerView())
//                                     .map((service, serviceIndex) => (
//                                         <ServiceCard
//                                             key={`${slideIndex}-${serviceIndex}`}
//                                             service={service}
//                                             breakpoint={currentBreakpoint}
//                                         />
//                                     ))}
//
//                                 {/* Fill empty spaces in the last slide */}
//                                 {slideIndex === totalSlides - 1 &&
//                                     slides.slice(slideIndex * getCurrentItemsPerView(), (slideIndex + 1) * getCurrentItemsPerView()).length < getCurrentItemsPerView() &&
//                                     Array.from({
//                                         length: getCurrentItemsPerView() - slides.slice(slideIndex * getCurrentItemsPerView(), (slideIndex + 1) * getCurrentItemsPerView()).length
//                                     }).map((_, emptyIndex) => (
//                                         <div
//                                             key={`empty-${slideIndex}-${emptyIndex}`}
//                                             className="flex-shrink-0 w-[200px] lg:w-[220px] xl:w-[240px]"
//                                         />
//                                     ))}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             );
//         } else {
//             // Mobile/Tablet: Horizontal scroll
//             return (
//                 <div
//                     ref={sliderRef}
//                     className={`flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 cursor-grab ${
//                         isDragging ? 'cursor-grabbing' : ''
//                     }`}
//                     style={{
//                         scrollbarWidth: 'none',
//                         msOverflowStyle: 'none',
//                         WebkitOverflowScrolling: 'touch'
//                     }}
//                     onMouseDown={handleMouseDown}
//                     onMouseMove={handleMouseMove}
//                     onMouseUp={handleDragEnd}
//                     onMouseLeave={handleDragEnd}
//                     onTouchStart={handleTouchStart}
//                     onTouchMove={handleTouchMove}
//                     onTouchEnd={handleDragEnd}
//                 >
//                     {slides.map((service, index) => (
//                         <ServiceCard
//                             key={index}
//                             service={service}
//                             breakpoint={currentBreakpoint}
//                         />
//                     ))}
//                 </div>
//             );
//         }
//     };
//
//     if (!isClient) {
//         // Server-side rendering placeholder
//         return (
//             <div className={`relative max-w-7xl mx-auto py-8 md:py-16 ${className}`}>
//                 <div className="flex justify-center gap-4 lg:gap-6 xl:gap-8">
//                     {slides.slice(0, 4).map((service, index) => (
//                         <ServiceCard
//                             key={index}
//                             service={service}
//                             breakpoint="desktop"
//                         />
//                     ))}
//                 </div>
//             </div>
//         );
//     }
//
//     return (
//         <div
//             ref={containerRef}
//             className={`relative max-w-7xl mx-auto py-8 md:py-16 ${className}`}
//             role="region"
//             aria-label="Service slider"
//         >
//
//             {/* Slider Content */}
//             <div className="px-4 sm:px-6 lg:px-8">
//                 {renderSlides()}
//             </div>
//
//             {showIndicators && (
//                 <div className="flex justify-center mt-8 gap-2 sm:gap-3">
//                     {Array.from({length: totalSlides}).map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => handleDotClick(index)}
//                             className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300
//                                      focus:outline-none focus:ring-2 focus:ring-[#2B5597] focus:ring-offset-2
//                                      ${index === currentIndex
//                                 ? 'bg-[#2B5597] scale-125 shadow-md'
//                                 : 'bg-[#DDDDDD] hover:bg-gray-400 hover:scale-110'
//                             }`}
//                             aria-label={`Go to slide group ${index + 1}`}
//                             aria-current={index === currentIndex ? 'true' : 'false'}
//                         />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };
//
// // Service Card Component
// interface ServiceCardProps {
//     service: Slide;
//     breakpoint: 'mobile' | 'tablet' | 'desktop';
// }
//
// const ServiceCard: React.FC<ServiceCardProps> = ({service, breakpoint}) => {
//     const getCardSize = () => {
//         switch (breakpoint) {
//             case 'mobile':
//                 return 'w-[140px] h-[140px]';
//             case 'tablet':
//                 return 'w-[160px] h-[160px]';
//             case 'desktop':
//                 return 'w-[200px] h-[200px] lg:w-[220px] lg:h-[220px] xl:w-[240px] xl:h-[240px]';
//             default:
//                 return 'w-[140px] h-[140px]';
//         }
//     };
//
//     const getIconSize = () => {
//         switch (breakpoint) {
//             case 'mobile':
//                 return {width: 32, height: 32};
//             case 'tablet':
//                 return {width: 36, height: 36};
//             case 'desktop':
//                 return {width: 40, height: 40};
//             default:
//                 return {width: 32, height: 32};
//         }
//     };
//
//     const getTextSize = () => {
//         switch (breakpoint) {
//             case 'mobile':
//                 return 'text-sm';
//             case 'tablet':
//                 return 'text-base';
//             case 'desktop':
//                 return 'text-lg';
//             default:
//                 return 'text-sm';
//         }
//     };
//
//     const iconSize = getIconSize();
//
//     return (
//         <div className="flex flex-col items-center text-center flex-shrink-0">
//             <div className={`${getCardSize()} bg-white transition-all duration-300 rounded-full
//                           hover:bg-gray-50 hover:shadow-xl hover:scale-105
//                           flex items-center justify-center shadow-lg
//                           border border-gray-100 cursor-pointer
//                           focus-within:ring-2 focus-within:ring-[#2B5597] focus-within:ring-offset-2`}>
//                 <div className="relative">
//                     <Image
//                         src={service.url}
//                         alt={service.title}
//                         width={iconSize.width}
//                         height={iconSize.height}
//                         className="object-contain transition-transform duration-300 hover:scale-110"
//                         priority={false}
//                         loading="lazy"
//                     />
//                 </div>
//             </div>
//             <p className={`mt-3 sm:mt-4 text-[#000000] ${getTextSize()} font-normal lato
//                          max-w-[120px] sm:max-w-[150px] lg:max-w-[180px]
//                          leading-tight break-words hyphens-auto`}>
//                 {service.title}
//             </p>
//         </div>
//     );
// };
//
// export default ServiceSlider;


// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from "next/image";
//
// interface Slide {
//     url: string;
//     title: string;
// }
//
// interface ServiceSliderProps {
//     slides: Slide[];
// }
//
// const ServiceSlider: React.FC<ServiceSliderProps> = ({ slides }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isClient, setIsClient] = useState(false);
//
//     // Items per view for different screen sizes
//     const itemsPerView = {
//         mobile: 1,
//         tablet: 2,
//         desktop: 4
//     };
//
//     useEffect(() => {
//         setIsClient(true);
//     }, []);
//
//     // Calculate total slides based on desktop view (4 items per slide)
//     const totalSlides = Math.ceil(slides.length / itemsPerView.desktop);
//
//     const handleDotClick = (index: number) => {
//         setCurrentIndex(index);
//     };
//
//     const handleNext = () => {
//         setCurrentIndex((prev) => (prev + 1) % totalSlides);
//     };
//
//     const handlePrev = () => {
//         setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
//     };
//
//     // Get current slides to display based on current index (for desktop)
//     const getCurrentSlides = () => {
//         const startIndex = currentIndex * itemsPerView.desktop;
//         const endIndex = startIndex + itemsPerView.desktop;
//         return slides.slice(startIndex, endIndex);
//     };
//
//     if (!isClient) {
//         return null; // Prevent hydration mismatch
//     }
//
//     return (
//         <div className="relative max-w-7xl mx-auto py-8 md:py-16">
//             {/* Desktop View - Show 4 cards per slide with indicators */}
//             <div className="hidden lg:block">
//                 <div className="grid grid-cols-4 gap-8 px-4">
//                     {getCurrentSlides().map((service, index) => (
//                         <div className="flex flex-col items-center text-center" key={`desktop-${currentIndex}-${index}`}>
//                             <div className="w-35 h-35 bg-white transition-colors rounded-full hover:bg-[#64646F33]/60 flex items-center justify-center shadow-2xl">
//                                 <Image
//                                     src={service.url}
//                                     alt={service.title}
//                                     width={40}
//                                     height={40}
//                                     className="object-contain"
//                                 />
//                             </div>
//                             <p className="mt-2 text-[#000000] text-lg font-normal lato max-w-[150px]">
//                                 {service.title}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//
//                 {/* Desktop Indicators - Only show if more than 4 slides */}
//                 {slides.length > itemsPerView.desktop && (
//                     <div className="flex justify-center gap-4 mt-8">
//                         {Array.from({ length: totalSlides }).map((_, index) => (
//                             <button
//                                 key={index}
//                                 onClick={() => handleDotClick(index)}
//                                 className={`w-4 h-4 rounded-full transition-all duration-300
//                                     ${index === currentIndex ? 'bg-[#2B5597] scale-125' : 'bg-[#DDDDDD] hover:bg-gray-400 scale-100'}`}
//                                 aria-label={`Go to slide group ${index + 1}`}
//                             />
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };
//
// export default ServiceSlider;


"use client";
import React, {useState, useEffect} from 'react';
import Image from "next/image";

interface Slide {
    _key: string;
    url: string;
    title: string;
}

interface FeatureSliderProps {
    slides: Slide[];
}

const ServiceSlider: React.FC<FeatureSliderProps> = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isClient, setIsClient] = useState(false);

    // Items per view for different screen sizes
    const itemsPerView = {
        mobile: 1,
        tablet: 2,
        desktop: 4
    };

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Calculate total slides based on current view
    const getTotalSlides = (itemsPerSlide: number) => {
        return Math.ceil(slides.length / itemsPerSlide);
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    // const handleNext = (itemsPerSlide: number) => {
    //     setCurrentIndex((prev) => (prev + 1) % getTotalSlides(itemsPerSlide));
    // };
    //
    // const handlePrev = (itemsPerSlide: number) => {
    //     setCurrentIndex((prev) => (prev - 1 + getTotalSlides(itemsPerSlide)) % getTotalSlides(itemsPerSlide));
    // };

    // Get current slides to display based on current index and items per view
    const getCurrentSlides = (itemsPerSlide: number) => {
        const startIndex = currentIndex * itemsPerSlide;
        const endIndex = startIndex + itemsPerSlide;
        return slides.slice(startIndex, endIndex);
    };

    // Render slide group for a specific view
    const renderSlides = (itemsPerSlide: number, gridCols: string) => {
        return (
            <div className={`grid ${gridCols} gap-4 md:gap-8 px-4`}>
                {getCurrentSlides(itemsPerSlide).map((service, index) => (
                    <div className="flex flex-col items-center text-center"
                         key={`slide-${itemsPerSlide}-${currentIndex}-${index}`}>
                        <div
                            className="lg:w-35 lg:h-35 w-18 h-18 sm:w-25 sm:h-25 bg-white transition-all duration-300 rounded-full hover:bg-[#64646F33]/60 flex items-center justify-center shadow-2xl">
                            <Image
                                src={service.url}
                                alt={service.title}
                                width={60}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                        <p className="mt-2 text-[#000000] text-[14px] sm:text-[16px] lg:text-[20px] font-normal lato max-w-[200px]">
                            {service.title}
                        </p>
                    </div>
                ))}
            </div>
        );
    };

    // Render navigation dots
    const renderDots = (itemsPerSlide: number) => {
        const total = getTotalSlides(itemsPerSlide);
        if (slides.length <= itemsPerSlide) return null;

        return (
            <div className="flex justify-center gap-2 md:gap-4 mt-4 md:mt-8">
                {Array.from({length: total}).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-2 sm:w-4 sm:h-2 md:w-5 md:h-2 lg:w-6 lg:h-6 xl:w-8 xl:h-2 2xl:w-10 2xl:h-2 
                       rounded-full transition-all duration-300 ${
                            index === currentIndex ? "bg-[#2B5597]" : "bg-[#DDDDDD] hover:bg-gray-400"
                        }`}
                        aria-label={`Go to slide group ${index + 1}`}
                    />
                ))}
            </div>
        );
    };

    if (!isClient) {
        return null; // Prevent hydration mismatch
    }

    return (
        <div className="relative max-w-7xl mx-auto py-4 md:py-16">
            {/* Mobile View - 1 card per slide */}
            <div className="block sm:hidden">
                {renderSlides(itemsPerView.mobile, 'grid-cols-1')}
                {renderDots(itemsPerView.mobile)}
            </div>

            {/* Tablet View - 2 cards per slide */}
            <div className="hidden sm:block lg:hidden">
                {renderSlides(itemsPerView.tablet, 'grid-cols-2')}
                {renderDots(itemsPerView.tablet)}
            </div>

            {/* Desktop View - 4 cards per slide */}
            <div className="hidden lg:block">
                {renderSlides(itemsPerView.desktop, 'grid-cols-4')}
                {renderDots(itemsPerView.desktop)}
            </div>
        </div>
    );
};

export default ServiceSlider;