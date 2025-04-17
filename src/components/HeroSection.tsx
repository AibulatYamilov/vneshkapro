
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-[#f4efec]">
      <div className="absolute inset-0 z-0">
        {/* Adding some subtle pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1MjAxZmUiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTRNMTQgMTRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTQiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      {/* Marketplace Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Wildberries Icon */}
        <div className="absolute top-[10%] left-[5%] transform -rotate-12 opacity-70 animate-float">
          <img 
            src="/lovable-uploads/0c1ee21c-5938-485a-8cb1-a238f1c98905.png" 
            alt="Marketplace Icon" 
            className="w-20 h-20 object-contain drop-shadow-md"
            style={{ objectPosition: '0% 0%' }}
          />
        </div>
        
        {/* Ozon Icon */}
        <div className="absolute top-[25%] right-[10%] transform rotate-6 opacity-70 animate-float-delayed">
          <img 
            src="/lovable-uploads/0c1ee21c-5938-485a-8cb1-a238f1c98905.png" 
            alt="Marketplace Icon" 
            className="w-24 h-24 object-contain drop-shadow-md"
            style={{ objectPosition: '33% 0%' }}
          />
        </div>
        
        {/* Yandex Market Icon */}
        <div className="absolute bottom-[20%] left-[12%] transform -rotate-6 opacity-70 animate-float-slow">
          <img 
            src="/lovable-uploads/0c1ee21c-5938-485a-8cb1-a238f1c98905.png" 
            alt="Marketplace Icon" 
            className="w-28 h-28 object-contain drop-shadow-md"
            style={{ objectPosition: '66% 0%' }}
          />
        </div>
        
        {/* Sber Market Icon */}
        <div className="absolute bottom-[30%] right-[5%] transform rotate-12 opacity-70 animate-float-slower">
          <img 
            src="/lovable-uploads/0c1ee21c-5938-485a-8cb1-a238f1c98905.png" 
            alt="Marketplace Icon" 
            className="w-22 h-22 object-contain drop-shadow-md"
            style={{ objectPosition: '100% 0%' }}
          />
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
