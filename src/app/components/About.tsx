"use client"
import React from "react";
import { motion } from 'framer-motion';


function About() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}           // Start from invisible + slight down
    whileInView={{ opacity: 1, y: 0 }}        // When in viewport, show and move up
    transition={{ duration: 0.8 }}            // Animation duration
    viewport={{ once: false, amount: 0.5 }}    // Only animate once, when 30% visible
   className="px-4 md:px-8 lg:px-16 flex flex-col-reverse md:flex-row justify-center items-center py-10 md:py-36  bg-gray-900">
      <div className="w-full md:w-1/2 relative bottom-8 fadeInRight md:pr-20">
        <h1 className="text-3xl  text-[#ff9c00] font-extrabold mb-5 md:mt-16 mt-10 md:text-5xl">
        Website <br /> Development
        </h1>
        <p className="text-gray-300 md:text-xl">
          At Orionsols, we specialize in creating responsive, user-friendly, and
          visually stunning websites that are designed to capture the true
          essence of your brand. Our team combines creative design with
          cutting-edge technology to craft websites that not only look great but
          also deliver a seamless user experience across all devices. We focus
          on making your site easy to navigate, intuitive, and engaging,
          ensuring that visitors stay connected with your content and interact
          with your brand. Whether you re aiming to boost online sales, improve
          user engagement, or strengthen your brand identity, our websites are
          built to help you achieve your goals and leave a lasting impression on
          your audience.
        </p>
      </div>
      <div className="w-full md:w-1/2 rounded-lg">
        <div className="bg-[#ff9c00]  w-full rounded-lg fadeInLeft">
          <img
            src="/images/Image2.jpg"
            alt=""
            className="w-full h-auto rounded-lg relative bottom-4 md:bottom-8 right-4 md:right-8"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default About;
