"use client"
import { link } from "fs";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
interface CardProps {
  imgSrc: string;
  subtitle: string;
  title: string;
  description: string;
  link: string;
}

const cardData = [
  {
    imgSrc: "/images/brandingblog/image3.jpg",
    subtitle: "Branding",
    title: "Branding strategies, small business, branding tactics,Small business brand ",
    description:
      "6 Branding Tactics Every Small Business Should Use...",
    link: "/blog/6-branding-tactics-for-small-business",
  },
  {
    imgSrc: "/images/SEO-mistake-blog/image3.jpg",
    subtitle: "SEO mistakes ",
    title: "10 SEO Mistakes to Avoid and How to Fix Them",
    description:
      "search engine algorithms, SEO technology, high returns on investment, Google Keyword Planner, reputable...",
    link: "/blog/How-to-avoid-seo-mistakes-and-how-to-fix-them",
  },
  {
    imgSrc: "/images/wordpress-website-blog/image2.jpg",
    subtitle: "wordpress website",
    title: "How to Build a WordPress Website from Scratch",
    description:
      "Learn how to build a WordPress website from scratch in 10 easy steps. Perfect for beginners looking to create ...",
    link: "/blog/how-to-build-a-wordpress-website",
  },
  {
    imgSrc: "/images/digitalmarketingblog/digitalmarketing3.jpeg",
    subtitle: "Digital Marketing Strategy",
    title: "How to Develop a Top-Notch Digital Marketing Strategy",
    description:
      "developing a digital marketing strategy, digital marketing plan, digital marketing channels, online marketing ...",
    link: "/blog/7-stages-of-a-digital-marketing-strategy",
  },
];
const Card: React.FC<CardProps> = ({
  imgSrc,
  subtitle,
  title,
  description,
  link,
}) => {
  return (
      <motion.div
            initial={{ opacity: 0, y: 50 }}           
            whileInView={{ opacity: 1, y: 0 }}        
            transition={{ duration: 0.8 }}            
            viewport={{ once: false, amount: 0.5 }}  className="xl:w-1/4 md:w-1/2 p-4">
      <Link href={link}>
        <div className="p-6 rounded-lg bg-gray-950 border-2 border-[#b8a9fe] blogcard transform transition-transform duration-500 ease-in-out hover:rounded-none hover:translate-y-2">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6 blogcard-image"
            src={imgSrc}
            alt={title}
            height={1000}
            width={1000}
          />
          <h3 className="tracking-widest text-[#b8a9fe] text-xs font-medium title-font">
            {subtitle}
          </h3>
          <h2 className="text-lg text-gray-400 font-medium title-font mb-4">
            {title}
          </h2>
          <p className="leading-relaxed text-base">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

const CardSection = () => {
  return (
    <section id="blog" className="text-gray-600 body-font">
      <div className="container py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
        <motion.div
        initial={{ opacity: 0, y: 50 }}           
        whileInView={{ opacity: 1, y: 0 }}        
        transition={{ duration: 0.8 }}            
        viewport={{ once: false, amount: 0.5 }}  className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl md:text-4xl font-extrabold text-center title-font mb-2 text-[#b8a9fe]">
              BLOGS
            </h1>
          </motion.div>
        </div>
        <div className="flex flex-wrap">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
