import React from "react";

function About2() {
  return (
    <div className="px-4 md:px-10 lg:px-20 flex flex-col md:flex-row justify-center items-center py-10 md:py-36  bg-gray-900">
      <div className="w-full md:w-1/2 rounded-lg">
        <div className="bg-[#ff9c00]  w-full rounded-lg fadeInLeft">
          <img
            src="/images/Image3.jpg"
            alt=""
            className="w-full h-auto rounded-lg relative bottom-4 md:bottom-8 right-4 md:right-8"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 relative bottom-8 fadeInRight md:ml-7">
        <h1 className="text-3xl  text-[#ff9c00] font-extrabold mb-5 mt-16 md:mt-10 md:text-5xl md:pr-20">
        Creative Content
        </h1>
        <p className="text-gray-300 md:text-xl">
          At Orionsols, we provide you with high-quality, engaging, and
          SEO-optimized content tailored to resonate with your specific
          audience. Our team ensures that every piece of content not only tells
          your brand story but also strengthens your brand voice, helping you
          stand out in the digital landscape. We focus on delivering content
          that captures attention, drives traffic, and fosters meaningful
          connections, all while improving your search engine rankings. With our
          creative content solutions, your brand can build trust, increase
          visibility, and engage customers more effectively than ever.
        </p>
      </div>
    </div>
  );
}

export default About2;
