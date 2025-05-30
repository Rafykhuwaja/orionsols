"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { InteractiveHoverButton } from "@/app/components/magicui/interactive-hover-button";
import {
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Music2,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-2xl mx-auto py-4 md:mb-10">
          <div className="flex justify-between items-center w-full md:w-auto">
            <Link href="/">
              <Image
                src="/images/orionsols_logo.png"
                width={1000}
                height={1000}
                className="w-[120px] sm:w-[180px] md:w-[220px] lg:w-[250px]"
                alt="orionsols"
              />
            </Link>
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={toggleMenu}
                className="text-gray-300 focus:outline-none p-2"
                aria-label="Menu"
                aria-expanded={isMenuOpen}
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
          </div>

          <ul className="hidden md:flex md:flex-row items-center gap-2 md:gap-4 font-bold text-gray-300 flex-grow justify-center text-sm sm:text-base md:text-lg">
            <li>
              <Link href="#home">
                <InteractiveHoverButton>HOME</InteractiveHoverButton>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <InteractiveHoverButton>ABOUT US</InteractiveHoverButton>
              </Link>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="flex">
                    SERVICES
                    <ChevronDown />
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="px-3 py-3 bg-[#b8a9fe]">
                  <Link href="/website-developement">
                    <DropdownMenuItem className="font-bold">
                      Website Developement
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/graphic-design">
                    <DropdownMenuItem className="font-bold">
                      Graphic Design
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/social-media-marketing">
                    <DropdownMenuItem className="font-bold">
                      Social Media Management
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/seo">
                    <DropdownMenuItem className="font-bold">
                      Search Engine Optimization
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/creative-content">
                    <DropdownMenuItem className="font-bold">
                      Content writing
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/ppc">
                    <DropdownMenuItem className="font-bold">
                      Pay Per Click
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link href="#contact">
                <InteractiveHoverButton>CONTACT</InteractiveHoverButton>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <InteractiveHoverButton>BLOG</InteractiveHoverButton>
              </Link>
            </li>
          </ul>

          <div className="hidden md:flex items-center text-white">
            <div className="flex gap-2 lg:gap-4">
              <Link
                href="https://www.facebook.com/share/18SDa3NGi1/?mibextid=wwXIfr"
                target="_blank"
                className="hover:opacity-75 transition-opacity hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} color="#b8a9fe" />
              </Link>
              <Link
                href="https://www.instagram.com/orionsols_official?igsh=MTN4YXF2emdyNWIybw=="
                target="_blank"
                className="hover:opacity-75 transition-opacity hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} color="#b8a9fe" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/orionsols?trk=profile-position"
                target="_blank"
                className="hover:opacity-75 transition-opacity hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} color="#b8a9fe" />
              </Link>
              <Link
                href="#"
                className="hover:opacity-75 transition-opacity hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} color="#b8a9fe" />
              </Link>
              <Link
                href="https://www.tiktok.com/@orionsols"
                target="_blank"
                className="hover:opacity-75 transition-opacity hover:scale-110"
                aria-label="TikTok"
              >
                <Music2 size={20} color="#b8a9fe" />
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-start px-6 gap-5 font-medium text-gray-300 py-4">
            <li className="hover:text-gray-500 w-full border-b border-gray-800 pb-2">
              <Link href="#home" onClick={handleLinkClick}>
                HOME
              </Link>
            </li>
            <li className="hover:text-gray-500 w-full border-b border-gray-800 pb-2">
              <Link href="#about" onClick={handleLinkClick}>
                ABOUT US
              </Link>
            </li>
            <li className="hover:text-gray-500 w-full border-b border-gray-800 pb-2">
              <Link href="#services" onClick={handleLinkClick}>
                SERVICES
              </Link>
            </li>
            <li className="hover:text-gray-500 w-full border-b border-gray-800 pb-2">
              <Link href="#contact" onClick={handleLinkClick}>
                CONTACT
              </Link>
            </li>
            <li className="hover:text-gray-500 w-full border-b border-gray-800 pb-2">
              <Link href="#blog" onClick={handleLinkClick}>
                BLOG
              </Link>
            </li>

            <li className="w-full pt-2">
              <p className="text-sm text-gray-400 mb-3">Follow Us:</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://www.facebook.com/share/18SDa3NGi1/?mibextid=wwXIfr"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <Facebook size={22} color="#b8a9fe" />
                </Link>
                <Link
                  href="https://www.instagram.com/orionsols_official?igsh=MTN4YXF2emdyNWIybw=="
                  target="_blank"
                  aria-label="Instagram"
                >
                  <Instagram size={22} color="#b8a9fe" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/orionsols?trk=profile-position"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} color="#b8a9fe" />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <Twitter size={22} color="#b8a9fe" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@orionsols"
                  target="_blank"
                  aria-label="TikTok"
                >
                  <Music2 size={22} color="#b8a9fe" />
                </Link>
              </div>
            </li>

            <li className="w-full pt-2">
              <div className="flex items-center gap-2 mb-2">
                <Phone size={16} color="#b8a9fe" />
                <p className="text-sm text-gray-300">(+971) 528 977 529</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} color="#b8a9fe" />
                <p className="text-sm text-gray-300">info@Orionsols.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
