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
              <Image src="/icons/google.png" alt="icon" fill key="banana" className="h-12 w-12" />,
              <Image src="/icons/linkedin.png" alt="icon" fill key="banana" className="h-12 w-12" />,
              <Image src="/icons/instagram.png" alt="icon" fill key="banana" className="h-12 w-12" />,
              <Image src="/icons/facebook.png" alt="icon" fill key="banana" className="h-12 w-12" />,
              <Image src="/icons/x.png" alt="icon" fill key="banana" className="h-12 w-12" />,
              <Image src="/icons/tiktok.png" alt="icon" fill key="banana" className="h-12 w-12" />,

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