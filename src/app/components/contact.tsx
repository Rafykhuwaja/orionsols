"use client"
import Link from "next/link";
import React from "react";
import {motion} from "framer-motion"
import { useState } from "react";
import GetStartedButton from "./animata/button/contact-button";

function Contact() {
 


  
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}          
      whileInView={{ opacity: 1, x: 0 }}      
      transition={{ duration: 0.8 }}           
      viewport={{ once: false, amount: 0.3  }}>

    <div id="" className="text-center px-4 md:px-10 lg:px-20 py-10 md:py-20 text-white flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-5 text-[#b8a9fe]">
        Ready to Take Your Marketing <br /> to the Next Level?
      </h1>

      <p className="w-full md:w-2/3 text-center mb-3">
        Whether you’re just starting out on your entrepreneurial journey or
        aiming to scale your business to new heights, Orionsols is here to
        provide the guidance and expertise you need. We specialize in crafting
        tailored solutions that are designed to meet the unique challenges of
        your business, no matter the stage. With a combination of proven
        strategies, data-driven insights, and measurable results, our dedicated
        team is committed to driving your success. We work hand-in-hand with you
        to unlock your business full potential, ensuring sustainable growth,
        long-term success, and a clear path forward in today&apos;s competitive
        market{" "}
      </p>
      {/* <Link href="/contact">
      {/* <button className="text-lg px-6 py-3 rounded-lg bg-[#ff9c00] my-10 hover:bg-orange-500 ">
        Contact us
      </button> */}
      {/* <GetStartedButton text="Contact Us" className="text-lg py-3 text-white rounded-lg bg-[#ff9c00] my-10 hover:bg-orange-500"/>
      </Link>  */}
    </div>


    
    </motion.div>
  );
}

export default Contact;
