
import React from 'react';
import { ShoppingBag, ShoppingCart, Package, Store } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-[#f4efec]">
      <div className="absolute inset-0 z-0">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1MjAxZmUiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTRNMTQgMTRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTQiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        
        {/* Marketplace icons in flowing style */}
        <div className="absolute inset-0 overflow-hidden">
          {/* WB icon */}
          <div className="absolute top-[15%] left-[10%] md:left-[15%] opacity-10 animate-[float_8s_ease-in-out_infinite]">
            <div className="bg-white p-4 rounded-full shadow-xl transform -rotate-12">
              <ShoppingBag className="w-16 h-16 md:w-20 md:h-20 text-[#CB11AB]" />
            </div>
            <div className="mt-2 text-center font-bold text-[#CB11AB] opacity-70">WB</div>
          </div>
          
          {/* OZON icon */}
          <div className="absolute top-[30%] right-[12%] md:right-[18%] opacity-10 animate-[float_9s_ease-in-out_infinite_1s]">
            <div className="bg-white p-4 rounded-full shadow-xl transform rotate-6">
              <ShoppingCart className="w-14 h-14 md:w-18 md:h-18 text-[#005BFF]" />
            </div>
            <div className="mt-2 text-center font-bold text-[#005BFF] opacity-70">OZON</div>
          </div>
          
          {/* Yandex.Market icon */}
          <div className="absolute bottom-[25%] left-[15%] opacity-10 animate-[float_7s_ease-in-out_infinite_0.5s]">
            <div className="bg-white p-4 rounded-full shadow-xl transform rotate-12">
              <Package className="w-12 h-12 md:w-16 md:h-16 text-[#F44336]" />
            </div>
            <div className="mt-2 text-center font-bold text-[#F44336] opacity-70">Я.Маркет</div>
          </div>
          
          {/* SberMarket icon */}
          <div className="absolute bottom-[35%] right-[10%] opacity-10 animate-[float_10s_ease-in-out_infinite_1.5s]">
            <div className="bg-white p-4 rounded-full shadow-xl transform -rotate-6">
              <Store className="w-10 h-10 md:w-14 md:h-14 text-[#21A038]" />
            </div>
            <div className="mt-2 text-center font-bold text-[#21A038] opacity-70">СберМаркет</div>
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
