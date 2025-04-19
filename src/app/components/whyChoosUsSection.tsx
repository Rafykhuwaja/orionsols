'use client'
import React, { useEffect } from "react";
import { motion } from 'framer-motion';





function WhyChoosUsSection() {
  
  return (
    <div   
 className="py-10 md:pb-36 md:pt-16 px-4 md:px-10 lg:px-20 bg-gray-900">
    
      <motion.h1 
      initial={{ opacity: 0, x: 50 }}          
      whileInView={{ opacity: 1, x: 0 }}      
      transition={{ duration: 0.8 }}           
      viewport={{ once: false, amount: 0.5 }}
      className="md:text-5xl text-3xl font-bold text-[#ff9c00]">Empowering Brands with Innovative Digital Solutions</motion.h1>
      <div className="h-1 w-3/4 md:max-w-5xl bg-[#ff9c00] mt-5 rounded  md:mb-28 mb-14"></div>
      <motion.div
    initial={{ opacity: 0, y: 50 }}          
    whileInView={{ opacity: 1, y: 0 }}      
    transition={{ duration: 0.8 }}           
    viewport={{ once: false, amount: 0.5 }} className=" flex flex-col md:flex-row justify-center items-center">
      <div className="w-full md:w-1/2 rounded-lg">
        <div className="bg-[#ff9c00]  w-full rounded-lg fadeInLeft">
          <img
            src="/images/Image1.jpg"
            alt=""
            className="w-full h-auto rounded-lg relative bottom-4 md:bottom-8 right-4 md:right-8"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 relative bottom-8 fadeInRight md:ml-7" data-aos="zoom-in-up">
        <h1 className="text-3xl  text-[#ff9c00] font-extrabold mb-5 mt-16 md:mt-10 md:text-5xl md:pr-20">
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
    </div>
  );
}

export default WhyChoosUsSection;

