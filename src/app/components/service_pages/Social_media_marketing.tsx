"use client";
import React from "react";
import Image from "next/image";
import { Share2, Target, BarChart4, Users } from "lucide-react";
import Navbar2 from "../../components/Navbar2";

function Social_media_marketing() {
  return (
    <div>
      <Navbar2 />
      <div className="md:px-[12vw] px-4 w-[100vw] mt-10">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden text-gray-300">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Top-Tier{" "}
                  <span className="text-[#b8a9fe]">Social Media Marketing</span>{" "}
                  Services
                </h1>
                <p className="text-lg md:text-xl mb-8">
                  Elevate your brand with strategic social media marketing that
                  builds meaningful connections and drives measurable results.
                </p>
              </div>
              <div className="md:w-1/2 w-full">
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl bg-gray-800">
                  {/* Loading placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse"></div>

                  <Image
                    src="/images/socialmedia1.jpg"
                    alt="Social Media Marketing Services"
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
          <div className="container mx-auto px-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              In today&apos;s digital era, social media is at the heart of
              modern marketing. Whether you&apos;re a small startup or a large
              enterprise, platforms like Instagram, Facebook, and LinkedIn are
              where your audience lives—and where your brand needs to be. At
              Orionsols, we know how to make social media work for your
              business. Our team doesn&apos;t just post content—we build real
              connections between your brand and your audience. With smart
              strategies, engaging content, and targeted campaigns, we help you
              grow your community, increase visibility, and generate real
              results.
            </p>
          </div>
        </section>

        {/* Why Social Media Marketing Matters */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-300">
              Why <span className="text-[#b8a9fe]">Social Media Marketing</span>{" "}
              Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="p-8 rounded-lg border border-[#b8a9fe]">
                <div className="flex items-center mb-4">
                  <div className="bg-[#b8a9fe] p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b8a9fe]">
                    Global Reach
                  </h3>
                </div>
                <p className="text-gray-300">
                  Social media allows you to reach billions of people, engage
                  directly with customers, and build trust through active
                  conversations.
                </p>
              </div>
              <div className="p-8 rounded-lg border border-[#b8a9fe]">
                <div className="flex items-center mb-4">
                  <div className="bg-[#b8a9fe] p-3 rounded-full mr-4">
                    <BarChart4 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b8a9fe]">
                    Data-Driven Results
                  </h3>
                </div>
                <p className="text-gray-300">
                  It offers real-time analytics to improve performance,
                  cost-effective advertising options, and a boost in online
                  visibility that even supports your SEO efforts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-300">
              Our <span className="text-[#b8a9fe]">Social Media Marketing</span>{" "}
              Process
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row mb-12">
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Strategy Development
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We begin by understanding your brand, audience, and goals.
                    Our team conducts an in-depth audit and competitive analysis
                    to identify the best opportunities.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row mb-12">
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Content Creation
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    Our content team designs visuals, videos, and copy that
                    reflect your brand&apos;s voice and connect with your
                    followers. We craft high-quality content that engages and
                    converts.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row mb-12">
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Campaign Management
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We manage your accounts daily, run targeted ad campaigns,
                    and continuously engage with your audience to build and
                    nurture relationships.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Analysis & Optimization
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We track results, analyze performance data, and continuously
                    refine our approach to improve engagement, reach, and
                    conversions for your brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-[#b8a9fe]">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Strategy & Management
                </h3>
                <p className="text-gray-300">
                  Complete social media strategy development, content planning,
                  scheduling, and day-to-day account management.
                </p>
              </div>
              <div className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Share2 className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Paid Campaigns
                </h3>
                <p className="text-gray-300">
                  Targeted social media advertising campaigns designed to
                  increase reach, engagement, and conversions with optimal ROI.
                </p>
              </div>
              <div className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <BarChart4 className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Analytics & Reporting
                </h3>
                <p className="text-gray-300">
                  Comprehensive performance tracking and detailed reports that
                  show the real impact of your social media marketing efforts.
                </p>
              </div>
            </div>
            <div className="mt-16 relative h-80 md:h-96 w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/socialmedia2.jpg"
                alt="Our Social Media Marketing Services"
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
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-6 text-[#b8a9fe]">
                  Why Choose Orionsols
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  We don&apos;t believe in one-size-fits-all. Every strategy we
                  build is personalized, focused on your brand&apos;s unique
                  goals and market. Our team combines creativity with
                  data-driven insights to deliver content that performs.
                </p>
                <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/socialmedia3.jpg"
                    alt="Our Expert Team"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="grid grid-cols-1 gap-6">
                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Personalized Approach
                    </h3>
                    <p className="text-gray-300">
                      Every strategy we create is tailored to your specific
                      business needs, objectives, and target audience.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Creative Excellence
                    </h3>
                    <p className="text-gray-300">
                      Our content team creates compelling visuals and messaging
                      that capture attention and drive engagement.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Data-Driven Strategy
                    </h3>
                    <p className="text-gray-300">
                      We use analytics and insights to continuously refine our
                      approach and maximize your social media ROI.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Results-Focused
                    </h3>
                    <p className="text-gray-300">
                      Our ultimate goal is to generate real business results -
                      more followers, higher engagement, increased traffic, and
                      improved conversions.
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
            <h2 className="text-3xl font-bold mb-6 text-[#b8a9fe]">
              Ready to Get Started?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              If your brand isn&apos;t making an impact on social media,
              you&apos;re missing valuable opportunities. Let Orionsols help you
              stand out, grow your community, and drive meaningful business
              results through powerful, personalized social media marketing.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Social_media_marketing;