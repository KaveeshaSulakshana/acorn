"use client";

import React, {useRef} from "react";
import ContactForm, {FormField} from "@/components/ContactForm";
import {Parallax} from "react-parallax";
import {motion, useInView} from "framer-motion";

// interface ParallaxBackgroundProps {
//     imageUrl: string;
//     children?: React.ReactNode;
// }

interface ParallaxProps {
    parallax: {
        title: string;
        description: string;
        image: string;
    };
    // If ContactForm is rendered inside ParallaxBackground, pass these:
    formFields: FormField[];
    pageSource?: string;
}

const ParallaxBackground = ({parallax, formFields, pageSource}: ParallaxProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount: 0.3});

    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

    const contentVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut" as const}},
    };

    return (
        <>
            <div className="py-6 mx-4 lg:py-18 lg:mx-12" ref={ref}>
                <div className="hidden xl:block container mx-auto">
                    <div className="min-h-screen block items-center justify-center relative"
                    >
                        <Parallax
                            bgImage={parallax.image}
                            bgImageAlt={parallax.title}
                            strength={300}
                            className="min-h-screen lg:block hidden"
                            bgImageStyle={{
                                objectFit: "cover",
                                willChange: "transform",
                                transform: "translate3d(0, 0, 0)",
                            }}
                            // bgImageSizes="(max-width: 768px) 100vw, 1920px"
                            // bgImageSrcSet={`${parallax.image}?w=800 800w, ${parallax.image}?w=1200 1200w, ${parallax.image}?w=1920 1920w`}
                            // renderLayer={(percentage) => (
                            //     <div
                            //         style={{
                            //             position: "absolute",
                            //             top: 0,
                            //             left: 0,
                            //             right: 0,
                            //             bottom: 0,
                            //             transform: `translate3d(0, ${(percentage - 1) * 300}px, 0)`,
                            //             willChange: "transform",
                            //         }}
                            //     />
                            // )}
                        >
                        </Parallax>
                        {/*<div className="top-50 left-1/2 xl:top-70 absolute z-50">*/}
                        {
                            parallax.title.length > 0 && parallax.description.length > 0 ? (
                                <motion.div className="-bottom-85 left-1/2 absolute z-50"
                                            initial="hidden"
                                            animate={isInView ? "visible" : "hidden"}
                                            variants={contentVariants}
                                >
                                    <ContactForm fields={formFields} pageSource={pageSource}
                                                 reCaptchaSiteKey={recaptchaSiteKey}/>
                                </motion.div>
                            ) : (
                                <motion.div className="-bottom-85 left-1/2 transform -translate-x-1/2 absolute z-50"
                                            initial="hidden"
                                            animate={isInView ? "visible" : "hidden"}
                                            variants={contentVariants}
                                >
                                    <ContactForm fields={formFields} pageSource={pageSource}
                                                 reCaptchaSiteKey={recaptchaSiteKey}/>
                                </motion.div>
                            )
                        }
                    </div>

                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-8 mt-4">
                            <motion.div
                                className="lg:w-1/2 flex max-w-xl flex-col items-center lg:items-start text-center lg:text-left"
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={contentVariants}
                            >
                                {
                                    parallax.title.length > 0 && parallax.description.length > 0 ? (
                                        <div>
                                            <motion.h2
                                                className="text-[22px] sm:text-[30px] lg:text-[45px] font-bold text-[#3C3C3C] my-4"
                                                variants={contentVariants}
                                            >
                                                {parallax.title}
                                            </motion.h2>
                                            <motion.p
                                                className="text-[#737373] font-normal text-base md:text-xl leading-10"
                                                variants={contentVariants}
                                            >
                                                {parallax.description}
                                            </motion.p>
                                        </div>
                                    ) : (
                                        <div>
                                            <h2 className="text-3xl md:text-[45px] font-bold text-[#3C3C3C] my-4">
                                                ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
                                                ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
                                                ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
                                                ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
                                                ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
                                            </h2>
                                            <p className="text-[#737373] font-normal text-base md:text-xl leading-10">
                                                ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
                                                ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
                                                ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
                                                ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
                                                ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
                                                ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
                                                ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
                                                ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
                                                ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
                                                ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
                                            </p>
                                        </div>
                                    )
                                }
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="xl:hidden block">
                    <div className="container mx-auto relative z-10">
                        <div className="flex flex-col items-center gap-6 sm:gap-8 mt-0 sm:mt-6">
                            <motion.div
                                className={`w-full flex flex-col items-center text-center ${parallax.title.length > 0 && parallax.description.length > 0 ? "mb-8 sm:mb-10" : ""}`}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={contentVariants}
                            >
                                <motion.h2
                                    className="text-[22px] sm:text-[30px] lg:text-[45px] font-bold text-[#3C3C3C] my-3 sm:my-4"
                                    variants={contentVariants}
                                >
                                    {parallax.title}
                                </motion.h2>
                                <motion.p
                                    className="text-[#737373] font-normal text-[14px] sm:text-[16px] lg:text-[20px] leading-6 md:leading-10 max-w-lg"
                                    variants={contentVariants}
                                >
                                    {parallax.description}
                                </motion.p>
                            </motion.div>

                            <motion.div className="w-full flex justify-center"
                                 initial="hidden"
                                 animate={isInView ? "visible" : "hidden"}
                                 variants={contentVariants}
                            >
                                <ContactForm fields={formFields} pageSource={pageSource}
                                             reCaptchaSiteKey={recaptchaSiteKey}/>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ParallaxBackground;