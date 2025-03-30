import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className=" ">
      <Navbar />
      <Hero />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}