"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"
import OrbitingItems3D from "./list/orbiting-items-3-d";
import Image from "next/image";

function Banner() {
  const [radiusX, setRadiusX] = useState(120);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadiusX(60);
      } else if (window.innerWidth < 768) {
        setRadiusX(80);
      } else if (window.innerWidth < 1024) {
        setRadiusX(100);
      } else {
        setRadiusX(120);
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <div className="relative w-full h-screen max-w-full overflow-hidden ">
      <div id="home" className="relative flex flex-col px-4 sm:px-8 text-white w-full h-full justify-center items-center max-w-full">
        <h1 className="text-center font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-20 md:mt-[18vh] mb-10 max-w-full leading-tight">
          Take Your Business to the <span className="text-[#b8a9fe]">New Height</span> <br className="hidden sm:block" />with <span className="text-[#b8a9fe]">Orionsols</span>
        </h1>
        <div className="w-full max-w-full overflow-hidden flex justify-center">
          <OrbitingItems3D
            duration={25}
            items={[
              <Image src="/icons/google.png" alt="icon" fill key="google" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
              <Image src="/icons/linkedin.png" alt="icon" fill key="linkedin" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
              <Image src="/icons/instagram.png" alt="icon" fill key="instagram" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
              <Image src="/icons/facebook.png" alt="icon" fill key="facebook" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
              <Image src="/icons/x.png" alt="icon" fill key="x" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
              <Image src="/icons/tiktok.png" alt="icon" fill key="tiktok" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
            ]}
            className="max-w-full"
            radiusX={radiusX}
            radiusY={30}
            tiltAngle={330}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;