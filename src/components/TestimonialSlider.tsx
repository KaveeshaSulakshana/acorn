// "use client"
// import React, {useState} from 'react';
// import Image from 'next/image';
//
// interface Testimonial {
//     id: number;
//     title: string;
//     description: string;
//     name: string;
//     image: string;
//     rate: number;
// }
//
// const testimonials: Testimonial[] = [
//     {
//         id: 1,
//         title: 'Memorable Experience',
//         description:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         name: 'Victoria Wotton',
//         image: '/testimonial.png',
//         rate: 5
//     },
//     {
//         id: 2,
//         title: 'Amazing Service',
//         description:
//             'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         name: 'John Doe',
//         image: '/testimonial2.png',
//         rate: 4
//     },
//     {
//         id: 3,
//         title: 'Outstanding Quality',
//         description:
//             'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//         name: 'Jane Smith',
//         image: '/testimonial3.png',
//         rate: 5
//     },
// ];
//
// const TestimonialSlider: React.FC = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//
//     const handleNext = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//         );
//     };
//
//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//         );
//     };
//
//     const {title, description, name, image, rate} = testimonials[currentIndex];
//
//     return (
//         <div
//             className="flex flex-col w-full md:w-1/2 md:flex-row-reverse gap-6 sm:gap-10 p-6 sm:p-6 rounded-lg shadow-lg md:p-8 bg-[#F6F6F6]">
//             <div className="w-full md:w-3/5 mb-6 md:mb-0 flex flex-col justify-between">
//                 <div>
//                     <h2 className="font-bold text-base md:text-[20px] lg:text-[26px] leading-tight text-black max-w-2xl">
//                         {title}
//                     </h2>
//                     <p className="text-base md:text-sm font-normal mt-4 text-[#626262] max-w-2xl leading-relaxed">
//                         {description}
//                     </p>
//                 </div>
//
//                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6">
//                     <div className="flex-col items-center space-x-2 mb-4 sm:mb-0">
//                         <div className="flex flex-row">
//                             {[...Array(5)].map((_, i) => (
//                                 <svg
//                                     key={i}
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="24"
//                                     height="24"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         fill={i < Number(rate) ? "#ffc404" : "#d3d3d3"}
//                                         d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
//                                     />
//                                 </svg>
//                             ))}
//                         </div>
//                         <h2 className="font-bold text-xl text-[#2B5597]">{name}</h2>
//                     </div>
//                     <div className="flex flex-row space-x-2">
//                         <button
//                             onClick={handlePrev}
//                             className="w-10 h-10 rounded-full bg-[#2B5597] flex items-center justify-center hover:bg-[#1e3a8a] transition-colors"
//                             aria-label="Previous testimonial"
//                         >
//                             {/*<svg*/}
//                             {/*    width="24"*/}
//                             {/*    height="24"*/}
//                             {/*    viewBox="0 0 40 40"*/}
//                             {/*    fill="none"*/}
//                             {/*    xmlns="http://www.w3.org/2000/svg"*/}
//                             {/*>*/}
//                             {/*    <path*/}
//                             {/*        d="M19.9999 15.5532L15.3333 20.2199M15.3333 20.2199L19.9999 24.8866M15.3333 20.2199H24.6666"*/}
//                             {/*        stroke="white"*/}
//                             {/*        strokeLinecap="round"*/}
//                             {/*        strokeLinejoin="round"*/}
//                             {/*    />*/}
//                             {/*</svg>*/}
//
//                             <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
//                                  xmlns="http://www.w3.org/2000/svg">
//                                 <rect width="40" height="40" rx="20" fill="#2B5597"/>
//                                 <path
//                                     d="M19.9999 15.5532L15.3333 20.2199M15.3333 20.2199L19.9999 24.8866M15.3333 20.2199H24.6666"
//                                     stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
//                             </svg>
//
//                         </button>
//                         <button
//                             onClick={handleNext}
//                             className="w-10 h-10 rounded-full bg-[#2B5597] flex items-center justify-center hover:bg-[#1e3a8a] transition-colors"
//                             aria-label="Next testimonial"
//                         >
//                             <svg width="41" height="40" viewBox="0 0 41 40" fill="none"
//                                  xmlns="http://www.w3.org/2000/svg">
//                                 <rect x="0.810059" width="40" height="40" rx="20" fill="#2B5597"/>
//                                 <path
//                                     d="M20.81 24.8866L25.4767 20.2199M25.4767 20.2199L20.81 15.5532M25.4767 20.2199H16.1433"
//                                     stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//
//             <div className="w-full md:w-2/5">
//                 <Image
//                     src={image}
//                     alt="Testimonial Image"
//                     width={400}
//                     height={600}
//                     className="rounded-lg object-cover w-full h-full"
//                 />
//             </div>
//         </div>
//     );
// };
//
// export default TestimonialSlider;


// "use client"
// import React, { useState } from 'react';
// import Image from 'next/image';
//
// // interface Testimonial {
// //     id: number;
// //     title: string;
// //     description: string;
// //     name: string;
// //     image: string;
// //     rate: number;
// // }
//
// interface Testimonial {
//     _key: string;
//     title: string;
//     description: string;
//     name: string;
//     image: string;
//     rate: number;
// }
//
// interface TestimonialSliderProps {
//     testimonials: Testimonial[];
// }
//
// // const testimonials: Testimonial[] = [
// //     {
// //         id: 1,
// //         title: 'Memorable Experience',
// //         description:
// //             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
// //         name: 'Victoria Wotton',
// //         image: '/testimonial.png',
// //         rate: 5
// //     },
// //     {
// //         id: 2,
// //         title: 'Amazing Service',
// //         description:
// //             'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
// //         name: 'John Doe',
// //         image: '/testimonial2.png',
// //         rate: 4
// //     },
// //     {
// //         id: 3,
// //         title: 'Outstanding Quality',
// //         description:
// //             'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
// //         name: 'Jane Smith',
// //         image: '/testimonial3.png',
// //         rate: 5
// //     },
// // ];
//
// const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//
//     const handleNext = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//         );
//     };
//
//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//         );
//     };
//
//     const { title, description, name, image, rate } = testimonials[currentIndex];
//
//     return (
//         <div
//             className="flex flex-col w-full md:w-1/2 md:flex-row-reverse gap-4 sm:gap-6 md:gap-10 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg bg-[#F6F6F6]">
//             <div className="w-full md:w-3/5 mb-4 sm:mb-6 md:mb-0 flex flex-col justify-between">
//                 <div>
//                     <h2 className="font-bold text-sm sm:text-base md:text-[20px] lg:text-[26px] leading-tight text-black max-w-2xl">
//                         {title}
//                     </h2>
//                     <p className="text-xs sm:text-sm md:text-sm font-normal mt-3 sm:mt-4 text-[#626262] max-w-2xl leading-relaxed">
//                         {description}
//                     </p>
//                 </div>
//
//                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 sm:mt-6 gap-4">
//                     <div className="flex flex-col items-start mb-3 sm:mb-0">
//                         <div className="flex flex-row">
//                             {[...Array(5)].map((_, i) => (
//                                 <svg
//                                     key={i}
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="16"
//                                     height="16"
//                                     viewBox="0 0 24 24"
//                                     className="w-4 h-4 sm:w-5 sm:h-5"
//                                 >
//                                     <path
//                                         fill={i < Number(rate) ? "#ffc404" : "#d3d3d3"}
//                                         d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
//                                     />
//                                 </svg>
//                             ))}
//                         </div>
//                         <h2 className="font-bold text-base sm:text-lg md:text-xl text-[#2B5597] mt-2">
//                             {name}
//                         </h2>
//                     </div>
//                     <div className="flex flex-row space-x-2">
//                         <button
//                             onClick={handlePrev}
//                             className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2B5597] flex items-center justify-center hover:bg-[#1e3a8a] transition-colors"
//                             aria-label="Previous testimonial"
//                         >
//                             <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
//                                  xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-10 sm:h-10">
//                                 <rect width="40" height="40" rx="20" fill="#2B5597"/>
//                                 <path
//                                     d="M19.9999 15.5532L15.3333 20.2199M15.3333 20.2199L19.9999 24.8866M15.3333 20.2199H24.6666"
//                                     stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
//                             </svg>
//                         </button>
//                         <button
//                             onClick={handleNext}
//                             className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2B5597] flex items-center justify-center hover:bg-[#1e3a8a] transition-colors"
//                             aria-label="Next testimonial"
//                         >
//                             <svg width="41" height="40" viewBox="0 0 41 40" fill="none"
//                                  xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-10 sm:h-10">
//                                 <rect x="0.810059" width="40" height="40" rx="20" fill="#2B5597"/>
//                                 <path
//                                     d="M20.81 24.8866L25.4767 20.2199M25.4767 20.2199L20.81 15.5532M25.4767 20.2199H16.1433"
//                                     stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//
//             <div className="w-full md:w-2/5">
//                 <Image
//                     src={image}
//                     alt="Testimonial Image"
//                     width={400}
//                     height={600}
//                     className="rounded-lg object-cover w-full h-48 sm:h-64 md:h-full"
//                 />
//             </div>
//         </div>
//     );
// };
//
// export default TestimonialSlider;

"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
    _key: string;
    title: string;
    description: string;
    name: string;
    image: string;
    rate: number;
}

interface TestimonialSliderProps {
    testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const { title, description, name, image, rate } = testimonials[currentIndex];

    return (
        <div
            className="flex flex-col w-full max-w-5xl mx-auto gap-4 p-4 rounded-lg shadow-lg bg-[#F6F6F6]
            sm:p-6 sm:gap-6
            md:flex-row-reverse md:p-8 md:gap-8 md:w-11/12
            lg:p-10 lg:gap-10">
            <div className="w-full flex flex-col justify-between
                            md:w-3/5 md:mb-0">
                <div>
                    <h2 className="font-bold text-sm leading-tight text-black max-w-2xl
                                  sm:text-base
                                  md:text-lg
                                  lg:text-2xl">
                        {title}
                    </h2>
                    <p className="text-xs font-normal mt-3 text-[#626262] max-w-2xl leading-relaxed
                                 sm:text-sm sm:mt-4
                                 md:text-base
                                 lg:text-lg">
                        {description}
                    </p>
                </div>

                <div className="flex flex-col justify-between items-start mt-4 gap-4
                               sm:flex-row sm:items-center sm:mt-6
                               md:gap-6">
                    <div className="flex flex-col items-start mb-3 sm:mb-0">
                        <div className="flex flex-row">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4
                                              sm:w-5 sm:h-5
                                              md:w-6 md:h-6"
                                >
                                    <path
                                        fill={i < Number(rate) ? "#ffc404" : "#d3d3d3"}
                                        d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
                                    />
                                </svg>
                            ))}
                        </div>
                        <h2 className="font-bold text-base text-[#2B5597] mt-2
                                      sm:text-lg
                                      md:text-xl
                                      lg:text-2xl">
                            {name}
                        </h2>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <button
                            onClick={handlePrev}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2B5597] flex items-center justify-center hover:bg-[#1e3a8a] transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-10 sm:h-10">
                                <rect width="40" height="40" rx="20" fill="#2B5597"/>
                                <path
                                    d="M19.9999 15.5532L15.3333 20.2199M15.3333 20.2199L19.9999 24.8866M15.3333 20.2199H24.6666"
                                    stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2B5597] flex items-center justify-center hover:bg-[#1e3a8a] transition-colors"
                            aria-label="Next testimonial"
                        >
                            <svg width="41" height="40" viewBox="0 0 41 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-10 sm:h-10">
                                <rect x="0.810059" width="40" height="40" rx="20" fill="#2B5597"/>
                                <path
                                    d="M20.81 24.8866L25.4767 20.2199M25.4767 20.2199L20.81 15.5532M25.4767 20.2199H16.1433"
                                    stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full
                           md:w-2/5">
                <Image
                    src={image}
                    alt="Testimonial Image"
                    width={400}
                    height={800}
                    className="rounded-lg object-cover w-full h-76
                              md:h-80
                              lg:h-96"
                />
            </div>
        </div>
    );
};

export default TestimonialSlider;