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

  const handleLinkClick = (e:any) => {
    e.stopPropagation();
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Fixed navbar container */}
      <div className="w-full fixed top-0 left-0 right-0 backdrop-blur-sm z-50 border-b border-gray-800/50 max-w-full overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-2xl mx-auto py-2 px-4 md:px-10 w-full">
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
                className="text-white hover:text-gray-300 focus:outline-none p-2 transition-colors duration-200 z-50 relative"
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

          {/* Desktop menu */}
          <ul className="hidden md:flex md:flex-row items-center gap-2 md:gap-4 font-bold text-white flex-grow justify-center text-sm sm:text-base md:text-lg">
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
                  <div className="flex text-white">
                    SERVICES
                    <ChevronDown />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="px-3 py-3 bg-[#b8a9fe] text-black">
                  <Link href="/web-design-agency-dubai">
                    <DropdownMenuItem className="font-bold">
                      Website Development
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
                      Content Writing
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

          {/* Desktop social icons */}
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
      </div>

      {/* Mobile menu backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/50"
          onClick={handleLinkClick}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed left-0 right-0 bg-black/90 backdrop-blur-md transition-all duration-300 ease-in-out z-50 border-t border-gray-800/50 ${
          isMenuOpen
            ? "top-[88px] max-h-[calc(100vh-88px)] opacity-100 visible"
            : "top-[88px] max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-start px-6 gap-5 font-medium text-white py-6 max-h-[calc(100vh-120px)] overflow-y-auto">
          <li className="hover:text-gray-300 w-full border-b border-gray-800 pb-2">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="text-white block py-1"
            >
              HOME
            </Link>
          </li>
          <li className="hover:text-gray-300 w-full border-b border-gray-800 pb-2">
            <Link
              href="/#about"
              onClick={handleLinkClick}
              className="text-white block py-1"
            >
              ABOUT US
            </Link>
          </li>
          <li className="w-full border-b border-gray-800 pb-2">
            <div className="space-y-2">
              <p className="text-white font-medium py-1">SERVICES</p>
              <div className="pl-4 space-y-2">
                <Link
                  href="/web-design-agency-dubai"
                  onClick={handleLinkClick}
                  className="block text-sm text-gray-200 hover:text-white transition-colors py-1"
                >
                  Website Development
                </Link>
                <Link
                  href="/graphic-design-company-dubai"
                  onClick={handleLinkClick}
                  className="block text-sm text-gray-200 hover:text-white transition-colors py-1"
                >
                  Graphic Design
                </Link>
                <Link
                  href="/social-media-marketing-agency-dubai"
                  onClick={handleLinkClick}
                  className="block text-sm text-gray-200 hover:text-white transition-colors py-1"
                >
                  Social Media Management
                </Link>
                <Link
                  href="/seo-agency-dubai"
                  onClick={handleLinkClick}
                  className="block text-sm text-gray-200 hover:text-white transition-colors py-1"
                >
                  Search Engine Optimization
                </Link>
                <Link
                  href="/content-writing-agency-dubai"
                  onClick={handleLinkClick}
                  className="block text-sm text-gray-200 hover:text-white transition-colors py-1"
                >
                  Content Writing
                </Link>
                <Link
                  href="/ppc-agency-dubai"
                  onClick={handleLinkClick}
                  className="block text-sm text-gray-200 hover:text-white transition-colors py-1"
                >
                  Pay Per Click
                </Link>
              </div>
            </div>
          </li>
          <li className="hover:text-gray-300 w-full border-b border-gray-800 pb-2">
            <Link
              href="/#contact"
              onClick={handleLinkClick}
              className="text-white block py-1"
            >
              CONTACT
            </Link>
          </li>
          <li className="hover:text-gray-300 w-full border-b border-gray-800 pb-2">
            <Link
              href="/blog"
              onClick={handleLinkClick}
              className="text-white block py-1"
            >
              BLOG
            </Link>
          </li>

          <li className="w-full pt-2">
            <p className="text-sm text-gray-200 mb-3">Follow Us:</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://www.facebook.com/share/18SDa3NGi1/?mibextid=wwXIfr"
                target="_blank"
                aria-label="Facebook"
                className="hover:scale-110 transition-transform"
              >
                <Facebook size={22} color="#b8a9fe" />
              </Link>
              <Link
                href="https://www.instagram.com/orionsols_official?igsh=MTN4YXF2emdyNWIybw=="
                target="_blank"
                aria-label="Instagram"
                className="hover:scale-110 transition-transform"
              >
                <Instagram size={22} color="#b8a9fe" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/orionsols?trk=profile-position"
                target="_blank"
                aria-label="LinkedIn"
                className="hover:scale-110 transition-transform"
              >
                <Linkedin size={22} color="#b8a9fe" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="hover:scale-110 transition-transform"
              >
                <Twitter size={22} color="#b8a9fe" />
              </Link>
              <Link
                href="https://www.tiktok.com/@orionsols"
                target="_blank"
                aria-label="TikTok"
                className="hover:scale-110 transition-transform"
              >
                <Music2 size={22} color="#b8a9fe" />
              </Link>
            </div>
          </li>

          <li className="w-full pt-2">
            <div className="flex items-center gap-2 mb-2">
              <Phone size={16} color="#b8a9fe" />
              <p className="text-sm text-gray-200">(+971) 528 977 529</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} color="#b8a9fe" />
              <p className="text-sm text-gray-200">info@Orionsols.com</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-[88px] md:h-0"></div>
    </>
  );
}

export default Navbar;