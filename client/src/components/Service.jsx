import React from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export default function Service() {
  return (
    <>
      <h1 className="text-sm text-[#8EBC42] font-medium mt-40 mb-2 text-center">
        Experience Home Intelligence.
      </h1>
      <h1 className="text-4xl font-bold mb-10 text-center">
        The Smart Home, Redifined.
      </h1>

      <div className="flex px-10">
        <div className="w-1/2 p-4">
          <div className="card card-side bg-base-100 shadow-xl h-72 rounded-none">
            <figure className="w-1/3">
              <img
                src="./service1.jpg"
                alt="air"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body w-2/3">
              <h2 className="card-title font-bold">
                Pioneering a New Era of Intelligent Living
              </h2>
              <p className="text-xl text-gray-600">
                HomeWise utilizes advanced AI to evolve and adapt over time.
                Enjoy efficient smart home accessibility or conveniently set the
                mood with contextual voice commands.
              </p>
              <div className="card-actions justify-start mt-auto">
                <a>
                  <p className="text-large font-bold flex items-center">
                    <ArrowRightCircleIcon className="h-6 w-6" /> Read More
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-4">
          <div className="card card-side bg-base-100 shadow-xl h-72 rounded-none">
            <figure className="w-1/3">
              <img
                src="./service2.jpg"
                alt="air"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body w-2/3">
              <h2 className="card-title font-bold">Seamless Sophistication</h2>
              <p className="text-xl text-gray-600">
                We believe privacy is nonnegotiable in the home, and HomeWise
                has been engineered to protect your data and earn your trust. We
                are excited to share the vision and introduce you to HomeWise!
              </p>
              <div className="card-actions justify-start mt-auto">
                <a>
                  <p className="text-large font-bold flex items-center">
                    <ArrowRightCircleIcon className="h-6 w-6" /> Read More
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="ml-14 mt-5 text-lg text-gray-600">
        {" "}
        HomeWise is designed to empower every member of your family with
        intuitive control and intelligent assistance.{" "}
        <span className="font-bold"> Find Your Solutions</span>
      </p>
    </>
  );
}
