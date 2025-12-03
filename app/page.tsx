import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Steps from "../components/Steps";
import Marketplace from "../components/Marketplace";
import WhyFundEq from "../components/WhyFundEq";
import Faq from "../components/Faq";
import CtaBanner from "../components/CtaBanner";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Steps />
      <Marketplace />
      <WhyFundEq />
      <Faq />
      <CtaBanner />
      <Footer />
    </main>
  );
}
