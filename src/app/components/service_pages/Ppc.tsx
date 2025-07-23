"use client";
import Image from "next/image";
import {
  Target,
  BarChart4,
  CreditCard,
  Users,
  Search,
  LineChart,
  Youtube,
} from "lucide-react";
import Navbar2 from "../../components/Navbar2";

function Ppc() {
  return (
    <div>
      <Navbar2 />
      <div className="md:px-[12vw] px-4 w-[100vw] mt-10">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden text-gray-300">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div
                className="md:w-1/2 mb-8 md:mb-0 md:pr-12"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Professional{" "}
                  <span className="text-[#b8a9fe]">PPC Services</span> in Dubai
                </h1>
                <p className="text-lg md:text-xl mb-8">
                  Drive instant, measurable results with targeted pay-per-click
                  campaigns designed to reach the right audience at the right
                  time.
                </p>
              </div>
              <div
                className="md:w-1/2 w-full"
              >
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl bg-gray-800">
                  {/* Loading placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse"></div>

                  <Image
                    src="/images/ppc1.jpg"
                    alt="Pay per click"
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
          <div
            className="container mx-auto px-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              In a tech-driven, fast-paced city like Dubai, appearing in search
              results isn&apos;t just important—it&apos;s essential. That&apos;s
              where Pay-Per-Click (PPC) marketing steps in. At Orionsols,
              we&apos;re proud to be recognized as one of the leading PPC
              agencies in Dubai. Our mission is simple: to help businesses like
              yours reach the right audience at the right time. Whether
              you&apos;re launching a new product, promoting a service, or
              increasing your website traffic, our PPC marketing strategies
              deliver instant, measurable results. We don&apos;t just build
              campaigns for clicks—we build them for real growth, conversions,
              and ROI. With deep expertise in PPC advertising in Dubai, we
              understand the UAE market intricately and know exactly how to make
              your campaigns succeed.
            </p>
          </div>
        </section>

        {/* Why PPC Matters */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2
              className="text-3xl font-bold text-center mb-16 text-gray-300"
            >
              Why <span className="text-[#b8a9fe]">PPC</span> Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div
                className="p-8 rounded-lg border border-[#b8a9fe]"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#b8a9fe] p-3 rounded-full mr-4">
                    <Search className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b8a9fe]">
                    Instant Visibility
                  </h3>
                </div>
                <p className="text-gray-300">
                  Unlike SEO, which builds momentum over time, PPC delivers
                  immediate exposure across Google, Bing, and social platforms.
                  A well-executed campaign can position your business at the top
                  of search results within hours.
                </p>
              </div>
              <div
                className="p-8 rounded-lg border border-[#b8a9fe]"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#b8a9fe] p-3 rounded-full mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b8a9fe]">
                    Precision Targeting
                  </h3>
                </div>
                <p className="text-gray-300">
                  PPC allows hyper-specific targeting based on location, device,
                  demographics, time of day, and user behavior. Want to attract
                  professionals in Downtown Dubai or tourists near Marina Mall?
                  No problem.
                </p>
              </div>
              <div
                className="p-8 rounded-lg border border-[#b8a9fe]"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#b8a9fe] p-3 rounded-full mr-4">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b8a9fe]">
                    Full Budget Control
                  </h3>
                </div>
                <p className="text-gray-300">
                  Worried about overspending? With PPC, you control your ad
                  spend. Set daily or monthly limits, and only pay when someone
                  clicks your ad. We manage your campaigns to ensure your budget
                  is optimized for maximum return.
                </p>
              </div>
              <div
                className="p-8 rounded-lg border border-[#b8a9fe]"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#b8a9fe] p-3 rounded-full mr-4">
                    <BarChart4 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b8a9fe]">
                    Transparent Data & ROI
                  </h3>
                </div>
                <p className="text-gray-300">
                  PPC offers full transparency. Track everything—impressions,
                  clicks, conversions, and more. We deliver detailed, actionable
                  insights and continually optimize your campaigns to increase
                  your ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2
              className="text-3xl font-bold text-center mb-16 text-gray-300"
            >
              Our Proven <span className="text-[#b8a9fe]">PPC</span> Process
            </h2>
            <div className="max-w-5xl mx-auto">
              <div
                className="flex flex-col md:flex-row mb-12"
              >
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Initial Consultation & Goal Setting
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We start by understanding your business, goals, and target
                    market. Whether you need more leads, traffic, or sales, we
                    build a campaign aligned with your objectives.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col md:flex-row mb-12"
              >
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Keyword & Market Research
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We conduct in-depth keyword research and competitor analysis
                    to identify high-performing, high-intent search terms that
                    resonate with your audience.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col md:flex-row mb-12"
              >
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Campaign Setup & Strategy
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We build strategic ad groups, select the right bidding
                    models, and configure your accounts across platforms like
                    Google Ads, Facebook, and YouTube for maximum performance.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col md:flex-row mb-12"
              >
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Ad Copywriting & Design
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    Our creative team writes compelling ad copy and designs
                    engaging visuals to capture attention and drive clicks.
                    Every ad is built to match your brand and convert
                    effectively.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col md:flex-row mb-12"
              >
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">5</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Ongoing Monitoring & Optimization
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We monitor performance daily, making data-driven adjustments
                    to enhance effectiveness. From bid strategy to keyword
                    refinements, we fine-tune your campaign continuously.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col md:flex-row"
              >
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">6</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Transparent Reporting & Adjustments
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We provide detailed reports and strategic recommendations
                    based on campaign performance. You&apos;ll always know where
                    your budget is going and how it&apos;s performing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2
              className="text-3xl font-bold text-center mb-16 text-[#b8a9fe]"
            >
              Our PPC Services in Dubai
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div
                className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Search className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Google Search Ads
                </h3>
                <p className="text-gray-300">
                  Show up at the top of Google when users are actively
                  searching. Ideal for service providers and lead generation.
                </p>
              </div>
              <div
                className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Google Display Ads
                </h3>
                <p className="text-gray-300">
                  Target users across millions of websites and apps. Great for
                  brand awareness, retargeting, and nurturing leads.
                </p>
              </div>
              <div
                className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <CreditCard className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Google Shopping Ads
                </h3>
                <p className="text-gray-300">
                  Perfect for eCommerce businesses. Showcase products directly
                  in search results with images, pricing, and reviews.
                </p>
              </div>
              <div
                className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Youtube className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  YouTube Video Ads
                </h3>
                <p className="text-gray-300">
                  Tell your story through engaging video content. Ideal for
                  brand building and audience engagement.
                </p>
              </div>
              <div
                className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Social Media Ads
                </h3>
                <p className="text-gray-300">
                  Reach your audience with highly targeted visual ads on
                  Facebook, Instagram, and LinkedIn. Perfect for engagement and
                  conversions.
                </p>
              </div>
              <div
                className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <LineChart className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Retargeting Campaigns
                </h3>
                <p className="text-gray-300">
                  Bring back users who previously visited your website with
                  smart remarketing strategies across platforms.
                </p>
              </div>
            </div>
            <div
              className="mt-16 relative h-80 md:h-96 w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/images/ppc2.jpg"
                alt="Our PPC Services"
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
              <div
                className="md:w-1/2 mb-8 md:mb-0"
              >
                <h2 className="text-3xl font-bold mb-6 text-[#b8a9fe]">
                  Why Choose Orionsols as Your PPC Partner
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  We don&apos;t just do PPC—we specialize in it. Our team lives
                  and breathes performance marketing, with proven success across
                  industries in the UAE market. From boutique brands to large
                  enterprises, we deliver tailored PPC solutions that fit your
                  business goals—no templates, no shortcuts.
                </p>
                <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/ppc3.jpg"
                    alt="Our PPC Experts"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div
                className="md:w-1/2 md:pl-12"
              >
                <div className="grid grid-cols-1 gap-6">
                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      A Top-Tier PPC Agency in Dubai
                    </h3>
                    <p className="text-gray-300">
                      We don&apos;t just do PPC—we specialize in it. Our team
                      lives and breathes performance marketing, with proven
                      success across industries in the UAE market.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Results That Matter
                    </h3>
                    <p className="text-gray-300">
                      Our focus is clear: leads, sales, and measurable growth.
                      Every move we make is strategic and backed by data to
                      bring you closer to your goals.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Transparent Communication
                    </h3>
                    <p className="text-gray-300">
                      No hidden numbers or jargon. We offer honest, clear
                      reporting and regular updates, so you&apos;re always
                      informed and in control.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Custom Strategies
                    </h3>
                    <p className="text-gray-300">
                      From boutique brands to large enterprises, we deliver
                      tailored PPC solutions that fit your business goals—no
                      templates, no shortcuts.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Certified Experts
                    </h3>
                    <p className="text-gray-300">
                      Our team includes Google Ads-certified professionals and
                      Meta Ads experts who stay ahead of the curve with platform
                      updates and trends.
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
            <h2
              className="text-3xl font-bold mb-6 text-[#b8a9fe]"
            >
              Let&apos;s Launch Your PPC Campaign Today
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto mb-8"
            >
              Your customers are already online—make sure they find you first.
              At Orionsols, we&apos;re ready to help you dominate search,
              generate leads, and increase conversions with powerful PPC
              strategies. Let&apos;s start with a free consultation and explore
              how pay-per-click marketing in Dubai can drive real, trackable
              results for your business.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Ppc;