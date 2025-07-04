import Image from "next/image";
import TranslateWrapper from "@/components/TranslateWrapper";
import {getPartnerData} from "../../sanity/api";

interface ImageUrl {
    _key?: string; // Optional, as _key isn't fetched unless explicitly added
    url: string;
    alt: string;
}

// Define interface for the partner data from Sanity
interface PartnerData {
    _id: string;
    title: string;
    images: { url: { asset: { _id: string; url: string }; alt: string } }[];
}


const ImageList = ({imageUrls}: { imageUrls: ImageUrl[] }) => (
    <>
        {imageUrls.map((image) => (
            <div
                key={image._key}
                className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 w-[100px] sm:w-[120px] md:w-[180px] h-[60px] sm:h-[60px] md:h-[120px] relative"
            >
                <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-contain"
                />
            </div>
        ))}
    </>
);

const Partners = async () => {
    let title: string = "";
    let imageUrls: ImageUrl[] = [];

    try {
        const partnerData: PartnerData | null = await getPartnerData();
        console.log("------partner data (server): ", partnerData);

        if (partnerData) {
            // Map partner data
            title = partnerData.title || "Our Partners";
            imageUrls = Array.isArray(partnerData.images)
                ? partnerData.images.map((image, index) => ({
                    _key: `image-${index}`, // Generate a key since _key isn't fetched
                    url: image?.url?.asset?.url || "/default-logo.png",
                    alt: image?.url?.alt || "Partner Logo",
                }))
                : [];
        }
    } catch (error) {
        console.error("Error fetching partner data:", error);
        return (
            <div className="py-8 sm:py-12 bg-[#F6F6F6] lato flex items-center justify-center">
                <p className="text-red-500 text-lg">
                    Failed to load partner data. Please try again later.
                </p>
            </div>
        );
    }

    if (!title || imageUrls.length === 0) {
        return (
            <div className="py-8 sm:py-12 bg-[#F6F6F6] lato flex items-center justify-center">
                <p className="text-gray-500 text-lg">
                    No partner data available at this time.
                </p>
            </div>
        );
    }

    return (
        <div className="py-8 sm:py-12 bg-[#F6F6F6]">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl md:text-[52px] font-bold text-[#3C3C3C] text-center mb-6 sm:mb-8 lato">
                    {title}
                </h2>

                <div className="overflow-hidden bg-white relative py-6 sm:py-8 border-y-2 border-[#E4E6E8]">
                    <div className="flex">
                        {[...Array(3)].map((_, index) => (
                            <TranslateWrapper key={`wrapper-${index}`} duration={20}>
                                <ImageList imageUrls={imageUrls} />
                            </TranslateWrapper>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;

// import Image from "next/image";
// import TranslateWrapper from "@/components/TranslateWrapper";
//
// interface ImageUrl {
//     id: number;
//     url: string;
//     alt: string;
// }
//
// const ImageList = ({imageUrls}: { imageUrls: ImageUrl[] }) => (
//     <>
//         {imageUrls.map((image) => (
//             <div
//                 key={image.id}
//                 className="flex-shrink-0 mx-2 sm:mx-4 md:mx-6 w-[100px] sm:w-[120px] md:w-[180px] h-[60px] sm:h-[60px] md:h-[120px] relative"
//             >
//                 <Image
//                     src={image.url}
//                     alt={image.alt}
//                     fill
//                     className="object-contain"
//                     sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 180px"
//                     // srcSet={`${image.url} 1x,
//                     //          ${image.url.replace('.png', '@2x.png')} 2x,
//                     //          ${image.url.replace('.png', '@4x.png')} 4x`}
//                     quality={85}
//                 />
//             </div>
//         ))}
//     </>
// );
//
// const Partners = () => {
//     const imageUrls: ImageUrl[] = [
//         {id: 1, url: "/company-logos/royal-caribbean.png", alt: "Royal Caribbean International"},
//         {id: 2, url: "/company-logos/celebrity-cruises.png", alt: "Celebrity Cruises"},
//         {id: 3, url: "/company-logos/Avalon.png", alt: "Avalon Waterways"},
//         {id: 4, url: "/company-logos/globus.png", alt: "Globus"},
//         {id: 5, url: "/company-logos/Cosmos.png", alt: "Cosmos"},
//         {id: 6, url: "/company-logos/ctm.png", alt: "CTM"},
//         {id: 7, url: "/company-logos/hotelrack.png", alt: "Hotel Rack"},
//         {id: 8, url: "/company-logos/TBO-Holidays.png", alt: "TBO"},
//     ];
//
//     return (
//         <div className="py-8 sm:py-12 bg-white">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#3C3C3C] text-center mb-6 sm:mb-8 volkhov">
//                     Our Partners
//                 </h2>
//
//                 <div className="overflow-hidden relative py-6 sm:py-8 border-y-2 border-[#E4E6E8]">
//                     <div className="flex">
//                         {[...Array(3)].map((_, index) => (
//                             <TranslateWrapper key={index} duration={20}>
//                                 <ImageList imageUrls={imageUrls}/>
//                             </TranslateWrapper>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Partners;