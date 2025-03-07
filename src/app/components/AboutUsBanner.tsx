import React from "react";

function AboutUsBanner() {
  return (
    <div className="flex flex-col-reverse md:flex-row blog-background px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 text-white top-0 md:pt-28 w-full md:fixed md:z-[-1]">
      <div className="w-full md:w-1/2">
        <img
          className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] xl:h-[760px] max-w-full mx-auto fadeInLeft"
          src="/images/bannerImage5.png"
          alt="Banner"
        />
      </div>
      <div className="w-full md:w-1/2 pt-10 md:pt-32 fadeInRight">
        <h1 className="font-black text-3xl md:text-5xl lg:text-7xl md:mt-5">
          <span className="text-[#ff9c00] md:text-[61px]">Where We Do the</span>{" "}
          <br />
          <span className="text-[5vw] md:text-[83px]">Hard Work</span> <br />
        </h1>
        <h1 className="text-3xl font-extrabold md:text-5xl lg:text-7xl md:mt-6">
          <span className="text-white md:text-[50px] md:mt-16">
            and You Enjoy the
            <br />
            <span className="text-[#ff9c00] text-[40px]">
              Results!
            </span>
          </span>
        </h1>
        <p className="mt-3 pr-0 md:pr-9 text-base md:text-xl md:max-w-[920px]">
          At Orionsols, we take pride in handling all the complexities of
          setting up and managing your e-commerce business. From development to
          marketing, we ensure every detail is taken care of, so you can sit
          back, relax, and watch your business thrive. Let us handle the hard
          work while you focus on growth!
        </p>
      </div>
    </div>
  );
}

export default AboutUsBanner;
