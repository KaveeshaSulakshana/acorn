import Image from "next/image";
import Link from "next/link";

interface HeroButton {
    _key?: string;
    title: string;
    link: string;
}

interface HeroProps {
    hero: {
        image: string;
        title: string;
        description: string;
        buttonText: HeroButton[];
    };
}

const Hero = ({hero}: HeroProps) => {
    return (
        <div className="relative w-full h-[400px] md:h-[600px] lg:h-[790px] overflow-hidden lato">
            <div
                className="absolute inset-0 transition-opacity duration-500 opacity-100">
                <Image
                    src={hero.image}
                    alt={hero.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div
                    className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 lg:px-16">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-3 md:mb-4 lg:mb-6 max-w-5xl leading-6 md:leading-15">
                        {hero.title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-xl text-[#D3D1D1] font-medium mb-4 md:mb-6 lg:mb-8 max-w-xl leading-5 md:leading-7 lg:max-w-2xl">
                        {hero.description}
                    </p>
                    {hero.buttonText && hero.buttonText.length > 0 && (
                        <div
                            className="flex flex-row justify-center items-center bg-[#2B5597] rounded-md">
                            {/*{*/}
                            {/*    hero.buttonText.map((button, index) => (*/}
                            {/*        <Link key={button._key || index} href={button.link || "#"}>*/}
                            {/*            /!*<button*!/*/}
                            {/*            /!*    className="bg-[#2B5597] border-white border-x-2 first:border-x-0 last:border-x-0 text-white text-xs sm:text-base font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-blue-950 transition-colors duration-300">*!/*/}
                            {/*            /!*    {button.title}*!/*/}
                            {/*            /!*</button>*!/*/}

                            {/*            <button*/}
                            {/*                className={`bg-[#2B5597] text-white text-xs sm:text-base font-bold px-4 sm:px-6 py-2 sm:py-3 first:rounded-l-md last:rounded-r-md hover:bg-blue-950 transition-colors duration-300 ${*/}
                            {/*                    index < hero.buttonText.length - 1 ? 'border-r-1 border-white/50' : ''*/}
                            {/*                }`}>*/}
                            {/*                {button.title}*/}
                            {/*            </button>*/}

                            {/*        </Link>*/}
                            {/*    ))*/}
                            {/*}*/}

                            {
                                hero.buttonText.map((button, index) => (
                                    <Link key={button._key || index} href={button.link || "#"}>
                                        <button
                                            className={`bg-[#2B5597] text-white text-xs sm:text-base font-bold px-4 sm:px-6 py-2 sm:py-3 hover:bg-blue-950 cursor-pointer transition-colors duration-300 flex-1 min-w-0 lg:min-w-[150px] ${
                                                index === 0 ? 'rounded-l-md' : ''
                                            } ${
                                                index === hero.buttonText.length - 1 ? 'rounded-r-md' : ''
                                            } ${
                                                index < hero.buttonText.length - 1 ? 'border-r border-white/50' : ''
                                            }`}>
                                            {button.title}
                                        </button>
                                    </Link>
                                ))
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Hero;