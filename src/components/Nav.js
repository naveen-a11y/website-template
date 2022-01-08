import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "../logo.png";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center justify-between">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-16 w-16"
                                    src={logo}
                                    alt="logo"
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="lg:ml-128 sm:48 flex space-x-4">
                                    <a
                                        href="/"
                                        className=" hover:bg-gray-700 text-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </a>

                                    <a
                                        href="/aboutus"
                                        className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        About Us
                                    </a>

                                    <a
                                        href="/services"
                                        className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Services
                                    </a>

                                    <a
                                        href="/products"
                                        className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Products
                                    </a>

                                    <a
                                        href="/portfolio"
                                        className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Portfolio
                                    </a>
                                    <button className="text-white bg-purple-700  px-4 py-2 rounded-2xl text-sm font-medium">
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 "
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div
                                ref={ref}
                                className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                            >
                                <a
                                    href="/"
                                    className="hover:bg-gray-700 text-gray-800 hover:text-white  block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </a>
                                <a
                                    href="/aboutus"
                                    className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    About Us
                                </a>
                                <a
                                    href="/services"
                                    className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Services
                                </a>
                                <a
                                    href="/products"
                                    className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Products
                                </a>
                                <a
                                    href="/portfolio"
                                    className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Portfolio
                                </a>
                                <button
                                    className="text-white bg-purple-700  px-4 py-2 rounded-2xl text-sm font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
}

export default Nav;
