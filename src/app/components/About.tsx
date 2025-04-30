"use client"
import React from "react";
import { motion } from 'framer-motion';
import { TextAnimate } from "./magicui/text-animate";



function About() {
  return (
    <section className=" md:pb-36 md:p-2 px-4 md:px-[11vw] flex flex-col items-center justify-center">
      <TextAnimate
        animation="slideUp"
        by="word"
        className="md:text-5xl text-3xl font-bold text-[#ff9c00] mt-36"
      >
        Empowering Brands with Innovative Digital Solutions
      </TextAnimate>
      <div className="h-1 w-3/4 md:max-w-5xl bg-[#ff9c00] mt-5 rounded md:mb-28 mb-14" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}           
        whileInView={{ opacity: 1, y: 0 }}        
        transition={{ duration: 0.8 }}            
        viewport={{ once: false, amount: 0.5 }}    
        className="flex flex-col-reverse md:flex-row justify-center items-center py-10 md:py-36 ">
        <div className="w-full md:w-1/2 relative bottom-8 fadeInRight md:pr-20">
          <h1 className="text-3xl  text-[#ff9c00] font-extrabold mb-5 md:mt-16 mt-10 md:text-5xl">
            Website Development
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
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
          <div className=" w-full rounded-lg fadeInLeft">
            <video
              src="/video/webdev.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto rounded-lg relative scale-110  object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </motion.div>
    </section>

  );
}

export default About;
