import React from "react";

export default function Statistics() {
  return (
    <>
      <div className="flex justify-center items-center space-x-44 text-center mt-20">
        <div className="relative">
          <p className="text-7xl font-bold text-gray-200">98K</p>
          <div className="flex justify-center items-center">
            <div>
              <p className="absolute top-5 left-2 text-2xl font-semibold text-[#01205F]">
                98K+
              </p>
            </div>
            <div>
              <p className="absolute top-2 left-14 text-xl font-semibold text-[#01205F]">
                Trusted by Businesses{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <p className="text-7xl font-bold text-gray-200">157</p>
          <div className="flex justify-center items-center">
            <div>
              <p className="absolute top-5 left-2 text-2xl font-semibold text-[#01205F]">
                157
              </p>
            </div>
            <div>
              <p className="absolute top-2 left-14 text-xl font-semibold text-[#01205F]">
                Countries Covered
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <p className="text-7xl font-bold text-gray-200">10K</p>
          <div className="flex justify-center items-center">
            <div>
              <p className="absolute top-5 left-2 text-2xl font-semibold text-[#01205F]">
                10K+
              </p>
            </div>
            <div>
              <p className="absolute top-2 left-14 text-xl font-semibold text-[#01205F]">
                Downloads
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <p className="text-7xl font-bold text-gray-200">15K</p>
          <div className="flex justify-center items-center">
            <div>
              <p className="absolute top-5 left-2 text-2xl font-semibold text-[#01205F]">
                15K+
              </p>
            </div>
            <div>
              <p className="absolute top-2 left-14 text-xl font-semibold text-[#01205F]">
                Satisfied Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
