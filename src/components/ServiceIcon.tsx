// import React from 'react';
// import Image from "next/image";
//
// interface FeatureProps {
//     url: string,
//     title: string
// }
//
// const TravelFeatures = ({url,title}: FeatureProps) => {
//     return (
//         <div className="flex">
//             <div className="flex flex-col items-center">
//                 <div className={`w-30 h-30 bg-white rounded-full flex items-center justify-center shadow-2xl`}>
//                     <Image src={url} alt="doc" width={60} height={60}/>
//                 </div>
//                 <p className="mt-2 text-[#000000] pt-2 text-lg font-normal lato justify-center text-center px-10">{title}</p>
//             </div>
//         </div>
//     );
// };
//
// export default TravelFeatures;


// import React from 'react';
// import Image from "next/image";
//
// interface FeatureProps {
//     url: string,
//     title: string,
//     isBigger: boolean,
// }
//
// const TravelFeatures = ({ url, title, isBigger }: FeatureProps) => {
//     return (
//         <div className="flex">
//             <div className="flex flex-col items-center md:mt-8 text-center">
//                 <div className={` ${isBigger ? "lg:w-35 lg:h-35 w-18 h-18 sm:w-25 sm:h-25" : "lg:w-28 lg:h-28 w-16 h-16 sm:w-20 sm:h-20"}  bg-white transition-all duration-300 rounded-full hover:bg-[#64646F33]/60 flex items-center justify-center shadow-2xl`}>
//                     <Image src={url} alt="doc" width={45} height={45} className={`${isBigger ? "w-10 h-10 lg:w-18 lg:h-18" : "sm:w-14 sm:h-14"}`} />
//                 </div>
//                 <p className="mt-2 text-[#000000] text-sm sm:text-base md:text-lg font-normal lato max-w-[120px] sm:max-w-[180px]">
//                     {title}
//                 </p>
//             </div>
//         </div>
//     );
// };
//
// export default TravelFeatures;

"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import {motion, AnimatePresence} from 'framer-motion';

interface FeatureProps {
    url: string;
    title: string;
    isBigger: boolean;
    isHovered?: boolean;
}

interface Feature {
    url: string;
    title: string;
}

interface FeaturesSection {
    travelServices: Feature[];
}

interface TravelFeaturesGridProps {
    featuresSection: FeaturesSection;
    isBigger: boolean;
}

export const TravelFeatures = ({url, title, isBigger, isHovered}: FeatureProps) => {
    // Define the animation for the shock effect
    const shockAnimation = {
        scale: isHovered ? 1.05 : 1, // Slightly scale up when hovered
        // x: isHovered ? [0, -2, 2, -2, 0] : 0, // Subtle shake effect
        transition: {
            // x: { repeat: isHovered ? 1 : 0, duration: 0.3 }, // Shake duration
            scale: {duration: 0.2}, // Scale duration
        },
    };

    return (
        <motion.div
            className="flex"
            animate={shockAnimation} // Apply animation based on isHovered
        >
            <div className="flex flex-col items-center md:mt-8 text-center">
                <div
                    className={` ${isBigger ? "lg:w-35 lg:h-35 w-18 h-18 sm:w-25 sm:h-25" : "lg:w-28 lg:h-28 w-16 h-16 sm:w-20 sm:h-20"}  bg-white transition-all duration-300 rounded-full hover:bg-[#64646F33]/60 flex items-center justify-center shadow-2xl`}>
                    <Image src={url} alt="doc" width={45} height={45}
                           className={`${isBigger ? "w-10 h-10 lg:w-18 lg:h-18" : "sm:w-14 sm:h-14"}`}/>
                </div>
                <p className="mt-2 text-[#000000] text-[12px] sm:text-[15px] lg:text-lg font-normal lato max-w-[120px] sm:max-w-[180px]">
                    {title}
                </p>
            </div>
        </motion.div>
    );
};


const TravelFeaturesGrid = ({featuresSection, isBigger}: TravelFeaturesGridProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <AnimatePresence>
            {featuresSection.travelServices.length > 0 && (
                <motion.div
                    className={`${isBigger ? "mt-6 sm:mt-10 max-w-2xl mx-auto justify-center" : "mt-6 sm:mt-8 justify-center lg:justify-start"}`}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                >
                    <div className={`grid grid-cols-2 sm:grid-cols-3 ${isBigger ? "gap-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center" : "gap-4 sm:gap-6"}`}>
                        {featuresSection.travelServices.map((service, index) => (
                            <div key={index}>
                                <TravelFeatures
                                    url={service.url}
                                    title={service.title}
                                    isBigger={isBigger}
                                    isHovered={isHovered}
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TravelFeaturesGrid;