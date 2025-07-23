"use client";
import React from "react";
import Image from "next/image";
import {
  Pencil,
  Book,
  BarChart4,
  Users,
  MessageCircle,
  Mail,
} from "lucide-react";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
// import { motion } from "framer-motion"; // Removed framer-motion import

function Content_writing() {
  return (
    <div>
      <Navbar2 />
      <div className="md:px-[12vw] px-4 w-[100vw] mt-10">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden text-gray-300">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              {/* Removed motion.div */}
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Creative & Engaging{" "}
                  <span className="text-[#b8a9fe]">Content Creation</span>{" "}
                  Services
                </h1>
                <p className="text-lg md:text-xl mb-8">
                  Elevate your brand with compelling content that connects with
                  your audience, drives traffic, and converts visitors into
                  loyal customers.
                </p>
              </div>
              {/* Removed motion.div */}
              <div className="md:w-1/2 w-full">
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl bg-gray-800">
                  {/* Loading placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse"></div>

                  <Image
                    src="/images/creativecontent.jpg"
                    alt="Content Writing"
                    width={700}
                    height={500}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 relative z-10"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          {/* Removed motion.div */}
          <div>
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                In today&apos;s fast-paced digital age, content is king. Whether
                you&apos;re a startup, small business, or a large corporation,
                high-quality and engaging content is essential to building your
                brand identity, driving web traffic, and converting visitors
                into loyal customers. At Orionsols, we understand the power of
                storytelling and impactful content that connects with your
                target audience. Our creative content creation services are
                designed to help you engage, convert, and grow like never
                before.
              </p>
            </div>
          </div>
        </section>

        {/* Why Content Creation Matters */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            {/* Removed motion.h2 */}
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-300">
              Why <span className="text-[#b8a9fe]">Content Creation</span>{" "}
              Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Removed motion.div */}
              <div className="p-8 rounded-lg border border-[#b8a9fe]">
                <div className="flex items-center mb-4">
                  <div className="bg-[#b8a9fe] p-3 rounded-full mr-4">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b8a9fe]">
                    Crafting Stories That Connect
                  </h3>
                </div>
                <p className="text-gray-300">
                  Content writing isn&apos;t just about words—it&apos;s about
                  building narratives that resonate with your audience and solve
                  their problems. This establishes trust and credibility for
                  your brand.
                </p>
              </div>
              {/* Removed motion.div */}
              <div className="p-8 rounded-lg border border-[#b8a9fe]">
                <div className="flex items-center mb-4">
                  <div className="bg-[#b8a9fe] p-3 rounded-full mr-4">
                    <BarChart4 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b8a9fe]">
                    Boosting SEO & Conversions
                  </h3>
                </div>
                <p className="text-gray-300">
                  Strategic content not only improves your search engine
                  visibility, but also builds brand recognition and drives
                  measurable conversions.
                </p>
              </div>
              {/* Removed motion.div */}
              <div className="p-8 rounded-lg border border-[#b8a9fe]">
                <div className="flex items-center mb-4">
                  <div className="bg-[#b8a9fe] p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b8a9fe]">
                    Building Relationships
                  </h3>
                </div>
                <p className="text-gray-300">
                  Effective content provides value, nurtures long-term
                  relationships, and encourages your audience to take meaningful
                  action aligned with your business goals.
                </p>
              </div>
              {/* Removed motion.div */}
              <div className="p-8 rounded-lg border border-[#b8a9fe]">
                <div className="flex items-center mb-4">
                  <div className="bg-[#b8a9fe] p-3 rounded-full mr-4">
                    <Book className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b8a9fe]">
                    Speaking to Audience Needs
                  </h3>
                </div>
                <p className="text-gray-300">
                  Whether it&apos;s blog posts, product descriptions, or social
                  media content—everything we create is tailored to meet the
                  specific needs, desires, and pain points of your target
                  audience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            {/* Removed motion.h2 */}
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-300">
              Our <span className="text-[#b8a9fe]">Content Creation</span>{" "}
              Process
            </h2>

            <div className="max-w-5xl mx-auto">
              {/* Removed motion.div */}
              <div className="flex flex-col md:flex-row mb-12">
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Discovery & Strategy
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We start by learning about your brand, goals, and audience
                    to create a custom content strategy that aligns with your
                    objectives.
                  </p>
                </div>
              </div>

              {/* Removed motion.div */}
              <div className="flex flex-col md:flex-row mb-12">
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    In-Depth Research
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We conduct comprehensive research on industry trends,
                    competitors, and SEO keywords to ensure every piece of
                    content is relevant, insightful, and performance-optimized.
                  </p>
                </div>
              </div>

              {/* Removed motion.div */}
              <div className="flex flex-col md:flex-row mb-12">
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Content Creation
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    Our skilled writers develop compelling content that reflects
                    your brand voice, engages readers, and is fully optimized
                    for SEO and readability.
                  </p>
                </div>
              </div>

              {/* Removed motion.div */}
              <div className="flex flex-col md:flex-row mb-12">
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Review & Refinement
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We incorporate your feedback to fine-tune the content,
                    ensuring accuracy, quality, and consistency across all
                    messaging.
                  </p>
                </div>
              </div>

              {/* Removed motion.div */}
              <div className="flex flex-col md:flex-row mb-12">
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">5</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Publishing & Promotion
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    Once approved, your content is published using best SEO
                    practices and promoted through targeted campaigns for
                    maximum reach and visibility.
                  </p>
                </div>
              </div>

              {/* Removed motion.div */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">6</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Ongoing Optimization
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We continuously monitor performance metrics and update your
                    content to ensure it remains fresh, relevant, and engaging
                    over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            {/* Removed motion.h2 */}
            <h2 className="text-3xl font-bold text-center mb-16 text-[#b8a9fe]">
              Our Content Creation Services
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Removed motion.div */}
              <div className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Pencil className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Blog Posts & Articles
                </h3>
                <p className="text-gray-300">
                  Position your brand as a thought leader with SEO-friendly,
                  value-driven blogs and articles that educate and engage.
                </p>
              </div>

              {/* Removed motion.div */}
              <div className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Book className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Website Copywriting
                </h3>
                <p className="text-gray-300">
                  From home pages to landing pages, we write persuasive website
                  content that turns visitors into paying customers.
                </p>
              </div>

              {/* Removed motion.div */}
              <div className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <MessageCircle className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Social Media Content
                </h3>
                <p className="text-gray-300">
                  We create engaging, on-brand posts tailored for platforms like
                  Facebook, Instagram, Twitter, and LinkedIn—ensuring your brand
                  stays top-of-mind.
                </p>
              </div>

              {/* Removed motion.div */}
              <div className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <BarChart4 className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  White Papers & Case Studies
                </h3>
                <p className="text-gray-300">
                  Demonstrate authority with detailed, professional content
                  designed for industries like tech, healthcare, and finance.
                </p>
              </div>

              {/* Removed motion.div */}
              <div className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Mail className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Email Campaigns
                </h3>
                <p className="text-gray-300">
                  Convert leads with well-written newsletters, offers, and
                  automated sequences that engage and inform your audience.
                </p>
              </div>

              {/* Removed motion.div */}
              <div className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Press Releases
                </h3>
                <p className="text-gray-300">
                  Share your milestones and announcements through professionally
                  crafted press releases that attract media and influencers.
                </p>
              </div>
            </div>

            {/* Removed motion.div */}
            <div className="mt-16 relative h-80 md:h-96 w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/creativecontent2.jpg"
                alt="Our Content Creation Services"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center mb-16">
              {/* Removed motion.div */}
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-6 text-[#b8a9fe]">
                  Why Choose Orionsols
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  We don&apos;t do one-size-fits-all. Every project is backed by
                  a customized approach designed to achieve your business goals.
                  Our team of expert writers covers a wide range of
                  industries—ensuring we speak your audience&apos;s language and
                  deliver content that performs.
                </p>
                <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/creativecontent3.jpg"
                    alt="Our Expert Team"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>

              {/* Removed motion.div */}
              <div className="md:w-1/2 md:pl-12">
                <div className="grid grid-cols-1 gap-6">
                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Expert Writers
                    </h3>
                    <p className="text-gray-300">
                      Our experienced writers cover a wide range of
                      industries—ensuring we speak your audience&apos;s language
                      and deliver content that performs.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Tailored Strategy
                    </h3>
                    <p className="text-gray-300">
                      We don&apos;t do one-size-fits-all. Every project is
                      backed by a customized approach designed to achieve your
                      business goals.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      SEO-Focused
                    </h3>
                    <p className="text-gray-300">
                      We embed SEO best practices into every piece, helping your
                      content rank and drive organic traffic effectively.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Results-Driven
                    </h3>
                    <p className="text-gray-300">
                      Whether it&apos;s increased website traffic, leads, or
                      conversions—our focus is always on delivering measurable
                      results.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      On-Time Delivery
                    </h3>
                    <p className="text-gray-300">
                      We respect deadlines and always deliver high-quality
                      content on time, every time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 text-white">
          <div className="container mx-auto px-6 text-center">
            {/* Removed motion.h2 */}
            <h2 className="text-3xl font-bold mb-6 text-[#b8a9fe]">
              Ready to Elevate Your Content?
            </h2>
            {/* Removed motion.p */}
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Let Orionsols help you create content that speaks, sells, and
              succeeds. Whether you need blog posts, website copy, social media
              content, or something in between—we&apos;re here to bring your
              ideas to life.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Content_writing;