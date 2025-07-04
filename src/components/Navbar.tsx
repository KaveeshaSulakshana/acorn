// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import {useState, useEffect, useRef} from "react";
//
// type DropdownState = {
//     corporate: boolean;
//     leisure: boolean;
// };
//
// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({
//         corporate: false,
//         leisure: false,
//     });
//     const dropdownRef = useRef<HTMLDivElement>(null);
//
//     const toggleMenu = () => setIsOpen((prev) => !prev);
//
//     const toggleDropdown = (menu: keyof DropdownState) => {
//         setDropdownOpen((prev) => ({
//             ...prev,
//             corporate: menu === "corporate" ? !prev.corporate : false,
//             leisure: menu === "leisure" ? !prev.leisure : false,
//         }));
//     };
//
//     const handleLinkClick = () => {
//         setDropdownOpen({corporate: false, leisure: false});
//         setIsOpen(false);
//     };
//
//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (
//                 dropdownRef.current &&
//                 !dropdownRef.current.contains(event.target as Node)
//             ) {
//                 setDropdownOpen({corporate: false, leisure: false});
//             }
//         };
//
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);
//
//     return (
//         <nav className="bg-white rounded-b-2xl py-2 px-4 md:px-8 roboto shadow-2xl">
//             <div className="flex items-center justify-between">
//                 <Link href="/" onClick={handleLinkClick}>
//                     <div className="flex flex-col items-center cursor-pointer">
//                         <Image
//                             src="/nav_logo.png"
//                             alt="Acorn Travels Logo"
//                             width={150}
//                             height={60}
//                             className="w-32 h-auto md:w-48 lg:w-56"
//                             sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, 224px"
//                             quality={85}
//                             priority
//                         />
//                         <p className="text-[6px] md:text-[7px] text-[#314F9E] font-bold text-center p-1">
//                             Est. 1973
//                         </p>
//                     </div>
//                 </Link>
//
//                 <div className="md:hidden">
//                     <button
//                         onClick={toggleMenu}
//                         className="text-[#3C3C3C] focus:outline-none"
//                         aria-label="Toggle menu"
//                     >
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             {isOpen ? (
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M6 18L18 6M6 6l12 12"
//                                 />
//                             ) : (
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h16m-7 6h7"
//                                 />
//                             )}
//                         </svg>
//                     </button>
//                 </div>
//
//                 <div className="hidden md:flex md:flex-col">
//                     <div className="flex space-x-3 pb-2 pl-2 justify-end items-center">
//                         <Link
//                             href="/about-us"
//                             className="flex items-center m-3 pr-6 border-r-2 border-[#E1251B] hover:text-red-500 text-[14px] lg:text-[16px] font-medium text-[#3C3C3C]"
//                             onClick={handleLinkClick}
//                         >
//                             <Image
//                                 src="/about.png"
//                                 alt="About Us"
//                                 width={20}
//                                 height={20}
//                                 className="mr-2"
//                                 sizes="20px"
//                             />
//                             About Us
//                         </Link>
//                         <Link
//                             href="/flight-booking"
//                             className="flex items-center m-3 hover:text-red-500 text-[14px] lg:text-[16px] font-medium text-[#3C3C3C]"
//                             onClick={handleLinkClick}
//                         >
//                             <Image
//                                 src="/flight-booking.png"
//                                 alt="Flight Booking"
//                                 width={20}
//                                 height={20}
//                                 className="mr-2"
//                                 sizes="20px"
//                             />
//                             Flight Booking
//                         </Link>
//                     </div>
//
//                     <div
//                         className="flex space-x-4 mb-2 lg:space-x-8 items-center border-2 rounded-md border-[#E1251B] py-2 px-5"
//                         ref={dropdownRef}
//                     >
//                         <Link
//                             href="/"
//                             className="text-[#E1251B] text-base lg:text-lg font-semibold hover:text-red-700"
//                             onClick={handleLinkClick}
//                         >
//                             Home
//                         </Link>
//
//                         <div className="relative">
//                             <button
//                                 onClick={() => toggleDropdown("corporate")}
//                                 className="flex items-center text-[#3C3C3C] text-base lg:text-[18px] font-semibold hover:text-red-500 focus:outline-none"
//                             >
//                                 Corporate Travel
//                                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M19 9l-7 7-7-7"
//                                     />
//                                 </svg>
//                             </button>
//                             <div
//                                 className={`${
//                                     dropdownOpen.corporate ? "block" : "hidden"
//                                 } absolute bg-white shadow-lg mt-2 py-2 rounded-md z-10 min-w-[180px]`}
//                             >
//                                 <Link
//                                     href="/corporate-travel"
//                                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                     onClick={handleLinkClick}
//                                 >
//                                     Corporate Travel
//                                 </Link>
//                                 <Link
//                                     href="/mice-travel"
//                                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                     onClick={handleLinkClick}
//                                 >
//                                     MICE Travel
//                                 </Link>
//                             </div>
//                         </div>
//
//                         <div className="relative">
//                             <button
//                                 onClick={() => toggleDropdown("leisure")}
//                                 className="flex items-center text-[#3C3C3C] text-base lg:text-[18px] font-semibold hover:text-red-500 focus:outline-none"
//                             >
//                                 Leisure Travel
//                                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M19 9l-7 7-7-7"
//                                     />
//                                 </svg>
//                             </button>
//                             <div
//                                 className={`${
//                                     dropdownOpen.leisure ? "block" : "hidden"
//                                 } absolute bg-white shadow-lg mt-2 py-2 rounded-md z-10 min-w-[180px]`}
//                             >
//                                 <Link
//                                     href="/leisure-travel"
//                                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                     onClick={handleLinkClick}
//                                 >
//                                     Customized Tours
//                                 </Link>
//                                 <Link
//                                     href="/cruises"
//                                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                     onClick={handleLinkClick}
//                                 >
//                                     Cruises
//                                 </Link>
//                                 <Link
//                                     href="/river-cruises"
//                                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                     onClick={handleLinkClick}
//                                 >
//                                     River Cruises
//                                 </Link>
//                                 <Link
//                                     href="/coach-tours"
//                                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                     onClick={handleLinkClick}
//                                 >
//                                     Coach Tours
//                                 </Link>
//                             </div>
//                         </div>
//
//                         <Link
//                             href="/student-travel"
//                             className="text-[#3C3C3C] text-base lg:text-[18px] font-semibold hover:text-red-500"
//                             onClick={handleLinkClick}
//                         >
//                             Student Travel
//                         </Link>
//                         <Link
//                             href="/visa"
//                             className="text-[#3C3C3C] text-base lg:text-[18px] font-semibold hover:text-red-500"
//                             onClick={handleLinkClick}
//                         >
//                             Visa
//                         </Link>
//                         <Link href="/contact-us" onClick={handleLinkClick}>
//                             <button
//                                 className="bg-[#E1251B] cursor-pointer font-semibold text-white text-sm lg:text-base px-3 py-1.5 lg:px-4 lg:py-2 rounded-md hover:bg-red-600">
//                                 Contact Us
//                             </button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//
//             <div
//                 className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//                     isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
//                 }`}
//             >
//                 <div className="flex flex-col space-y-4 pt-4 pb-4">
//                     <Link
//                         href="/"
//                         className="text-[#E1251B] text-lg font-semibold hover:text-red-700"
//                         onClick={handleLinkClick}
//                     >
//                         Home
//                     </Link>
//                     <div>
//                         <button
//                             onClick={() => toggleDropdown("corporate")}
//                             className="flex items-center text-[#3C3C3C] text-lg font-semibold w-full text-left focus:outline-none"
//                         >
//                             Corporate Travel
//                             <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M19 9l-7 7-7-7"
//                                 />
//                             </svg>
//                         </button>
//                         <div
//                             className={`${
//                                 dropdownOpen.corporate ? "block" : "hidden"
//                             } pl-4 pt-2 space-y-2`}
//                         >
//                             <Link
//                                 href="/corporate-travel"
//                                 className="block text-gray-700 hover:text-red-500"
//                                 onClick={handleLinkClick}
//                             >
//                                 Corporate Travel
//                             </Link>
//                             <Link
//                                 href="/mice-travel"
//                                 className="block text-gray-700 hover:text-red-500"
//                                 onClick={handleLinkClick}
//                             >
//                                 MICE Travel
//                             </Link>
//                         </div>
//                     </div>
//                     <div>
//                         <button
//                             onClick={() => toggleDropdown("leisure")}
//                             className="flex items-center text-[#3C3C3C] text-lg font-semibold w-full text-left focus:outline-none"
//                         >
//                             Leisure Travel
//                             <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M19 9l-7 7-7-7"
//                                 />
//                             </svg>
//                         </button>
//                         <div
//                             className={`${
//                                 dropdownOpen.leisure ? "block" : "hidden"
//                             } pl-4 pt-2 space-y-2`}
//                         >
//                             <Link
//                                 href="/leisure-travel"
//                                 className="block text-gray-700 hover:text-red-500"
//                                 onClick={handleLinkClick}
//                             >
//                                 Customized Tours
//                             </Link>
//                             <Link
//                                 href="/cruises"
//                                 className="block text-gray-700 hover:text-red-500"
//                                 onClick={handleLinkClick}
//                             >
//                                 Cruises
//                             </Link>
//                             <Link
//                                 href="/river-cruises"
//                                 className="block text-gray-700 hover:text-red-500"
//                                 onClick={handleLinkClick}
//                             >
//                                 River Cruises
//                             </Link>
//                             <Link
//                                 href="/coach-tours"
//                                 className="block text-gray-700 hover:text-red-500"
//                                 onClick={handleLinkClick}
//                             >
//                                 Coach Tours
//                             </Link>
//                         </div>
//                     </div>
//                     <Link
//                         href="/student-travel"
//                         className="text-[#3C3C3C] text-lg font-semibold hover:text-red-500"
//                         onClick={handleLinkClick}
//                     >
//                         Student Travel
//                     </Link>
//                     <Link
//                         href="/visa"
//                         className="text-[#3C3C3C] text-lg font-semibold hover:text-red-500"
//                         onClick={handleLinkClick}
//                     >
//                         Visa
//                     </Link>
//                     <Link
//                         href="/about-us"
//                         className="text-[#3C3C3C] text-lg font-semibold hover:text-red-500"
//                         onClick={handleLinkClick}
//                     >
//                         About Us
//                     </Link>
//                     <Link
//                         href="/flight-booking"
//                         className="text-[#3C3C3C] text-lg font-semibold hover:text-red-500"
//                         onClick={handleLinkClick}
//                     >
//                         Flight Booking
//                     </Link>
//                     <Link href="/contact-us" onClick={handleLinkClick}>
//                         <button
//                             className="bg-[#E1251B] cursor-pointer font-semibold text-white text-sm px-4 py-2 rounded-md hover:bg-red-600 w-full">
//                             Contact Us
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </nav>
//     );
// };
//
// export default Navbar;

// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import {useState, useEffect, useRef} from "react";
// import {motion, AnimatePresence} from "framer-motion";
//
// type DropdownState = {
//     corporate: boolean;
//     leisure: boolean;
// };
//
// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({
//         corporate: false,
//         leisure: false,
//     });
//     const dropdownRef = useRef<HTMLDivElement>(null);
//
//     const toggleMenu = () => setIsOpen((prev) => !prev);
//
//     const toggleDropdown = (menu: keyof DropdownState) => {
//         setDropdownOpen((prev) => ({
//             ...prev,
//             corporate: menu === "corporate" ? !prev.corporate : false,
//             leisure: menu === "leisure" ? !prev.leisure : false,
//         }));
//     };
//
//     const handleLinkClick = () => {
//         setDropdownOpen({corporate: false, leisure: false});
//         setIsOpen(false);
//     };
//
//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (
//                 dropdownRef.current &&
//                 !dropdownRef.current.contains(event.target as Node)
//             ) {
//                 setDropdownOpen({corporate: false, leisure: false});
//             }
//         };
//
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);
//
//     const dropdownVariants = {
//         hidden: {opacity: 0, y: -10, scale: 0.95},
//         visible: {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             transition: {duration: 0.2, ease: "easeOut"},
//         },
//         exit: {
//             opacity: 0,
//             y: -10,
//             scale: 0.95,
//             transition: {duration: 0.15, ease: "easeIn"},
//         },
//     };
//
//     const mobileMenuVariants = {
//         hidden: {opacity: 0, height: 0},
//         visible: {
//             opacity: 1,
//             height: "auto",
//             transition: {
//                 duration: 0.3,
//                 ease: "easeInOut",
//                 when: "beforeChildren",
//                 staggerChildren: 0.05,
//             },
//         },
//         exit: {
//             opacity: 0,
//             height: 0,
//             transition: {
//                 duration: 0.2,
//                 ease: "easeInOut",
//                 when: "afterChildren",
//             },
//         },
//     };
//
//     const mobileMenuItemVariants = {
//         hidden: {opacity: 0, y: 10},
//         visible: {opacity: 1, y: 0, transition: {duration: 0.2}},
//         exit: {opacity: 0, y: 10, transition: {duration: 0.15}},
//     };
//
//     return (
//         <nav className="bg-white rounded-b-2xl py-2 px-4 md:px-8 roboto z-50 absolute w-full shadow-2xl">
//             <div className="flex items-center justify-between">
//                 <Link href="/" onClick={handleLinkClick}>
//                     <motion.div
//                         className="flex flex-col items-center cursor-pointer"
//                         // whileHover={{scale: 1.05}}
//                         // transition={{duration: 0.2}}
//                     >
//                         <Image
//                             src="/nav_logo.png"
//                             alt="Acorn Travels Logo"
//                             width={150}
//                             height={60}
//                             className="w-32 h-auto md:w-48 lg:w-56"
//                             sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, 224px"
//                             quality={85}
//                             priority
//                         />
//                         <p className="text-[6px] md:text-[7px] text-[#314F9E] font-bold text-center p-1">
//                             Est. 1973
//                         </p>
//                     </motion.div>
//                 </Link>
//
//                 <div className="md:hidden">
//                     <motion.button
//                         onClick={toggleMenu}
//                         className="text-[#3C3C3C] focus:outline-none"
//                         aria-label="Toggle menu"
//                         // whileTap={{scale: 0.9}}
//                     >
//                         <svg
//                             className="w-6 h-6"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                         >
//                             {isOpen ? (
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M6 18L18 6M6 6l12 12"
//                                 />
//                             ) : (
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h16m-7 6h7"
//                                 />
//                             )}
//                         </svg>
//                     </motion.button>
//                 </div>
//
//                 <div className="hidden md:flex md:flex-col">
//                     <div className="flex space-x-3 pb-2 pl-2 justify-end items-center">
//                         <motion.div
//                             // whileHover={{y: -2}}
//                             // transition={{duration: 0.2}}
//                         >
//                             <Link
//                                 href="/about-us"
//                                 className="flex items-center m-3 pr-6 border-r-2 border-[#E1251B] hover:text-red-500 text-[14px] lg:text-[16px] font-medium text-[#3C3C3C]"
//                                 onClick={handleLinkClick}
//                             >
//                                 <Image
//                                     src="/about.png"
//                                     alt="About Us"
//                                     width={20}
//                                     height={20}
//                                     className="mr-2"
//                                     sizes="20px"
//                                 />
//                                 About Us
//                             </Link>
//                         </motion.div>
//                         <motion.div
//                             // whileHover={{y: -2}}
//                             // transition={{duration: 0.2}}
//                         >
//                             <Link
//                                 href="/flight-booking"
//                                 className="flex items-center m-3 hover:text-red-500 text-[14px] lg:text-[16px] font-medium text-[#3C3C3C]"
//                                 onClick={handleLinkClick}
//                             >
//                                 <Image
//                                     src="/flight-booking.png"
//                                     alt="Flight Booking"
//                                     width={20}
//                                     height={20}
//                                     className="mr-2"
//                                     sizes="20px"
//                                 />
//                                 Flight Booking
//                             </Link>
//                         </motion.div>
//                     </div>
//
//                     <div
//                         className="flex space-x-4 mb-2 lg:space-x-8 items-center border-2 rounded-md border-[#E1251B] py-2 px-5"
//                         ref={dropdownRef}
//                     >
//                         <motion.div
//                             // whileHover={{y: -2}}
//                             // transition={{duration: 0.2}}
//                         >
//                             <Link
//                                 href="/"
//                                 className="text-[#E1251B] text-base lg:text-lg font-semibold hover:text-red-700"
//                                 onClick={handleLinkClick}
//                             >
//                                 Home
//                             </Link>
//                         </motion.div>
//
//                         <div className="relative">
//                             <motion.button
//                                 onClick={() => toggleDropdown("corporate")}
//                                 className="flex items-center text-[#3C3C3C] text-base lg:text-[18px] font-semibold hover:text-red-500 focus:outline-none"
//                                 // whileHover={{y: -2}}
//                                 // transition={{duration: 0.2}}
//                             >
//                                 Corporate Travel
//                                 <svg
//                                     className="w-4 h-4 ml-1"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M19 9l-7 7-7-7"
//                                     />
//                                 </svg>
//                             </motion.button>
//                             <AnimatePresence>
//                                 {dropdownOpen.corporate && (
//                                     <motion.div
//                                         className="absolute bg-white shadow-lg mt-2 py-2 rounded-md z-10 min-w-[180px]"
//                                         variants={dropdownVariants}
//                                         initial="hidden"
//                                         animate="visible"
//                                         exit="exit"
//                                     >
//                                         <Link
//                                             href="/corporate-travel"
//                                             className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                             onClick={handleLinkClick}
//                                         >
//                                             Corporate Travel
//                                         </Link>
//                                         <Link
//                                             href="/mice-travel"
//                                             className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                             onClick={handleLinkClick}
//                                         >
//                                             MICE Travel
//                                         </Link>
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </div>
//
//                         <div className="relative">
//                             <motion.button
//                                 onClick={() => toggleDropdown("leisure")}
//                                 className="flex items-center text-[#3C3C3C] text-base lg:text-[18px] font-semibold hover:text-red-500 focus:outline-none"
//                                 // whileHover={{y: -2}}
//                                 // transition={{duration: 0.2}}
//                             >
//                                 Leisure Travel
//                                 <svg
//                                     className="w-4 h-4 ml-1"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M19 9l-7 7-7-7"
//                                     />
//                                 </svg>
//                             </motion.button>
//                             <AnimatePresence>
//                                 {dropdownOpen.leisure && (
//                                     <motion.div
//                                         className="absolute bg-white shadow-lg mt-2 py-2 rounded-md z-10 min-w-[180px]"
//                                         variants={dropdownVariants}
//                                         initial="hidden"
//                                         animate="visible"
//                                         exit="exit"
//                                     >
//                                         <Link
//                                             href="/leisure-travel"
//                                             className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                             onClick={handleLinkClick}
//                                         >
//                                             Customized Tours
//                                         </Link>
//                                         <Link
//                                             href="/cruises"
//                                             className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                             onClick={handleLinkClick}
//                                         >
//                                             Cruises
//                                         </Link>
//                                         <Link
//                                             href="/river-cruises"
//                                             className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                             onClick={handleLinkClick}
//                                         >
//                                             River Cruises
//                                         </Link>
//                                         <Link
//                                             href="/coach-tours"
//                                             className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                             onClick={handleLinkClick}
//                                         >
//                                             Coach Tours
//                                         </Link>
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </div>
//
//                         <motion.div
//                             // whileHover={{y: -2}}
//                             // transition={{duration: 0.2}}
//                         >
//                             <Link
//                                 href="/student-travel"
//                                 className="text-[#3C3C3C] text-base lg:text-[18px] font-semibold hover:text-red-500"
//                                 onClick={handleLinkClick}
//                             >
//                                 Student Travel
//                             </Link>
//                         </motion.div>
//                         <motion.div
//                             // whileHover={{y: -2}}
//                             // transition={{duration: 0.2}}
//                         >
//                             <Link
//                                 href="/visa"
//                                 className="text-[#3C3C3C] text-base lg:text-[18px] font-semibold hover:text-red-500"
//                                 onClick={handleLinkClick}
//                             >
//                                 Visa
//                             </Link>
//                         </motion.div>
//                         <motion.div
//                             // whileHover={{scale: 1.05}}
//                             // whileTap={{scale: 0.95}}
//                             transition={{duration: 0.2}}
//                         >
//                             <Link href="/contact-us" onClick={handleLinkClick}>
//                                 <button
//                                     className="bg-[#E1251B] cursor-pointer font-semibold text-white text-sm lg:text-base px-3 py-1.5 lg:px-4 lg:py-2 rounded-md hover:bg-red-600">
//                                     Contact Us
//                                 </button>
//                             </Link>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         className="md:hidden overflow-hidden"
//                         variants={mobileMenuVariants}
//                         initial="hidden"
//                         animate="visible"
//                         exit="exit"
//                     >
//                         <motion.div className="flex flex-col space-y-4 pt-4 pb-4">
//                             <motion.div variants={mobileMenuItemVariants}>
//                                 <Link
//                                     href="/"
//                                     className="text-[#E1251B] text-lg font-semibold hover:text-red-700"
//                                     onClick={handleLinkClick}
//                                 >
//                                     Home
//                                 </Link>
//                             </motion.div>
//                             <motion.div variants={mobileMenuItemVariants}>
//                                 <button
//                                     onClick={() => toggleDropdown("corporate")}
//                                     className="flex items-center text-[#3C3C3C] text-lg font-semibold w-full text-left focus:outline-none"
//                                 >
//                                     Corporate Travel
//                                     <svg
//                                         className="w-4 h-4 ml-2"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="2"
//                                             d="M19 9l-7 7-7-7"
//                                         />
//                                     </svg>
//                                 </button>
//                                 <AnimatePresence>
//                                     {dropdownOpen.corporate && (
//                                         <motion.div
//                                             className="pl-4 pt-2 space-y-2"
//                                             initial={{opacity: 0, height: 0}}
//                                             animate={{opacity: 1, height: "auto"}}
//                                             exit={{opacity: 0, height: 0}}
//                                             transition={{duration: 0.2}}
//                                         >
//                                             <Link
//                                                 href="/corporate-travel"
//                                                 className="block text-gray-700 hover:text-red-500"
//                                                 onClick={handleLinkClick}
//                                             >
//                                                 Corporate Travel
//                                             </Link>
//                                             <Link
//                                                 href="/mice-travel"
//                                                 className="block text-gray-700 hover:text-red-500"
//                                                 onClick={handleLinkClick}
//                                             >
//                                                 MICE Travel
//                                             </Link>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </motion.div>
//                             <motion.div variants={mobileMenuItemVariants}>
//                                 <button
//                                     onClick={() => toggleDropdown("leisure")}
//                                     className="flex items-center text-[#3C3C3C] text-lg font-semibold w-full text-left focus:outline-none"
//                                 >
//                                     Leisure Travel
//                                     <svg
//                                         className="w-4 h-4 ml-2"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="2"
//                                             d="M19 9l-7 7-7-7"
//                                         />
//                                     </svg>
//                                 </button>
//                                 <AnimatePresence>
//                                     {dropdownOpen.leisure && (
//                                         <motion.div
//                                             className="pl-4 pt-2 space-y-2"
//                                             initial={{opacity: 0, height: 0}}
//                                             animate={{opacity: 1, height: "auto"}}
//                                             exit={{opacity: 0, height: 0}}
//                                             transition={{duration: 0.2}}
//                                         >
//                                             <Link
//                                                 href="/leisure-travel"
//                                                 className="block text-gray-700 hover:text-red-500"
//                                                 onClick={handleLinkClick}
//                                             >
//                                                 Customized Tours
//                                             </Link>
//                                             <Link
//                                                 href="/cruises"
//                                                 className="block text-gray-700 hover:text-red-500"
//                                                 onClick={handleLinkClick}
//                                             >
//                                                 Cruises
//                                             </Link>
//                                             <Link
//                                                 href="/river-cruises"
//                                                 className="block text-gray-700 hover:text-red-500"
//                                                 onClick={handleLinkClick}
//                                             >
//                                                 River Cruises
//                                             </Link>
//                                             <Link
//                                                 href="/coach-tours"
//                                                 className="block text-gray-700 hover:text-red-500"
//                                                 onClick={handleLinkClick}
//                                             >
//                                                 Coach Tours
//                                             </Link>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </motion.div>
//                             <motion.div variants={mobileMenuItemVariants}>
//                                 <Link
//                                     href="/student-travel"
//                                     className="text-[#3C3C3C] text-lg font-semibold hover:text-red-500"
//                                     onClick={handleLinkClick}
//                                 >
//                                     Student Travel
//                                 </Link>
//                             </motion.div>
//                             <motion.div variants={mobileMenuItemVariants}>
//                                 <Link
//                                     href="/visa"
//                                     className="text-[#3C3C3C] text-lg font-semibold hover:text-red-500"
//                                     onClick={handleLinkClick}
//                                 >
//                                     Visa
//                                 </Link>
//                             </motion.div>
//                             <motion.div variants={mobileMenuItemVariants}>
//                                 <Link
//                                     href="/about-us"
//                                     className="text-[#3C3C3C] text-lg font-semibold hover:text-red-500"
//                                     onClick={handleLinkClick}
//                                 >
//                                     About Us
//                                 </Link>
//                             </motion.div>
//                             <motion.div variants={mobileMenuItemVariants}>
//                                 <Link
//                                     href="/flight-booking"
//                                     className="text-[#3C3C3C] text-lg font-semibold hover:text-red-500"
//                                     onClick={handleLinkClick}
//                                 >
//                                     Flight Booking
//                                 </Link>
//                             </motion.div>
//                             <motion.div
//                                 variants={mobileMenuItemVariants}
//                                 whileHover={{scale: 1.05}}
//                                 whileTap={{scale: 0.95}}
//                             >
//                                 <Link href="/contact-us" onClick={handleLinkClick}>
//                                     <button
//                                         className="bg-[#E1251B] cursor-pointer font-semibold text-white text-sm px-4 py-2 rounded-md hover:bg-red-600 w-full">
//                                         Contact Us
//                                     </button>
//                                 </Link>
//                             </motion.div>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </nav>
//     );
// };
//
// export default Navbar;

// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import {useState, useEffect, useRef} from "react";
// import {motion, AnimatePresence} from "framer-motion";
// import {usePathname} from "next/navigation";
//
// type DropdownState = {
//     corporate: boolean;
//     leisure: boolean;
// };
//
// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({
//         corporate: false,
//         leisure: false,
//     });
//     const dropdownRef = useRef<HTMLDivElement>(null);
//     const pathName = usePathname();
//
//     const toggleMenu = () => setIsOpen((prev) => !prev);
//
//     const toggleDropdown = (menu: keyof DropdownState) => {
//         setDropdownOpen((prev) => ({
//             ...prev,
//             corporate: menu === "corporate" ? !prev.corporate : false,
//             leisure: menu === "leisure" ? !prev.leisure : false,
//         }));
//     };
//
//     const handleLinkClick = () => {
//         setDropdownOpen({corporate: false, leisure: false});
//         setIsOpen(false);
//     };
//
//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//                 setDropdownOpen({corporate: false, leisure: false});
//             }
//         };
//
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);
//
//     const dropdownVariants = {
//         hidden: {opacity: 0, y: -10, scale: 0.95},
//         visible: {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             transition: {duration: 0.2, ease: "easeOut"},
//         },
//         exit: {
//             opacity: 0,
//             y: -10,
//             scale: 0.95,
//             transition: {duration: 0.15, ease: "easeIn"},
//         },
//     };
//
//     const mobileMenuVariants = {
//         hidden: {opacity: 0, height: 0},
//         visible: {
//             opacity: 1,
//             height: "auto",
//             transition: {
//                 duration: 0.3,
//                 ease: "easeInOut",
//                 when: "beforeChildren",
//                 staggerChildren: 0.05,
//             },
//         },
//         exit: {
//             opacity: 0,
//             height: 0,
//             transition: {
//                 duration: 0.2,
//                 ease: "easeInOut",
//                 when: "afterChildren",
//             },
//         },
//     };
//
//     const mobileMenuItemVariants = {
//         hidden: {opacity: 0, y: 10},
//         visible: {opacity: 1, y: 0, transition: {duration: 0.2}},
//         exit: {opacity: 0, y: 10, transition: {duration: 0.15}},
//     };
//
//     const getLinkClass = (href: string) => {
//         return pathname === href
//             ? "text-red-500 font-semibold"
//             : "text-[#3C3C3C] hover:text-red-500 font-semibold";
//     };
//
//     const getDropdownLinkClass = (href: string) => {
//         return pathname === href
//             ? "block px-3 sm:px-4 py-1.5 sm:py-2 text-red-500 hover:bg-gray-100 text-xs sm:text-sm md:text-[14px]"
//             : "block px-3 sm:px-4 py-1.5 sm:py-2 text-gray-700 hover:bg-gray-100 text-xs sm:text-sm md:text-[14px]";
//     };
//
//
//     return (
//         <nav
//             className="bg-white rounded-b-xl sm:rounded-b-2xl py-2 sm:py-3 md:py-4
//                  px-4 sm:px-6 lg:px-8 roboto z-50 absolute w-full shadow-lg sm:shadow-xl"
//         >
//             <div className="flex container mx-auto items-center justify-between">
//                 <Link href="/" onClick={handleLinkClick}>
//                     <motion.div
//                         className="flex flex-col items-center cursor-pointer"
//                         // whileHover={{scale: 1.05}}
//                         // transition={{duration: 0.2}}
//                     >
//                         <Image
//                             src="/nav_logo.png"
//                             alt="Acorn Travels Logo"
//                             width={150}
//                             height={60}
//                             className="w-28 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-auto"
//                             sizes="(max-width: 640px) 112px,
//                       (max-width: 768px) 128px,
//                       (max-width: 1024px) 160px,
//                       (max-width: 1280px) 192px,
//                       224px"
//                             quality={85}
//                             priority
//                         />
//                         <p
//                             className="text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px]
//                          text-[#314F9E] font-bold text-center pt-1 sm:pt-1.5"
//                         >
//                             Est. 1973
//                         </p>
//                     </motion.div>
//                 </Link>
//
//                 {/* Mobile Menu Toggle */}
//                 <div className="lg:hidden">
//                     <motion.button
//                         onClick={toggleMenu}
//                         className="text-[#3C3C3C] focus:outline-none"
//                         aria-label="Toggle menu"
//                         whileTap={{scale: 0.9}}
//                     >
//                         <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             {isOpen ? (
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M6 18L18 6M6 6l12 12"
//                                 />
//                             ) : (
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h16m-7 6h7"
//                                 />
//                             )}
//                         </svg>
//                     </motion.button>
//                 </div>
//
//                 <div className="hidden lg:flex lg:flex-col">
//                     <div
//                         className="flex space-x-2 sm:space-x-3 md:space-x-4 pb-1.5 sm:pb-2
//                        pl-2 justify-end items-center"
//                     >
//                         <motion.div
//                             // whileHover={{y: -2}}
//                             // transition={{duration: 0.2}}
//                         >
//                             <Link
//                                 href="/about-us"
//                                 className="flex items-center m-2 sm:m-3 pr-4 sm:pr-6
//                            border-r-2 border-[#E1251B] hover:text-red-500
//                            text-xs sm:text-sm md:text-[14px] lg:text-[15px] xl:text-[16px]
//                            font-medium text-[#3C3C3C]"
//                                 onClick={handleLinkClick}
//                             >
//                                 <Image
//                                     src="/about.png"
//                                     alt="About Us"
//                                     width={20}
//                                     height={20}
//                                     className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5"
//                                     sizes="20px"
//                                 />
//                                 About Us
//                             </Link>
//                         </motion.div>
//                         <motion.div
//                             // whileHover={{y: -2}}
//                             // transition={{duration: 0.2}}
//                         >
//                             <Link
//                                 href="/flight-booking"
//                                 className="flex items-center m-2 sm:m-3
//                                     hover:text-red-500
//                                     text-xs sm:text-sm md:text-[14px] lg:text-[15px] xl:text-[16px]
//                                     font-medium text-[#3C3C3C]"
//                                 onClick={handleLinkClick}
//                             >
//                                 <Image
//                                     src="/flight-booking.png"
//                                     alt="Flight Booking"
//                                     width={20}
//                                     height={20}
//                                     className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5"
//                                     sizes="20px"
//                                 />
//                                 Flight Booking
//                             </Link>
//                         </motion.div>
//                     </div>
//
//                     <div
//                         className="flex space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8
//                        items-center border-2 rounded-md border-[#E1251B]
//                        py-1.5 sm:py-2 px-3 sm:px-4 md:px-5 lg:px-6"
//                         ref={dropdownRef}
//                     >
//                         <motion.div
//                             // whileHover={{y: -2}}
//                             // transition={{duration: 0.2}}
//                         >
//                             <Link
//                                 href="/"
//                                 className="text-[#E1251B]
//                            text-sm sm:text-base md:text-[16px] lg:text-[17px] xl:text-lg
//                            font-semibold hover:text-red-700"
//                                 onClick={handleLinkClick}
//                             >
//                                 Home
//                             </Link>
//                         </motion.div>
//
//                         <div className="relative">
//                             <motion.button
//                                 onClick={() => toggleDropdown("corporate")}
//                                 className="flex items-center text-[#3C3C3C]
//                            text-sm sm:text-base md:text-[16px] lg:text-[17px] xl:text-lg
//                            font-semibold hover:text-red-500 focus:outline-none"
//                                 // whileHover={{y: -2}}
//                                 // transition={{duration: 0.2}}
//                             >
//                                 Corporate Travel
//                                 <svg
//                                     className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 sm:ml-1.5"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M19 9l-7 7-7-7"
//                                     />
//                                 </svg>
//                             </motion.button>
//                             <AnimatePresence>
//                                 {dropdownOpen.corporate && (
//                                     <motion.div
//                                         className="absolute bg-white shadow-lg mt-1 sm:mt-2 py-2 rounded-md z-10
//                                min-w-[160px] sm:min-w-[180px] md:min-w-[200px]"
//                                         variants={dropdownVariants}
//                                         initial="hidden"
//                                         animate="visible"
//                                         exit="exit"
//                                     >
//                                         <Link
//                                             href="/corporate-travel"
//                                             className="block px-3 sm:px-4 py-1.5 sm:py-2
//                                  text-gray-700 hover:bg-gray-100
//                                  text-xs sm:text-sm md:text-[14px]"
//                                             onClick={handleLinkClick}
//                                         >
//                                             Corporate Travel
//                                         </Link>
//                                         <Link
//                                             href="/mice-travel"
//                                             className="block px-3 sm:px-4 py-1.5 sm:py-2
//                                  text-gray-700 hover:bg-gray-100
//                                  text-xs sm:text-sm md:text-[14px]"
//                                             onClick={handleLinkClick}
//                                         >
//                                             MICE Travel
//                                         </Link>
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </div>
//
//                         <div className="relative">
//                             <motion.button
//                                 onClick={() => toggleDropdown("leisure")}
//                                 className="flex items-center text-[#3C3C3C]
//                            text-sm sm:text-base md:text-[16px] lg:text-[17px] xl:text-lg
//                            font-semibold hover:text-red-500 focus:outline-none"
//                                 // whileHover={{y: -2}}
//                                 // transition={{duration: 0.2}}
//                             >
//                                 Leisure Travel
//                                 <svg
//                                     className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 sm:ml-1.5"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M19 9l-7 7-7-7"
//                                     />
//                                 </svg>
//                             </motion.button>
//                             <AnimatePresence>
//                                 {dropdownOpen.leisure && (
//                                     <motion.div
//                                         className="absolute bg-white shadow-lg mt-1 sm:mt-2 py-2 rounded-md z-10
//                                min-w-[160px] sm:min-w-[180px] md:min-w-[200px]"
//                                         variants={dropdownVariants}
//                                         initial="hidden"
//                                         animate="visible"
//                                         exit="exit"
//                                     >
//                                         <Link
//                                             href="/leisure-travel"
//                                             className="block px-3 sm:px-4 py-1.5 sm:py-2
//                                  text-gray-700 hover:bg-gray-100
//                                  text-xs sm:text-sm md:text-[14px]"
//                                             onClick={handleLinkClick}
//                                         >
//                                             Customized Tours
//                                         </Link>
//                                         <Link
//                                             href="/cruises"
//                                             className="block px-3 sm:px-4 py-1.5 sm:py-2
//                                  text-gray-700 hover:bg-gray-100
//                                  text-xs sm:text-sm md:text-[14px]"
//                                             onClick={handleLinkClick}
//                                         >
//                                             Cruises
//                                         </Link>
//                                         <Link
//                                             href="/river-cruises"
//                                             className="block px-3 sm:px-4 py-1.5 sm:py-2
//                                  text-gray-700 hover:bg-gray-100
//                                  text-xs sm:text-sm md:text-[14px]"
//                                             onClick={handleLinkClick}
//                                         >
//                                             River Cruises
//                                         </Link>
//                                         <Link
//                                             href="/coach-tours"
//                                             className="block px-3 sm:px-4 py-1.5 sm:py-2
//                                  text-gray-700 hover:bg-gray-100
//                                  text-xs sm:text-sm md:text-[14px]"
//                                             onClick={handleLinkClick}
//                                         >
//                                             Coach Tours
//                                         </Link>
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </div>
//
//                         <motion.div
//                             // whileHover={{y: -2}}
//                             // transition={{duration: 0.2}}
//                         >
//                             <Link
//                                 href="/student-travel"
//                                 className="text-[#3C3C3C]
//                            text-sm sm:text-base md:text-[16px] lg:text-[17px] xl:text-lg
//                            font-semibold hover:text-red-500"
//                                 onClick={handleLinkClick}
//                             >
//                                 Student Travel
//                             </Link>
//                         </motion.div>
//                         <motion.div
//                             // whileHover={{y: -2}}
//                             // transition={{duration: 0.2}}
//                         >
//                             <Link
//                                 href="/visa"
//                                 className="text-[#3C3C3C]
//                            text-sm sm:text-base md:text-[16px] lg:text-[17px] xl:text-lg
//                            font-semibold hover:text-red-500"
//                                 onClick={handleLinkClick}
//                             >
//                                 Visa
//                             </Link>
//                         </motion.div>
//                         <motion.div
//                             // whileHover={{scale: 1.05}}
//                             whileTap={{scale: 0.95}}
//                             // transition={{duration: 0.2}}
//                         >
//                             <Link href="/contact-us" onClick={handleLinkClick}>
//                                 <button
//                                     className="bg-[#E1251B] cursor-pointer font-semibold text-white
//                              text-xs sm:text-sm md:text-[14px] lg:text-[15px] xl:text-base
//                              px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-md
//                              hover:bg-red-600"
//                                 >
//                                     Contact Us
//                                 </button>
//                             </Link>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         className="lg:hidden overflow-hidden"
//                         variants={mobileMenuVariants}
//                         initial="hidden"
//                         animate="visible"
//                         exit="exit"
//                     >
//                         <motion.div
//                             className="flex flex-col space-y-3 sm:space-y-4 pt-4 sm:pt-5 pb-4 sm:pb-6"
//                         >
//                             <motion.div variants={mobileMenuItemVariants}>
//                                 <Link
//                                     href="/"
//                                     className="text-[#E1251B] text-base sm:text-lg font-semibold
//                              hover:text-red-700"
//                                     onClick={handleLinkClick}
//                                 >
//                                     Home
//                                 </Link>
//                             </motion.div>
//                             <motion.div variants={mobileMenuItemVariants}>
//                                 <button
//                                     onClick={() => toggleDropdown("corporate")}
//                                     className="flex items-center text-[#3C3C3C] text-base sm:text-lg
//                              font-semibold w-full text-left focus:outline-none"
//                                 >
//                                     Corporate Travel
//                                     <svg
//                                         className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="2"
//                                             d="M19 9l-7 7-7-7"
//                                         />
//                                     </svg>
//                                 </button>
//                                 <AnimatePresence>
//                                     {dropdownOpen.corporate && (
//                                         <motion.div
//                                             className="pl-4 sm:pl-6 pt-2 sm:pt-3 space-y-2 sm:space-y-3"
//                                             initial={{opacity: 0, height: 0}}
//                                             animate={{opacity: 1, height: "auto"}}
//                                             exit={{opacity: 0, height: 0}}
//                                             transition={{duration: 0.2}}
//                                         >
//                                             <Link
//                                                 href="/corporate-travel"
//                                                 className="block text-gray-700 hover:text-red-500
//                                    text-sm sm:text-base"
//                                                 onClick={handleLinkClick}
//                                             >
//                                                 Corporate Travel
//                                             </Link>
//                                             <Link
//                                                 href="/mice-travel"
//                                                 className="block text-gray-700 hover:text-red-500
//                                    text-sm sm:text-base"
//                                                 onClick={handleLinkClick}
//                                             >
//                                                 MICE Travel
//                                             </Link>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </motion.div>
//                             <motion.div variants={mobileMenuItemVariants}>
//                                 <button
//                                     onClick={() => toggleDropdown("leisure")}
//                                     className="flex items-center text-[#3C3C3C] text-base sm:text-lg
//                              font-semibold w-full text-left focus:outline-none"
//                                 >
//                                     Leisure Travel
//                                     <svg
//                                         className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="2"
//                                             d="M19 9l-7 7-7-7"
//                                         />
//                                     </svg>
//                                 </button>
//                                 <AnimatePresence>
//                                     {dropdownOpen.leisure && (
//                                         <motion.div
//                                             className="pl-4 sm:pl-6 pt-2 sm:pt-3 space-y-2 sm:space-y-3"
//                                             initial={{opacity: 0, height: 0}}
//                                             animate={{opacity: 1, height: "auto"}}
//                                             exit={{opacity: 0, height: 0}}
//                                             transition={{duration: 0.2}}
//                                         >
//                                             <Link
//                                                 href="/leisure-travel"
//                                                 className="block text-gray-700 hover:text-red-500
//                                    text-sm sm:text-base"
//                                                 onClick={handleLinkClick}
//                                             >
//                                                 Customized Tours
//                                             </Link>
//                                             <Link
//                                                 href="/cruises"
//                                                 className="block text-gray-700 hover:text-red-500
//                                    text-sm sm:text-base"
//                                                 onClick={handleLinkClick}
//                                             >
//                                                 Cruises
//                                             </Link>
//                                             <Link
//                                                 href="/river-cruises"
//                                                 className="block text-gray-700 hover:text-red-500
//                                    text-sm sm:text-base"
//                                                 onClick={handleLinkClick}
//                                             >
//                                                 River Cruises
//                                             </Link>
//                                             <Link
//                                                 href="/coach-tours"
//                                                 className="block text-gray-700 hover:text-red-500
//                                    text-sm sm:text-base"
//                                                 onClick={handleLinkClick}
//                                             >
//                                                 Coach Tours
//                                             </Link>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </motion.div>
//                             <motion.div variants={mobileMenuItemVariants}>
//                                 <Link
//                                     href="/student-travel"
//                                     className="text-[#3C3C3C] text-base sm:text-lg font-semibold
//                              hover:text-red-500"
//                                     onClick={handleLinkClick}
//                                 >
//                                     Student Travel
//                                 </Link>
//                             </motion.div>
//                             <motion.div variants={mobileMenuItemVariants}>
//                                 <Link
//                                     href="/visa"
//                                     className="text-[#3C3C3C] text-base sm:text-lg font-semibold
//                              hover:text-red-500"
//                                     onClick={handleLinkClick}
//                                 >
//                                     Visa
//                                 </Link>
//                             </motion.div>
//                             <motion.div variants={mobileMenuItemVariants}>
//                                 <Link
//                                     href="/about-us"
//                                     className="text-[#3C3C3C] text-base sm:text-lg font-semibold
//                              hover:text-red-500"
//                                     onClick={handleLinkClick}
//                                 >
//                                     About Us
//                                 </Link>
//                             </motion.div>
//                             <motion.div variants={mobileMenuItemVariants}>
//                                 <Link
//                                     href="/flight-booking"
//                                     className="text-[#3C3C3C] text-base sm:text-lg font-semibold
//                              hover:text-red-500"
//                                     onClick={handleLinkClick}
//                                 >
//                                     Flight Booking
//                                 </Link>
//                             </motion.div>
//                             <motion.div
//                                 variants={mobileMenuItemVariants}
//                                 whileHover={{scale: 1.05}}
//                                 whileTap={{scale: 0.95}}
//                             >
//                                 <Link href="/contact-us" onClick={handleLinkClick}>
//                                     <button
//                                         className="bg-[#E1251B] cursor-pointer font-semibold text-white
//                                text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-2.5
//                                rounded-md hover:bg-red-600 w-full"
//                                     >
//                                         Contact Us
//                                     </button>
//                                 </Link>
//                             </motion.div>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </nav>
//     );
// };
//
// export default Navbar;

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
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen({corporate: false, leisure: false});
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // const dropdownVariants = {
    //     hidden: {opacity: 0, y: -10, scale: 0.95},
    //     visible: {
    //         opacity: 1,
    //         y: 0,
    //         scale: 1,
    //         transition: {duration: 0.2, ease: "easeOut"},
    //     },
    //     exit: {
    //         opacity: 0,
    //         y: -10,
    //         scale: 0.95,
    //         transition: {duration: 0.15, ease: "easeIn"},
    //     },
    // };

    const dropdownVariants: Variants = {
        hidden: { opacity: 0, y: -10, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.2, ease: "easeOut" }, // Use valid Easing value
        },
        exit: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: { duration: 0.15, ease: "easeIn" }, // Use valid Easing value
        },
    };

    // const mobileMenuVariants = {
    //     hidden: {opacity: 0, height: 0},
    //     visible: {
    //         opacity: 1,
    //         height: "auto",
    //         transition: {
    //             duration: 0.3,
    //             ease: "easeInOut",
    //             when: "beforeChildren",
    //             staggerChildren: 0.05,
    //         },
    //     },
    //     exit: {
    //         opacity: 0,
    //         height: 0,
    //         transition: {
    //             duration: 0.2,
    //             ease: "easeInOut",
    //             when: "afterChildren",
    //         },
    //     },
    // };

    const mobileMenuVariants: Variants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: "auto", // This is fine, but ensure Framer Motion handles it
            transition: {
                duration: 0.3,
                ease: "easeInOut", // Use a valid Easing value
                when: "beforeChildren",
                staggerChildren: 0.05,
            },
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.2,
                ease: "easeInOut", // Use a valid Easing value
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
            ? "border-b-4 border-[#2B5597] pb-3 font-medium"
            : "hover:text-blue-950 font-medium";
    };

    // Define active dropdown link class
    const getDropdownLinkClass = (href: string) => {
        return pathname === href
            ? "block px-3 sm:px-4 py-1.5 sm:py-2 text-[#2B5597] hover:bg-gray-100 font-medium text-xs sm:text-sm md:text-[14px]"
            : "block px-3 sm:px-4 py-1.5 sm:py-2 text-gray-700 hover:bg-gray-100 font-medium text-xs sm:text-sm md:text-[14px]";
    };

    return (
        <nav
            className="bg-white rounded-b-xl sm:rounded-b-2xl py-2 sm:py-3 md:py-4
                 px-4 sm:px-6 lg:px-8 roboto z-50 absolute w-full shadow-lg sm:shadow-xl"
        >
            <div className="flex container mx-auto items-center justify-between">
                <Link href="/" onClick={handleLinkClick}>
                    <motion.div
                        className="flex flex-col items-center cursor-pointer"
                    >
                        <Image
                            src="/nav_logo.png"
                            alt="Acorn Travels Logo"
                            width={150}
                            height={60}
                            className="w-28 sm:w-32 md:w-40 h-auto"
                            sizes="(max-width: 640px) 112px,
                      (max-width: 768px) 128px,
                      (max-width: 1024px) 160px,
                      (max-width: 1280px) 192px,
                      224px"
                            quality={85}
                            priority
                        />
                        <p
                            className="text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px]
                         text-[#314F9E] font-bold text-center pt-1 sm:pt-1.5"
                        >
                            Est. 1973
                        </p>
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
                        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    {/*<div*/}
                    {/*    className="flex space-x-2 sm:space-x-3 md:space-x-4 pb-1.5 sm:pb-2*/}
                    {/*   pl-2 justify-end items-center"*/}
                    {/*>*/}
                    {/*    <motion.div>*/}
                    {/*        <Link*/}
                    {/*            href="/about-us"*/}
                    {/*            className={`flex items-center m-2 sm:m-3 pr-4 sm:pr-6*/}
                    {/*       border-r-2 border-[#E1251B] ${getLinkClass("/about-us")}*/}
                    {/*       text-xs sm:text-sm md:text-[14px] lg:text-[15px] xl:text-[16px]*/}
                    {/*       font-medium`}*/}
                    {/*            onClick={handleLinkClick}*/}
                    {/*        >*/}
                    {/*            <Image*/}
                    {/*                src="/about.png"*/}
                    {/*                alt="About Us"*/}
                    {/*                width={20}*/}
                    {/*                height={20}*/}
                    {/*                className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5"*/}
                    {/*                sizes="20px"*/}
                    {/*            />*/}
                    {/*            About Us*/}
                    {/*        </Link>*/}
                    {/*    </motion.div>*/}
                    {/*    <motion.div>*/}
                    {/*        <Link*/}
                    {/*            href="/flight-booking"*/}
                    {/*            className={`flex items-center m-2 sm:m-3*/}
                    {/*                ${getLinkClass("/flight-booking")}*/}
                    {/*                text-xs sm:text-sm md:text-[14px] lg:text-[15px] xl:text-[16px]*/}
                    {/*                font-medium`}*/}
                    {/*            onClick={handleLinkClick}*/}
                    {/*        >*/}
                    {/*            <Image*/}
                    {/*                src="/flight-booking.png"*/}
                    {/*                alt="Flight Booking"*/}
                    {/*                width={20}*/}
                    {/*                height={20}*/}
                    {/*                className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5"*/}
                    {/*                sizes="20px"*/}
                    {/*            />*/}
                    {/*            Flight Booking*/}
                    {/*        </Link>*/}
                    {/*    </motion.div>*/}
                    {/*</div>*/}

                    <div
                        className="flex space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8
                       items-center py-1.5 sm:py-2 px-3 sm:px-4 md:px-5 lg:px-6"
                        ref={dropdownRef}
                    >
                        <motion.div>
                            <Link
                                href="/"
                                className={`${getLinkClass("/")} text-[#3C3C3C] font-medium text-sm sm:text-base md:text-[16px] lg:text-[17px] xl:text-lg`}
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
                                {/*<svg*/}
                                {/*    className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 sm:ml-1.5"*/}
                                {/*    fill="none"*/}
                                {/*    stroke="currentColor"*/}
                                {/*    viewBox="0 0 24 24"*/}
                                {/*>*/}
                                {/*    <path*/}
                                {/*        strokeLinecap="round"*/}
                                {/*        strokeLinejoin="round"*/}
                                {/*        strokeWidth="2"*/}
                                {/*        d="M19 9l-7 7-7-7"*/}
                                {/*    />*/}
                                {/*</svg>*/}

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
                                {/*<svg*/}
                                {/*    className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 sm:ml-1.5"*/}
                                {/*    fill="none"*/}
                                {/*    stroke="currentColor"*/}
                                {/*    viewBox="0 0 24 24"*/}
                                {/*>*/}
                                {/*    <path*/}
                                {/*        strokeLinecap="round"*/}
                                {/*        strokeLinejoin="round"*/}
                                {/*        strokeWidth="2"*/}
                                {/*        d="M19 9l-7 7-7-7"*/}
                                {/*    />*/}
                                {/*</svg>*/}

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
                                className={`${getLinkClass("/student-travel")} text-[#3C3C3C] font-medium text-sm sm:text-base md:text-[16px] lg:text-[17px] xl:text-lg`}
                                onClick={handleLinkClick}
                            >
                                Student
                            </Link>
                        </motion.div>
                        <motion.div>
                            <Link
                                href="/visa"
                                className={`${getLinkClass("/visa")} text-[#3C3C3C] font-medium text-sm sm:text-base md:text-[16px] lg:text-[17px] xl:text-lg`}
                                onClick={handleLinkClick}
                            >
                                Visa
                            </Link>
                        </motion.div>
                        <motion.div>
                            <Link
                                href="/about-us"
                                className={`${getLinkClass("/about-us")} text-[#3C3C3C] text-sm font-medium sm:text-base md:text-[16px] lg:text-[17px] xl:text-lg`}
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
                                    {/*<svg*/}
                                    {/*    className="w-4 h-4 sm:w-5 sm:h-5 ml-2"*/}
                                    {/*    fill="none"*/}
                                    {/*    stroke="currentColor"*/}
                                    {/*    viewBox="0 0 24 24"*/}
                                    {/*>*/}
                                    {/*    <path*/}
                                    {/*        strokeLinecap="round"*/}
                                    {/*        strokeLinejoin="round"*/}
                                    {/*        strokeWidth="2"*/}
                                    {/*        d="M19 9l-7 7-7-7"*/}
                                    {/*    />*/}
                                    {/*</svg>*/}

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
                                    {/*<svg*/}
                                    {/*    className="w-4 h-4 sm:w-5 sm:h-5 ml-2"*/}
                                    {/*    fill="none"*/}
                                    {/*    stroke="currentColor"*/}
                                    {/*    viewBox="0 0 24 24"*/}
                                    {/*>*/}
                                    {/*    <path*/}
                                    {/*        strokeLinecap="round"*/}
                                    {/*        strokeLinejoin="round"*/}
                                    {/*        strokeWidth="2"*/}
                                    {/*        d="M19 9l-7 7-7-7"*/}
                                    {/*    />*/}
                                    {/*</svg>*/}

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
                                    className={`${getLinkClass("/student-travel")} text-[#3C3C3C] font-medium text-base sm:text-lg`}
                                    onClick={handleLinkClick}
                                >
                                    Student Travel
                                </Link>
                            </motion.div>
                            <motion.div variants={mobileMenuItemVariants}>
                                <Link
                                    href="/visa"
                                    className={`${getLinkClass("/visa")} text-[#3C3C3C] font-medium text-base sm:text-lg`}
                                    onClick={handleLinkClick}
                                >
                                    Visa
                                </Link>
                            </motion.div>
                            <motion.div variants={mobileMenuItemVariants}>
                                <Link
                                    href="/about-us"
                                    className={`${getLinkClass("/about-us")} text-[#3C3C3C] font-medium text-base sm:text-lg`}
                                    onClick={handleLinkClick}
                                >
                                    About Us
                                </Link>
                            </motion.div>
                            {/*<motion.div variants={mobileMenuItemVariants}>*/}
                            {/*    <Link*/}
                            {/*        href="/flight-booking"*/}
                            {/*        className={`${getLinkClass("/flight-booking")} text-base sm:text-lg`}*/}
                            {/*        onClick={handleLinkClick}*/}
                            {/*    >*/}
                            {/*        Flight Booking*/}
                            {/*    </Link>*/}
                            {/*</motion.div>*/}
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
    );
};

export default Navbar;