
import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import WhyChoosUsSection from "./components/whyChoosUsSection";
import About from "./components/About";
import About2 from "./components/About2";
import Blog from "./components/Blog";
import Testinominols from "./components/Testinominols";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import WhatsAppPopup from "./components/whatsappPOpUp";


export default function Home() {

  return (
    <main className="bg-gray-900">
      <Navbar/>
      <Banner/>

      <WhatsAppPopup/>
      
      <WhyChoosUsSection/>
      <About/>
      <About2/>
      <Testinominols/>
      <Contact/>
      <Footer/>
    </main>
  );
}


