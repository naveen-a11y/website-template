import React from "react";

function ScrollableCard() {
    return (
        <div className="py-4">
            <div className="py-4">
                <p className="text-xl">Lorem Ipsum Dolor</p>
                <h1 className="text-4xl">Products</h1>
            </div>
            <div className="w-full flex space-x-12 overflow-scroll scrollbar-hide">
                <div className="bg-gray-300 h-96 min-w-[320px] rounded-2xl"></div>
                <div className="bg-gray-300 h-96 min-w-[320px] rounded-2xl"></div>
                <div className="bg-gray-300 h-96 min-w-[320px] rounded-2xl"></div>
                <div className="bg-gray-300 h-96 min-w-[320px] rounded-2xl"></div>
                <div className="bg-gray-300 h-96 min-w-[320px] rounded-2xl"></div>
                <div className="bg-gray-300 h-96 min-w-[320px] rounded-2xl"></div>
            </div>
        </div>
    );
}

export default ScrollableCard;
