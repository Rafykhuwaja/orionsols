import React from "react";
import { InfiniteMovingCardsDemo } from "./clientReviewCards";
import WhatsAppPopup from "./whatsappPOpUp";

function AboutusContent() {
  return (
    <div className="md:mt-[750px] bg-gray-950 w-full pt-[50px]">
      <div className="md:px-40 text-start px-10">
        <h1 className="text-3xl md:text-7xl text-white md:my-10 my-5 font-bold">
          Our <span className="text-[#ff9c00]">Philosophy</span>
        </h1>
        <p className="text-gray-300 md:text-xl">
          At Orionsols, our mission is to assist entrepreneurs and business
          owners in creating successful online stores with minimal hassle
          through our e-commerce outsourcing services. We understand the
          challenges of running an e-commerce business, especially when juggling
          multiple tasks. By utilizing the right tools and systems, we
          streamline your processes, reduce costs, and enhance the customer
          experience. Thats why Orionsols offers comprehensive done-for-you
          e-commerce automation services. Our dedicated team of experts ensures
          a smooth launch and scaling of your online store, handling all the
          technical details so you can focus on growing your business and
          serving your customers.
        </p>
      </div>
      <h1 className="text-3xl md:text-7xl text-white md:my-10 my-5 font-bold md:px-40 text-start px-10">
          Our Satisfied <span className="text-[#ff9c00]">Client</span>
        </h1>
      <div className="py-7">
        <InfiniteMovingCardsDemo />
      </div>
      <div>
        <section className=" body-font">
          <h1 className="text-3xl ml-10 md:text-7xl text-white my-10 md:ml-52 font-bold">
          Our <span className="text-[#ff9c00]">Heritage</span>
        </h1>
          <div className="container px-4 py-24 mx-auto text-gray-400">
            <div className="flex flex-wrap justify-between -m-4 gap-3">
              <div className="lg:w-[31%] lg:mb-0 mb-6 mx-3 md:mx-0 p-4 border-2 border-[#ff9c00] rounded-md">
                <div className="h-full text-center">
                  <h1 className="text-3xl text-[#ff9c00] font-bold mb-6">B2B Marketplace</h1>
                  <p className="leading-relaxed">
                    Started off as one of the many B2B Marketplaces enabling
                    companies to connect with other organizations and conduct
                    business in one place, buying and selling products.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-[#ff9c00] mt-6 mb-4" />

                  <p className="text-gray-500">2005 - 2016</p>
                </div>
              </div>
              <div className="lg:w-[31%] lg:mb-0 mb-6 mx-3 md:mx-0 p-4 border-2 border-[#ff9c00] rounded-md">
                <div className="h-full text-center">
                  <h1 className="text-3xl text-[#ff9c00] font-bold mb-6">Digital Agency
                  </h1>
                  <p className="leading-relaxed">
                  Adding another feather in the cap, moved on to serve as a digital agency to outsource your digital marketing efforts, with various digital solutions.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-[#ff9c00] mt-6 mb-4" />

                  <p className="text-gray-500">2017 - 2019</p>
                </div>
              </div>
              <div className="lg:w-[31%] lg:mb-0 mb-6 mx-3 md:mx-0 p-4 border-2 border-[#ff9c00] rounded-md">
                <div className="h-full text-center">
                  <h1 className="text-3xl text-[#ff9c00] font-bold mb-6">Ecom Automation</h1>
                  <p className="leading-relaxed">
                    Reaching the heights, became the e-com automation provider,
                    where we help entrepreneurs and business owners achieve
                    success in the competitive world of e-commerce with our
                    Done-For-You services.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-[#ff9c00] mt-6 mb-4" />

                  <p className="text-gray-500">2020 - Onwards</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <WhatsAppPopup/>
    </div>
  );
}

export default AboutusContent;
