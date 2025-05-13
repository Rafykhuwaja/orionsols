"use client"
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"
import OrbitingItems3D from "./list/orbiting-items-3-d";
import Image from "next/image";
function Banner() {
  return (
    <div className="">
      <div id="home" className="flex flex-col px-4 sm:px-8 text-white top-0 w-full md:z-[-1]  ">
     <h1 className="text-center font-semibold text-4xl lg:text-6xl mt-10 mb-10">Take Your Business to the <span className="text-[#b8a9fe]">New Height</span> <br />with <span className="text-[#b8a9fe]">Orionsols</span> </h1>
      
      
          <OrbitingItems3D
            duration={25}
            items={[
              <Image src="/icons/vecteezy_3d-social-media-icons-google_9428333.png" alt="icon" fill key="banana" className="h-12 w-12" />,
              <Image src="/icons/vecteezy_3d-twitter-icon-logo_18885089.png" alt="icon" fill key="banana" className="h-12 w-12" />,
              <Image src="/icons/vecteezy_a-blue-and-white-link-icon-on-a-flat-shape_60380478.png" alt="icon" fill key="banana" className="h-12 w-12" />,
              <Image src="/icons/vecteezy_facebook-icon-transparent-background_47750224.png" alt="icon" fill key="banana" className="h-12 w-12" />,
              <Image src="/icons/vecteezy_glossy-instagram-3d-render-icon_9673727.png" alt="icon" fill key="banana" className="h-12 w-12" />,
              <Image src="/icons/vecteezy_glossy-tik-tok-icon-3d-render_9826612.png" alt="icon" fill key="banana" className="h-12 w-12" />,

            ]}
            className=""
            radiusX={120}
            radiusY={30}
            tiltAngle={330} />
       
      </div>
    </div>
  );
}

export default Banner;