"use client"
import Image from "next/image"
import { motion } from "framer-motion";
import { TextAnimate } from "./components/magicui/text-animate";
import FlipCard from "./components/animata/card/flip-card";
const data = [
  {
    image: "/video/SMS.mp4",
    title: "Social Media Management",
    subtitle: "Building Engagement and Online Presence",
    description:
      "Build a robust presence across platforms like Facebook, Instagram, LinkedIn, and more. We handle everything from content creation to engagement strategies and performance tracking to help you maintain meaningful connections with your audience.",
  },
  {
    image: "/video/SEO.mp4",
    title: "Search Engine Optimization (SEO)",
    subtitle: "Boost Your Visibility on Search Engines",
    description:
      "Increase organic traffic and improve your search rankings through comprehensive on-page and off-page optimization. We focus on keyword research, technical SEO, and continuous performance analysis to keep you ahead of the competition.",
  },
  {
    image: "/video/CMS.mp4",
    title: "Content Marketing",
    subtitle: "Create Value and Drive Conversions",
    description:
      "Engage your audience with high-quality, relevant content that drives conversions. We create tailored strategies with blogs, videos, infographics, and more to boost engagement and improve brand perception.",
  },
  {
    image: "/video/PPC.mp4",
    title: "Pay-Per-Click Advertising (PPC)",
    subtitle: "Targeted Ads for Maximum ROI",
    description:
      "Maximize your ROI with strategically targeted ads on Google, Bing, and social platforms. From campaign setup to continuous optimization, we ensure your ads reach the right audience.",
  },
  {
    image: "/video/GDS.mp4",
    title: "Branding & Graphic Design",
    subtitle: "Make Your Brand Stand Out",
    description:
      "Create a memorable and impactful brand identity. Our professional logo design, marketing collateral, and branding assets ensure your business stands out and resonates with your target market.",
  },
  {
    image: "/video/WDS.mp4",
    title: "Web Development",
    subtitle: "Beautiful, Responsive, and Effective Websites",
    description:
      "We specialize in creating responsive, visually appealing, and user-friendly websites that align with your business goals. Whether you need an eCommerce site or a corporate website, we build solutions that drive conversions.",
  },
];


const CardComponent = () => {
  return (
    <section id="services" className="text-gray-600 body-font pt-5">
         <TextAnimate
                animation="slideUp"
                by="word"
                className="md:text-4xl text-3xl font-bold text-[#b8a9fe] mt-36 text-center"
              >
                          
          Comprehensive Digital Marketing Solutions for Every Business
              </TextAnimate>
      <motion.div 
      initial={{ opacity: 0, x: 150 }}          
      whileInView={{ opacity: 1, x: 0 }}      
      transition={{ duration: 1.5 }}           
      viewport={{ once: false, amount: 0.8 }}  className="text-center">
        
        <p className="mt-4 text-white">
          At Orionsols, we offer a complete suite of services designed to help you grow, engage, and convert customers. Explore our core offerings below:
        </p>
      </motion.div>
      <div className="container px-5 py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <motion.div 
            initial={{ opacity: 0, y: 100 }}          
            whileInView={{ opacity: 1, y: 0 }}      
            transition={{ duration: 1.5 }}           
            viewport={{ once: false, amount: 0.2 }} key={item.title} className="p-4">
              {/* <div className="card border-2 border-[#ff9c00] border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="card-image"
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
                <h2 className="card-title">{item.title}</h2>
                <div className="card-content">
                  <h1 className="title-font text-xl font-semibold text-[#ff9c00] mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed mb-3 text-xs md:text-base">{item.description}</p>
                  <div className="flex flex-col gap-4 text-xs md:text-base">
                    <p>{item.points[1]}</p>
                    <p>{item.points[2]}</p>
                    <p>{item.points[3]}</p>
                  </div>
                </div>
              </div> */}
              <FlipCard
  description={item.description}
  image={item.image}
  rotate="x"
  subtitle={item.subtitle}
  title={item.title}
/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardComponent;