"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Monitor, Layout, ShoppingBag, RefreshCw, Award } from "lucide-react";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";



function Web_development() {
  return (
    <div>
         <div>
      <Navbar2 />
      <div className="md:px-[12vw] px-4 w-[100vw] md:mt-10">
        {/* Hero Section */}


<section className="py-20 relative overflow-hidden text-gray-300">
  <div className="container mx-auto px-6 relative z-10">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <motion.div
        initial={{ opacity: 1, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
        className="md:w-1/2 mb-8 md:mb-0"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Professional{" "}
          <span className="text-[#b8a9fe]">Website Development</span>{" "}
          Services
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Your site is more than an internet brochure - it makes your
          business connect with potential buyers, partners, and
          customers.
        </p>
      </motion.div>
    
      <motion.div
        initial={{ opacity: 1, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
        className="md:w-1/2 w-full"
      >
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl bg-gray-800">
          {/* Loading placeholder */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse"></div>

          <Image
            src="/images/webdev3.jpg"
            alt="Professional Website Development"
            width={700}
            height={500}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 relative z-10"
            priority
          />
        </div>
      </motion.div>
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
              Your site is the foundation of your online existence, and how it
              looks and functions can contribute significantly to your
              company&apos;s image. At Orionsols, we are experts in providing
              top-oriented website development services that are not only
              visually attractive, but are strategically designed to achieve
              your business objectives. From concept to final product, we aim to
              develop user-friendly websites that promote the reliability of
              your brand and produce outstanding results. Whether you are a
              startup or an established business, we are here to help you create
              a website that stands out in today&apos;s competitive online
              marketplace.
            </p>
          </motion.div>
        </section>

        {/* Why Website Development Matters */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-3xl font-bold text-center mb-16 text-gray-300"
            >
              Why <span className="text-[#b8a9fe]">Website Development</span>{" "}
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
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b8a9fe]">
                    Build Trust
                  </h3>
                </div>
                <p className="text-gray-300">
                  A strong website builds trust and credibility with your
                  audience, creating a positive first impression that represents
                  your brand professionally.
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
                    <Monitor className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b8a9fe]">
                    Capture Attention
                  </h3>
                </div>
                <p className="text-gray-300">
                  You have seconds to grab visitors&apos; attention. A
                  well-designed website engages users immediately and encourages
                  them to explore further.
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
              Our <span className="text-[#b8a9fe]">Website Development</span>{" "}
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
                    Strategic Planning
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We begin by understanding your business goals, target
                    audience, and competitive landscape to create a strategic
                    plan for your website.
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
                    Purposeful Design
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    Our designers create visually appealing layouts that align
                    with your brand identity while ensuring optimal user
                    experience and conversion optimization.
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
                    Modern Development
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We develop your website using the latest technologies and
                    frameworks to ensure fast loading times, security, and
                    scalability.
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
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Launch & Support
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    After thorough testing, we launch your website and provide
                    ongoing maintenance and support to ensure continued success.
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
              Our Services
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
                  <Layout className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Custom Website Development
                </h3>
                <p className="text-gray-300">
                  Tailored websites built from scratch to meet your specific
                  business requirements and brand identity.
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
                  <ShoppingBag className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  E-Commerce Development
                </h3>
                <p className="text-gray-300">
                  Robust online stores with secure payment gateways, inventory
                  management, and seamless checkout experiences.
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
                  <RefreshCw className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Website Redesign
                </h3>
                <p className="text-gray-300">
                  Transform your existing website into a modern, responsive
                  platform that delivers results.
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
                src="/images/webdev2.jpg"
                alt="Our Website Development Services"
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
                  We combine technical expertise with creative design to deliver
                  websites that not only look stunning but drive real business
                  results.
                </p>
                <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/webdev3.jpg"
                    alt="Our Expert Team"
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
                      Expert Solutions
                    </h3>
                    <p className="text-gray-300">
                      Our team of experienced developers and designers deliver
                      tailored solutions that align with your business goals.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      User Experience Focus
                    </h3>
                    <p className="text-gray-300">
                      We prioritize creating intuitive, engaging user
                      experiences that convert visitors into customers.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Ongoing Support
                    </h3>
                    <p className="text-gray-300">
                      Our relationship doesn&apos;t end at launch. We provide
                      continuous support to ensure your website remains
                      effective.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Results-Driven Approach
                    </h3>
                    <p className="text-gray-300">
                      We focus on creating websites that not only look great but
                      also drive measurable business results.
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
              Let&apos;s Get Started
            </motion.h2>
            <motion.p
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-xl max-w-3xl mx-auto mb-8"
            >
              Your website is your digital identity—make it count. Contact
              Orionsols today and let&apos;s build a site that drives results
              and reflects your brand perfectly.
            </motion.p>
          </div>
        </section>


      </div>
    </div>
    </div>
  )
}

export default Web_development
