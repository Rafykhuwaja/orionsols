"use client"
import React from "react";
import { motion } from 'framer-motion';

function WhyChooseUsSection() {
  return (
    

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-col md:flex-row justify-center items-center md:px-[11vw] md:pb-36 px-4"
      >
        {/* Video Section */}
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
          <div className=" w-full rounded-lg fadeInLeft">
            <video
              src="/video/socialMedia.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto rounded-lg relative scale-150  object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 relative bottom-8 fadeInRight md:ml-7" data-aos="zoom-in-up">
          <h1 className="text-3xl text-[#ff9c00] font-extrabold mb-5 mt-16 md:mt-10 md:text-5xl md:pr-20">
            Social Media <br /> Marketing
          </h1>
          <p className="text-gray-300 md:text-xl">
            We specialize in creating customized marketing strategies that are
            tailored to elevate your brand and connect effectively with your
            target audience. By understanding your unique goals, we craft
            campaigns that maximize your reach and impact, ensuring your brand
            stands out in a competitive market. With a focus on creativity and
            data-driven insights, we help you achieve sustainable growth and
            lasting connections with your customers.
          </p>
        </div>
      </motion.div>
  );
}

export default WhyChooseUsSection;
