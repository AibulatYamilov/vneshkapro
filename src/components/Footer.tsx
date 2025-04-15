
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-[#2a4b8d] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-white font-['Carter_One']">
            <span className="text-[#78e29e]">Внешка</span>PRO
          </h2>
          
          <div className="text-center font-montserrat text-sm text-white/70 mb-4">
            <p className="font-['Carter_One']">Связь с нами — через @bot</p>
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
