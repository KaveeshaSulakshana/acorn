import Hero from "@/components/Hero";
import ParallaxBackground from "@/components/ParallaxBackground";
import {FormField} from "@/components/ContactForm";
import {getStudentPageData} from "../../../sanity/api";
import React from "react";
import TravelFeaturesGrid from "@/components/ServiceIcon";

interface HeroButton {
    title: string;
    link: string;
}

interface Hero {
    image: string;
    title: string;
    description: string;
    buttonText: HeroButton[];
}

interface TravelService {
    url: string;
    title: string;
    isBigger: boolean;
}

interface FeaturesSection {
    title: string;
    description: string;
    travelServices: TravelService[];
}

interface StudentTravelData {
    _id: string;
    hero: {
        title: string;
        description: string;
        buttonText: HeroButton[];
        image: { asset: { url: string } };
    };
    featuresSection: {
        title: string;
        description: string;
        travelServices: Array<{
            title: string;
            isBigger: boolean;
            url: { asset: { url: string }; alt: string };
        }>;
    };
    parallax: {
        title: string;
        description: string;
        image: { asset: { url: string } };
    };
}

interface ParallaxProps {
    title: string;
    description: string;
    image: string;
    formFields: FormField[];
    pageSource: string;
}

const StudentTravelPage = async () => {
    let hero: Hero = {
        image: "",
        title: "",
        description: "",
        buttonText: [],
    };
    let parallax: ParallaxProps = {
        title: "",
        description: "",
        image: "",
        formFields: [],
        pageSource: "",
    };
    let featuresSection: FeaturesSection = {
        title: "",
        description: "",
        travelServices: [],
    };

    try {
        const studentData: StudentTravelData = await getStudentPageData();
        console.log("------student data (server): ", studentData);

        // Map hero data
        hero = {
            image: studentData?.hero?.image?.asset?.url || "",
            title: studentData?.hero?.title || "Seamless Student Travel",
            description:
                studentData?.hero?.description ||
                "Explore budget-friendly travel options tailored for students.",
            buttonText:
                studentData?.hero?.buttonText?.map((btn) => ({
                    title: btn.title || "Explore Now",
                    link: btn.link || "#",
                })) || [],
        };

        // Map features section data
        featuresSection = {
            title:
                studentData?.featuresSection?.title ||
                "Hassle-Free Student Airfare Solutions",
            description:
                studentData?.featuresSection?.description ||
                "Fly smarter with exclusive student airfare deals from Acorn Travels. Contact us to find the best flights for your study abroad journey.",
            travelServices:
                studentData?.featuresSection?.travelServices?.map((service) => ({
                    url: service?.url?.asset?.url || "/default-icon.png",
                    title: service?.title || "Service",
                    isBigger: service?.isBigger || false,
                })) || [],
        };

        // Map parallax data
        parallax = {
            title:
                studentData?.parallax?.title || "",
            description:
                studentData?.parallax?.description ||
                "",
            image: studentData?.parallax?.image?.asset?.url || "",
            formFields: [
                {
                    type: "select",
                    name: "title",
                    placeholder: "Title",
                    options: [
                        {value: "Mr", label: "Mr"},
                        {value: "Mrs", label: "Mrs"},
                        {value: "Miss", label: "Miss"},
                        {value: "Rev", label: "Rev"},
                        {value: "Dr", label: "Dr"},
                    ],
                    required: true,
                },
                {type: "text", name: "name", placeholder: "Name", required: true},
                {
                    type: "text",
                    name: "contactNumber",
                    placeholder: "Contact Number",
                    required: true,
                },
                {type: "email", name: "email", placeholder: "Email", required: true},
                {
                    type: "text",
                    name: "company",
                    placeholder: "Company",
                    required: false,
                },
                {
                    type: "text",
                    name: "designation",
                    placeholder: "Designation",
                    required: true,
                },
                {
                    type: "textarea",
                    name: "inquiry",
                    placeholder: "Inquiry",
                    rows: 3,
                    required: true,
                },
            ],
            pageSource: "Student Visa Inquiry",
        };
    } catch (error) {
        console.error("Error fetching student travel data:", error);
        return (
            <div className="min-h-screen lato flex items-center justify-center">
                <p className="text-red-500 text-lg">
                    Failed to load student travel data. Please try again later.
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen lato">
            <Hero hero={hero}/>
            <div id="student-explore" className="py-12 my-8 bg-white relative overflow-hidden lato">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-[45px] font-bold text-[#3C3C3C] text-center mb-8">
                        {featuresSection.title}
                    </h2>
                    <p className="text-[#737373] text-base md:text-xl text-center mb-8 max-w-4xl mx-auto">
                        {featuresSection.description}
                    </p>

                    <TravelFeaturesGrid featuresSection={featuresSection} isBigger={true}/>

                    {/*<div className="mt-6 sm:mt-10 max-w-2xl mx-auto justify-center">*/}
                    {/*    /!*<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center">*!/*/}
                    {/*        /!*{featuresSection.travelServices.map((service, index) => (*!/*/}
                    {/*        /!*    // <TravelFeaturesGrid*!/*/}
                    {/*        /!*    //     key={index}*!/*/}
                    {/*        /!*    //     url={service.url}*!/*/}
                    {/*        /!*    //     title={service.title}*!/*/}
                    {/*        /!*    //     isBigger={service.isBigger}*!/*/}
                    {/*        /!*    // />*!/*/}
                    {/*        /!*    <TravelFeaturesGrid tra />*!/*/}
                    {/*        /!*))}*!/*/}
                    {/*        <TravelFeaturesGrid featuresSection={featuresSection}/>*/}
                    {/*    /!*</div>*!/*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className="bg-[#F6F6F6]">
                <ParallaxBackground
                    parallax={parallax}
                    formFields={parallax.formFields}
                    pageSource={parallax.pageSource}
                />
            </div>

        </div>
    );
}

export default StudentTravelPage;