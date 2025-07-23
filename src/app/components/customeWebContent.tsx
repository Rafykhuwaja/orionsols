"use client"
import {motion} from "framer-motion"
import React from "react";
import { BookText, Cable, HardDriveUpload, Send } from "lucide-react";

function CustomeWebContent() {
  return (
    <div className="w-full pt-[100px]">
      <motion.h1 
      initial={{ opacity: 0, y: 100 }}          
      whileInView={{ opacity: 1, y: 0 }}      
      transition={{ duration: 1.5 }}           
      viewport={{ once: false, amount: 0.5 }}  className="text-3xl  md:text-7xl text-white mt-10  text-center font-bold">
        How It <span className="text-[#b8a9fe]">Works</span>
      </motion.h1>

      <section className="text-gray-300 body-font">
        <motion.div 
              initial={{ opacity: 0, y: 50 }}          
              whileInView={{ opacity: 1, y: 0 }}      
              transition={{ duration: 1.2 }}           
              viewport={{ once: false, amount: 0.1 }}  className="container px-5 py-24">
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4 hover:border-2 hover:border-[#b8a9fe] border-2 border-transparent rounded-3xl">
              <div className=" p-6 rounded-lg">
                <Send
                  className=" rounded w-full object-cover object-center mb-6"
                  color="#b8a9fe"
                  size={80}
                />

                <h2 className="text-lg text-[#b8a9fe] font-medium title-font mb-4 text-center">
                 Strategy & Planning
                </h2>
                <p className="leading-relaxed text-base text-center">
                  We start with clarity. Our team takes time to understand your business, goals, and markets. Then, we especially develop a strategy according to your objectives-combining the creative direction with demonstration-driven thinking.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 hover:border-2 hover:border-[#b8a9fe] border-2 border-transparent rounded-3xl">
              <div className=" p-6 rounded-lg">
                <BookText
                  className=" rounded w-full object-cover object-center mb-6"
                  color="#b8a9fe"
                  size={80}
                />

                <h2 className="text-lg text-[#b8a9fe] font-medium title-font mb-4 text-center">
                 In-depth Research
                </h2>
                <p className="leading-relaxed text-base text-center">
                  We believe that great marketing lies in knowledge. Our research process examines your audience, industry trends, and competitive landscapes to ensure that every decision is informed, relevant, and effective.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 hover:border-2 hover:border-[#b8a9fe] border-2 border-transparent rounded-3xl">
              <div className=" p-6 rounded-lg">
                <Cable
                  className=" rounded w-full object-cover object-center mb-6"
                  color="#b8a9fe"
                  size={80}
                />

                <h2 className="text-lg text-[#b8a9fe] font-medium title-font mb-4 text-center">
                  Optimization & Execution
                </h2>
                <p className="leading-relaxed text-base text-center">
                  Execution matters. We launch our campaigns, test, and continuously improve them for the highest results, from scene to messaging to the demonstration matrix.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 hover:border-2 hover:border-[#b8a9fe] border-2 border-transparent rounded-3xl">
              <div className=" p-6 rounded-lg">
                <HardDriveUpload
                  className=" rounded w-full object-cover object-center mb-6"
                  color="#b8a9fe"
                  size={80}
                />

                <h2 className="text-lg text-[#b8a9fe] font-medium title-font mb-4 text-center">
                  Results & Growth
                </h2>
                <p className="leading-relaxed text-base text-center">
                  We distribute more than reports - we provide impact. With real-time tracking, clear data, and transparent insights, we show you how your brand is growing and where it is forward.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default CustomeWebContent;