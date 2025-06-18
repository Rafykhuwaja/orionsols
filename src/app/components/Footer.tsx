import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-transparent border-t border-gray-800">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Contact Information Section */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-lg lg:text-xl mb-4">
                Contact Info
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b8a9fe] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-semibold text-sm mb-1">
                    Find us:
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Ascott Park Place Tower
                    <br />
                    Office 401, Dubai
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#b8a9fe] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-semibold text-sm mb-1">
                    Call us:
                  </p>
                  <Link
                    href="tel:+971528977529"
                    className="text-gray-400 text-sm hover:text-[#b8a9fe] transition-colors duration-200"
                  >
                    (+971) 528 977 529
                  </Link>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#b8a9fe] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-semibold text-sm mb-1">
                    Mail us:
                  </p>
                  <Link
                    href="mailto:info@orionsols.com"
                    className="text-gray-400 text-sm hover:text-[#b8a9fe] transition-colors duration-200"
                  >
                    info@Orionsols.com
                  </Link>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg lg:text-xl mb-4">
                Our Services
              </h3>
              <nav className="space-y-3">
                <Link
                  href="/website-developement"
                  className="block text-gray-400 text-sm hover:text-[#b8a9fe] transition-colors duration-200"
                >
                  Website Development
                </Link>
                <Link
                  href="/graphic-design"
                  className="block text-gray-400 text-sm hover:text-[#b8a9fe] transition-colors duration-200"
                >
                  Graphic Design
                </Link>
                <Link
                  href="/social-media-marketing"
                  className="block text-gray-400 text-sm hover:text-[#b8a9fe] transition-colors duration-200"
                >
                  Social Media Management
                </Link>
                <Link
                  href="/seo"
                  className="block text-gray-400 text-sm hover:text-[#b8a9fe] transition-colors duration-200"
                >
                  SEO Services
                </Link>
                <Link
                  href="/creative-content"
                  className="block text-gray-400 text-sm hover:text-[#b8a9fe] transition-colors duration-200"
                >
                  Content Writing
                </Link>
                <Link
                  href="/ppc"
                  className="block text-gray-400 text-sm hover:text-[#b8a9fe] transition-colors duration-200"
                >
                  Pay Per Click
                </Link>
              </nav>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg lg:text-xl mb-4">
                Quick Links
              </h3>
              <nav className="space-y-3">
                <Link
                  href="#home"
                  className="block text-gray-400 text-sm hover:text-[#b8a9fe] transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="block text-gray-400 text-sm hover:text-[#b8a9fe] transition-colors duration-200"
                >
                  About Us
                </Link>
                <Link
                  href="/blog"
                  className="block text-gray-400 text-sm hover:text-[#b8a9fe] transition-colors duration-200"
                >
                  Blog
                </Link>
                <Link
                  href="#contact"
                  className="block text-gray-400 text-sm hover:text-[#b8a9fe] transition-colors duration-200"
                >
                  Contact
                </Link>
                <Link
                  href="/portfolio"
                  className="block text-gray-400 text-sm hover:text-[#b8a9fe] transition-colors duration-200"
                >
                  Portfolio
                </Link>
              </nav>
            </div>

            {/* Social Media & Newsletter Section */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-lg lg:text-xl mb-4">
                Connect With Us
              </h3>

              {/* Social Media Icons */}
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="https://www.facebook.com/share/18SDa3NGi1/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="Follow us on Facebook"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-[#b8a9fe] transition-colors duration-300">
                    <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </div>
                </Link>

                <Link
                  href="https://www.instagram.com/orionsols?igsh=MXExM2Y2bHUzNGI3MQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="Follow us on Instagram"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-[#b8a9fe] transition-colors duration-300">
                    <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </div>
                </Link>

                <Link
                  href="https://www.linkedin.com/company/orionsols?trk=profile-position"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="Connect with us on LinkedIn"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-[#b8a9fe] transition-colors duration-300">
                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </div>
                </Link>

                <div className="group cursor-pointer">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-[#b8a9fe] transition-colors duration-300">
                    <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </div>
                </div>
              </div>

             
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 ORIONSOLS, Inc. All rights reserved.
              </p>
              <div className="flex gap-4 text-sm">
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                Visit our Blog
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
