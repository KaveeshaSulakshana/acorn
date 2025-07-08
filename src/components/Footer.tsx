// import Link from "next/link";
// import Image from "next/image";
//
// const Footer = () => {
//     return (
//         <footer className="volkhov">
//             <div className="bg-gradient-to-r from-[#E1251B] to-[#9D0800] relative text-white z-50">
//                 <svg width="100%" height="100%" viewBox="0 0 1440 90" fill="none" preserveAspectRatio="xMidYMid slice"
//                      xmlns="http://www.w3.org/2000/svg">
//                     <path
//                         d="M373.012 19.6328C76.1479 -11.2798 -9 58.4197 -9 58.4197V-46H1451V54.0117C1451 54.0117 1393.01 65.4756 1311.15 75.4435C1255.29 82.2444 1188.33 88.3489 1121.08 89.6412C850.967 94.8319 591.222 42.3551 373.012 19.6328Z"
//                         fill="#F6F6F6"
//                     />
//                 </svg>
//                 <div className="container mx-auto py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//                         <div className="space-y-3 sm:space-y-4">
//                             <Link href="/">
//                                 <div className="flex items-center mb-3 sm:mb-4 cursor-pointer">
//                                     <Image
//                                         src="/footer-logo.png"
//                                         alt="Acorn Travels Logo"
//                                         width={200}
//                                         height={160}
//                                         className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto"
//                                     />
//                                 </div>
//                             </Link>
//                             <p className="text-[12px] sm:text-[14px] md:text-[15px] font-normal leading-relaxed">
//                                 Acorn Travels, a trusted and IATA-accredited travel agency established in 1973,
//                                 specializes in delivering exceptional travel experiences across both leisure and
//                                 corporate sectors. With a steadfast commitment to personalized service.
//                             </p>
//                         </div>
//
//                         <div className="pl-0 sm:pl-4">
//                             <h3 className="text-[14px] sm:text-base md:text-lg font-bold mb-2 sm:mb-3 md:mb-4">QUICK
//                                 LINKS</h3>
//                             <ul className="px-3 sm:px-5 list-disc space-y-1 sm:space-y-2 text-[#E2E2E2] text-[12px] sm:text-sm md:text-base font-normal">
//                                 <li><Link href="#" className="hover:text-white">About Us</Link></li>
//                                 <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
//                                 <li><Link href="#" className="hover:text-white">Offers</Link></li>
//                                 <li><Link href="#" className="hover:text-white">Careers</Link></li>
//                             </ul>
//                         </div>
//
//                         <div>
//                             <h3 className="text-[14px] sm:text-base md:text-lg font-bold mb-2 sm:mb-3 md:mb-4">OUR
//                                 SERVICES</h3>
//                             <ul className="px-3 sm:px-5 list-disc space-y-1 sm:space-y-2 text-[#E2E2E2] text-[12px] sm:text-sm md:text-base font-normal">
//                                 <li><Link href="#" className="hover:text-white">Ticket Booking</Link></li>
//                                 <li><Link href="#" className="hover:text-white">Visa Service</Link></li>
//                                 <li><Link href="#" className="hover:text-white">Corporate</Link></li>
//                                 <li><Link href="#" className="hover:text-white">MICE</Link></li>
//                                 <li><Link href="#" className="hover:text-white">Leisure</Link></li>
//                             </ul>
//                         </div>
//
//                         <div>
//                             <h3 className="text-[14px] sm:text-base md:text-lg font-bold mb-2 sm:mb-3 md:mb-4">CONTACT
//                                 US</h3>
//                             <ul className="space-y-2 sm:space-y-3 text-[#E2E2E2] text-[12px] sm:text-sm md:text-base">
//                                 <li className="flex items-start gap-2 sm:gap-3 font-normal">
//                                     <Image src="/location.png" alt="Location" width={24} height={24}
//                                            className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0"/>
//                                     <span className="leading-tight">
//                                         Hemas Building, 36 Sir Razik Fareed Mawatha, Colombo 00100
//                                     </span>
//                                 </li>
//                                 <li className="flex items-center gap-2 sm:gap-3 font-normal">
//                                     <Image src="/email.png" alt="Email" width={24} height={24}
//                                            className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0"/>
//                                     <a href="mailto:inquiries.travels@acorn.lk" className="hover:text-white break-all">
//                                         inquiries.travels@acorn.lk
//                                     </a>
//                                 </li>
//                                 <li className="flex items-start gap-2 sm:gap-3 font-normal">
//                                     <Image src="/phone.png" alt="Phone" width={24} height={24}
//                                            className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0"/>
//                                     <div className="space-y-1">
//                                         <a href="tel:+9411704704" className="hover:text-white block">+94 11 704 7045</a>
//                                         <a href="tel:+941172275679" className="hover:text-white block">+94 11 722 756
//                                             79</a>
//                                     </div>
//                                 </li>
//                             </ul>
//                             <div
//                                 className="pt-4 sm:pt-6 md:pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
//                                 <h3 className="text-[14px] sm:text-base md:text-lg font-bold">FOLLOW US:</h3>
//                                 <div className="flex space-x-3 sm:space-x-4 md:space-x-5">
//                                     <Link href="#" className="hover:opacity-80">
//                                         <svg
//                                             width="44"
//                                             height="44"
//                                             viewBox="0 0 46 45"
//                                             fill="none"
//                                             className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path
//                                                 opacity="0.25"
//                                                 d="M22.4775 1.125C34.0977 1.125 43.5448 10.6802 43.5448 22.5C43.5448 34.3198 34.0977 43.875 22.4775 43.875C10.8573 43.8748 1.41101 34.3196 1.41101 22.5C1.41101 10.6804 10.8573 1.1252 22.4775 1.125Z"
//                                                 fill="white"
//                                                 stroke="#E1251B"
//                                                 strokeWidth="2.25"
//                                             />
//                                             <path
//                                                 opacity="0.3"
//                                                 d="M服务业 1.125C34.0977 1.125 43.5448 10.6802 43.5448 22.5C43.5448 34.3198 34.0977 43.875 22.4775 43.875C10.8573 43.8748 1.41101 34.3196 1.41101 22.5C1.41101 10.6804 10.8573 1.1252 22.4775 1.125Z"
//                                                 fill="white"
//                                                 stroke="#E1251B"
//                                                 strokeWidth="2.25"
//                                             />
//                                             <rect x="2.47754" y="2" width="40" height="40" rx="20" fill="white"/>
//                                             <g clipPath="url(#clip0_1968_7049)">
//                                                 <path
//                                                     d="M22.4775 12C16.9545 12 12.4775 16.477 12.4775 22C12.4775 26.991 16.1345 31.128 20.9155 31.879V24.89H18.3755V22H20.9155V19.797C20.9155 17.291 22.4075 15.907 24.6925 15.907C25.7865 15.907 26.9305 16.102 26.9305 16.102V18.562H25.6705C24.4275 18.562 24.0405 19.333 24.0405 20.124V22H26.8135L26.3705 24.89H24.0405V31.879C28.8205 31.129 32.4775 26.99 32.4775 22C32.4775 16.477 28.0005 12 22.4775 12Z"
//                                                     fill="#E1251B"
//                                                 />
//                                             </g>
//                                             <defs>
//                                                 <clipPath id="clip0_1968_7049">
//                                                     <rect width="24" height="24" fill="white"
//                                                           transform="translate(10.4775 10)"/>
//                                                 </clipPath>
//                                             </defs>
//                                         </svg>
//                                     </Link>
//                                     <Link href="#" className="hover:opacity-80">
//                                         <svg
//                                             width="44"
//                                             height="44"
//                                             viewBox="0 0 46 45"
//                                             fill="none"
//                                             className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path
//                                                 opacity="0.25"
//                                                 d="M23.0801 1.125C34.7004 1.125 44.1475 10.6802 44.1475 22.5C44.1475 34.3198 34.7004 43.875 23.0801 43.875C11.46 43.8748 2.01367 34.3196 2.01367 22.5C2.01367 10.6804 11.46 1.1252 23.0801 1.125Z"
//                                                 fill="white"
//                                                 stroke="#E1251B"
//                                                 strokeWidth="2.25"
//                                             />
//                                             <path
//                                                 opacity="0.3"
//                                                 d="M23.0801 1.125C34.7004 1.125 44.1475 10.6802 44.1475 22.5C44.1475 34.3198 34.7004 43.875 23.0801 43.875C11.46 43.8748 2.01367 34.3196 2.01367 22.5C2.01367 10.6804 11.46 1.1252 23.0801 1.125Z"
//                                                 fill="white"
//                                                 stroke="#E1251B"
//                                                 strokeWidth="2.25"
//                                             />
//                                             <rect x="2.5874" y="2" width="40" height="40" rx="20" fill="white"/>
//                                             <g clipPath="url(#clip0_1968_7032)">
//                                                 <path
//                                                     d="M22.5874 12C25.3044 12 25.6434 12.01 26.7094 12.06C27.7744 12.11 28.4994 12.277 29.1374 12.525C29.7974 12.779 30.3534 13.123 30.9094 13.678C31.4179 14.1779 31.8114 14.7826 32.0624 15.45C32.3094 16.087 32.4774 16.813 32.5274 17.878C32.5744 18.944 32.5874 19.283 32.5874 22C32.5874 24.717 32.5774 25.056 32.5274 26.122C32.4774 27.187 32.3094 27.912 32.0624 28.55C31.8121 29.2178 31.4185 29.8226 30.9094 30.322C30.4094 30.8303 29.8047 31.2238 29.1374 31.475C28.5004 31.722 27.7744 31.89 26.7094 31.94C25.6434 31.987 25.3044 32 22.5874 32C19.8704 32 19.5314 31.99 18.4654 31.94C17.4004 31.89 16.6754 31.722 16.0374 31.475C15.3697 31.2245 14.7649 30.8309 14.2654 30.322C13.7568 29.8222 13.3633 29.2175 13.1124 28.55C12.8644 27.913 12.6974 27.187 12.6474 26.122C12.6004 25.056 12.5874 24.717 12.5874 22C12.5874 19.283 12.5974 18.944 12.6474 17.878C12.6974 16.812 12.8644 16.088 13.1124 15.45C13.3626 14.7822 13.7562 14.1773 14.2654 13.678C14.7651 13.1692 15.3698 12.7757 16.0374 12.525C16.6754 12.277 17.3994 12.11 18.4654 12.06C19.5314 12.013 19.8704 12 22.5874 12ZM22.5874 17C21.2613 17 19.9896 17.5268 19.0519 18.4645C18.1142 19.4021 17.5874 20.6739 17.5874 22C17.5874 23.3261 18.1142 24.5979 19.0519 25.5355C19.9896 26.4732 21.2613 27 22.5874 27C23.9135 27 25.1853 26.4732 26.1229 25.5355C27.0606 24.5979 27.5874 23.3261 27.5874 22C27.5874 20.6739 27.0606 19.4021 26.1229 18.4645C25.1853 17.5268 23.9135 17 22.5874 17ZM29.0874 16.75C29.0874 16.4185 28.9557 16.1005 28.7213 15.8661C28.4869 15.6317 28.1689 15.5 27.8374 15.5C27.5059 15.5 27.1879 15.6317 26.9535 15.8661C26.7191 16.1005 26.5874 16.4185 26.5874 16.75C26.5874 17.0815 26.7191 17.3995 26.9535 17.6339C27.1879 17.8683 27.5059 18 27.8374 18C28.1689 18 28.4869 17.8683 28.7213 17.6339C28.9557 17.3995 29.0874 17.0815 29.0874 16.75ZM22.5874 19C23.3831 19 24.1461 19.3161 24.7087 19.8787C25.2713 20.4413 25.5874 21.2044 25.5874 22C25.5874 22.7956 25.2713 23.5587 24.7087 24.1213C24.1461 24.6839 23.3831 25 22.5874 25C21.7918 25 21.0287 24.6839 20.4661 24.1213C19.9035 23.5587 19.5874 22.7956 19.5874 22C19.5874 21.2044 19.9035 20.4413 20.4661 19.8787C21.0287 19.3161 21.7918 19 22.5874 19Z"
//                                                     fill="#E1251B"
//                                                 />
//                                             </g>
//                                             <defs>
//                                                 <clipPath id="clip0_1968_7032">
//                                                     <rect width="24" height="24" fill="white"
//                                                           transform="translate(10.5874 10)"/>
//                                                 </clipPath>
//                                             </defs>
//                                         </svg>
//                                     </Link>
//                                     <Link href="#" className="hover:opacity-80">
//                                         <svg
//                                             width="44"
//                                             height="44"
//                                             viewBox="0 0 45 45"
//                                             fill="none"
//                                             className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path
//                                                 opacity="0.25"
//                                                 d="M22.1895 1.125C33.8097 1.125 43.2568 10.6802 43.2568 22.5C43.2568 34.3198 33.8097 43.875 22.1895 43.875C10.5693 43.8748 1.12305 34.3196 1.12305 22.5C1.12305 10.6804 10.5693 1.1252 22.1895 1.125Z"
//                                                 fill="white"
//                                                 stroke="#E1251B"
//                                                 strokeWidth="2.25"
//                                             />
//                                             <path
//                                                 opacity="0.3"
//                                                 d="M22.1895 1.125C33.8097 1.125 43.2568 10.6802 43.2568 22.5C43.2568 34.3198 33.8097 43.875 22.1895 43.875C10.5693 43.8748 1.12305 34.3196 1.12305 22.5C1.12305 10.6804 10.5693 1.1252 22.1895 1.125Z"
//                                                 fill="white"
//                                                 stroke="#E1251B"
//                                                 strokeWidth="2.25"
//                                             />
//                                             <rect x="1.9707" y="2" width="39.4521" height="40" rx="19.726"
//                                                   fill="white"/>
//                                             <path
//                                                 d="M16.7651 17C17.8545 17 18.7377 16.1046 18.7377 15C18.7377 13.8954 17.8545 13 16.7651 13C15.6756 13 14.7925 13.8954 14.7925 15C14.7925 16.1046 15.6756 17 16.7651 17Z"
//                                                 fill="#E1251B"
//                                             />
//                                             <path
//                                                 d="M18.4089 18.3333H15.1212C14.9398 18.3333 14.7925 18.4826 14.7925 18.6666V28.6666C14.7925 28.8506 14.9398 28.9999 15.1212 28.9999H18.4089C18.5904 28.9999 18.7377 28.8506 18.7377 28.6666V18.6666C18.7377 18.4826 18.5904 18.3333 18.4089 18.3333Z"
//                                                 fill="#E1251B"
//                                             />
//                                             <path
//                                                 d="M28.2042 17.8741C26.799 17.3861 25.0414 17.8148 23.9874 18.5835C23.9513 18.4401 23.8224 18.3335 23.6692 18.3335H20.3815C20.2 18.3335 20.0527 18.4828 20.0527 18.6668V28.6668C20.0527 28.8508 20.2 29.0001 20.3815 29.0001H23.6692C23.8507 29.0001 23.9979 28.8508 23.9979 28.6668V21.4801C24.5292 21.0161 25.2137 20.8681 25.7739 21.1095C26.3171 21.3421 26.6281 21.9101 26.6281 22.6668V28.6668C26.6281 28.8508 26.7754 29.0001 26.9568 29.0001H30.2445C30.426 29.0001 30.5733 28.8508 30.5733 28.6668V21.9955C30.5358 19.2561 29.2648 18.2421 28.2042 17.8741Z"
//                                                 fill="#E1251B"
//                                             />
//                                         </svg>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//             <div
//                 className="py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 text-[#E1251B] bg-white flex flex-col md:flex-row justify-between items-center border-t">
//                 <p className="text-[12px] sm:text-sm md:text-base font-normal mb-2 md:mb-0 text-center">
//                     Copyright 2025 © All Rights Reserved Acorn Travels Pvt Ltd
//                 </p>
//                 <div
//                     className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-[12px] sm:text-sm md:text-base">
//                     <Link href="#" className="hover:underline font-normal">Terms & Conditions</Link>
//                     <Link href="#" className="hover:underline font-normal">Privacy Policy</Link>
//                 </div>
//             </div>
//         </footer>
//     );
// };
//
// export default Footer;

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="lato">
            <div className="bg-gradient-to-b from-[#2B5597] to-[#08234E] relative text-white z-50">
                <svg width="100%" height="100%" viewBox="0 0 1440 90" fill="none" preserveAspectRatio="xMidYMid slice"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M373.012 19.6328C76.1479 -11.2798 -9 58.4197 -9 58.4197V-46H1451V54.0117C1451 54.0117 1393.01 65.4756 1311.15 75.4435C1255.29 82.2444 1188.33 88.3489 1121.08 89.6412C850.967 94.8319 591.222 42.3551 373.012 19.6328Z"
                        fill="white"
                    />
                </svg>
                <div className="container mx-auto py-5 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-10">
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                        <div className="space-y-3 sm:space-y-4">
                            <Link href="/">
                                <div className="flex items-center mb-3 sm:mb-4 cursor-pointer">
                                    <Image
                                        src="/footer-logo.png"
                                        alt="Acorn Travels Logo"
                                        width={200}
                                        height={160}
                                        className="w-36 sm:w-40 md:w-48 lg:w-56 h-auto"
                                    />
                                </div>
                            </Link>
                           <p className="text-[13px] sm:text-[14px] lg:text-[15px] font-normal leading-7 text-justify">
                                Acorn Travels, a trusted and IATA-accredited travel agency established in 1973,
                                specializes in delivering exceptional travel experiences across both leisure and
                                corporate sectors. With a steadfast commitment to personalized service.
                            </p>
                            <div className="flex flex-row gap-1">
                                <Image src="/iata.png" alt="iata-certification" width="120" height="40"/>
                                <Image src="/iso.png" alt="iso-certification" width="120" height="40"/>
                            </div>
                        </div>

                        <div className="pl-0 sm:pl-4">
                            <h3 className="text-sm lg:text-base font-bold mb-2 sm:mb-3 md:mb-4 lato">QUICK
                                LINKS</h3>
                            <ul className="px-3 sm:px-5 list-disc space-y-1 sm:space-y-2 text-[#E2E2E2] text-[13px] sm:text-[14px] md:text-[15px]  lato font-normal">
                                <li><Link href="/flight-booking#offers" className="hover:text-white">Offers</Link></li>
                                <li><Link href="/flight-booking" className="hover:text-white">Flight Booking</Link></li>
                                <li><Link href="/about-us" className="hover:text-white">About Us</Link></li>
                                <li><Link href="/contact-us" className="hover:text-white">Contact Us</Link></li>
                                <li><Link href="#" className="hover:text-white">Careers</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm lg:text-base font-bold mb-2 sm:mb-3 md:mb-4 lato">OUR
                                SERVICES</h3>
                            <ul className="px-3 sm:px-5 list-disc space-y-1 sm:space-y-2 text-[#E2E2E2] text-[13px] sm:text-[14px] md:text-[15px]  lato font-normal">
                                <li><Link href="/corporate-travel" className="hover:text-white">Corporate</Link></li>
                                <li><Link href="/leisure-travel" className="hover:text-white">Leisure</Link></li>
                                <li><Link href="/student-travel" className="hover:text-white">Student</Link></li>
                                <li><Link href="/visa" className="hover:text-white">Visa</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[15px] sm:text-[16px] font-bold mb-2 sm:mb-3 md:mb-4">CONTACT
                                US</h3>
                            <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-[#E2E2E2] text-[13px] sm:text-[14px] md:text-[15px]">
                                <li className="flex items-start gap-2 sm:gap-3 md:gap-4 font-normal">
                                    <Image
                                        src="/location.png"
                                        alt="Location"
                                        width={24}
                                        height={24}
                                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0"
                                    />
                                    <span className="leading-tight">
                                        Hemas Building, 36 Sir Razik Fareed Mawatha, Colombo 00100
                                    </span>
                                </li>
                                <li className="flex items-center gap-2 sm:gap-3 md:gap-4 font-normal">
                                    <Image
                                        src="/email.png"
                                        alt="Email"
                                        width={24}
                                        height={24}
                                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0"
                                    />
                                    <a href="mailto:inquiries.travels@acorn.lk" className="hover:text-white break-all">
                                        inquiries.travels@acorn.lk
                                    </a>
                                </li>
                                <li className="flex items-start gap-2 sm:gap-3 md:gap-4 font-normal">
                                    <Image
                                        src="/phone.png"
                                        alt="Phone"
                                        width={24}
                                        height={24}
                                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0"
                                    />
                                    <div className="space-y-1">
                                        <a href="tel:+94114704704" className="hover:text-white block">+94 114 704 704/5
                                        </a>
                                        <a href="tel:+94772775679" className="hover:text-white block">+94 772 775 679</a>
                                    </div>
                                </li>
                            </ul>
                            <div
                                className="pt-4 sm:pt-5 md:pt-6 lg:pt-8 flex flex-col xl:flex-row items-start xl:items-center gap-3 sm:gap-4 md:gap-5">
                                <h3 className="text-[15px] sm:text-[16px] font-bold">FOLLOW
                                    US:</h3>
                                <div className="flex space-x-3 sm:space-x-4 md:space-x-5">
                                    <Link href="https://www.facebook.com/acorntravels" className="hover:opacity-80">
                                        <svg
                                            width="44"
                                            height="44"
                                            viewBox="0 0 46 45"
                                            fill="none"
                                            className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                opacity="0.25"
                                                d="M22.4775 1.125C34.0977 1.125 43.5448 10.6802 43.5448 22.5C43.5448 34.3198 34.0977 43.875 22.4775 43.875C10.8573 43.8748 1.41101 34.3196 1.41101 22.5C1.41101 10.6804 10.8573 1.1252 22.4775 1.125Z"
                                                fill="white"
                                                stroke="#2B5597"
                                                strokeWidth="2.25"
                                            />
                                            <path
                                                opacity="0.3"
                                                d="M22.4775 1.125C34.0977 1.125 43.5448 10.6802 43.5448 22.5C43.5448 34.3198 34.0977 43.875 22.4775 43.875C10.8573 43.8748 1.41101 34.3196 1.41101 22.5C1.41101 10.6804 10.8573 1.1252 22.4775 1.125Z"
                                                fill="white"
                                                stroke="#2B5597"
                                                strokeWidth="2.25"
                                            />
                                            <rect x="2.47754" y="2" width="40" height="40" rx="20" fill="white"/>
                                            <g clipPath="url(#clip0_1968_7049)">
                                                <path
                                                    d="M22.4775 12C16.9545 12 12.4775 16.477 12.4775 22C12.4775 26.991 16.1345 31.128 20.9155 31.879V24.89H18.3755V22H20.9155V19.797C20.9155 17.291 22.4075 15.907 24.6925 15.907C25.7865 15.907 26.9305 16.102 26.9305 16.102V18.562H25.6705C24.4275 18.562 24.0405 19.333 24.0405 20.124V22H26.8135L26.3705 24.89H24.0405V31.879C28.8205 31.129 32.4775 26.99 32.4775 22C32.4775 16.477 28.0005 12 22.4775 12Z"
                                                    fill="#2B5597"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1968_7049">
                                                    <rect width="24" height="24" fill="white"
                                                          transform="translate(10.4775 10)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                    <Link href="https://www.instagram.com/acorntravels/" className="hover:opacity-80">
                                        <svg
                                            width="44"
                                            height="44"
                                            viewBox="0 0 46 45"
                                            fill="none"
                                            className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                opacity="0.25"
                                                d="M23.0801 1.125C34.7004 1.125 44.1475 10.6802 44.1475 22.5C44.1475 34.3198 34.7004 43.875 23.0801 43.875C11.46 43.8748 2.01367 34.3196 2.01367 22.5C2.01367 10.6804 11.46 1.1252 23.0801 1.125Z"
                                                fill="white"
                                                stroke="#2B5597"
                                                strokeWidth="2.25"
                                            />
                                            <path
                                                opacity="0.3"
                                                d="M23.0801 1.125C34.7004 1.125 44.1475 10.6802 44.1475 22.5C44.1475 34.3198 34.7004 43.875 23.0801 43.875C11.46 43.8748 2.01367 34.3196 2.01367 22.5C2.01367 10.6804 11.46 1.1252 23.0801 1.125Z"
                                                fill="white"
                                                stroke="#2B5597"
                                                strokeWidth="2.25"
                                            />
                                            <rect x="2.5874" y="2" width="40" height="40" rx="20" fill="white"/>
                                            <g clipPath="url(#clip0_1968_7032)">
                                                <path
                                                    d="M22.5874 12C25.3044 12 25.6434 12.01 26.7094 12.06C27.7744 12.11 28.4994 12.277 29.1374 12.525C29.7974 12.779 30.3534 13.123 30.9094 13.678C31.4179 14.1779 31.8114 14.7826 32.0624 15.45C32.3094 16.087 32.4774 16.813 32.5274 17.878C32.5744 18.944 32.5874 19.283 32.5874 22C32.5874 24.717 32.5774 25.056 32.5274 26.122C32.4774 27.187 32.3094 27.912 32.0624 28.55C31.8121 29.2178 31.4185 29.8226 30.9094 30.322C30.4094 30.8303 29.8047 31.2238 29.1374 31.475C28.5004 31.722 27.7744 31.89 26.7094 31.94C25.6434 31.987 25.3044 32 22.5874 32C19.8704 32 19.5314 31.99 18.4654 31.94C17.4004 31.89 16.6754 31.722 16.0374 31.475C15.3697 31.2245 14.7649 30.8309 14.2654 30.322C13.7568 29.8222 13.3633 29.2175 13.1124 28.55C12.8644 27.913 12.6974 27.187 12.6474 26.122C12.6004 25.056 12.5874 24.717 12.5874 22C12.5874 19.283 12.5974 18.944 12.6474 17.878C12.6974 16.812 12.8644 16.088 13.1124 15.45C13.3626 14.7822 13.7562 14.1773 14.2654 13.678C14.7651 13.1692 15.3698 12.7757 16.0374 12.525C16.6754 12.277 17.3994 12.11 18.4654 12.06C19.5314 12.013 19.8704 12 22.5874 12ZM22.5874 17C21.2613 17 19.9896 17.5268 19.0519 18.4645C18.1142 19.4021 17.5874 20.6739 17.5874 22C17.5874 23.3261 18.1142 24.5979 19.0519 25.5355C19.9896 26.4732 21.2613 27 22.5874 27C23.9135 27 25.1853 26.4732 26.1229 25.5355C27.0606 24.5979 27.5874 23.3261 27.5874 22C27.5874 20.6739 27.0606 19.4021 26.1229 18.4645C25.1853 17.5268 23.9135 17 22.5874 17ZM29.0874 16.75C29.0874 16.4185 28.9557 16.1005 28.7213 15.8661C28.4869 15.6317 28.1689 15.5 27.8374 15.5C27.5059 15.5 27.1879 15.6317 26.9535 15.8661C26.7191 16.1005 26.5874 16.4185 26.5874 16.75C26.5874 17.0815 26.7191 17.3995 26.9535 17.6339C27.1879 17.8683 27.5059 18 27.8374 18C28.1689 18 28.4869 17.8683 28.7213 17.6339C28.9557 17.3995 29.0874 17.0815 29.0874 16.75ZM22.5874 19C23.3831 19 24.1461 19.3161 24.7087 19.8787C25.2713 20.4413 25.5874 21.2044 25.5874 22C25.5874 22.7956 25.2713 23.5587 24.7087 24.1213C24.1461 24.6839 23.3831 25 22.5874 25C21.7918 25 21.0287 24.6839 20.4661 24.1213C19.9035 23.5587 19.5874 22.7956 19.5874 22C19.5874 21.2044 19.9035 20.4413 20.4661 19.8787C21.0287 19.3161 21.7918 19 22.5874 19Z"
                                                    fill="#2B5597"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1968_7032">
                                                    <rect width="24" height="24" fill="white"
                                                          transform="translate(10.5874 10)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/acorntravels/" className="hover:opacity-80">
                                        <svg
                                            width="44"
                                            height="44"
                                            viewBox="0 0 45 45"
                                            fill="none"
                                            className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                opacity="0.25"
                                                d="M22.1895 1.125C33.8097 1.125 43.2568 10.6802 43.2568 22.5C43.2568 34.3198 33.8097 43.875 22.1895 43.875C10.5693 43.8748 1.12305 34.3196 1.12305 22.5C1.12305 10.6804 10.5693 1.1252 22.1895 1.125Z"
                                                fill="white"
                                                stroke="#2B5597"
                                                strokeWidth="2.25"
                                            />
                                            <path
                                                opacity="0.3"
                                                d="M22.1895 1.125C33.8097 1.125 43.2568 10.6802 43.2568 22.5C43.2568 34.3198 33.8097 43.875 22.1895 43.875C10.5693 43.8748 1.12305 34.3196 1.12305 22.5C1.12305 10.6804 10.5693 1.1252 22.1895 1.125Z"
                                                fill="white"
                                                stroke="#2B5597"
                                                strokeWidth="2.25"
                                            />
                                            <rect x="1.9707" y="2" width="39.4521" height="40" rx="19.726"
                                                  fill="white"/>
                                            <path
                                                d="M16.7651 17C17.8545 17 18.7377 16.1046 18.7377 15C18.7377 13.8954 17.8545 13 16.7651 13C15.6756 13 14.7925 13.8954 14.7925 15C14.7925 16.1046 15.6756 17 16.7651 17Z"
                                                fill="#2B5597"
                                            />
                                            <path
                                                d="M18.4089 18.3333H15.1212C14.9398 18.3333 14.7925 18.4826 14.7925 18.6666V28.6666C14.7925 28.8506 14.9398 28.9999 15.1212 28.9999H18.4089C18.5904 28.9999 18.7377 28.8506 18.7377 28.6666V18.6666C18.7377 18.4826 18.5904 18.3333 18.4089 18.3333Z"
                                                fill="#2B5597"
                                            />
                                            <path
                                                d="M28.2042 17.8741C26.799 17.3861 25.0414 17.8148 23.9874 18.5835C23.9513 18.4401 23.8224 18.3335 23.6692 18.3335H20.3815C20.2 18.3335 20.0527 18.4828 20.0527 18.6668V28.6668C20.0527 28.8508 20.2 29.0001 20.3815 29.0001H23.6692C23.8507 29.0001 23.9979 28.8508 23.9979 28.6668V21.4801C24.5292 21.0161 25.2137 20.8681 25.7739 21.1095C26.3171 21.3421 26.6281 21.9101 26.6281 22.6668V28.6668C26.6281 28.8508 26.7754 29.0001 26.9568 29.0001H30.2445C30.426 29.0001 30.5733 28.8508 30.5733 28.6668V21.9955C30.5358 19.2561 29.2648 18.2421 28.2042 17.8741Z"
                                                fill="#2B5597"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="container mx-auto py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 text-[#2B5597] bg-white flex flex-col md:flex-row justify-between items-center border-t">
                <p className="text-[13px] sm:text-[14px] md:text-[16px] font-normal mb-2 md:mb-0 text-center">
                    Copyright 2025 ©Acorn Travels Pvt Ltd  Developed By KodeTech
                </p>
                <div
                    className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-[13px] sm:text-[14px] md:text-[16px]">
                    <Link href="/terms" className="hover:underline font-normal">Terms & Conditions</Link>
                    <Link href="/privacy" className="hover:underline font-normal">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;