import React from "react";

function ServiceBanner() {
  return (
    <div className="flex flex-col md:flex-row serviceBackground px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 text-white top-0">
      {/* Text Content */}
      <div className="w-full md:w-1/2 pt-12 sm:pt-20 md:pt-32 fadeInLeft">
        <h1 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 md:mb-10">
          <span className="text-[32px] sm:text-[40px] md:text-[50px] text-[#ff9c00]">
            Grow Your
          </span>{" "}
          <br />
          <span className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[50px]">
            BUSINESS WITH
          </span>{" "}
          <br />
          <span className="text-[32px] sm:text-[40px] md:text-[50px] text-[#ff9c00]">
            Orionsols Proven
          </span>{" "}
          <br />
          <span className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[50px]">
            Digital Marketing
          </span>{" "}
          <br />
          <span className="text-[32px] sm:text-[40px] md:text-[50px]">SOLUTION</span>
        </h1>
        <div className="relative md:bottom-5">
          <p className="mt-4 sm:mt-6 md:mt-8 pr-0 md:pr-9 text-sm sm:text-base md:text-lg lg:text-xl">
            At Orionsols, we specialize in driving results for businesses
            through expert Social Media Management, SEO, Content Creation, and
            Digital Marketing strategies. Whether you are looking to increase
            your brands visibility or generate high-quality leads, we have the
            tools, expertise, and passion to help you succeed.
          </p>
          <p className="mt-4 sm:mt-6 md:mt-8 font-medium text-sm sm:text-base md:text-lg lg:text-xl">
            Lets work together to elevate your business to new heights.
          </p>
          <button className="text-sm sm:text-base md:text-lg lg:text-xl px-6 py-2 rounded-lg bg-[#ff9c00] my-6 sm:my-8 md:my-10 hover:bg-orange-500 hover:border-orange-800 hover:border-2">
            Contact us!
          </button>
        </div>
      </div>

      {/* Image Content */}
      <div className="w-full md:w-1/2 md:pt-5">
        <img
          src="/images/bannerImage1.png"
          alt="image Loading"
          className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] xl:h-[800px] mx-auto fadeInRight"
        />
      </div>
    </div>
  );
}

export default ServiceBanner;