"use client";
import Image from "next/image";
import {
  Search,
  Target,
  BarChart4,
  Globe,
  Settings,
  FileText,
} from "lucide-react";
import Navbar2 from "../../components/Navbar2";
import { motion } from "framer-motion";

function Seo() {
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
                  Top-Tier{" "}
                  <span className="text-[#b8a9fe]">
                    Search Engine Optimization
                  </span>{" "}
                  in Dubai
                </h1>
                <p className="text-lg md:text-xl mb-8">
                  Boost your online visibility and drive high-quality traffic
                  with SEO strategies designed for sustainable growth and
                  measurable results.
                </p>
              </motion.div>
             <div className="relative h-full md:w-1/2 rounded-lg overflow-hidden shadow-2xl bg-gray-800">
                {/* Loading placeholder */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse"></div>

                <Image
                  src="/images/seo.jpg"
                  alt="Professional Website Development"
                  layout="responsive"
        width={700}
        height={475}
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
          >
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                In today&apos;s web-based world, being found on the internet isn&apos;t an
                advantage—it&apos;s a requirement. Whether you&apos;re a small business, a
                startup, or a well-established business, your visibility on
                search engines has a direct correlation to your bottom dollar.
                That&apos;s where we at Orionsols step in.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                As a performance-driven SEO agency in Dubai, it is our aim to
                assist companies in ranking better, driving quality traffic, and
                converting website visitors into paying customers. Our team of
                expert SEO professionals applies a mix of technical expertise,
                content strategy, and data analysis to craft SEO campaigns with
                tangible results.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                If you are searching for a transparent, innovative, and
                growth-driven SEO company in Dubai that delivers measurable
                results, you are at the right place.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Why SEO Matters */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-3xl font-bold text-center mb-16 text-gray-300"
            >
              Why <span className="text-[#b8a9fe]">SEO</span> Matters
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
                    <Search className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b8a9fe]">
                    Search Engines Drive Traffic
                  </h3>
                </div>
                <p className="text-gray-300">
                  Millions rely on Google to find products and services. Unless
                  your website is on the first page of search results, you&apos;re
                  missing out on significant potential business.
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
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b8a9fe]">
                    Builds Authority and Trust
                  </h3>
                </div>
                <p className="text-gray-300">
                  When your business ranks high in search results, it signals
                  credibility and reliability. SEO not only generates traffic
                  but boosts your company&apos;s reputation.
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
                    <BarChart4 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b8a9fe]">
                    Cost-Effective Marketing
                  </h3>
                </div>
                <p className="text-gray-300">
                  Unlike paid ads that stop working when you stop paying, SEO is
                  an investment that provides long-term, sustainable growth with
                  minimal recurring costs.
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
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#b8a9fe]">
                    Better User Experience
                  </h3>
                </div>
                <p className="text-gray-300">
                  SEO optimizes your site to be faster, more mobile-friendly,
                  and easier to use, which not only improves rankings but also
                  increases conversion rates.
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
              viewport={{ once: false, amount: 0.5 }} className="text-3xl font-bold text-center mb-16 text-gray-300">
              Our <span className="text-[#b8a9fe]">SEO</span> Process
            </motion.h2>

            <div className="max-w-5xl mx-auto">
              <motion.div
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.5 }} className="flex flex-col md:flex-row mb-12">
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    SEO Audit & Site Analysis
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We begin with a complete review of your site to assess
                    technical health, on-page SEO, backlinks, keyword rankings,
                    and user experience. This fact-based analysis guides our
                    strategy development.
                  </p>
                </div>
              </motion.div>

              <motion.div
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }} className="flex flex-col md:flex-row mb-12">
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Competitor & Keyword Research
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We study your competitors and industry to identify valuable
                    keywords that drive traffic and conversions. Our research
                    ensures your content addresses your audience&apos;s needs
                    effectively.
                  </p>
                </div>
              </motion.div>

              <motion.div
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }} className="flex flex-col md:flex-row mb-12">
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    On-Page & Technical SEO
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We optimize every aspect of your site, from meta tags and
                    headers to site speed and mobile usability. These
                    enhancements improve both search engine crawling and user
                    experience.
                  </p>
                </div>
              </motion.div>

              <motion.div
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }} className="flex flex-col md:flex-row mb-12">
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Content Creation & Strategy
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We develop compelling, SEO-friendly content that addresses
                    your audience&apos;s needs while targeting strategic keywords.
                    Quality content builds credibility and improves rankings.
                  </p>
                </div>
              </motion.div>

              <motion.div
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }} className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <div className="bg-[#b8a9fe] rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <span className="text-white text-2xl font-bold">5</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">
                    Link Building & Off-Page SEO
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-300">
                    We help you earn quality backlinks through ethical outreach,
                    collaborations, guest blogging, and PR tactics, building
                    your site&apos;s authority and improving long-term rankings.
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
              transition={{ duration: 0.8 }} className="text-3xl font-bold text-center mb-16 text-[#b8a9fe]">
              Services We Provide in SEO
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }} className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Search className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Local SEO
                </h3>
                <p className="text-gray-300">
                  Optimize your Google Business Profile, citations, maps, and
                  local landing pages to rank in local searches for
                  service-based businesses and retailers.
                </p>
              </motion.div>

              <motion.div
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }} className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Settings className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Technical SEO
                </h3>
                <p className="text-gray-300">
                  Improve site performance, fix crawl issues, optimize Core Web
                  Vitals, and enhance mobile friendliness to build a strong
                  foundation for your SEO efforts.
                </p>
              </motion.div>

              <motion.div
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }} className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <BarChart4 className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  E-Commerce SEO
                </h3>
                <p className="text-gray-300">
                  Fine-tune product pages, categories, and filtering systems to
                  ensure your products are found by online shoppers using
                  Shopify, WooCommerce, or Magento.
                </p>
              </motion.div>

              <motion.div
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }} className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  Content Optimization
                </h3>
                <p className="text-gray-300">
                  Create blog posts, landing pages, and SEO-friendly content
                  that generates traffic while maintaining your brand voice with
                  strategic keyword targeting.
                </p>
              </motion.div>

              <motion.div
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }} className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  SEO Audits & Recovery
                </h3>
                <p className="text-gray-300">
                  Get back on track with in-depth SEO audits and penalty
                  recovery work if you&apos;re slipping in rankings or affected by
                  Google algorithm changes.
                </p>
              </motion.div>

              <motion.div
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }} className="border border-[#b8a9fe] rounded-lg p-6 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-[#b8a9fe]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-300">
                  International SEO
                </h3>
                <p className="text-gray-300">
                  Target global markets with strategies for ranking in multiple
                  languages and regions, from hreflang implementation to
                  localized keyword optimization.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 1, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }} className="mt-16 relative h-80 md:h-96 w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/seo2.jpg"
                alt="Our SEO Services"
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
              transition={{ duration: 0.8 }} className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-6 text-[#b8a9fe]">
                  Why Choose Orionsols for Your SEO Needs
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  As a Dubai-based SEO agency, we understand the local market
                  dynamics while applying global best practices. Our
                  personalized approach ensures your business stands out in
                  search results and drives meaningful growth.
                </p>
                <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/seo3.jpg"
                    alt="Our SEO Experts"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </motion.div>

              <motion.div
              initial={{ opacity: 1, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }} className="md:w-1/2 md:pl-12">
                <div className="grid grid-cols-1 gap-6">
                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Dubai-Based Team
                    </h3>
                    <p className="text-gray-300">
                      We understand the UAE&apos;s online ecosystem and local search
                      trends, making your business accessible to local customers
                      while applying global best practices.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Personalized Strategies
                    </h3>
                    <p className="text-gray-300">
                      We create customized SEO solutions tailored to your
                      specific objectives, budget, and timeline, rejecting
                      one-size-fits-all approaches.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Transparent Reporting
                    </h3>
                    <p className="text-gray-300">
                      Our monthly reports show rankings, traffic, conversions,
                      and campaign progress. We walk you through the data so you
                      always understand what&apos;s working and why.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3 text-[#b8a9fe]">
                      Ethical, White-Hat Practices
                    </h3>
                    <p className="text-gray-300">
                      We use only Google-endorsed SEO methods that stand the
                      test of time, ensuring sustainable growth and protecting
                      your site from algorithm penalties.
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
              transition={{ duration: 0.8 }} className="text-3xl font-bold mb-6 text-[#b8a9fe]">
              Get Started with Engaging SEO Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }} className="text-xl max-w-3xl mx-auto mb-8">
              Ready to expand your online presence, generate high-intent
              traffic, and boost revenue? It&apos;s time to join forces with a
              reputable SEO agency in Dubai that prioritizes your success. At
              Orionsols, we don&apos;t just generate clicks—we generate results.
            </motion.p>
           <motion.p
              initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }} className="text-xl max-w-3xl mx-auto mb-8">
              Our experts provide full SEO services in Dubai—from audits and
              content to link building and reporting, crafted to empower you to
              win at search. Call Orionsols today for a consultation. Let&apos;s
              build an SEO plan that drives the needle today and in the long
              run.
            </motion.p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Seo
