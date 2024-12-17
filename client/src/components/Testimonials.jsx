import React from "react";
import ChooseUs from "./ChooseUs";

export default function Testimonials() {
  return (
    <>
      <div className="flex justify-center space-x-44 text-left mt-20">
        <div className="w-1/2 ml-16">
          <h1 className="text-xl font-bold mb-2 ml-16">OUR CUSTOMER STORIES</h1>
          <h1 className="text-xl text-gray-500 font-semibold mb-10 ml-16">
            CHECK OUT OUR CASE STUDIES HERE
          </h1>
          <div className="chat chat-end">
            <div className="chat-bubble bg-[#EEEEEE] text-gray-600 rounded-none p-16">
              I’ve been fascinated with HomeWise.ai. They’ve received a ton of
              attention from our industry trade press and produced a lot of buzz
              and momentum. I’m all for seeing our industry lead the charge with
              new solutions, but I wanted to experience these products for
              myself before making up my mind. Thanks HomeWise!
            </div>
            <div className="chat-footer">
              <p className="text-xl font-bold">John Bentley</p>
              <p className="text-xl font-light">Managing Director</p>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <ChooseUs />
        </div>
      </div>
    </>
  );
}
