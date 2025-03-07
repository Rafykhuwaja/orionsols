"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-gray-950 items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
    {
      quote: "Orionsols completely transformed our online presence. We saw a 50% increase in website traffic in just three months. Their strategic approach and attention to detail made a significant difference.",
      name: "Alice Johnson",
    },
    {
      quote: "Their team is incredibly knowledgeable and responsive. We couldn't be happier with the results. They always keep us informed and go the extra mile to ensure our success.",
      name: "Michael Brown",
    },
    {
      quote: "Orionsols' SEO strategies are top-notch. Our search engine rankings have significantly improved, leading to higher visibility and more qualified leads. We highly recommend their services.",
      name: "Jessica Smith",
    },
    {
      quote: "We saw a remarkable ROI from our digital marketing campaigns thanks to Orionsols. Highly recommend! Their insights and recommendations were spot on, and we saw immediate improvements in our conversions.",
      name: "David Williams",
    },
    {
      quote: "Their social media management has been a game-changer for our brand engagement. We've seen increased interaction and a stronger online community thanks to their creative and consistent efforts.",
      name: "Emily Davis",
    },
    {
      quote: "The content creation and marketing strategies provided by Orionsols have driven tremendous growth for our business. Their ability to craft compelling and relevant content has set us apart in our industry.",
      name: "Daniel Taylor",
    },
    {
      quote: "Orionsols' expertise in PPC advertising has helped us achieve our business goals faster. Their campaigns are well-targeted and deliver excellent results. We appreciate their transparency and performance tracking.",
      name: "Sarah Wilson",
    },
    {
      quote: "We are impressed with their professionalism and the results they have delivered. Orionsols is a trusted partner who understands our needs and consistently exceeds our expectations.",
      name: "James Martinez",
    },
    {
      quote: "Orionsols' email marketing campaigns have boosted our customer retention rates. Their personalized approach and attention to detail have made our email campaigns highly effective.",
      name: "Patricia Anderson",
    },
    {
      quote: "Their comprehensive digital marketing services have been instrumental in our business success. From SEO to social media, they have been our go-to partner for all our marketing needs.",
      name: "Christopher Thomas",
    },
  ];
  
