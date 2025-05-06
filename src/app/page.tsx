import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import WhyChoosUsSection from "./components/whyChoosUsSection";
import About from "./components/About";
import About2 from "./components/About2";
// import Testinominols from "./components/Testinominols";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import WhatsAppPopup from "./components/whatsappPOpUp";
import AboutusContent from "./components/AboutusContent";
import CustomeWebContent from "./components/customeWebContent";
import CardComponent from "./serviceServiceSevtion";
import CardSection from "./components/BlogCards";
import ContactForm from "./components/contactForm";


export default function Home() {

  return (
    <main  className="md:px-[12vw] p-4 w-[100vw]">
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
      <CardSection/>
      <ContactForm/>

      <Contact/>
      <Footer/>
    </main>
  );
}


