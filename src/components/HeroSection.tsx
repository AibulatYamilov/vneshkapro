
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-[#f4efec]">
      <div className="absolute inset-0 z-0">
        {/* Adding some subtle pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1MjAxZmUiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTRNMTQgMTRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTQiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      {/* Marketplace Icons - Cascading design */}
      <div className="absolute right-0 top-0 h-full w-1/3 pointer-events-none z-0">
        <div className="relative h-full w-full">
          {/* Yandex Market Logo */}
          <div className="absolute right-[10%] top-[15%] animate-float-slow transform -rotate-6">
            <img src="/yandex-market.svg" alt="Yandex Market" className="h-16 w-auto" />
          </div>
          
          {/* Ozon Logo */}
          <div className="absolute right-[25%] top-[30%] animate-float-medium transform rotate-3">
            <img src="/ozon.svg" alt="Ozon" className="h-14 w-auto" />
          </div>
          
          {/* Wildberries Logo */}
          <div className="absolute right-[5%] top-[40%] animate-float-fast transform -rotate-3">
            <img src="/wildberries.svg" alt="Wildberries" className="h-16 w-auto" />
          </div>
          
          {/* SberMegaMarket Logo */}
          <div className="absolute right-[20%] top-[55%] animate-float-medium transform rotate-6">
            <img src="/sber-mega-market.svg" alt="SberMegaMarket" className="h-14 w-auto" />
          </div>
          
          {/* Avito Logo */}
          <div className="absolute right-[8%] top-[70%] animate-float-slow transform -rotate-6">
            <img src="/avito.svg" alt="Avito" className="h-14 w-auto" />
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
