
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-[#f4efec]">
      <div className="absolute inset-0 z-0">
        {/* Adding some subtle pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1MjAxZmUiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTRNMTQgMTRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTQiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 z-10 pt-20">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl relative">
            {/* Marketplace Icons */}
            <div className="absolute -top-8 -right-20 md:-right-24 lg:-right-32 transform rotate-12 w-20 md:w-28 lg:w-32 z-10 
                            animate-[float_4s_ease-in-out_infinite] shadow-lg rounded-2xl">
              <img 
                src="/lovable-uploads/e35d5d6a-52d6-40da-9a17-e13398c90335.png" 
                alt="Wildberries"
                className="w-full h-auto object-contain drop-shadow-md"
                style={{ objectPosition: '100% 0%', objectFit: 'cover' }}
              />
            </div>
            
            <div className="absolute top-20 -left-16 md:-left-20 transform -rotate-6 w-16 md:w-24 lg:w-28 z-10 
                           animate-[float_5s_ease-in-out_infinite_0.5s] shadow-lg rounded-2xl">
              <img 
                src="/lovable-uploads/e35d5d6a-52d6-40da-9a17-e13398c90335.png" 
                alt="Ozon"
                className="w-full h-auto object-contain drop-shadow-md"
                style={{ objectPosition: '0% 33%', objectFit: 'cover' }}
              />
            </div>
            
            <div className="absolute -bottom-10 -right-14 md:-right-20 transform rotate-6 w-14 md:w-20 lg:w-24 z-10 
                           animate-[float_6s_ease-in-out_infinite_1s] shadow-lg rounded-2xl">
              <img 
                src="/lovable-uploads/e35d5d6a-52d6-40da-9a17-e13398c90335.png" 
                alt="Yandex Market"
                className="w-full h-auto object-contain drop-shadow-md"
                style={{ objectPosition: '0% 0%', objectFit: 'cover' }}
              />
            </div>
            
            <div className="absolute -bottom-4 -left-12 md:-left-16 transform -rotate-12 w-12 md:w-16 lg:w-20 z-10 
                           animate-[float_4.5s_ease-in-out_infinite_1.5s] shadow-lg rounded-2xl">
              <img 
                src="/lovable-uploads/e35d5d6a-52d6-40da-9a17-e13398c90335.png" 
                alt="SberMarket"
                className="w-full h-auto object-contain drop-shadow-md"
                style={{ objectPosition: '0% 100%', objectFit: 'cover' }}
              />
            </div>
            
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
      
      {/* Add keyframes for floating animation to tailwind.config.ts */}
    </section>
  );
};

export default HeroSection;
