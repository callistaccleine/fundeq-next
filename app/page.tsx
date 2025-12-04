import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OurCompany from "../components/OurCompany";
import Services from "../components/Services";
import Features from "../components/Features";
import WhyFundEq from "../components/WhyFundEq";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import Faq from "../components/Faq";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <OurCompany />
      <Services />
      {/* <Features /> */}
      <WhyFundEq />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
