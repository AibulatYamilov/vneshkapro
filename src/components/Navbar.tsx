import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="text-3xl font-['Carter_One'] text-[#5201fe] font-bold tracking-tight"
          >
            ВнешкаPRO
          </a>
          <Button 
            variant="default" 
            size="default" 
            className="bg-[#5201fe] text-white hover:bg-[#5201fe]/90"
            onClick={() => window.location.href = "#cta"}
          >
            Начать
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
