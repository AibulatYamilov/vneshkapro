
const CtaSection = () => {
  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-[#f4f7ff] to-[#e7dcff]/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl italic text-[#2a4b8d] mb-10 leading-relaxed">
            В океане рекламы только данные становятся вашим маяком.<br />
            Пусть <span className="text-[#5201fe]">ВнешкаPRO</span> будет вашим компасом!
          </h2>
          
          <div className="mt-10">
            <a 
              href="#" 
              className="inline-block bg-[#78e29e] text-[#2a4b8d] font-bold px-10 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] border border-[#78e29e]/20"
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
