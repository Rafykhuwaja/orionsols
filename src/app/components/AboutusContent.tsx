"use client";
import React from "react";
import { InfiniteMovingCardsDemo } from "./clientReviewCards";
import WhatsAppPopup from "./whatsappPOpUp";
import { motion } from "framer-motion";

function AboutusContent() {
  return (
    <div id="about" className="w-full pt-[50px] md:px-[10vw] px-4">
      <div className="text-start ">
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-3xl md:text-7xl text-center text-white md:my-10 my-5 font-bold"
        >
          Our <span className="text-[#b8a9fe]">Philosophy</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-gray-300 md:text-xl text-center"
        >
          In Orionsols, we believe that digital marketing should be clear,
          purposeful, and result-driven. Our philosophy is simple: blend
          creativity with strategy to give average development. We partner with
          businesses that are ready to rise above the noise by creating
          campaigns that connect, materials that convert, and a system on that
          scale. Whether you are creating a brand or scaling an online store, we
          bring clarity, structure, and execution that you need to succeed in
          the digital-first world.
        </motion.p>
      </div>
      <div>
        <section className=" body-font">
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-3xl text-center md:text-7xl text-white my-10 font-bold"
          >
            Our <span className="text-[#b8a9fe]">Heritage</span>
          </motion.h1>
          <div className="container px-4 py-24 mx-auto text-gray-400">
            <div className="flex flex-wrap justify-between -m-4 gap-3">
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: false, amount: 0.1 }}
                className="lg:w-[31%] lg:mb-0 mb-6 mx-3 md:mx-0 p-4 border-2 border-[#b8a9fe] rounded-md"
              >
                <div className="h-full text-center">
                  <h1 className="text-3xl text-[#b8a9fe] font-bold mb-6">
                    B2B Marketplace
                  </h1>
                  <p className="leading-relaxed">
                    Our journey began by creating a business-to-business
                    platform, connects companies in industries and helps them
                    navigate the world of digital commerce. This experience
                    prepared the basis for our deep understanding of online
                    behavior and digital trust.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-[#b8a9fe] mt-6 mb-4" />

                  <p className="text-gray-500">2005 - 2016</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: false, amount: 0.1 }}
                className="lg:w-[31%] lg:mb-0 mb-6 mx-3 md:mx-0 p-4 border-2 border-[#b8a9fe] rounded-md"
              >
                <div className="h-full text-center">
                  <h1 className="text-3xl text-[#b8a9fe] font-bold mb-6">
                    Digital Agency
                  </h1>
                  <p className="leading-relaxed">
                    As the digital world developed, we also did it. We
                    transitioned to a full-service marketing agency to help the
                    brands grow with confidence for strategic branding, SEO,
                    content marketing, pay-per-click advertising, and web
                    design.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-[#b8a9fe] mt-6 mb-4" />

                  <p className="text-gray-500">2017 - 2019</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: false, amount: 0.1 }}
                className="lg:w-[31%] lg:mb-0 mb-6 mx-3 md:mx-0 p-4 border-2 border-[#b8a9fe] rounded-md"
              >
                <div className="h-full text-center">
                  <h1 className="text-3xl text-[#b8a9fe] font-bold mb-6">
                    E-commerce Automation
                  </h1>
                  <p className="leading-relaxed">
                    Today, Orionsols strengthens businesses with e-commerce
                    automation and growth solutions. We manage backend,
                    marketing, and optimization, allowing our customers to grow
                    efficiently while they do their best.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-[#b8a9fe] mt-6 mb-4" />

                  <p className="text-gray-500">2020 - Onwards</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <WhatsAppPopup />
    </div>
  );
}

export default AboutusContent;
