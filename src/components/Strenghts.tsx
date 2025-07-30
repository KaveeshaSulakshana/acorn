// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
//
// export default function Strengths() {
//     const strengthOne = [
//         {
//             icon: "/security.png",
//             title: "Competitive Airline Pricing",
//             description:
//                 "Acorn Travels is one of the leading travel agencies in Sri Lanka, with an established airline portfolio. The strategic partnerships and strong network will guarantee better rates and corporate deals, in order to provide optimum solutions to our customers.",
//             link: "/competitive-pricing",
//         },
//         {
//             icon: "/support.png",
//             title: "One-Stop-Shop",
//             description:
//                 "We operate as “The-one-stop-shop” for all types of travel needs. Facilitation of air tickets, ground arrangements, cruise & coach tours, visa services, meet & greet, lounge services, travel insurance, currency services, and many more will be offered to clients as travel solutions.",
//             link: "/optimum-solution",
//         },
//     ];
//
//     const strengthTwo = [
//         {
//             icon: "/policy.png",
//             title: "Optimum Solution Provider",
//             description:
//                 "Most effective solution always provided with options by carefully considering all available prices, routes, dates, hassle-free transits for both on-line & off-line carriers to match your requirement.",
//             link: "/one-stop-shop",
//         },
//         {
//             icon: "/clip.png",
//             title: "Strong Reach & Network",
//             description:
//                 "We possess the widest network representation around the globe with our global partnerships. In the local operation, we have our presence in Colombo, Kandy, and Nawala for the utmost convenience of our customers.",
//             link: "/strong-reach",
//         },
//     ];
//
//     return (
//         <div className="py-12 my-8 bg-white relative overflow-hidden volkhov">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-3xl md:text-5xl font-bold text-[#3C3C3C] text-center mb-8">
//                     Our Strengths
//                 </h2>
//                 <p className="text-[#737373] text-base md:text-xl text-center mb-8 max-w-4xl mx-auto">
//                     With a commitment to excellence, personalized service, and extensive global expertise, we ensure
//                     every journey is seamless, memorable, and tailored to your unique needs
//                 </p>
//
//                 <div className="relative py-8 md:py-16">
//                     <div className="hidden md:grid md:grid-cols-2 lg:gap-130 gap-8 max-w-6xl mx-auto">
//                         <div className="space-y-12">
//                             {strengthOne.map((strength, index) => (
//                                 <div key={index} className="flex items-start space-x-6">
//                                     <div className="flex-shrink-0 rounded-lg bg-white shadow-lg p-4">
//                                         <Image
//                                             src={strength.icon}
//                                             alt={`${strength.title} icon`}
//                                             width={48}
//                                             height={48}
//                                             className="w-12 h-12"
//                                         />
//                                     </div>
//                                     <div className="flex-1">
//                                         <h3 className="text-xl font-bold text-[#3C3C3C] mb-2">
//                                             {strength.title}
//                                         </h3>
//                                         <p className="text-[#737373] text-sm mb-4 md:min-h-32">
//                                             {strength.description}
//                                         </p>
//                                         <Link href={strength.link}>
//                                             <span className="text-[#E1251B] font-semibold hover:underline">
//                                                 Learn More →
//                                             </span>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="space-y-12">
//                             {strengthTwo.map((strength, index) => (
//                                 <div key={index} className="flex items-start space-x-6">
//                                     <div className="flex-shrink-0 rounded-lg bg-white shadow-lg p-4">
//                                         <Image
//                                             src={strength.icon}
//                                             alt={`${strength.title} icon`}
//                                             width={48}
//                                             height={48}
//                                             className="w-12 h-12"
//                                         />
//                                     </div>
//                                     <div className="flex-1">
//                                         <h3 className="text-xl font-bold text-[#3C3C3C] mb-2">
//                                             {strength.title}
//                                         </h3>
//                                         <p className="text-[#737373] text-sm mb-4">
//                                             {strength.description}
//                                         </p>
//                                         <Link href={strength.link}>
//                                             <span className="text-[#E1251B] font-semibold hover:underline">
//                                                 Learn More →
//                                             </span>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//
//                     <div className="md:hidden space-y-8 px-4">
//                         {[...strengthOne, ...strengthTwo].map((strength, index) => (
//                             <div key={index} className="flex items-start space-x-4">
//                                 <div className="flex-shrink-0 rounded-lg bg-white shadow-lg p-3">
//                                     <Image
//                                         src={strength.icon}
//                                         alt={`${strength.title} icon`}
//                                         width={40}
//                                         height={40}
//                                         className="w-10 h-10"
//                                     />
//                                 </div>
//                                 <div className="flex-1">
//                                     <h3 className="text-lg font-bold text-[#3C3C3C] mb-2">
//                                         {strength.title}
//                                     </h3>
//                                     <p className="text-[#737373] text-sm mb-3">
//                                         {strength.description}
//                                     </p>
//                                     <Link href={strength.link}>
//                                         <span className="text-[#E1251B] font-semibold hover:underline">
//                                             Learn More →
//                                         </span>
//                                     </Link>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//
//                     {/*<svg*/}
//                     {/*    className="absolute top-1/4 left-0 w-full h-1/2 hidden lg:block z-0"*/}
//                     {/*    xmlns="http://www.w3.org/2000/svg"*/}
//                     {/*>*/}
//                     {/*    <path*/}
//                     {/*        d="M100,300 Q300,200 500,300 T900,300"*/}
//                     {/*        fill="none"*/}
//                     {/*        stroke="#E5E7EB"*/}
//                     {/*        strokeWidth="2"*/}
//                     {/*        strokeDasharray="5,5"*/}
//                     {/*    />*/}
//                     {/*</svg>*/}
//
//                     <div
//                         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-0">
//                         <Image
//                             src="/two-man.png"
//                             alt="People shaking hands"
//                             width={400}
//                             height={700}
//                             className="w-auto h-[650px] object-contain"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client"
import Image from "next/image";
import React, {useRef} from "react";
import {motion, useInView, Variants} from "framer-motion";


interface Strength {
    icon: { asset?: { url: string } };
    title: string;
    description: string;
    link: string;
}

interface StrengthsProps {
    strengths: Strength[];
}

export default function Strengths({strengths}: StrengthsProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount: 0.3});

    const contentVariants: Variants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}},
    };

    const strengthVariants: Variants = {
        hidden: {opacity: 0, scale: 0.8},
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {duration: 0.6, ease: "easeOut", delay: i * 0.15},
        }),
    };

    const strengthOne = strengths.slice(0, Math.ceil(strengths.length / 2));
    const strengthTwo = strengths.slice(Math.ceil(strengths.length / 2));

    // const strengthOne = [
    //     {
    //         icon: "/security.png",
    //         title: "Competitive Airline Pricing",
    //         description:
    //             "Acorn Travels is one of the leading travel agencies in Sri Lanka, with an established airline portfolio. The strategic partnerships and strong network will guarantee better rates and corporate deals, in order to provide optimum solutions to our customers.",
    //         link: "/competitive-pricing",
    //     },
    //     {
    //         icon: "/support.png",
    //         title: "One-Stop-Shop",
    //         description:
    //             "We operate as “The-one-stop-shop” for all types of travel needs. Facilitation of air tickets, ground arrangements, cruise & coach tours, visa services, meet & greet, lounge services, travel insurance, currency services, and many more will be offered to clients as travel solutions.",
    //         link: "/optimum-solution",
    //     },
    // ];
    //
    // const strengthTwo = [
    //     {
    //         icon: "/policy.png",
    //         title: "Optimum Solution Provider",
    //         description:
    //             "Most effective solution always provided with options by carefully considering all available prices, routes, dates, hassle-free transits for both on-line & off-line carriers to match your requirement.",
    //         link: "/one-stop-shop",
    //     },
    //     {
    //         icon: "/clip.png",
    //         title: "Strong Reach & Network",
    //         description:
    //             "We possess the widest network representation around the globe with our global partnerships. In the local operation, we have our presence in Colombo, Kandy, and Nawala for the utmost convenience of our customers.",
    //         link: "/strong-reach",
    //     },
    // ];

    return (
        <div className="py-6 my-2 md:py-12 md:my-8 bg-white relative overflow-hidden lato" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-[28px] sm:text-[38px] lg:text-[52px] font-bold text-[#3C3C3C] text-center mb-4 sm:mb-8"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={contentVariants}
                >
                    Our Strengths
                </motion.h2>
                <motion.p
                    className="text-[#737373] text-[14px] sm:text-[16px] lg:text-[20px] text-center mb-2 sm:mb-8 max-w-4xl mx-auto"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={contentVariants}
                >
                    With a commitment to excellence, personalized service, and extensive global expertise, we ensure
                    every journey is seamless, memorable, and tailored to your unique needs
                </motion.p>

                <div className="relative py-8 md:py-16">
                    <div className="w-full absolute bottom-10 bg-cover h-80">
                        <div
                            className="hidden xl:block absolute bg-[url('/line.png')] bg-no-repeat object-cover inset-0 w-full h-auto bg-cover"
                        ></div>
                    </div>
                    <div className="hidden md:grid md:grid-cols-2 xl:gap-130 gap-8 max-w-6xl mx-auto">
                        <div className="space-y-12 relative">
                            {strengthOne.map((strength, index) => (
                                <motion.div key={index} className="flex items-start space-x-6"
                                            custom={index}
                                            initial="hidden"
                                            animate={isInView ? "visible" : "hidden"}
                                            variants={strengthVariants}
                                >
                                    <div className="flex-shrink-0 rounded-lg bg-white shadow-lg p-4">
                                        <Image
                                            src={strength.icon?.asset?.url || "/default-icon.png"}
                                            alt={`${strength.title} icon`}
                                            width={48}
                                            height={48}
                                            className="w-12 h-12"
                                            sizes="48px"
                                            loading="lazy"
                                            // srcSet={`${strength.icon} 1x,
                                            //          ${strength.icon.replace('.png', '@2x.png')} 2x,
                                            //          ${strength.icon.replace('.png', '@4x.png')} 4x`}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-[14px] sm:text-[16px] lg:text-[20px] font-bold text-[#3C3C3C] mb-2">
                                            {strength.title}
                                        </h3>
                                        <p className="text-[#737373] text-[10px] lg:text-sm mb-4 md:min-h-40 lg:min-h-36">
                                            {strength.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="space-y-12 relative">
                            {strengthTwo.map((strength, index) => (
                                <motion.div key={index} className="flex items-start space-x-6"
                                            custom={index}
                                            initial="hidden"
                                            animate={isInView ? "visible" : "hidden"}
                                            variants={strengthVariants}
                                >
                                    <div className="flex-shrink-0 rounded-lg bg-white shadow-lg p-4">
                                        <Image
                                            src={strength.icon?.asset?.url || "/default-icon.png"}
                                            alt={`${strength.title} icon`}
                                            width={48}
                                            height={48}
                                            className="w-12 h-12"
                                            sizes="48px"
                                            loading="lazy"
                                            // srcSet={`${strength.icon} 1x,
                                            //          ${strength.icon.replace('.png', '@2x.png')} 2x,
                                            //          ${strength.icon.replace('.png', '@4x.png')} 4x`}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-[14px] sm:text-[16px] lg:text-[20px] font-bold text-[#3C3C3C] mb-2">
                                            {strength.title}
                                        </h3>
                                        <p className="text-[#737373] text-[10px] lg:text-sm mb-4 md:min-h-40 lg:min-h-36">
                                            {strength.description}
                                        </p>
                                        {/*<Link href={strength.link}>*/}
                                        {/*    <span className="text-[#E1251B] font-semibold hover:underline">*/}
                                        {/*        Learn More →*/}
                                        {/*    </span>*/}
                                        {/*</Link>*/}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden space-y-8 px-4">
                        {[...strengthOne, ...strengthTwo].map((strength, index) => (
                            <motion.div key={index} className="flex items-start space-x-4"
                                        custom={index}
                                        initial="hidden"
                                        animate={isInView ? "visible" : "hidden"}
                                        variants={strengthVariants}
                            >
                                <div className="flex-shrink-0 rounded-lg bg-white shadow-lg p-3">
                                    <Image
                                        src={strength.icon?.asset?.url || "/default-icon.png"}
                                        alt={`${strength.title} icon`}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10"
                                        sizes="40px"
                                        loading="lazy"
                                        // srcSet={`${strength.icon} 1x,
                                        //          ${strength.icon.replace('.png', '@2x.png')} 2x,
                                        //          ${strength.icon.replace('.png', '@4x.png')} 4x`}
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-[14px] sm:text-[16px] lg:text-[20px] font-bold text-[#3C3C3C] mb-2">
                                        {strength.title}
                                    </h3>
                                    <p className="text-[#737373] text-[12px] lg:text-sm mb-3">
                                        {strength.description}
                                    </p>
                                    {/*<Link href={strength.link}>*/}
                                    {/*    <span className="text-[#E1251B] font-semibold hover:underline">*/}
                                    {/*        Learn More →*/}
                                    {/*    </span>*/}
                                    {/*</Link>*/}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden xl:block z-0"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={contentVariants}
                    >
                        <Image
                            src="/two-man.png"
                            alt="People shaking hands"
                            width={400}
                            height={700}
                            className="w-auto h-[650px] object-contain"
                            sizes="400px"
                            // srcSet={`/two-man.png 1x,
                            //          /two-man@2x.png 2x,
                            //          /two-man@4x.png 4x`}
                            quality={85}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}