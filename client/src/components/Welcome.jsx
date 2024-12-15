import React from 'react'

export default function Welcome() {
  return (
<div className="flex mt-40 px-8">

<div className="w-1/2">
<div className="h-100">
<img src="./welcome.png" className="w-full object-cover" />
</div>
</div>

<div className="w-1/2 pl-40">
<h1 className="text-5xl font-semibold mb-2">SPEAK NATURALLY</h1>
<h1 className="text-5xl font-semibold mb-2">HomeWise <span className="text-red">Understands Natural Speach</span></h1>
<p className="text-xl text-gray-600 mt-5">Your personal Chef.  HomeWise GPT now offers the assistance of an expert sous chef. Enjoy access to delicious recipes, culinary instruction, and kitchen inspiration thanks to HomeWise! Proactive
recommendations developed by artificial intelligence.</p>
<p className="text-xl text-gray-500 mt-5">Interested in HomeWise? Reach out and we’ll connect you with a local Home Technology Professional.</p>
<a className="btn bg-[#F5F5F5] text-[#4A6E7E] font-bold mt-10 rounded-none">Say What's On Your Mind</a>
</div>
</div>
  )
}