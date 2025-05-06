"use client"
import { motion } from 'framer-motion';

function About2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.5 }} className=" flex flex-col-reverse md:flex-row justify-center items-center py-10 md:py-36 md:mt-16 ">
      <div className="w-full md:w-1/2 relative bottom-8 fadeInRight md:pr-20">
        <h1 className="text-3xl  text-[#b8a9fe] font-extrabold mb-5 mt-16 md:mt-10 md:text-5xl md:pr-20">
          Graphic Designing
        </h1>
        <p className="text-gray-300 md:text-xl">
          At Orionsols, we design powerful visuals that capture attention and communicate your brands identity clearly. From logos and social media posts to brochures and website graphics, our design work is tailored to reflect your brands style, values, and goals. We focus on creating professional, eye-catching designs that not only look great but also serve a purpose — whether it is to inform, engage, or convert. With Orionsols, your brands visuals will leave a lasting impression across all platforms, helping you build recognition, trust, and impact in the digital world.
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
