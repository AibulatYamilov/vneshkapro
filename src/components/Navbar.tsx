
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
          <a href="#" className="font-cormorant text-2xl font-semibold">Liya Akhaz</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="font-montserrat text-sm uppercase tracking-wider hover:text-neutral-500 transition-colors">Home</a>
            <a href="#about" className="font-montserrat text-sm uppercase tracking-wider hover:text-neutral-500 transition-colors">About</a>
            <a href="#resume" className="font-montserrat text-sm uppercase tracking-wider hover:text-neutral-500 transition-colors">Resume</a>
            <a href="#projects" className="font-montserrat text-sm uppercase tracking-wider hover:text-neutral-500 transition-colors">Projects</a>
            <a href="#contact" className="font-montserrat text-sm uppercase tracking-wider hover:text-neutral-500 transition-colors">Contact</a>
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
          <a href="#home" className="font-montserrat text-sm uppercase tracking-wider hover:text-neutral-500 transition-colors" onClick={toggleMenu}>Home</a>
          <a href="#about" className="font-montserrat text-sm uppercase tracking-wider hover:text-neutral-500 transition-colors" onClick={toggleMenu}>About</a>
          <a href="#resume" className="font-montserrat text-sm uppercase tracking-wider hover:text-neutral-500 transition-colors" onClick={toggleMenu}>Resume</a>
          <a href="#projects" className="font-montserrat text-sm uppercase tracking-wider hover:text-neutral-500 transition-colors" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="font-montserrat text-sm uppercase tracking-wider hover:text-neutral-500 transition-colors" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
