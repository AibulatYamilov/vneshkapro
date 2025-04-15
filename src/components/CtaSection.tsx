
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-[#f4f7ff] to-[#e7dcff]/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Carter_One'] text-3xl md:text-4xl lg:text-5xl text-[#2a4b8d] mb-10 leading-relaxed">
            Ты не просто продаёшь. Ты считаешь деньги.
            <br />
            Мы поможем считать ещё точнее.
          </h2>
          
          <div className="mt-10">
            <Button 
              className="bg-[#78e29e] hover:bg-[#5ecf83] text-[#2a4b8d] font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] text-lg h-auto"
            >
              Начать анализировать <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
