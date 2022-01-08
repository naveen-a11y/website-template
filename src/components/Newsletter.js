import React from "react";

function Newsletter() {
    return (
        <div className="space-y-12 p-20  bg-[#66cccc] md:flex md:items-center md:justify-center">
            <div className="w-full md:w-1/2 text-left text-white">
                <h1 className="text-5xl">Let's Discuss</h1>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
            </div>
            <div className="w-full md:w-1/2">
                <div className="flex  justify-between px-4 py-2 bg-white rounded-2xl">
                    <input
                        type="text"
                        className="bg-transparent outline-none w-4/6"
                    />
                    <button className="text-white bg-purple-700 ml-2 px-4 py-2 rounded-2xl text-sm font-medium">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
