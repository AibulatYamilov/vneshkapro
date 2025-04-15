
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-[#2a4b8d] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            <span className="text-[#78e29e]">Внешка</span>PRO
          </h2>
          
          <div className="flex gap-6 mb-8">
            <a href="#" className="w-10 h-10 rounded-full border border-[#78e29e]/30 flex items-center justify-center hover:bg-[#78e29e] hover:text-[#2a4b8d] transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[#78e29e]/30 flex items-center justify-center hover:bg-[#78e29e] hover:text-[#2a4b8d] transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[#78e29e]/30 flex items-center justify-center hover:bg-[#78e29e] hover:text-[#2a4b8d] transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[#78e29e]/30 flex items-center justify-center hover:bg-[#78e29e] hover:text-[#2a4b8d] transition-colors">
              <Mail size={18} />
            </a>
          </div>
          
          <div className="text-center font-montserrat text-sm text-white/70">
            <p>&copy; {currentYear} ВнешкаPRO. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
