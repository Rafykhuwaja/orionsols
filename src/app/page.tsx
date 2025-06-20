import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import WhyChoosUsSection from "./components/whyChoosUsSection";
import About from "./components/About";
import About2 from "./components/About2";
// import Testinominols from "./components/Testinominols";
import Contact from "./components/contact";
import WhatsAppPopup from "./components/whatsappPOpUp";
import AboutusContent from "./components/AboutusContent";
import CustomeWebContent from "./components/customeWebContent";
import CardComponent from "./serviceServiceSevtion";
import ContactForm from "./components/contactForm";


export const metadata = {
  title: "Orionsols | Digital Solutions & Business Growth Agency",
  description:
    "Orionsols is a Dubai-based digital agency providing expert services in web development, mobile apps, SEO, and e-commerce — helping businesses grow online with strategic digital solutions.",
  keywords: [
    "web development Dubai",
    "mobile app development",
    "SEO services",
    "e-commerce solutions",
    "digital agency Dubai",
    "online business growth",
    "custom website design",
  ],
  openGraph: {
    title: "Orionsols | Web, App, and SEO Solutions for Growing Businesses",
    description:
      "Discover how Orionsols helps startups and enterprises grow through expert web development, mobile apps, SEO, and digital transformation.",
    type: "website",
    locale: "en_US",
    siteName: "Orionsols",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orionsols | Your Partner in Digital Growth",
    description:
      "From web and app development to SEO and branding — partner with Orionsols to grow your business in the digital world.",
  },
};



export default function Home() {

  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <div className="md:px-[12vw] px-4 w-full">
      <Navbar/>
      <Banner/>

      <WhatsAppPopup/>
      
      <About/>
      <WhyChoosUsSection/>
      <About2/>
      
      <AboutusContent/>
      {/* <Testinominols/> */}
      <CustomeWebContent/>
      <CardComponent/>
      <ContactForm/>

      <Contact/>
      </div>
    </main>
  );
}


