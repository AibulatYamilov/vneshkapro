
import { MessageCircle, MessagesSquare } from "lucide-react";

const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 bg-gradient-to-br from-[#9b87f5] to-[#D6BCFA]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-lg mb-4 text-white">Совсем не важно, где вы размещаете рекламу</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">
            Вся аналитика в<br />одном месте
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl flex flex-col items-center justify-center">
            <MessageCircle size={48} className="text-white mb-2" />
            <div className="text-white font-medium">Telegram</div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl flex flex-col items-center justify-center">
            <MessagesSquare size={48} className="text-white mb-2" />
            <div className="text-white font-medium">Вконтакте</div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl flex flex-col items-center justify-center">
            <div className="text-4xl text-white mb-2">OK</div>
            <div className="text-white font-medium">Одноклассники</div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl flex flex-col items-center justify-center">
            <div className="text-xl font-bold text-white mb-2">RU<span className="text-red-500">TUBE</span></div>
            <div className="text-white font-medium">Rutube</div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl flex flex-col items-center justify-center">
            <div className="text-2xl font-bold text-white mb-2">TikTok</div>
            <div className="text-white font-medium">TikTok</div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-white/80 italic">И другие доступные платформы</p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
