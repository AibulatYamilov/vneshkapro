
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-[#f4efec]">
      <div className="absolute inset-0 z-0">
        {/* Adding some subtle pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1MjAxZmUiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTRNMTQgMTRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTQiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      {/* Marketplace Icons - Cascading design moved to bottom left */}
      <div className="absolute left-0 bottom-0 h-1/2 w-1/3 pointer-events-none z-0">
        <div className="relative h-full w-full">
          {/* Yandex Market Logo - Large */}
          <div className="absolute left-[15%] bottom-[40%] animate-float-slow transform -rotate-6">
            <img src="/lovable-uploads/fdb65f8b-7fa8-42d7-b2a0-68085439de9a.png" alt="Yandex Market" className="h-16 w-auto" />
          </div>
          
          {/* Ozon Logo */}
          <div className="absolute left-[30%] bottom-[35%] animate-float-medium transform rotate-3">
            <div className="h-14 w-14 bg-[#005bff] rounded-lg shadow-lg flex items-center justify-center">
              <span className="font-bold text-xl text-white">OZON</span>
            </div>
          </div>
          
          {/* WB Logo */}
          <div className="absolute left-[50%] bottom-[30%] animate-float-fast transform -rotate-3">
            <div className="h-16 w-16 bg-[#cb11ab] rounded-lg shadow-lg flex items-center justify-center">
              <span className="font-bold text-xl text-white">WB</span>
            </div>
          </div>
          
          {/* Small Yandex Market Logo */}
          <div className="absolute left-[10%] bottom-[20%] animate-float-slow transform rotate-6 scale-75">
            <img src="/lovable-uploads/fdb65f8b-7fa8-42d7-b2a0-68085439de9a.png" alt="Yandex Market" className="h-10 w-auto" />
          </div>
          
          {/* SberMegaMarket Logo */}
          <div className="absolute left-[25%] bottom-[15%] animate-float-medium transform -rotate-6">
            <div className="h-12 w-12 bg-[#00a36a] rounded-lg shadow-lg flex items-center justify-center">
              <span className="font-bold text-xs text-white">СберМегаМаркет</span>
            </div>
          </div>
          
          {/* Small WB Logo */}
          <div className="absolute left-[40%] bottom-[10%] animate-float-fast transform rotate-3 scale-75">
            <div className="h-10 w-10 bg-[#cb11ab] rounded-lg shadow-lg flex items-center justify-center">
              <span className="font-bold text-sm text-white">WB</span>
            </div>
          </div>
          
          {/* Small Ozon Logo */}
          <div className="absolute left-[55%] bottom-[5%] animate-float-medium transform -rotate-6 scale-75">
            <div className="h-10 w-10 bg-[#005bff] rounded-lg shadow-lg flex items-center justify-center">
              <span className="font-bold text-sm text-white">OZON</span>
            </div>
          </div>
          
          {/* Small SberMegaMarket Logo */}
          <div className="absolute left-[70%] bottom-[3%] animate-float-slow transform rotate-6 scale-50">
            <div className="h-8 w-8 bg-[#00a36a] rounded-lg shadow-lg flex items-center justify-center">
              <span className="font-bold text-[8px] text-white">СММ</span>
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
