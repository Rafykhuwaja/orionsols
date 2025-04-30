"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

const testimonials = [
  {
    video: "/video/client2.mp4",
    thumbnail : "/thumbnails/thumbnail3.PNG"
  },
  {
    video: "/video/client1.mp4",
    thumbnail : "/thumbnails/thumbnail2.PNG"

  },
  {
    video: "/video/client3.mp4",
    thumbnail : "/thumbnails/thumbnail1.PNG"

  },
  {
    video: "/video/client2.mp4",
    thumbnail : "/thumbnails/thumbnail3.PNG"
  },
  {
    video: "/video/client1.mp4",
    thumbnail : "/thumbnails/thumbnail2.PNG"

  },
  {
    video: "/video/client3.mp4",
    thumbnail : "/thumbnails/thumbnail1.PNG"

  },
];

function Testimonials() {
  return (
    <div className="px-4 py-10 md:px-[10vw] md:py-20">
      <div className="text-center">
        <p className="text-white text-3xl font-bold">Client Testimonials</p>
        <h1 className="text-3xl md:text-4xl font-extrabold my-3 text-[#ff9c00]">
          What Our Clients Are Saying
        </h1>
        <div className="p-8">

        <Carousel>
          <CarouselContent className="gap-10">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/4 p-4">
                <div className="h-[600px] shadow-sm  rounded-md">
                  <HeroVideoDialog
                    className="block dark:hidden h-[500px] w-[350px]"
                    animationStyle="from-center"
                    videoSrc={testimonial.video}
                    thumbnailSrc={testimonial.thumbnail}
                    thumbnailAlt="Client review"
                    />
                 
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Optional: Carousel Controls */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
            </div>
      </div>
    </div>
  );
}

export default Testimonials;
