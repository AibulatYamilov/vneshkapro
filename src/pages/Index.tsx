
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import "@/styles/smoothScroll.css";

const Index = () => {
  return (
    <div className="min-h-screen font-montserrat">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
