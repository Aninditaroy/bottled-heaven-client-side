import React from 'react';
import logo from '../../../images/logos/logo.png';
const Footer = () => {
    return (
        <>
            <footer class="bg-white border-t-2 border-gray-200">
                <div class=" lg:px-5 lg:ml-44 sm:py-2 lg:py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4 sm:w-full">
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-md mb-3">Help & Information</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <span class="text-gray-600 cursor-pointer hover:text-amber-800 hover:underline text-sm">About Us</span>
                                </li>
                                <li>
                                    <span class="text-gray-600 cursor-pointer hover:text-amber-800 hover:underline text-sm">Private Policy</span>
                                </li>
                                <li>
                                    <span class="text-gray-600 cursor-pointer hover:text-amber-800 hover:underline text-sm">Terms & Conditions</span>
                                </li>
                                <li>
                                    <span class="text-gray-600 cursor-pointer hover:text-amber-800 hover:underline text-sm">Products Return</span>
                                </li>
                                <li>
                                    <span class="text-gray-600 cursor-pointer hover:text-amber-800 hover:underline text-sm">Wholesale Policy</span>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4 sm:w-full">
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-md mb-3">About Us</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <span class="text-gray-600 cursor-pointer hover:text-amber-800 hover:underline text-sm">Dealer Policy</span>
                                </li>
                                <li>
                                    <span class="text-gray-600 cursor-pointer hover:text-amber-800 hover:underline text-sm">Inventory</span>
                                </li>
                                <li>
                                    <span class="text-gray-600 cursor-pointer hover:text-amber-800 hover:underline text-sm">Contact</span>
                                </li>
                                <li>
                                    <span class="text-gray-600 cursor-pointer hover:text-amber-800 hover:underline text-sm">Home Page</span>
                                </li>
                                <li>
                                    <span class="text-gray-600 cursor-pointer hover:text-amber-800 hover:underline text-sm">Perfumes</span>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4 sm:w-full">
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-md mb-3">Categories</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <span class="text-gray-600 cursor-pointer hover:text-amber-800 hover:underline text-sm">Help Center</span>
                                </li>
                                <li>
                                    <span class="text-gray-600 cursor-pointer hover:text-amber-800 hover:underline text-sm">Address Inventory Store</span>
                                </li>
                                <li>
                                    <span class="text-gray-600 cursor-pointer hover:text-amber-800 hover:underline text-sm">Receivers & Amplifiers</span>
                                </li>
                                <li>
                                    <span class="text-gray-600 cursor-pointer hover:text-amber-800 hover:underline text-sm">Dealers</span>
                                </li>
                                <li>
                                    <span class="text-gray-600 cursor-pointer hover:text-amber-800 hover:underline text-sm">Seller</span>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4 sm:w-full lg:py-0">
                            <nav class="list-none mb-10">
                                <li>
                                    <span class="text-gray-600 cursor-pointer hover:text-amber-800 hover:underline text-sm">
                                    <img src={logo} className="mb-12" alt="logo" />
                                    </span>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-200/50 sm:w-full">
                    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p class="text-gray-500 text-sm text-center sm:text-left font-semibold">© 2022 Bottled Perfume</p>
                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <span class="text-gray-500 hover:text-black">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </span>
                            <span class="ml-3 text-gray-500 hover:text-black">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </span>
                            <span class="ml-3 text-gray-500 hover:text-black">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </span>
                            <span class="ml-3 text-gray-500 hover:text-black">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </span>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;