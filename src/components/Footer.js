import React from "react";
import Copyright from "./Copyright";
import logo from "../logo.png";

function Footer() {
    return (
        <>
            <div className="p-20 text-left md:flex md:justify-between bg-gray-200">
                <div className="flex w-1/2 space-x-16 mb-16 ">
                    <div className="w-1/2 ">
                        <img className="h-16 w-16" src={logo} alt="logo" />
                        <p className="mt-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-2xl mb-4">Links</h2>
                        <ul>
                            <li>
                                <a href="/our-clients">Our Clients</a>
                            </li>
                            <li className="my-2">
                                <a href="/privacy-policy">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/our-benefits">Our Benefits</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex w-1/2 space-x-16">
                    <div className="w-1/2">
                        <h2 className="text-2xl mb-4">Information</h2>
                        <ul>
                            <li>
                                <a href="/our-clients">Our Clients</a>
                            </li>
                            <li className="my-2">
                                <a href="/privacy-policy">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/our-benefits">Our Benefits</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-2xl mb-4">Contact Us</h2>
                        <ul>
                            <li>
                                <a href="/">+91 9711999770, +1833-880-3355</a>
                            </li>
                            <li className="my-2">
                                <a href="/">info@bytequest.com</a>
                            </li>
                            <li>
                                <a href="/">
                                    84, Block A , Sector 4,Noida,UP,201301
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Copyright />
        </>
    );
}

export default Footer;
