
import React from 'react';
import { ArrowUpRight, CircleArrowUp, CircleArrowRight, Beam } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 gradient-hero">
        {/* Adding some subtle pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1MjAxZmUiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTRNMTQgMTRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTQiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-[15%] right-[10%] text-[#5201fe]/10">
          <ArrowUpRight size={120} strokeWidth={1} />
        </div>
        <div className="absolute bottom-[15%] left-[10%] text-[#5201fe]/10">
          <CircleArrowUp size={100} strokeWidth={1} />
        </div>
        <div className="absolute top-[40%] left-[5%] text-[#e7dcff]/80">
          <CircleArrowRight size={80} strokeWidth={1} />
        </div>
        
        {/* Light beams */}
        <div className="absolute -top-20 left-[30%] text-[#e7dcff]/30 rotate-45">
          <Beam size={200} strokeWidth={1} />
        </div>
        <div className="absolute bottom-0 right-[20%] text-[#e7dcff]/20 -rotate-12">
          <Beam size={160} strokeWidth={1} />
        </div>
        
        {/* Light lines */}
        <div className="absolute h-[300px] w-[1px] top-[20%] left-[25%] bg-gradient-to-b from-[#5201fe]/0 via-[#5201fe]/10 to-[#5201fe]/0"></div>
        <div className="absolute h-[200px] w-[1px] bottom-[10%] right-[35%] bg-gradient-to-b from-[#5201fe]/0 via-[#5201fe]/10 to-[#5201fe]/0"></div>
        <div className="absolute h-[1px] w-[300px] top-[35%] right-[5%] bg-gradient-to-r from-[#5201fe]/0 via-[#5201fe]/10 to-[#5201fe]/0"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 z-10 pt-20">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl">
            <h1 className="font-['Arial_Black'] text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
              Отслеживайте эффективность<br />рекламы у блогеров —<br />в реальном времени,<br />без догадок.
            </h1>
            <p className="font-montserrat text-xl md:text-2xl mb-10 font-medium tracking-wide text-[#5201fe]">
              → Просто. Точно. По делу.
            </p>
            <a 
              href="#features" 
              className="inline-block gradient-primary text-white font-bold text-lg px-10 py-3 rounded-full hover:shadow-lg hover:shadow-[#5201fe]/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Начать с ВнешкаPRO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
