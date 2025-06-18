"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Palette, Smartphone, FileText, Package, Monitor, Award } from "lucide-react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function GraphicDesignService() {
  return (
    <div>
      <Navbar2 />
      <div className="md:px-[12vw] px-4 w-[100vw] mt-5">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden text-gray-300">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 1, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                className="md:w-1/2 mb-8 md:mb-0 md:pr-12"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Professional & Impactful{" "}
                  <span className="text-[#b8a9fe]">Graphic Design</span>{" "}
                  Services in Dubai
                </h1>
                <p className="text-lg md:text-xl mb-8">
                  Empower your brand with stunning visuals that stand out, connect with audiences, and leave a lasting impression.
                </p>
              </motion.div>
              <div className="relative h-64 sm:h-72 md:h-96 md:w-1/2 rounded-lg overflow-hidden shadow-2xl bg-gray-800">
                {/* Loading placeholder */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse"></div>

                <Image
                  src="/images/graphic-design.jpg"
                  alt="Professional Website Development"
                  layout="fill"
                  objectFit="cover"
                  className="object-cover hover:scale-105 transition-transform duration-300 relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 1, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
            className="container mx-auto px-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              In today’s competitive marketplace, visual identity isn’t a luxury—it’s a necessity. At Orionsols, we deliver professional graphic designing services in Dubai that empower brands to stand out, connect with audiences, and create lasting impressions. Whether launching a startup or revamping an existing brand, our expert design team crafts impactful visuals that clearly communicate your brand story. We’re more than just another graphic design company in Dubai—we’re your creative partners, driven by passion and focused on transforming your ideas into stunning designs.
            </p>
          </motion.div>
        </section>

        {/* Why Graphic Designing Matters */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-3xl font-bold text-center mb-16 text-gray-300"
            >
              Why <span className="text-[#b8a9fe]">Graphic Designing</span>{" "}
              Matters
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 1, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                className="p-8 rounded-lg border border-[#b8a9fe]"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#b8a9fe] p-3 rounded-full mr-4">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b8a9fe]">
                    Builds Strong Brand Identity
                  </h3>
                </div>
                <p className="text-gray-300">
                  Your visual branding—logo, color scheme, typography—shapes customer perception. Great design builds recognition and trust in Dubai’s dynamic market.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 1, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                className="p-8 rounded-lg border border-[#b8a9fe]"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#b8a9fe] p-3 rounded-full mr-4">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b8a9fe]">
                    Drives Engagement Across Channels
                  </h3>
                </div>
                <p className="text-gray-300">
                  High-quality visuals for social media, websites, or newsletters boost engagement and make your message memorable.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 1, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                className="p-8 rounded-lg border border-[#b8a9fe]"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#b8a9fe] p-3 rounded-full mr-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b8a9fe]">
                    Establishes Credibility
                  </h3>
                </div>
                <p className="text-gray-300">
                  Professional design reflects quality. We ensure every element enhances your brand’s credibility and inspires confidence.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 1, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                className="p-8 rounded-lg border border-[#b8a9fe]"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#b8a9fe] p-3 rounded-full mr-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b8a9fe]">
                    Increases Conversions
                  </h3>
                </div>
                <p className="text-gray-300">
                  Effective design guides customer behavior, drives clicks, and boosts conversions with a strategic approach.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-3xl font-bold text-center mb-16 text-gray-300"
            >
              Our <span className="text-[#b8a9fe]">Graphic Designing</span>{" "}
              Process
            </motion.h2>
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 1, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                className="flex flex-col md:flex-row mb-12"
              >
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Discovery & Brand Understanding
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We start by understanding your business, audience, values, and goals to ensure designs reflect your brand authentically.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 1, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                className="flex flex-col md:flex-row mb-12"
              >
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Market & Competitor Research
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We analyze industry trends and competitors to deliver designs that elevate your brand above the rest.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 1, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                className="flex flex-col md:flex-row mb-12"
              >
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Concept Ideation & Moodboarding
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We explore multiple directions and moodboards to align visuals with your brand tone before design execution.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 1, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                className="flex flex-col md:flex-row mb-12"
              >
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Visual Design & Execution
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    Our designers bring concepts to life using cutting-edge tools, delivering everything from logos to full brand systems.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 1, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                className="flex flex-col md:flex-row mb-12"
              >
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">5</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Feedback & Revisions
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We collaborate closely, welcoming feedback to refine designs until they meet or exceed your expectations.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 1, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                className="flex flex-col md:flex-row"
              >
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">6</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Final Delivery & Ongoing Support
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We deliver files in print, digital, and social-ready formats, with ongoing support for updates or future projects.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-3xl font-bold text-center mb-16 text-[#b8a9fe]"
            >
              Our Graphic Designing Services
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 1, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Palette className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Logo Design & Brand Identity
                </h3>
                <p className="text-gray-300">
                  Crafting timeless logos and cohesive branding systems that express your brand’s essence.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 1, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Smartphone className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Social Media Graphics
                </h3>
                <p className="text-gray-300">
                  Custom visuals for Instagram, Facebook, LinkedIn, and more to keep your brand fresh and relevant.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 1, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Marketing Collateral
                </h3>
                <p className="text-gray-300">
                  Impactful brochures, business cards, banners, and flyers for promotions and events.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 1, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Monitor className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  UI/UX Design (Web & App)
                </h3>
                <p className="text-gray-300">
                  Intuitive, user-friendly interfaces combining aesthetic appeal with seamless functionality.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 1, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Package className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Packaging Design
                </h3>
                <p className="text-gray-300">
                  Compelling, on-brand packaging for retail, cosmetics, food, and more to grab attention.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 1, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Presentation & Document Design
                </h3>
                <p className="text-gray-300">
                  Polished presentations and company profiles reflecting your brand’s professionalism.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 1, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.5 }}
              className="mt-16 relative h-80 md:h-96 w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/images/graphic-design2.jpg"
                alt="Our Graphic Design Services"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center mb-16">
              <motion.div
                initial={{ opacity: 1, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                className="md:w-1/2 mb-8 md:mb-0"
              >
                <h2 className="text-3xl font-bold mb-6 text-[#b8a9fe]">
                  Why Choose Orionsols
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Your brand deserves more than generic templates. At Orionsols, we deliver unique, impactful designs tailored to the Dubai market, combining creativity with strategy to drive engagement and growth.
                </p>
                <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/graphic-design3.jpg"
                    alt="Our Expert Design Team"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 1, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                className="md:w-1/2 md:pl-12"
              >
                <div className="grid grid-cols-1 gap-6">
                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Deep Knowledge of Dubai Market
                    </h3>
                    <p className="text-gray-300">
                      As a homegrown agency, we understand Dubai’s cultural and commercial nuances, delivering designs that connect locally.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Strategic Creativity
                    </h3>
                    <p className="text-gray-300">
                      Every design is intentional, rooted in business strategy and aligned with your goals for maximum impact.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Experienced & Passionate Team
                    </h3>
                    <p className="text-gray-300">
                      Our specialists—from branding to UI/UX—turn your vision into compelling reality with dedication.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Transparent & Collaborative
                    </h3>
                    <p className="text-gray-300">
                      We involve you at every step, encouraging feedback for a smooth, rewarding process.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-3xl font-bold mb-6 text-[#b8a9fe]"
            >
              Get Started with Orionsols Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-xl max-w-3xl mx-auto mb-8"
            >
              Your brand deserves unique, impactful designs that tell your story and drive engagement. Contact Orionsols for a free consultation and see how our professional graphic designing services in Dubai can make your brand unforgettable.
            </motion.p>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}