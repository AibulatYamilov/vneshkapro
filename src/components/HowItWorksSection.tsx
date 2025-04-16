
import React from 'react';
import { Monitor, Check } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-1/4 w-64 h-64 rounded-full bg-[#e7dcff]/40 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-[#ffdee2]/30 blur-3xl"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1MjAxZmUiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTRNMTQgMTRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTQiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-10 z-10">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center">
          {/* Text content - Left side */}
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-8 md:p-10 border border-[#e7dcff]">
              <h2 className="font-arial-black text-3xl md:text-4xl font-bold mb-8 text-[#2a4b8d]">
                Всё просто:
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-[#5201fe] to-[#78e29e] rounded-full p-1.5 text-white mt-1 flex-shrink-0">
                    <span className="block font-bold text-sm">1</span>
                  </div>
                  <p className="text-lg text-gray-800">
                    Вы хотите запустить рекламу товара у блогера.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-[#5201fe] to-[#78e29e] rounded-full p-1.5 text-white mt-1 flex-shrink-0">
                    <span className="block font-bold text-sm">2</span>
                  </div>
                  <p className="text-lg text-gray-800">
                    Мы выдаём вам специальную ссылку, совместимую со всеми маркетплейсами.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-[#5201fe] to-[#78e29e] rounded-full p-1.5 text-white mt-1 flex-shrink-0">
                    <span className="block font-bold text-sm">3</span>
                  </div>
                  <p className="text-lg text-gray-800">
                    Блогер размещает эту ссылку в посте.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-[#5201fe] to-[#78e29e] rounded-full p-1.5 text-white mt-1 flex-shrink-0">
                    <span className="block font-bold text-sm">4</span>
                  </div>
                  <p className="text-lg text-gray-800">
                    А вы видите реальные переходы на свой товар — в одном месте.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image container - Right side */}
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative">
              {/* Monitor frame */}
              <div className="bg-[#2a4b8d] rounded-t-xl p-2 w-11/12 mx-auto">
                <div className="h-2 w-2 bg-white rounded-full ml-2"></div>
              </div>
              <div className="bg-[#2a4b8d] rounded-b-xl p-4 pt-0 pb-10 shadow-xl w-11/12 mx-auto">
                {/* Screen with the dashboard image */}
                <div className="bg-white rounded-md overflow-hidden">
                  <img 
                    src="/lovable-uploads/0c1ee21c-5938-485a-8cb1-a238f1c98905.png" 
                    alt="Панель управления ВнешкаPRO" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              {/* Monitor stand */}
              <div className="h-8 w-16 bg-[#2a4b8d] mx-auto -mt-2 rounded-b-lg"></div>
              <div className="h-1 w-32 bg-[#2a4b8d] mx-auto rounded-full shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
