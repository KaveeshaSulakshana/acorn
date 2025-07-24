// "use client";
// import {useState, useEffect} from "react";
// import Link from "next/link";
// import Image from "next/image";
//
// const Carousel = ({
//                       slides,
//                       autoSlide = true,
//                       autoSlideInterval = 5000,
//                   }: {
//     slides: { image: string; title: string; description: string; buttonText: string; buttonLink: string }[];
//     autoSlide: boolean;
//     autoSlideInterval: number;
// }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//
//     useEffect(() => {
//         if (!autoSlide) return;
//
//         const slideInterval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//         }, autoSlideInterval);
//
//         return () => clearInterval(slideInterval);
//     }, [autoSlide, autoSlideInterval, slides.length]);
//
//     return (
//         <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] overflow-hidden volkhov">
//             {slides.map((slide, index) => (
//                 <div
//                     key={index}
//                     className={`absolute inset-0 transition-opacity duration-500 ${
//                         index === currentIndex ? "opacity-100" : "opacity-0"
//                     }`}
//                 >
//                     <Image
//                         src={slide.image}
//                         alt={slide.title}
//                         fill
//                         className="object-cover"
//                         sizes="100vw"
//                         priority={index === 0}
//                     />
//                     <div className="absolute inset-0 bg-black/40 sm:bg-black/30"></div>
//                     <div
//                         className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 lg:px-16">
//                         <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-normal text-white mb-3 md:mb-4 lg:mb-6 max-w-4xl leading-tight">
//                             {slide.title}
//                         </h1>
//                         <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#E9E4E4] mb-4 md:mb-6 lg:mb-8 max-w-xl md:max-w-2xl lg:max-w-3xl">
//                             {slide.description}
//                         </p>
//                         <Link href={slide.buttonLink}>
//                             <button
//                                 className="bg-[#E1251B] text-white text-xs sm:text-base font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-red-600 transition-colors duration-300">
//                                 {slide.buttonText}
//                             </button>
//                         </Link>
//                     </div>
//                 </div>
//             ))}
//
//             <div
//                 className="absolute bottom-6 sm:bottom-10 md:bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrentIndex(index)}
//                         className={`w-3 h-1 sm:w-5 sm:h-1 md:w-7 md:h-1 lg:w-10 lg:h-1 rounded-full transition-all duration-300 ${
//                             index === currentIndex ? "bg-[#EB131B]" : "bg-[#DDDDDD] hover:bg-gray-400"
//                         }`}
//                         aria-label={`Go to slide ${index + 1}`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default Carousel;

"use client";
import {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

const Carousel = ({
                      slides,
                      autoSlide = true,
                      autoSlideInterval = 5000,
                  }: {
    slides: { image: string; title: string; description: string; buttonText: string; buttonLink: string }[];
    autoSlide: boolean;
    autoSlideInterval: number;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!autoSlide) return;

        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, autoSlideInterval);

        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, slides.length]);

    return (
        <div
            className="relative w-full
                 h-[350px] md:h-[450px] lg:h-[600px] xl:h-[750px] 2xl:h-[900px]
                 overflow-hidden lato"
        >
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw,
                    (max-width: 768px) 100vw,
                    (max-width: 1024px) 100vw,
                    (max-width: 1280px) 100vw,
                    (max-width: 1536px) 100vw,
                    100vw"
                        quality={85}
                        priority={index === 0}
                    />
                    <div
                        className="absolute inset-0
                       bg-black/50 sm:bg-black/45 md:bg-black/40 lg:bg-black/35 xl:bg-black/30"
                    />
                    <div
                        className="absolute inset-0 flex flex-col justify-center items-center
                       text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20"
                    >
                        <h1
                            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl
                         font-semibold text-white
                         mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-8
                         max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl
                         leading-tight lg:leading-15"
                        >
                            {slide.title}
                        </h1>
                        <p
                            className="text-[10px] sm:text-xs md:text-xl
                         text-[#D3D1D1] font-medium
                         mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8
                         max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl md:leading-6 2xl:max-w-3xl"
                        >
                            {slide.description}
                        </p>
                        <Link href={slide.buttonLink}>
                            <button
                                className="bg-[#2B5597] text-white
                           text-xs sm:text-sm md:text-base
                           font-bold
                           px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8
                           py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3.5 2xl:py-4
                           rounded-md hover:bg-blue-950 cursor-pointer transition-colors duration-300"
                            >
                                {slide.buttonText}
                            </button>
                        </Link>
                    </div>
                </div>
            ))}

            {/* Navigation Dots */}
            <div
                className="absolute
                   bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 xl:bottom-16 2xl:bottom-20
                   left-1/2 transform -translate-x-1/2
                   flex space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-2.5 xl:space-x-3"
            >
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-1 sm:w-3 sm:h-1 md:w-4 md:h-1.5 lg:w-6 lg:h-1.5 xl:w-8 xl:h-2 2xl:w-10 2xl:h-2 
                       rounded-full transition-all duration-300 ${
                            index === currentIndex ? "bg-[#2B5597]" : "bg-[#DDDDDD] hover:bg-gray-400"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;