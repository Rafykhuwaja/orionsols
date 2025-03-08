import React from "react";

function Testinominols() {
  return (
    <div className="px-4 py-10 md:px-20 md:py-20 bg-gray-950">
      <div className="text-center">
        <p className="text-white font-bold">Client Testimonials</p>
        <h1 className="text-2xl md:text-4xl font-extrabold my-3 text-[#ff9c00]">What Our Clients Are Saying</h1>
        <div className="flex flex-col md:flex-row justify-center gap-5 text-left mt-8 text-white">
          <div className="p-5 shadow-sm shadow-gray-500 rounded-md w-full md:w-1/3 myAnimate ">
            <h1 className="text-xl md:text-3xl font-bold mb-3">
              A Game-Changer for Our Brand
            </h1>
            <p className="text-gray-300 mb-5">
              OrionSols has been a pivotal part of our digital marketing strategy. Their team truly understands the nuances of online branding, SEO, and customer engagement. Thanks to their efforts, our visibility and ROI have significantly improved!
            </p>
            <div className="text-left">
              <h1 className="text-lg font-semibold mb-2">Sarah Lee</h1>
              <p>CEO, Innovative Tech Solutions</p>
            </div>
          </div>
          <div className="p-5 shadow-sm shadow-gray-500 rounded-md w-full md:w-1/3 myAnimate">
            <h1 className="text-xl md:text-3xl font-bold mb-3">
              Expert Strategies and Results
            </h1>
            <p className="text-gray-300 mb-5">
              The team at OrionSols provided us with a comprehensive digital marketing strategy that drove measurable results. Their expertise in social media marketing and content strategy helped us grow our customer base rapidly.
            </p>
            <div className="text-left">
              <h1 className="text-lg font-semibold mb-2">Michael Johnson</h1>
              <p>Marketing Director, Global Enterprises</p>
            </div>
          </div>
          <div className="p-5 shadow-sm shadow-gray-500 rounded-md w-full md:w-1/3 myAnimate">
            <h1 className="text-xl md:text-3xl font-bold mb-3">
              Phenomenal Results with SEO
            </h1>
            <p className="text-gray-300 mb-5">
              OrionSols helped us optimize our websites SEO performance. Their team worked tirelessly to improve our rankings, and we saw a 50% increase in organic traffic within just a few months. We couldnt be happier with the results!
            </p>
            <div className="text-left">
              <h1 className="text-lg font-semibold mb-2">Emily Rogers</h1>
              <p>Founder, GreenTech Innovations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testinominols;
