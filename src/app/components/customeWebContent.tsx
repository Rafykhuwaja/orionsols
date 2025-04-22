"use client"
import {motion} from "framer-motion"
import React from "react";
import { BookText, Cable, HardDriveUpload, Send } from "lucide-react";

function CustomeWebContent() {
  return (
    <div className=" bg-gray-950 w-full pt-[100px]">
      <motion.h1 
      initial={{ opacity: 0, y: 100 }}          
      whileInView={{ opacity: 1, y: 0 }}      
      transition={{ duration: 1.5 }}           
      viewport={{ once: false, amount: 0.5 }}  className="text-3xl ml-10 md:text-7xl text-white mt-10 md:ml-52 font-bold">
        How It <span className="text-[#ff9c00]">Works</span>
      </motion.h1>

      <section className="text-gray-300 body-font">
        <motion.div 
              initial={{ opacity: 0, y: 150 }}          
              whileInView={{ opacity: 1, y: 0 }}      
              transition={{ duration: 1.2 }}           
              viewport={{ once: false, amount: 0.5 }}  className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4 hover:border-2 hover:border-[#ff9c00] border-2 border-transparent rounded-3xl">
              <div className=" p-6 rounded-lg">
                <Send
                  className=" rounded w-full object-cover object-center mb-6"
                  color="#ff9c00"
                  size={80}
                />

                <h2 className="text-lg text-[#ff9c00] font-medium title-font mb-4 text-center">
                  Planning
                </h2>
                <p className="leading-relaxed text-base text-center">
                  Effective content planning involves defining your target
                  audience, identifying goals, and brainstorming topics to
                  create resonant content that achieves desired outcomes and
                  sets you apart from the competition
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 hover:border-2 hover:border-[#ff9c00] border-2 border-transparent rounded-3xl">
              <div className=" p-6 rounded-lg">
                <BookText
                  className=" rounded w-full object-cover object-center mb-6"
                  color="#ff9c00"
                  size={80}
                />

                <h2 className="text-lg text-[#ff9c00] font-medium title-font mb-4 text-center">
                  Research
                </h2>
                <p className="leading-relaxed text-base text-center">
                  Conducting thorough research is essential to creating
                  high-quality content, involving gathering credible sources,
                  analyzing data, and verifying facts to ensure accuracy,
                  credibility, and relevance to your target audience
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 hover:border-2 hover:border-[#ff9c00] border-2 border-transparent rounded-3xl">
              <div className=" p-6 rounded-lg">
                <Cable
                  className=" rounded w-full object-cover object-center mb-6"
                  color="#ff9c00"
                  size={80}
                />

                <h2 className="text-lg text-[#ff9c00] font-medium title-font mb-4 text-center">
                  Optimization
                </h2>
                <p className="leading-relaxed text-base text-center">
                  Optimizing content involves refining and perfecting it for
                  maximum impact, including editing, proofreading, and
                  formatting, to ensure clarity, coherence, and engagement,
                  while also considering SEO and accessibility best practices
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 hover:border-2 hover:border-[#ff9c00] border-2 border-transparent rounded-3xl">
              <div className=" p-6 rounded-lg">
                <HardDriveUpload
                  className=" rounded w-full object-cover object-center mb-6"
                  color="#ff9c00"
                  size={80}
                />

                <h2 className="text-lg text-[#ff9c00] font-medium title-font mb-4 text-center">
                  Results
                </h2>
                <p className="leading-relaxed text-base text-center">
                  Measuring content results involves tracking key performance
                  indicators (KPIs), analyzing metrics, and assessing feedback
                  to determine the effectiveness of content in achieving its
                  intended goals and resonating with the target audience
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
