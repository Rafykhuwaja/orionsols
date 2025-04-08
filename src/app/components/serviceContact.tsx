import Link from 'next/link'
import React from 'react'

function ServiceContact() {
  return (
    <div className="text-center px-4 md:px-10 lg:px-20 py-10 md:py-20 bg-gray-900 text-white flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-5">
      Ready to Elevate Your Business?
      </h1>

      <p className="w-full md:w-2/3 text-center mb-3">
      Whether you are just starting or aiming to expand, Orionsols is here to support your growth. With proven strategies, measurable outcomes, and a dedicated team, we are ready to partner with you on the journey to success.{" "}
      </p>
      <Link href="/contact">
      <button className="text-lg px-6 py-3 rounded-lg bg-[#ff9c00] ">
        Contact us
      </button>
      </Link>
    </div>
  )
}

export default ServiceContact
