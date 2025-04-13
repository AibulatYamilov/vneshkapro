
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
          <a href="#" className="text-2xl font-bold">ВнешкаPRO</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="font-montserrat text-sm uppercase tracking-wider hover:text-neutral-500 transition-colors">Возможности</a>
            <a href="#clients" className="font-montserrat text-sm uppercase tracking-wider hover:text-neutral-500 transition-colors">Клиенты</a>
            <a href="#cta" className="font-montserrat text-sm uppercase tracking-wider hover:text-neutral-500 transition-colors">Начать</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white py-4 shadow-md`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#features" className="font-montserrat text-sm uppercase tracking-wider hover:text-neutral-500 transition-colors" onClick={toggleMenu}>Возможности</a>
          <a href="#clients" className="font-montserrat text-sm uppercase tracking-wider hover:text-neutral-500 transition-colors" onClick={toggleMenu}>Клиенты</a>
          <a href="#cta" className="font-montserrat text-sm uppercase tracking-wider hover:text-neutral-500 transition-colors" onClick={toggleMenu}>Начать</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
