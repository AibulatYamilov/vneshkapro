
const CtaSection = () => {
  return (
    <section id="cta" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-blue-600 mb-10 leading-relaxed">
            В океане рекламы только данные становятся вашим маяком.<br />
            Пусть ВнешкаPRO будет вашим компасом!
          </h2>
          
          <div className="mt-10">
            <a 
              href="#" 
              className="inline-block bg-white text-blue-700 font-medium px-10 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
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
