import React from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

export default function News() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-2">
        HOMEWISE.AI IN THE NEWS
      </h1>
      <div className="flex justify-center items-center space-x-2">
        <div className="w-5 h-5 bg-[#00C0E4] -mt-10"></div>
        <h1 className="text-lg text-gray-500 mb-10 text-center">
          {" "}
          PRESS AND MEDIA RESOURCES
        </h1>
      </div>

      <div className="flex justify-center items-center space-x-10 px-10">
        <div className="relative card card-side bg-base-100 shadow-lg h-72 rounded-none">
          <figure className="w-1/3">
            <img
              src="./news1.jpg"
              alt="air"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body w-2/3 bg-gray-100 group hover:bg-[#00C0E4] hover:text-white">
            <h2 className="card-title font-medium">TECH UPDATE</h2>
            <h2 className="card-title text-sm font-medium">
              Admin{" "}
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-[#00C0E4] group-hover:text-white" />{" "}
              35{" "}
            </h2>
            <p className="text-lg text-gray-500 group-hover:text-white">
              HomeWise.ai Reveals Top 10 Commands of 2024. An annual look at the
              most popular activations in custom homes. It is exciting to
              imagine what is to come and how voice interactions will advance in
              2025....
            </p>
            <div className="absolute top-0 left-0 flex flex-col bg-black text-white h-14 w-12 text-center group-hover:bg-[#00C0E4] group-hover:text-white">
              <p>7</p>
              <p>JUNE</p>
            </div>
          </div>
        </div>

        <div className="relative card card-side bg-base-100 shadow-lg h-72 rounded-none">
          <figure className="w-1/3">
            <img
              src="./news2.jpeg"
              alt="air"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body w-2/3 bg-gray-100 group hover:bg-[#00C0E4] hover:text-white">
            <h2 className="card-title font-medium">AI UPDATE</h2>
            <h2 className="card-title text-sm font-medium">
              Admin{" "}
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-[#00C0E4] group-hover:text-white" />{" "}
              20{" "}
            </h2>
            <p className="text-lg text-gray-500 group-hover:text-white">
              How AI in smart home tech can automate your life. However, the
              reach of AI in the smart home has the potential to go much deeper.
              Increased automation could enhance our personal lives and boost
              our productivity. Let's take a look....
            </p>
            <div className="absolute top-0 left-0 flex flex-col bg-black text-white h-14 w-12 text-center group-hover:bg-[#00C0E4] group-hover:text-white">
              <p>1</p>
              <p>JUNE</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-10 px-10 mt-10">
        <div className="relative card card-side bg-base-100 shadow-lg h-72 rounded-none">
          <figure className="w-1/3">
            <img
              src="./news3.jpg"
              alt="air"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body w-2/3 bg-gray-100 group hover:bg-[#00C0E4] hover:text-white">
            <h2 className="card-title font-medium">CHATGPT-DRIVEN ASSISTANT</h2>
            <h2 className="card-title text-sm font-medium">
              Admin{" "}
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-[#00C0E4] group-hover:text-white" />{" "}
              40{" "}
            </h2>
            <p className="text-lg text-gray-500 group-hover:text-white">
              ChatGPT-driven smart home voice assistant is here. We are thrilled
              to be working on bringing the best of HomeWise.ai and ChatGPT
              together to create something truly remarkable - a solution where
              one plus one equals three. By combining our strengths, we envision
              delivering an AI experience that is beyond what any smart home is
              capable of..
            </p>
            <div className="absolute top-0 left-0 flex flex-col bg-black text-white h-14 w-12 text-center group-hover:bg-[#00C0E4] group-hover:text-white">
              <p>28</p>
              <p>MAY</p>
            </div>
          </div>
        </div>

        <div className="relative card card-side bg-base-100 shadow-lg h-72 rounded-none">
          <figure className="w-1/3">
            <img
              src="./news4.jpg"
              alt="air"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body w-2/3 bg-gray-100 group hover:bg-[#00C0E4] hover:text-white">
            <h2 className="card-title font-medium">GENERATIVE AI PLATFORM</h2>
            <h2 className="card-title text-sm font-medium">
              Admin{" "}
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-[#00C0E4] group-hover:text-white" />{" "}
              15{" "}
            </h2>
            <p className="text-lg text-gray-500 group-hover:text-white">
              All HomeWise.ai users are now able to enjoy custom integration
              capabilities along with a “generative assistant” to help answer
              questions across any topic. No matter what language structure a
              client uses, HomeWise.ai will initiate the customer’s customized
              preset..
            </p>
            <div className="absolute top-0 left-0 flex flex-col bg-black text-white h-14 w-12 text-center group-hover:bg-[#00C0E4] group-hover:text-white">
              <p>21</p>
              <p>MAY</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
