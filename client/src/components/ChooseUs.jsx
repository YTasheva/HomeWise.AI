import React, { useState } from "react";

export default function ChooseUs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <h1 className="text-xl font-bold mb-2">GET HOMEWISE.AI ASSISTANT</h1>
      <h1 className="text-xl text-gray-500 font-semibold mb-10">
        THE NEXT ERA OF INTELLIGENT LIVING
      </h1>
      <div className="flex flex-col w-full">
        {[
          {
            title: "Live smarter—HomeWise takes care of the little things in life so you can focus on what is important.",
            content: "HomeWise helps you manage daily tasks effortlessly, allowing you to prioritize what truly matters."
          },
          {
            title: "Delight Your Customers",
            content: "Enhance customer satisfaction with seamless home control and automation features."
          },
          {
            title: "Take Control of Your Environment",
            content: "Gain full control over your home environment with intuitive settings and automation."
          },
          {
            title: "Automate Your Lifestyle",
            content: "Streamline your daily routines with smart automation tailored to your lifestyle."
          }
        ].map((item, index) => (
          <div key={index} className="border border-base-300 mb-2">
            <div
              className="text-xl font-medium cursor-pointer p-4 bg-gray-100 flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span className="collapse-plus">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="p-4">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}