
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ClientsSection from "@/components/ClientsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import "@/styles/smoothScroll.css";

const Index = () => {
  return (
    <div className="min-h-screen font-montserrat">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ClientsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
