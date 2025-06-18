"use client";
import { motion } from "framer-motion";

function About2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.5 }}
      className=" flex flex-col-reverse md:flex-row justify-center items-center py-10 md:py-36 md:mt-16 "
    >
      <div className="w-full md:w-1/2 relative bottom-8 fadeInRight md:pr-20">
        <h1 className="text-3xl text-[#b8a9fe] font-extrabold mb-5 mt-16 md:mt-10 md:text-5xl md:pr-20">
          Video Editing
        </h1>
        <p className="text-gray-300 md:text-xl">
          At Orionsols, we craft compelling videos that bring your message to
          life and captivate your audience. From promotional content and
          corporate videos to social media reels and YouTube edits, our video
          editing services are designed to match your brand’s voice and purpose.
          We focus on smooth transitions, impactful visuals, and clear
          storytelling to ensure every frame supports your goals. With
          Orionsols, your videos won’t just look professional — they’ll engage,
          inspire, and deliver results across all platforms.
        </p>
      </div>
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
        <div className=" w-full rounded-lg fadeInLeft">
          <video
            src="/video/videoEditing.mp4"
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
    </motion.div>
  );
}

export default About2;
