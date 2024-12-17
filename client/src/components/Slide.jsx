import React from "react";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

export default function Slide() {
  return (
    <>
      <div className="flex relative">
        <div className="w-1/2 p-4 pl-32 bg-white mt-10 relative z-10 h-max">
          <h1 className="text-2xl font-medium mb-2">
            <span className="text-yellow font-bold">|</span> SUPERCHARGED
            ASSISTANT
          </h1>
          <h1 className="text-6xl font-semibold mb-2">
            Simple. Private. Magical.
          </h1>
          <h1 className="text-6xl font-bold mb-2 text-yellow">HomeWise App</h1>
          <p className="text-gray-700">
            The mission at HomeWise.ai is to solve the user experience,
            interoperability, and innovation challenges in the smart home. Enjoy
            efficient smart home accessibility with the HomeWise App or
            conveniently set the mood with conversational voice commands.
            HomeWise knows its role and continues to adapt, enabling users to
            freely interact with their surroundings and automate their lifestyle
            in whatever way feels easiest. HomeWise alleviates privacy concerns
            and customization challenges so that every client can freely enjoy
            their smart home experience.
          </p>
          <a className="btn bg-yellow text-white mt-10 rounded-none">
            Discover More
          </a>
        </div>
        <div className="w-1/2 -ml-16">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative">
              <div className="h-100">
                <img src="./header.jpeg" className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex [writing-mode:vertical-lr] justify-center rotate-180">
          #HOMEWISE.AI ASSISTANCE
        </div>
      </div>
      <div className="flex justify-center items-center h-auto w-max bg-yellow p-2">
        <p className="text-white px-2">1 / 2</p>
        <a href="">
          <ArrowLongLeftIcon className="h-8 w-8 text-white" />
        </a>
        <a href="">
          <ArrowLongRightIcon className="h-8 w-8 text-white" />
        </a>
      </div>
    </>
  );
}
