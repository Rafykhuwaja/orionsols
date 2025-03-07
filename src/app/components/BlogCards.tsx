import { link } from "fs";
import Link from "next/link";
import React from "react";

interface CardProps {
  imgSrc: string;
  subtitle: string;
  title: string;
  description: string;
  link: string;
}

const cardData = [
  {
    imgSrc: "/images/chatgpt.jpg",
    subtitle: "AI Technology",
    title: "GPT-3.5 vs GPT-4: Which Chat to Use for Your Business Needs?",
    description:
      "As artificial intelligence continues to evolve, businesses are faced with the challenge of choosing the ri.. ",
    link: "/blog/aitechnology",
  },

  {
    imgSrc: "/images/digitalmarketing.jpg",
    subtitle: "Digital Marketing",
    title: "Maximizing Your Brand Capacity with Social Media and SEO",
    description:
      "In today's digital age, leveraging social media and SEO strategies is essential for maximizing your brand.. ",
    link: "/blog/socialmedia",
  },

  {
    imgSrc: "/images/marketingstrategy.jpg",
    subtitle: "Marketing Strategy",
    title: "Enhance Your Brand with an Excellent Campaign Strategy",
    description:
      "Crafting an excellent campaign strategy is key to enhancing your brand and achieving your business goals. ..",
    link: "/blog/marketingstrategy",
  },
  {
    imgSrc: "/images/tradedevelopement.avif",
    subtitle: "Trade Development",
    title: "Embrace of Digital Marketing Strategies for Trade Development",
    description:
      "In today's fast-paced digital world, embracing digital marketing strategies is essential for trade development...",
    link: "/blog/tradedevelopement",
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
    <div className="xl:w-1/4 md:w-1/2 p-4 min-w-[350px]">
      <Link href={link}>
        <div className="p-6 rounded-lg bg-gray-950 border-2 border-[#ff9c00] blogcard transform transition-transform duration-500 ease-in-out hover:rounded-none hover:translate-y-2">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6 blogcard-image"
            src={imgSrc}
            alt={title}
          />
          <h3 className="tracking-widest text-[#ff9c00] text-xs font-medium title-font">
            {subtitle}
          </h3>
          <h2 className="text-lg text-gray-400 font-medium title-font mb-4">
            {title}
          </h2>
          <p className="leading-relaxed text-base">{description}</p>
        </div>
      </Link>
    </div>
  );
};

const CardSection = () => {
  return (
    <section className="text-gray-600 body-font blog-bg md:mt-[750px]">
      <div className="container py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl md:text-4xl font-extrabold text-center title-font mb-2 text-[#ff9c00]">
              BLOGS
            </h1>
          </div>
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
