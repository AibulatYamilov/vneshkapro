
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, BarChart2, TrendingUp } from "lucide-react";
import { useState } from "react";

const CtaSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f4f7ff] via-[#e7dcff] to-[#ffdee2] background-animate"></div>
      
      {/* Animated patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#5201fe] blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#78e29e] blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container relative mx-auto px-4 md:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-10 md:p-16 border border-white/20">
            <div className="flex justify-center mb-8">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#5201fe] to-[#78e29e] text-white">
                <Sparkles className="w-10 h-10" />
              </div>
            </div>
            
            <h2 className="font-['Carter_One'] text-3xl md:text-4xl lg:text-5xl text-[#2a4b8d] mb-10 text-center leading-relaxed">
              <span className="inline-block">Ты не просто продаёшь.</span>{" "}
              <span className="inline-block text-[#5201fe]">Ты считаешь деньги.</span>
              <br />
              <span className="inline-block bg-gradient-to-r from-[#5201fe] to-[#78e29e] text-transparent bg-clip-text">
                Мы поможем считать ещё точнее.
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-12">
              <div className="flex items-center space-x-4 bg-white/50 p-6 rounded-xl shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e7dcff] flex items-center justify-center">
                  <BarChart2 className="w-6 h-6 text-[#5201fe]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2a4b8d]">Полная аналитика</h3>
                  <p className="text-[#5b6b8c]">Все данные в одном месте</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-white/50 p-6 rounded-xl shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e7dcff] flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#5201fe]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2a4b8d]">Рост конверсии</h3>
                  <p className="text-[#5b6b8c]">Увеличение эффективности</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <div 
                className="relative inline-block group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r from-[#5201fe] to-[#78e29e] rounded-full blur-md transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                <Button 
                  className="relative bg-gradient-to-r from-[#78e29e] to-[#5201fe] hover:from-[#5201fe] hover:to-[#78e29e] text-white font-bold px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 text-lg h-auto"
                >
                  Начать анализировать <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add CSS for the background animation */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .background-animate {
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default CtaSection;
