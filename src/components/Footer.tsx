
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-neutral-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center">
          <h2 className="font-cormorant text-3xl mb-6">Liya Akhaz</h2>
          
          <div className="flex gap-6 mb-8">
            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-neutral-900 transition-colors">
              <Github size={18} />
            </a>
          </div>
          
          <div className="text-center font-montserrat text-sm text-white/70">
            <p>&copy; {currentYear} Liya Akhaz. All Rights Reserved.</p>
            <p className="mt-2">Made with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
