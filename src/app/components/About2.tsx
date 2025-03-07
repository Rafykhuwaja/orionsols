import React from "react";

function About2() {
  return (
    <div className="px-4 md:px-10 lg:px-20 bg-gray-900">
      <div className="flex flex-col-reverse gap-4 md:flex-row py-10 md:py-36">
        <div className="w-full md:w-1/2 rounded-lg fadeInLeft mb-10 md:mb-0">
          <div className="bg-[#ff9c00] w-full rounded-lg">
            <img
              src="/images/Image3.jpg"
              alt=""
              className="w-full h-auto rounded-lg relative bottom-8 right-8"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 relative fadeInRight md:ml-7">
          <p className="text-white font-semibold mb-5">Satisfied</p>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-5 text-[#ff9c00]">
            For Agencies Who Love <br /> Their Clients
          </h1>
          <p className="text-white mb-10">
            Are you an agency striving to elevate your services and add real
            value to your clients? Partner with Orionsols to unlock exceptional
            marketing solutions that drive results. From in-depth, collaborative
            planning to flawless, seamless execution, we’re here to ensure your
            agency stands out in a competitive landscape. Together, we’ll create
            remarkable experiences that not only enhance your agency’s
            reputation but also guarantee unparalleled client satisfaction and
            long-term growth.
          </p>
         
        </div>
      </div>
    </div>
  );
}

export default About2;
