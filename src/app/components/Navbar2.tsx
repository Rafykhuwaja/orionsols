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
      {/* Backdrop overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-30 md:hidden"
          onClick={handleLinkClick}
        />
      )}

      {/* Fixed navbar for mobile, relative for desktop */}
      <div className="w-full fixed top-0 left-0 right-0 backdrop-blur-sm z-50 border-b border-gray-800/50 md:border-none">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-2xl mx-auto py-2  px-4 md:px-0">
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
                className="text-gray-300 hover:text-white focus:outline-none p-2 transition-colors duration-200"
                aria-label="Menu"
                aria-expanded={isMenuOpen}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                      isMenuOpen
                        ? "rotate-45 translate-y-1"
                        : "-translate-y-0.5"
                    }`}
                  ></span>
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                      isMenuOpen
                        ? "-rotate-45 -translate-y-1"
                        : "translate-y-0.5"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          <ul className="hidden md:flex md:flex-row items-center gap-2 md:gap-4 font-bold text-gray-300 flex-grow justify-center text-sm sm:text-base md:text-lg">
            <li>
              <Link href="/">
                <InteractiveHoverButton>HOME</InteractiveHoverButton>
              </Link>
            </li>
            <li>
              <Link href="/#about">
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
                  <Link href="/web-design-agency-dubai">
                    <DropdownMenuItem className="font-bold">
                      Website Developement
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/graphic-design-company-dubai">
                    <DropdownMenuItem className="font-bold">
                      Graphic Design
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/social-media-marketing-agency-dubai">
                    <DropdownMenuItem className="font-bold">
                      Social Media Management
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/seo-agency-dubai">
                    <DropdownMenuItem className="font-bold">
                      Search Engine Optimization
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/content-writing-agency-dubai">
                    <DropdownMenuItem className="font-bold">
                      Content writing
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/ppc-agency-dubai">
                    <DropdownMenuItem className="font-bold">
                      Pay Per Click
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link href="/#contact">
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

        {/* Mobile menu with improved positioning and backdrop */}
        <div
          className={`md:hidden fixed top-[100%] left-0 right-0 bg-black/98 backdrop-blur-md transition-all duration-300 ease-in-out z-40 ${
            isMenuOpen
              ? "max-h-screen opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          } overflow-hidden`}
        >
          <ul className="flex flex-col items-start px-6 gap-5 font-medium text-gray-300 py-6 max-h-[calc(100vh-100px)] overflow-y-auto">
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
            <li className="w-full border-b border-gray-800 pb-2">
              <div className="space-y-2">
                <p className="text-gray-300 font-medium">SERVICES</p>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/web-design-agency-dubai"
                    onClick={handleLinkClick}
                    className="block text-sm text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    Website Development
                  </Link>
                  <Link
                    href="/graphic-design-company-dubai"
                    onClick={handleLinkClick}
                    className="block text-sm text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    Graphic Design
                  </Link>
                  <Link
                    href="/social-media-marketing-agency-dubai"
                    onClick={handleLinkClick}
                    className="block text-sm text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    Social Media Management
                  </Link>
                  <Link
                    href="/seo-agency-dubai"
                    onClick={handleLinkClick}
                    className="block text-sm text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    Search Engine Optimization
                  </Link>
                  <Link
                    href="/content-writing-agency-dubai"
                    onClick={handleLinkClick}
                    className="block text-sm text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    Content Writing
                  </Link>
                  <Link
                    href="/ppc-agency-dubai"
                    onClick={handleLinkClick}
                    className="block text-sm text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    Pay Per Click
                  </Link>
                </div>
              </div>
            </li>
            <li className="hover:text-gray-500 w-full border-b border-gray-800 pb-2">
              <Link href="#contact" onClick={handleLinkClick}>
                CONTACT
              </Link>
            </li>
            <li className="hover:text-gray-500 w-full border-b border-gray-800 pb-2">
              <Link href="/blog" onClick={handleLinkClick}>
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

      {/* Spacer to prevent content from going under fixed navbar on mobile */}
      <div className="h-[88px] md:h-0"></div>
    </>
  );
}

export default Navbar;
