"use client";
import React from "react";
import { useState } from "react";
import {motion} from "framer-motion"
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between lg:py-20 md:px-8 bg-gray-950">
      <div className="md:w-1/2 text-white p-6">
      <div className="">

    
        <motion.h1
            initial={{ opacity: 0, y: 70 }}          
            whileInView={{ opacity: 1, y: 0 }}      
            transition={{ duration: 0.8 }}           
            viewport={{ once: false, amount: 0.5 }} className="text-[#ff9c00] text-6xl font-extrabold mb-5">
          Lets Connect
        </motion.h1>
        <p className="mb-4">
        We would love to hear from you! Fill out the form below or contact us directly through the details provided

        </p>
        <div className="flex items-center">
          <img width="35" height="35" src="https://img.icons8.com/windows/32/FAB005/phone.png" alt="phone--v1"/>
          <p className="font-bold md:text-4xl ml-5">Phone: (+971) 528 977 529</p>
        </div>

        <div className="flex items-center mt-5">
          <img width="35" height="35" src="https://img.icons8.com/ios/50/FAB005/new-post--v1.png" alt="mail"/>
          <p className="font-bold md:text-4xl ml-5">Email: info@Orionsols.com</p>
        </div>

        <div className="flex items-center mt-5">
          <img width="35" height="35" src="https://img.icons8.com/ios/50/FAB005/marker--v1.png" alt="marker--v1"/>
          <p className="font-bold md:text-4xl ml-5">Address: Ascote Park Place office 401,Dubai</p>
        </div>
      </div>
      </div>

      <motion.div
          initial={{ opacity: 0, x: 100 }}          
          whileInView={{ opacity: 1, x: 0 }}      
          transition={{ duration: 0.8 }}           
          viewport={{ once: false, amount: 0.5 }} className="p-6 rounded-lg md:w-1/2 flex justify-center">
        <div className="max-w-full p-10 md:ml-8 rounded-xl shadow-2xl md:w-[600px] border-2 border-[#ff9c00]">
          <h2 className="text-2xl font-semibold text-center mb-4 text-[#ff9c00]">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-[#ff9c00] bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#eecf45] focus:border-[#eecf45]"
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
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border bg-gray-800 border-[#ff9c00] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#eecf45] focus:border-[#eecf45]"
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
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-[#ff9c00] bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#eecf45] focus:border-[#eecf45]"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#ff9c00] text-white font-semibold rounded-md hover:bg-[#eecf45] focus:outline-none focus:ring-2 focus:ring-[#eecf45] focus:ring-opacity-50"
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