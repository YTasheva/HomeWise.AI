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
      <div className="join join-vertical w-full">
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
          <div key={index} className="collapse collapse-plus join-item border border-base-300">
            <div
              className="collapse-title text-xl font-medium cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
            </div>
            {openIndex === index && (
              <div className="collapse-content">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}