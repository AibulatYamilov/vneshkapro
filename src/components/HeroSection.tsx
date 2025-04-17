
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-[#f4efec]">
      {/* Background Icons */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Wildberries Logo - Top Left */}
          <div className="absolute top-[15%] left-[8%] transform -rotate-6 opacity-75 animate-[float_8s_infinite]">
            <div className="w-24 md:w-32 h-16 md:h-20 overflow-hidden">
              <img 
                src="/lovable-uploads/a1868742-97e2-4d92-9cab-1161520a6103.png" 
                alt="Wildberries Logo" 
                className="w-full h-full object-cover object-[0%_0%]" 
              />
            </div>
          </div>

          {/* OZON Logo - Top Right */}
          <div className="absolute top-[20%] right-[15%] transform rotate-3 opacity-75 animate-[float_7s_infinite_0.3s]">
            <div className="w-24 md:w-32 h-16 md:h-20 overflow-hidden">
              <img 
                src="/lovable-uploads/a1868742-97e2-4d92-9cab-1161520a6103.png" 
                alt="OZON Logo" 
                className="w-full h-full object-cover object-[33%_0%]" 
              />
            </div>
          </div>

          {/* Сбер Маркет Logo - Bottom Left */}
          <div className="absolute bottom-[25%] left-[18%] transform -rotate-3 opacity-75 animate-[float_9s_infinite_0.5s]">
            <div className="w-24 md:w-32 h-16 md:h-20 overflow-hidden">
              <img 
                src="/lovable-uploads/a1868742-97e2-4d92-9cab-1161520a6103.png" 
                alt="Сбер Маркет Logo" 
                className="w-full h-full object-cover object-[67%_0%]" 
              />
            </div>
          </div>

          {/* Яндекс Маркет Logo - Bottom Right */}
          <div className="absolute bottom-[30%] right-[10%] transform rotate-6 opacity-75 animate-[float_6s_infinite_0.7s]">
            <div className="w-24 md:w-32 h-16 md:h-20 overflow-hidden">
              <img 
                src="/lovable-uploads/a1868742-97e2-4d92-9cab-1161520a6103.png" 
                alt="Яндекс Маркет Logo" 
                className="w-full h-full object-cover object-[100%_0%]" 
              />
            </div>
          </div>

          {/* Extra Logo - Center Left */}
          <div className="absolute top-[50%] left-[5%] transform -translate-y-1/2 rotate-[-5deg] opacity-75 animate-[float_10s_infinite_0.2s]">
            <div className="w-24 md:w-32 h-16 md:h-20 overflow-hidden">
              <img 
                src="/lovable-uploads/a1868742-97e2-4d92-9cab-1161520a6103.png" 
                alt="Marketplace Logo" 
                className="w-full h-full object-cover object-[0%_0%]" 
              />
            </div>
          </div>

          {/* Extra Logo - Center Right */}
          <div className="absolute top-[40%] right-[5%] transform rotate-[8deg] opacity-75 animate-[float_7.5s_infinite_0.9s]">
            <div className="w-24 md:w-32 h-16 md:h-20 overflow-hidden">
              <img 
                src="/lovable-uploads/a1868742-97e2-4d92-9cab-1161520a6103.png" 
                alt="Marketplace Logo" 
                className="w-full h-full object-cover object-[33%_0%]" 
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 z-10 pt-20">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl">
            <h1 className="font-arial-black text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-[#000000] max-w-4xl">
              <span className="block">Отслеживайте</span>
              <span className="block">эффективность рекламы</span>
              <span className="block">в реальном времени.</span>
            </h1>
            <p className="font-montserrat text-xl md:text-2xl mb-10 font-medium tracking-wide text-[#5201fe]">
              Не гадайте. Знайте точно.
            </p>
            <a 
              href="#features" 
              className="inline-block bg-gradient-to-r from-[#5201fe] to-[#78e29e] text-white font-bold text-lg px-10 py-3 rounded-full hover:shadow-lg hover:shadow-[#5201fe]/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
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
