import React from "react";

function Cards({ title }) {
    return (
        <div className="py-4">
            <div className="py-4">
                <p className="text-xl">Lorem Ipsum Dolor</p>
                <h1 className="text-4xl">{title}</h1>
            </div>
            <div className="md:flex md:space-x-16">
                <div className="mb-16 min-w-[320px] md:w-1/3 h-96 rounded-2xl bg-gray-300 "></div>
                <div className="mb-16 min-w-[320px] md:w-1/3 h-96 rounded-2xl bg-gray-300 "></div>
                <div className="mb-16 min-w-[320px] md:w-1/3 h-96 rounded-2xl bg-gray-300 "></div>
            </div>
        </div>
    );
}

export default Cards;
