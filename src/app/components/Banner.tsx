import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <div>
      <div className="flex flex-col md:flex-row background px-4 sm:px-8 md:px-5 lg:px-10 xl:px-10 text-white top-0 w-full md:z-[-1]">
        <div className="w-full md:w-1/3 pt-12 sm:pt-20 md:pt-32 fadeInLeft md:text-left">
          <div className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 md:mb-12">
            <div className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[40px] text-[#ff9c00] font-semibold md:mb-2">
              Take Your
            </div>
            <div className="text-[28px] sm:text-[36px] md:text-[15px] lg:text-[65px] md:mb-2">
              BUSINESS TO
            </div>
            <div className="text-[32px] sm:text-[50px] md:text-[15px] lg:text-[65px]">
              NEW HEIGHT WITH
            </div>
            <div className="text-[#ff9c00] text-[55px] md:text-[50px] lg:text-[65px] mt-2 md:mt-0 leading-none">
              Orionsols
            </div>
          </div>
          <div className="relative md:bottom-5">
            <p className="mt-4 sm:mt-6 md:mt-8 font-medium text-sm sm:text-base md:text-lg lg:text-xl text-left md:text-left">
              Let's work together to elevate your business to new heights.
            </p>
            <Link href="/">
              <button className="text-sm sm:text-base md:text-lg lg:text-xl px-6 py-2 rounded-lg bg-[#ff9c00] my-6 sm:my-8 md:my-10 hover:bg-orange-500 hover:border-orange-600 md:inline-block">
                Contact us!
              </button>
            </Link>
          </div>
        </div>
      <div className="flex flex-col-reverse md:flex-row md:w-2/3">

        <div className="w-full md:w-1/2">
          <img
            className="h-[350px] sm:h-[350px] md:h-[40px] lg:h-[600px] xl:h-[800px] mt-5 mx-auto fadeInRight"
            src="/images/bannerImage3.png"
            alt="Banner"
          />
        </div>

        <div>
          <img
            src="/images/bannerContent.png"
            alt="Banner Content"
            className="md:w-[300px] lg:w-[450px] w-[400px] relative md:top-12 mx-auto fadeInRight"
          />
        </div>
      </ div>
      </div>
    </div>
  );
}

export default Banner;
