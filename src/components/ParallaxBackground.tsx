"use client";

import React from "react";
import ContactForm, {FormField} from "@/components/ContactForm";
import {Parallax} from "react-parallax";

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

    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

    return (
        <>
            <div className="py-6 mx-4 lg:py-18 lg:mx-12">
                <div className="hidden lg:block container mx-auto">
                    <div className="min-h-screen block items-center justify-center relative"
                    >
                        <Parallax
                            bgImage={parallax.image}
                            bgImageAlt={parallax.title}
                            strength={600}
                            className="min-h-screen lg:block hidden"
                        >
                        </Parallax>
                        {/*<div className="top-50 left-1/2 xl:top-70 absolute z-50">*/}
                        {
                            parallax.title.length > 0 && parallax.description.length > 0 ? (
                                <div className="-bottom-85 left-1/2 absolute z-50">
                                    <ContactForm fields={formFields} pageSource={pageSource}
                                                 reCaptchaSiteKey={recaptchaSiteKey}/>
                                </div>
                            ) : (
                                <div className="-bottom-85 left-1/2 transform -translate-x-1/2 absolute z-50">
                                    <ContactForm fields={formFields} pageSource={pageSource}
                                                 reCaptchaSiteKey={recaptchaSiteKey}/>
                                </div>
                            )
                        }
                    </div>

                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-8 mt-4">
                            <div
                                className="lg:w-1/2 flex max-w-xl flex-col items-center lg:items-start text-center lg:text-left">
                                {
                                    parallax.title.length > 0 && parallax.description.length > 0 ? (
                                        <div>
                                            <h2 className="text-3xl md:text-[45px] font-bold text-[#3C3C3C] my-4">
                                                {parallax.title}
                                            </h2>
                                            <p className="text-[#737373] font-normal text-base md:text-xl leading-10">
                                                {parallax.description}
                                            </p>
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden block">
                    <div className="container mx-auto relative z-10">
                        <div className="flex flex-col items-center gap-6 sm:gap-8 mt-0 sm:mt-6">
                            <div className="w-full flex flex-col items-center text-center mb-8 sm:mb-10">
                                <h2
                                    className="text-2xl sm:text-3xl font-bold text-[#3C3C3C] my-3 sm:my-4"
                                >
                                    {parallax.title}
                                </h2>
                                <p
                                    className="text-[#737373] font-normal text-sm sm:text-base leading-7 sm:leading-8 max-w-lg"
                                >
                                    {parallax.description}
                                </p>
                            </div>

                            <div className="w-full flex justify-center">
                                <ContactForm fields={formFields} pageSource={pageSource} reCaptchaSiteKey={recaptchaSiteKey}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ParallaxBackground;