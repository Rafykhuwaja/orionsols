import Image from "next/image"
const data = [
  {
    image: "/images/social.jpg",

    title: "Social Media Management",
    description:
      "Build a robust presence across platforms like Facebook, Instagram, LinkedIn, and more. We handle everything from content creation to engagement strategies and performance tracking to help you maintain meaningful connections with your audience.",
    points : {
        1 : "Regular Posting",
        2 : "Engagement & Community Building",
        3 : "Analytics & Performance Reporting"
    }
  },
  {
    image: "/images/web.jpg",
    title: "Search Engine Optimization (SEO)",
    description:
      "Increase organic traffic and improve your search rankings through comprehensive on-page and off-page optimization. We focus on keyword research, technical SEO, and continuous performance analysis to keep you ahead of the competition.",
      points : {
        1 : "On-Page Optimization",
        2 : "Technical SEO Audits",
        3 : "Link Building & Off-Page Strategies"
    }
  },

  {
    image: "/images/video.jpg",
    title: "Content Marketing",
    description:
      "Engage your audience with high-quality, relevant content that drives conversions. We create tailored strategies with blogs, videos, infographics, and more to boost engagement and improve brand perception.",
      points : {
        1 : "Blog & Article Writing",
        2 : "Video Production",
        3 : "Visual Graphics & Infographics"
    }
  },
  {
    image: "/images/ads.jpg",
    title: "Pay-Per-Click Advertising (PPC)",
    description:
      "Maximize your ROI with strategically targeted ads on Google, Bing, and social platforms. From campaign setup to continuous optimization, we ensure your ads reach the right audience.",
      points : {
        1 : "Google Ads & Bing Campaigns",
        2 : "Social Media Ads",
        3 : "Continuous Campaign Optimization"
    }
  },
  {
    image: "/images/graphic.jpg",
    title: "Branding & Graphic Design",
    description:
      "Create a memorable and impactful brand identity. Our professional logo design, marketing collateral, and branding assets ensure your business stands out and resonates with your target market.",
      points : {
        1 : "Logo Design & Brand Identity",
        2 : "Marketing Collateral (Brochures, Flyers, etc.)",
        3 : "Visual Branding for Web & Social Media"
    }
  },
  {
    image: "/images/ecomerce.jpg",
    title: "Web Development",
    description:
      "We specialize in creating responsive, visually appealing, and user-friendly websites that align with your business goals. Whether you need an eCommerce site or a corporate website, we build solutions that drive conversions.",
      points : {
        1 : "Custom Websites & Landing Pages",
        2 : "eCommerce Development",
        3 : "User Experience (UX) & User Interface (UI) Design"
    }
  },
];

const CardComponent = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-950 pt-5">
      <div className="text-center">
        <h1 className="text-xl md:text-4xl text-[#ff9c00] font-bold mt-5">
          Comprehensive Digital Marketing Solutions for Every Business
        </h1>
        <p className="mt-4 text-white">
          At Orionsols, we offer a complete suite of services designed to help you grow, engage, and convert customers. Explore our core offerings below:
        </p>
      </div>
      <div className="container px-5 py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <div key={item.title} className="p-4">
              <div className="card border-2 border-[#ff9c00] border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="card-image"
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
                <h2 className="card-title">{item.title}</h2>
                <div className="card-content">
                  <h1 className="title-font text-xl font-semibold text-[#ff9c00] mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed mb-3 text-xs md:text-base">{item.description}</p>
                  <div className="flex flex-col gap-4 text-xs md:text-base">
                    <p>{item.points[1]}</p>
                    <p>{item.points[2]}</p>
                    <p>{item.points[3]}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardComponent;