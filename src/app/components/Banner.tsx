"use client"
import Link from "next/link";
import React from "react";
import {motion} from "framer-motion"

function Banner() {
  return (
    <div>
      <div className="flex flex-col md:flex-row background px-4 sm:px-8 md:px-5 lg:px-10 xl:px-10 text-white top-0 w-full md:z-[-1]">
        {/* Text Section */}
        <div className="w-full md:w-[27vw] pt-12 sm:pt-20 md:pt-32 fadeInLeft md:text-left md:hidden">
          <div className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 md:mb-12">
            <div className="text-[28px] sm:text-[32px] md:text-[30px] lg:text-[40px] text-[#ff9c00] font-semibold md:mb-2">
              Take Your
            </div>
            <div className="text-[24px] sm:text-[28px] md:text-[15px] lg:text-[40px] md:mb-2">
              BUSINESS TO
            </div>
            <div className="text-[28px] sm:text-[32px] md:text-[28px] ">
              NEW HEIGHT WITH
            </div>
            <div className="text-[#ff9c00] text-[40px] sm:text-[44px] md:text-[57px] mt-4 md:mt-0 leading-none">
              Orionsols
            </div>
          </div>
          <div className="relative md:bottom-5">
            <p className="mt-4 sm:mt-6 md:mt-8 font-medium text-xs sm:text-sm md:text-base lg:text-lg text-left">
              Lets work together to elevate your business to new heights.
            </p>
            <Link href="/contact">
              <button className="text-xs sm:text-sm md:text-base lg:text-lg px-6 py-2 rounded-lg bg-[#ff9c00] my-6 sm:my-8 md:my-10 hover:bg-orange-500 hover:border-orange-600 md:inline-block">
                Contact us!
              </button>
            </Link>
          </div>
        </div>
        <motion.div
    initial={{ opacity: 0, x: -100 }}          
    whileInView={{ opacity: 1, x: 0 }}      
    transition={{ duration: 0.8 }}           
    viewport={{ once: false, amount: 0.5 }} className="hidden md:flex flex-col ">
          <img src="/bannerTextImage.png"
          className="w-[36vw] top-10 relative"/>
          
        </motion.div>

        {/* Images Section */}
        <div className="flex flex-col-reverse md:flex-row md:w-[66vw]">
          {/* Left Image */}
          <motion.div
    initial={{ opacity: 0, x: 100 }}          
    whileInView={{ opacity: 1, x: 0 }}      
    transition={{ duration: 0.8 }}           
    viewport={{ once: false, amount: 0.5 }} className="w-full md:w-[45vw]">
            <img
              className="h-[350px] sm:h-[350px] md:h-[350px] lg:h-[500px] xl:h-[630px] mt-5 mx-auto "
              src="/images/bannerImage3.webp"
              alt="Banner"
            />
          </motion.div>
          {/* Right Image */}
          <motion.div
    initial={{ opacity: 0, x: 100 }}          
    whileInView={{ opacity: 1, x: 0 }}      
    transition={{ duration: 0.8 }}           
    viewport={{ once: false, amount: 0.5 }} className="w-full md:w-[22vw] relative md:right-[5vw]">
            <img
              src="/images/bannerContent.png"
              alt="Banner Content"
              className="relative md:top-12 mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Banner;