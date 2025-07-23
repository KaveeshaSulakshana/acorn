import {getPrivacyData} from "../../../sanity/api";
import {PortableText} from "next-sanity";
import Nav from "@/components/Nav";
import React from "react";

const PrivacyAndPolicy = async () => {

    const privacyData = await getPrivacyData();
    console.log("privacy: ", privacyData);

    return (
        <div className="min-h-screen py-16 bg-white lato">
            <Nav/>
            <h1 className="lato mt-15 md:mt-20 lg:mt-30 font-bold text-[#3C3C3C] text-[20px] text-center mb-6 md:text-[35px] lg:text-[45px] sm:text-[30px] xs:text-[25px]">{privacyData.title || "Privacy & Policy"}</h1>
            <div
                className="font-light justify-left leading-12 px-4 sm:px-6 md:px-15 mt-6 text-sm md:text-base lg:text-lg">
                <PortableText
                    value={privacyData.body || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante eros. Donec congue eu mi non efficitur. Nunc vitae ultricies augue, at blandit tellus. Mauris eget sapien sed nisi bibendum convallis non eget leo. Curabitur vehicula a est quis commodo. Vestibulum faucibus a purus ac laoreet. Morbi tincidunt aliquam facilisis. Phasellus eget lobortis lorem. Proin quis semper ex. Pellentesque dignissim nulla tellus, lacinia porttitor tellus aliquam vitae. Fusce nec urna sit amet metus ullamcorper volutpat. Curabitur dapibus dolor ex, non gravida dui congue sed. Cras varius consectetur enim at mollis. Integer feugiat ex non vestibulum mollis."}/>
            </div>
        </div>
    );
}

export default PrivacyAndPolicy;