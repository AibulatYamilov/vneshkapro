
const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 bg-[#f4ff7d]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-lg mb-4">Совсем не важно, где вы размещаете рекламу</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            Вся аналитика в<br />одном месте
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-t border-gray-300">
          <div className="border-r border-b border-gray-300 p-10 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xl font-serif">TRAVELO</div>
              <div className="text-xs">BOUTIQUE HOTEL</div>
            </div>
          </div>
          <div className="border-r border-b border-gray-300 p-10 flex items-center justify-center">
            <div className="text-xl">
              <span className="inline-block border border-gray-500 p-1 text-gray-700">□</span> BayView.io
            </div>
          </div>
          <div className="border-r border-b border-gray-300 p-10 flex items-center justify-center">
            <div className="text-center font-bold">
              <div>CIBER</div>
              <div className="flex items-center justify-center">
                FO<span className="inline-block border border-gray-700 w-4 h-4 mx-0.5"></span>X
              </div>
            </div>
          </div>
          <div className="border-r border-b border-gray-300 p-10 flex items-center justify-center">
            <div className="font-black text-2xl">
              Arena
            </div>
          </div>
          <div className="border-b border-gray-300 p-10 flex items-center justify-center">
            <div className="border border-gray-700 px-2 py-1 rounded-md">
              mtvs.news
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
