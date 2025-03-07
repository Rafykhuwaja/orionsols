import React from "react";

function ServiceAboutSection() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-semibold text-center text-purple-600 mb-20">
            About Orionsols
          </h1>
          <div className="flex  sm:-m-4 -mx-4 gap-10 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex border-2 border-gray-600 rounded-3xl animated-object">
              <div className="flex-grow pl-6">
                <div className="flex justify-center">
                  <div className="bg-purple-600 gc p-3 rounded-full mb-6 mt-2">
                    <img
                      width="50"
                      height="50"
                      src="https://img.icons8.com/ios/50/FFFFFF/company--v1.png"
                      alt="company--v1"
                    />
                  </div>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
                  Who We Are
                </h2>
                <p className="leading-relaxed text-base">
                  Orionsols is a results-driven digital marketing agency focused
                  on helping businesses thrive in the competitive online
                  marketplace. With years of hands-on experience across SEO,
                  social media marketing, and content strategy, we are committed
                  to delivering innovative solutions that are uniquely tailored
                  to your business goals and vision.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex border-2 border-gray-600 rounded-3xl animated-object">
              <div className="flex-grow pl-6">
              <div className="flex justify-center">
                  <div className="bg-purple-600 gc p-3 rounded-full mb-6 mt-2">
                    <img
                      width="50"
                      height="50"
                      src="https://img.icons8.com/dotty/80/FFFFFF/mission-of-a-company.png"
                      alt="company--v1"
                    />
                  </div>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Our Mission
                </h2>
                <p className="leading-relaxed text-base">
                  Our mission is to simplify the complex world of digital
                  marketing by delivering measurable growth and creating
                  impactful strategies. We believe in building long-term
                  partnerships with our clients to ensure sustained success and
                  growth.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex border-2 border-gray-600 rounded-3xl animated-object">
              <div className="flex-grow pl-6">
              <div className="flex justify-center">
                  <div className="bg-purple-600 gc p-3 rounded-full mb-6 mt-2">
                    <img
                      width="50"
                      height="50"
                      src="https://img.icons8.com/glyph-neue/64/FFFFFF/define-location.png"
                      alt="company--v1"
                    />
                  </div>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Our Vision
                </h2>
                <p className="leading-relaxed text-base">
                  We strive to be the most trusted digital marketing partner,
                  recognized for delivering excellence and helping businesses
                  build strong brands that truly connect with their audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceAboutSection;
