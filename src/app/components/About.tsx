import React from "react";

function About() {
  return (
    <div className="px-4 md:px-10 lg:px-20 flex flex-col md:flex-row py-10 md:py-36  bg-gray-900">
      <div className="w-full md:w-1/2 relative bottom-8 fadeInLeft py-5">
        <p className="text-white font-semibold mb-5">About us</p>
        <h1 className="text-3xl md:text-3xl font-extrabold mb-5 text-[#ff9c00]">Who We Are</h1>
        <p className="text-white mb-5 pr-0 md:pr-32">
          Orionsols is a results-driven digital marketing agency committed to
          empowering businesses to thrive in the competitive online marketplace.
          With years of experience in SEO, social media marketing, and content
          strategy, we pride ourselves on delivering innovative solutions
          tailored to each client’s unique goals.
        </p>
        <h1 className="text-3xl md:text-3xl font-extrabold mb-5 text-[#ff9c00]">
          Our Mission
        </h1>
        <p className="text-white mb-5 pr-0 md:pr-32">
          To simplify digital marketing and deliver measurable growth for
          businesses by creating impactful strategies and fostering long-term
          partnerships.
        </p>
        <h1 className="text-3xl md:text-3xl font-extrabold mb-5 text-[#ff9c00]">
        Our Vision
        </h1>
        <p className="text-white mb-5 pr-0 md:pr-32">
        To be the trusted name in digital marketing, known for delivering excellence and building brands that resonate with their audience.
        </p>

      
      </div>
      <div className="w-full md:w-1/2 rounded-lg fadeInRight transition-transform duration-300 ease-in-out hover:scale-105">
    <div className="bg-[#ff9c00] w-full rounded-lg">
        <img
            src="/images/Image2.jpg"
            alt=""
            className="w-full h-auto rounded-lg relative bottom-8 right-8"
        />
    </div>
</div>

    </div>
  );
}

export default About;
