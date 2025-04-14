
import { ArrowUpRight, Sparkles } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="cta" className="py-20 bg-[#e7dcff] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#5201fe]/0 via-[#5201fe]/20 to-[#5201fe]/0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#5201fe]/0 via-[#5201fe]/20 to-[#5201fe]/0"></div>
      
      <div className="absolute -bottom-20 -left-20 text-[#5201fe]/10 rotate-45">
        <Sparkles size={200} strokeWidth={1} />
      </div>
      
      <div className="absolute top-10 right-20 text-[#5201fe]/10">
        <ArrowUpRight size={80} strokeWidth={1} />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl italic text-[#5201fe] mb-10 leading-relaxed">
            В океане рекламы только данные становятся вашим маяком.<br />
            Пусть ВнешкаPRO будет вашим компасом!
          </h2>
          
          <div className="mt-10">
            <a 
              href="#" 
              className="inline-block bg-white text-[#5201fe] font-medium px-10 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow border border-[#5201fe]/20"
            >
              Поплыли ⛵
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
