"use client";
import React from "react";
import { useState } from "react";
import {motion} from "framer-motion"
import Image from "next/image";
function ContactForm() {

  return (
    <div id="contact" className="flex flex-col md:flex-row md:justify-between lg:py-20">
      <div className="md:w-1/2 text-white p-6">
      <div className="">

    
        <motion.h1
            initial={{ opacity: 0, y: 70 }}          
            whileInView={{ opacity: 1, y: 0 }}      
            transition={{ duration: 0.8 }}           
            viewport={{ once: false, amount: 0.5 }} className="text-white text-6xl font-extrabold mb-5">
          Lets  <br /><span className="text-[#b8a9fe]">Connect</span>
        </motion.h1>
        <p className="mb-4">
        We would love to hear from you! Fill out the form below or contact us directly through the details provided

        </p>
        <div className="flex items-center">
          <img width="35" height="35" src="https://img.icons8.com/windows/32/b8a9fe/phone.png" alt="phone--v1"/>
          <p className="font-bold md:text-2xl ml-5">Phone: (+971) 528 977 529</p>
        </div>

        <div className="flex items-center mt-5">
          <img width="35" height="35" src="https://img.icons8.com/ios/50/b8a9fe/new-post--v1.png" alt="mail"/>
          <p className="font-bold md:text-2xl ml-5">Email: info@Orionsols.com</p>
        </div>

        <div className="flex items-center mt-5">
          <img width="35" height="35" src="https://img.icons8.com/ios/50/b8a9fe/marker--v1.png" alt="marker--v1"/>
          <p className="font-bold md:text-2xl ml-5">Address: Ascott Park Place office 401,Dubai</p>
        </div>
      </div>
      </div>

      <motion.div
          initial={{ opacity: 0, x: 100 }}          
          whileInView={{ opacity: 1, x: 0 }}      
          transition={{ duration: 0.8 }}           
          viewport={{ once: false, amount: 0.5 }} className="p-6 rounded-lg md:w-1/2 flex justify-center">
        <div className="max-w-full p-10 md:ml-8 rounded-xl shadow-2xl md:w-[600px] border-2 border-[#b8a9fe]">
          <h2 className="text-2xl font-semibold text-center mb-4 text-[#b8a9fe]">
            Contact Us
          </h2>
          <form action="https://formsubmit.co/info@orionsols.com" method="POST" >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Your Name
              </label>
              <input
                type="text" 
                name="name"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-[#b8a9fe] text-white bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b8a9fe] focus:border-[#b8a9fe]"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border bg-gray-800 text-white border-[#b8a9fe] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b8a9fe] focus:border-[#b8a9fe]"
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Your Message
              </label>
              <input
                type="text"
                name="message"
                id="message"
                className="mt-1 block w-full px-3 py-2 border border-[#b8a9fe] text-white bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9a83ff] focus:border-[#917bf3]"
                placeholder="Your message here..."
                required
              ></input>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#b8a9fe] text-white font-semibold rounded-md hover:bg-[#9883f8] focus:outline-none focus:ring-2 focus:ring-[#9681f3] focus:ring-opacity-50"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactForm;