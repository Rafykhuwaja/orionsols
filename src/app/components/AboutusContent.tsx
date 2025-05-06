"use client"
import React from "react";
import { InfiniteMovingCardsDemo } from "./clientReviewCards";
import WhatsAppPopup from "./whatsappPOpUp";
import {motion} from "framer-motion"

function AboutusContent() {
  return (
    <div id="about" className="w-full pt-[50px] md:px-[10vw] px-4">
      <div className="text-start ">
      <motion.h1
            initial={{ opacity: 0, y: 70 }}          
            whileInView={{ opacity: 1, y: 0 }}      
            transition={{ duration: 1.5 }}           
            viewport={{ once: false, amount: 0.5 }} className="text-3xl md:text-7xl text-center text-white md:my-10 my-5 font-bold">
          Our <span className="text-[#b8a9fe]">Philosophy</span>
        </motion.h1>
        <motion.p
            initial={{ opacity: 0, x: 70 }}          
            whileInView={{ opacity: 1, x: 0 }}      
            transition={{ duration: 1.5 }}           
            viewport={{ once: false, amount: 0.5 }} className="text-gray-300 md:text-xl text-center">
          At Orionsols, our mission is to assist entrepreneurs and business
          owners in creating successful online stores with minimal hassle
          through our e-commerce outsourcing services. We understand the
          challenges of running an e-commerce business, especially when juggling
          multiple tasks. By utilizing the right tools and systems, we
          streamline your processes, reduce costs, and enhance the customer
          experience. Thats why Orionsols offers comprehensive done-for-you
          e-commerce automation services. Our dedicated team of experts ensures
          a smooth launch and scaling of your online store, handling all the
          technical details so you can focus on growing your business and
          serving your customers.
        </motion.p>
      </div>
      <div>
        <section className=" body-font">
        <motion.h1
            initial={{ opacity: 0, y: 70 }}          
            whileInView={{ opacity: 1, y: 0 }}      
            transition={{ duration: 1.5 }}           
            viewport={{ once: false, amount: 0.5 }} className="text-3xl text-center md:text-7xl text-white my-10 font-bold">
          Our <span className="text-[#b8a9fe]">Heritage</span>
        </motion.h1>
          <div className="container px-4 py-24 mx-auto text-gray-400">
            <div className="flex flex-wrap justify-between -m-4 gap-3">
            <motion.div
            initial={{ opacity: 0, y: 70 }}          
            whileInView={{ opacity: 1, y: 0 }}      
            transition={{ duration: 1.5 }}           
            viewport={{ once: false, amount: 0.1 }} className="lg:w-[31%] lg:mb-0 mb-6 mx-3 md:mx-0 p-4 border-2 border-[#b8a9fe] rounded-md">
                <div className="h-full text-center">
                  <h1 className="text-3xl text-[#b8a9fe] font-bold mb-6">B2B Marketplace</h1>
                  <p className="leading-relaxed">
                    Started off as one of the many B2B Marketplaces enabling
                    companies to connect with other organizations and conduct
                    business in one place, buying and selling products.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-[#b8a9fe] mt-6 mb-4" />

                  <p className="text-gray-500">2005 - 2016</p>
                </div>
              </motion.div>
              <motion.div
            initial={{ opacity: 0, y: 70 }}          
            whileInView={{ opacity: 1, y: 0 }}      
            transition={{ duration: 1.5 }}           
            viewport={{ once: false, amount: 0.5 }} className="lg:w-[31%] lg:mb-0 mb-6 mx-3 md:mx-0 p-4 border-2 border-[#b8a9fe] rounded-md">
                <div className="h-full text-center">
                  <h1 className="text-3xl text-[#b8a9fe] font-bold mb-6">Digital Agency
                  </h1>
                  <p className="leading-relaxed">
                  Adding another feather in the cap, moved on to serve as a digital agency to outsource your digital marketing efforts, with various digital solutions.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-[#b8a9fe] mt-6 mb-4" />

                  <p className="text-gray-500">2017 - 2019</p>
                </div>
              </motion.div>
              <motion.div
            initial={{ opacity: 0, y: 70 }}          
            whileInView={{ opacity: 1, y: 0 }}      
            transition={{ duration: 1.5 }}           
            viewport={{ once: false, amount: 0.9 }} className="lg:w-[31%] lg:mb-0 mb-6 mx-3 md:mx-0 p-4 border-2 border-[#b8a9fe] rounded-md">
                <div className="h-full text-center">
                  <h1 className="text-3xl text-[#b8a9fe] font-bold mb-6">Ecom Automation</h1>
                  <p className="leading-relaxed">
                    Reaching the heights, became the e-com automation provider,
                    where we help entrepreneurs and business owners achieve
                    success in the competitive world of e-commerce with our
                    Done-For-You services.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-[#b8a9fe] mt-6 mb-4" />

                  <p className="text-gray-500">2020 - Onwards</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <WhatsAppPopup/>
    </div>
  );
}

export default AboutusContent;
