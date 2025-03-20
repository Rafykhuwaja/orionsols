"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/app/components/ui/hover-card";
import { ChevronDown } from "lucide-react";
import { Phone, Facebook, Instagram, Linkedin, Twitter , Mail} from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-gray-900">
      <div className="md:flex bg-gray-950 py-4 md:px-[150px] lg:px-[220px] items-center gap-24 text-[18px] justify-between hidden">
        <div className="flex gap-10">

        <div className="flex gap-3">
          <Phone color="#ff9c00" />
          <p className="text-white">(+971) 528 977 529</p>
        </div>
        <div className="flex gap-3">
          <Mail color="#ff9c00" />
          <p className="text-white">info@Orionsols.com</p>
        </div>
        </div>
        <div className="flex gap-10">
          <Link href="https://www.facebook.com/share/18SDa3NGi1/?mibextid=wwXIfr" target="_blank">
          <Facebook color="#ff9c00" />
          </Link>
          <Link href="https://www.instagram.com/orionsols_official?igsh=MTN4YXF2emdyNWIybw==" target="_blank">
          <Instagram color="#ff9c00" />
          </Link>
          <Link href="https://www.linkedin.com/company/orionsols?trk=profile-position" target="_blank">
          <Linkedin color="#ff9c00" />
          </Link>
          <Twitter color="#ff9c00" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-[150px] lg:px-[215px] py-4">
        {/* Logo and Hamburger Menu */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/">
            <Image
              src="/images/orionsols_logo.png"
              width={1000}
              height={1000}
              className="w-[180px]"
              alt="orionsols"
            />
          </Link>
          {/* Hamburger Menu Icon (Mobile Only) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex md:flex-row items-center gap-4 md:gap-10 font-semibold text-lg text-gray-300">
          <li className="hover:text-gray-500">
            <Link href="/">HOME</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link href="/about">ABOUT US</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link href="/services">SERVICES</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link href="/contact">CONTACT</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link href="/blog">BLOG</Link>
          </li>
        </ul>

        {/* Contact Button */}
        {/* <div className="hidden md:flex text-white  ">
          <div className="bg-[#ff9c00] rounded-full p-2 h-fit mr-2">
            <Phone />
          </div>
          <div>
            <p>(+971) 528 977 529</p>
            <p>info@Orionsols.com</p>
          </div>
        </div> */}
      </div>

      {/* Mobile Menu (Dropdown with Animation) */}
      <div
        className={`md:hidden bg-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-start px-10 gap-5 font-semibold text-gray-300 py-4">
          <li className="hover:text-gray-500">
            <Link href="/">HOME</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link href="/about">ABOUT US</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link href="/services">SERVICES</Link>
          </li>

          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link href="/blog">BLOG</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
