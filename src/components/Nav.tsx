"use client";
import Link from "next/link";
import Image from "next/image";
import {useState, useEffect, useRef} from "react";
import {motion, AnimatePresence, Variants} from "framer-motion";
import {usePathname} from "next/navigation";

type DropdownState = {
    corporate: boolean;
    leisure: boolean;
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({
        corporate: false,
        leisure: false,
    });
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen((prev) => !prev);

    const toggleDropdown = (menu: keyof DropdownState) => {
        setDropdownOpen((prev) => ({
            ...prev,
            corporate: menu === "corporate" ? !prev.corporate : false,
            leisure: menu === "leisure" ? !prev.leisure : false,
        }));
    };

    const handleLinkClick = () => {
        setDropdownOpen({corporate: false, leisure: false});
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen({corporate: false, leisure: false});
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const dropdownVariants: Variants = {
        hidden: {opacity: 0, y: -10, scale: 0.95},
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {duration: 0.2, ease: "easeOut"},
        },
        exit: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: {duration: 0.15, ease: "easeIn"},
        },
    };

    const mobileMenuVariants: Variants = {
        hidden: {opacity: 0, height: 0},
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                when: "beforeChildren",
                staggerChildren: 0.05,
            },
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.2,
                ease: "easeInOut",
                when: "afterChildren",
            },
        },
    };

    const mobileMenuItemVariants = {
        hidden: {opacity: 0, y: 10},
        visible: {opacity: 1, y: 0, transition: {duration: 0.2}},
        exit: {opacity: 0, y: 10, transition: {duration: 0.15}},
    };

    // Define active link class
    const getLinkClass = (href: string) => {
        return pathname === href
            ? "text-[#2B5597] font-medium"
            : "hover:text-[#2B5597] text-[#3C3C3C] font-medium";
    };

    // Define active dropdown link class
    const getDropdownLinkClass = (href: string) => {
        return pathname === href
            ? "block px-3 sm:px-4 py-1.5 sm:py-2 text-[#2B5597] hover:bg-gray-100 font-medium text-xs sm:text-sm md:text-[14px]"
            : "block px-3 sm:px-4 py-1.5 sm:py-2 text-gray-700 hover:bg-gray-100 font-medium text-xs sm:text-sm md:text-[14px]";
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
                isScrolled
                    ? "mx-0 mt-0 bg-white shadow-xl"
                    : "mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-20 mt-4 sm:mt-6 rounded-2xl bg-white/95 backdrop-blur-md"
            }`}
        >
            <div
                className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 shadow-xl ${
                    isScrolled ? "bg-white" : "bg-white/95 backdrop-blur-md rounded-2xl"
                } `}
            >
                <nav
                    className=""
                >
                    <div className="flex container mx-auto items-center justify-between">
                        <Link href="/" onClick={handleLinkClick}>
                            <motion.div
                                className="flex flex-col items-center cursor-pointer"
                            >
                                <Image
                                    src="/nav_logo_new.png"
                                    alt="Acorn Travels Logo"
                                    width={120}
                                    height={48}
                                    className="w-24 sm:w-28 md:w-32 h-auto"
                                    sizes="(max-width: 640px) 96px,
                                   (max-width: 768px) 112px,
                                   (max-width: 1024px) 128px,
                                   (max-width: 1280px) 144px,
                                   160px"
                                    quality={85}
                                    priority
                                />
                            </motion.div>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <div className="lg:hidden">
                            <motion.button
                                onClick={toggleMenu}
                                className="text-[#3C3C3C] focus:outline-none"
                                aria-label="Toggle menu"
                                whileTap={{scale: 0.9}}
                            >
                                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    )}
                                </svg>
                            </motion.button>
                        </div>

                        <div className="hidden lg:flex">
                            <div
                                className="flex space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8
                       items-center py-1.5 sm:py-2 px-3 sm:px-4 md:px-5 lg:px-6"
                                ref={dropdownRef}
                            >
                                <motion.div>
                                    <Link
                                        href="/"
                                        className={`${getLinkClass("/")} font-medium text-sm sm:text-base md:text-[16px] lg:text-[17px] xl:text-lg`}
                                        onClick={handleLinkClick}
                                    >
                                        Home
                                    </Link>
                                </motion.div>

                                <div className="relative">
                                    <motion.button
                                        onClick={() => toggleDropdown("corporate")}
                                        className={`flex items-center ${pathname.startsWith("/corporate-travel") || pathname === "/mice-travel" ? "text-[#2B5597]" : "text-[#3C3C3C]"} text-sm sm:text-base text-[#3C3C3C] md:text-[16px] lg:text-[17px] xl:text-lg font-medium hover:text-blue-950 focus:outline-none`}
                                    >
                                        Corporate
                                        <svg
                                            className="w-2 h-2 sm:w-3 sm:h-3 ml-1 sm:ml-4"
                                            width="12" height="8"
                                            viewBox="0 0 12 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.99999 8L11.1961 0.5H0.803833L5.99999 8Z" fill="#3C3C3C"/>
                                        </svg>

                                    </motion.button>
                                    <AnimatePresence>
                                        {dropdownOpen.corporate && (
                                            <motion.div
                                                className="absolute bg-white shadow-lg mt-1 sm:mt-2 py-2 rounded-md z-10
                               min-w-[160px] sm:min-w-[180px] md:min-w-[200px]"
                                                variants={dropdownVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            >
                                                <Link
                                                    href="/corporate-travel#corporate-travel"
                                                    className={getDropdownLinkClass("/corporate-travel")}
                                                    onClick={handleLinkClick}
                                                >
                                                    Corporate Travel
                                                </Link>
                                                <Link
                                                    href="/corporate-travel#mice-travel"
                                                    className={getDropdownLinkClass("/mice-travel")}
                                                    onClick={handleLinkClick}
                                                >
                                                    MICE Travel
                                                </Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="relative">
                                    <motion.button
                                        onClick={() => toggleDropdown("leisure")}
                                        className={`flex items-center ${pathname.startsWith("/leisure-travel") || pathname === "/cruises" || pathname === "/river-cruises" || pathname === "/coach-tours" ? "text-[#3C3C3C]" : "text-[#3C3C3C]"} text-sm sm:text-base font-medium md:text-[16px] lg:text-[17px] xl:text-lg hover:text-blue-950 focus:outline-none`}
                                    >
                                        Leisure
                                        <svg
                                            className="w-2 h-2 sm:w-3 sm:h-3 ml-1 sm:ml-4"
                                            width="12" height="8"
                                            viewBox="0 0 12 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.99999 8L11.1961 0.5H0.803833L5.99999 8Z" fill="#3C3C3C"/>
                                        </svg>

                                    </motion.button>
                                    <AnimatePresence>
                                        {dropdownOpen.leisure && (
                                            <motion.div
                                                className="absolute bg-white font-medium text-[#3C3C3C] shadow-lg mt-1 sm:mt-2 py-2 rounded-md z-10
                               min-w-[160px] sm:min-w-[180px] md:min-w-[200px]"
                                                variants={dropdownVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            >
                                                <Link
                                                    href="/leisure-travel#customized-tours"
                                                    className={getDropdownLinkClass("/leisure-travel")}
                                                    onClick={handleLinkClick}
                                                >
                                                    Customized Tours
                                                </Link>
                                                <Link
                                                    href="/leisure-travel#cruises"
                                                    className={getDropdownLinkClass("/cruises")}
                                                    onClick={handleLinkClick}
                                                >
                                                    Cruises
                                                </Link>
                                                <Link
                                                    href="/leisure-travel#river-cruises"
                                                    className={getDropdownLinkClass("/river-cruises")}
                                                    onClick={handleLinkClick}
                                                >
                                                    River Cruises
                                                </Link>
                                                <Link
                                                    href="/leisure-travel#coach-tours"
                                                    className={getDropdownLinkClass("/coach-tours")}
                                                    onClick={handleLinkClick}
                                                >
                                                    Coach Tours
                                                </Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <motion.div>
                                    <Link
                                        href="/student-travel"
                                        className={`${getLinkClass("/student-travel")} font-medium text-sm sm:text-base md:text-[16px] lg:text-[17px] xl:text-lg`}
                                        onClick={handleLinkClick}
                                    >
                                        Student
                                    </Link>
                                </motion.div>
                                <motion.div>
                                    <Link
                                        href="/visa"
                                        className={`${getLinkClass("/visa")} font-medium text-sm sm:text-base md:text-[16px] lg:text-[17px] xl:text-lg`}
                                        onClick={handleLinkClick}
                                    >
                                        Visa
                                    </Link>
                                </motion.div>
                                <motion.div>
                                    <Link
                                        href="/about-us"
                                        className={`${getLinkClass("/about-us")} text-sm font-medium sm:text-base md:text-[16px] lg:text-[17px] xl:text-lg`}
                                        onClick={handleLinkClick}
                                    >
                                        About Us
                                    </Link>
                                </motion.div>
                            </div>
                        </div>

                        <div className="hidden lg:flex">
                            <motion.div
                                whileTap={{scale: 0.95}}
                            >
                                <Link href="/contact-us" onClick={handleLinkClick}>
                                    <button
                                        className="bg-[#2B5597] cursor-pointer font-medium text-white
                             text-xs sm:text-sm md:text-[14px] lg:text-[15px] xl:text-base
                             px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-md
                             hover:bg-blue-950"
                                    >
                                        Contact Us
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                className="lg:hidden overflow-hidden"
                                variants={mobileMenuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <motion.div
                                    className="flex flex-col space-y-3 sm:space-y-4 pt-4 sm:pt-5 pb-4 sm:pb-6"
                                >
                                    <motion.div variants={mobileMenuItemVariants}>
                                        <Link
                                            href="/"
                                            className={pathname === "/" ? "text-[#2B5597] text-base sm:text-lg font-medium hover:text-blue-950" : "text-[#3C3C3C] text-base sm:text-lg font-medium hover:text-blue-950"}
                                            onClick={handleLinkClick}
                                        >
                                            Home
                                        </Link>
                                    </motion.div>
                                    <motion.div variants={mobileMenuItemVariants}>
                                        <button
                                            onClick={() => toggleDropdown("corporate")}
                                            className={`flex items-center ${pathname.startsWith("/corporate-travel") || pathname === "/mice-travel" ? "text-[#2B5597]" : "text-[#3C3C3C]"} text-base sm:text-lg font-medium w-full text-left focus:outline-none`}
                                        >
                                            Corporate
                                            <svg
                                                className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                                                width="12" height="8"
                                                viewBox="0 0 12 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.99999 8L11.1961 0.5H0.803833L5.99999 8Z" fill="#3C3C3C"/>
                                            </svg>

                                        </button>
                                        <AnimatePresence>
                                            {dropdownOpen.corporate && (
                                                <motion.div
                                                    className="pl-4 sm:pl-6 pt-2 sm:pt-3 space-y-2 sm:space-y-3"
                                                    initial={{opacity: 0, height: 0}}
                                                    animate={{opacity: 1, height: "auto"}}
                                                    exit={{opacity: 0, height: 0}}
                                                    transition={{duration: 0.2}}
                                                >
                                                    <Link
                                                        href="/corporate-travel#corporate-travel"
                                                        className={pathname === "/corporate-travel" ? "block text-[#2B5597] hover:text-blue-950 font-medium text-sm sm:text-base" : "block text-[#3C3C3C] font-medium hover:text-blue-950 text-sm sm:text-base"}
                                                        onClick={handleLinkClick}
                                                    >
                                                        Corporate Travel
                                                    </Link>
                                                    <Link
                                                        href="/corporate-travel#mice-travel"
                                                        className={pathname === "/mice-travel" ? "block text-[#2B5597] hover:text-blue-950 font-medium text-sm sm:text-base" : "block text-[#3C3C3C] font-medium hover:text-blue-950 text-sm sm:text-base"}
                                                        onClick={handleLinkClick}
                                                    >
                                                        MICE Travel
                                                    </Link>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                    <motion.div variants={mobileMenuItemVariants}>
                                        <button
                                            onClick={() => toggleDropdown("leisure")}
                                            className={`flex items-center ${pathname.startsWith("/leisure-travel") || pathname === "/cruises" || pathname === "/river-cruises" || pathname === "/coach-tours" ? "text-[#2B5597]" : "text-[#3C3C3C]"} text-base sm:text-lg font-medium w-full text-left focus:outline-none`}
                                        >
                                            Leisure Travel
                                            <svg
                                                className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                                                width="12" height="8"
                                                viewBox="0 0 12 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.99999 8L11.1961 0.5H0.803833L5.99999 8Z" fill="#3C3C3C"/>
                                            </svg>

                                        </button>
                                        <AnimatePresence>
                                            {dropdownOpen.leisure && (
                                                <motion.div
                                                    className="pl-4 sm:pl-6 pt-2 sm:pt-3 space-y-2 sm:space-y-3"
                                                    initial={{opacity: 0, height: 0}}
                                                    animate={{opacity: 1, height: "auto"}}
                                                    exit={{opacity: 0, height: 0}}
                                                    transition={{duration: 0.2}}
                                                >
                                                    <Link
                                                        href="/leisure-travel#customized-tours"
                                                        className={pathname === "/leisure-travel" ? "block text-[#2B5597] hover:text-blue-950 text-sm sm:text-base" : "block text-[#3C3C3C] hover:text-blue-950 text-sm sm:text-base"}
                                                        onClick={handleLinkClick}
                                                    >
                                                        Customized Tours
                                                    </Link>
                                                    <Link
                                                        href="/leisure-travel#cruises"
                                                        className={pathname === "/cruises" ? "block text-[#2B5597] hover:text-blue-950 font-medium text-sm sm:text-base" : "block text-[#3C3C3C] font-medium hover:text-blue-950 text-sm sm:text-base"}
                                                        onClick={handleLinkClick}
                                                    >
                                                        Cruises
                                                    </Link>
                                                    <Link
                                                        href="/leisure-travel#river-cruises"
                                                        className={pathname === "/river-cruises" ? "block text-[#2B5597] font-medium hover:text-blue-950 text-sm sm:text-base" : "block text-[#3C3C3C] font-medium hover:text-blue-950 text-sm sm:text-base"}
                                                        onClick={handleLinkClick}
                                                    >
                                                        River Cruises
                                                    </Link>
                                                    <Link
                                                        href="/leisure-travel#coach-tours"
                                                        className={pathname === "/coach-tours" ? "block text-[#2B5597] hover:text-blue-950 text-sm sm:text-base" : "block text-[#3C3C3C] hover:text-blue-950 text-sm sm:text-base"}
                                                        onClick={handleLinkClick}
                                                    >
                                                        Coach Tours
                                                    </Link>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                    <motion.div variants={mobileMenuItemVariants}>
                                        <Link
                                            href="/student-travel"
                                            className={`${getLinkClass("/student-travel")} font-medium text-base sm:text-lg`}
                                            onClick={handleLinkClick}
                                        >
                                            Student Travel
                                        </Link>
                                    </motion.div>
                                    <motion.div variants={mobileMenuItemVariants}>
                                        <Link
                                            href="/visa"
                                            className={`${getLinkClass("/visa")} font-medium text-base sm:text-lg`}
                                            onClick={handleLinkClick}
                                        >
                                            Visa
                                        </Link>
                                    </motion.div>
                                    <motion.div variants={mobileMenuItemVariants}>
                                        <Link
                                            href="/about-us"
                                            className={`${getLinkClass("/about-us")} font-medium text-base sm:text-lg`}
                                            onClick={handleLinkClick}
                                        >
                                            About Us
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        variants={mobileMenuItemVariants}
                                        whileTap={{scale: 0.95}}
                                    >
                                        <Link href="/contact-us" onClick={handleLinkClick}>
                                            <button
                                                className="bg-[#2B5597] cursor-pointer mt-3 font-medium text-white
                               text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-2.5
                               rounded-md hover:bg-blue-600 w-full"
                                            >
                                                Contact Us
                                            </button>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;