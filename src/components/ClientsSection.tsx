
import React from 'react';
import { ShoppingBag, Package, Store, ShoppingCart, ExternalLink, MessageCircle, MessageSquare, Users, Video, Share } from 'lucide-react';

const ClientsSection = () => {
  const marketplaces = [
    { 
      name: 'Wildberries', 
      icon: ShoppingBag
    },
    { 
      name: 'Ozon', 
      icon: Package 
    },
    { 
      name: 'Яндекс Маркет', 
      icon: Store
    },
    { 
      name: 'Мегамаркет', 
      icon: ShoppingCart
    },
    { 
      name: 'Другие платформы',
      icon: Share
    }
  ];

  const platformLogos = [
    { name: 'Telegram', icon: MessageCircle },
    { name: 'ВКонтакте', icon: MessageSquare },
    { name: 'Одноклассники', icon: Users },
    { name: 'Rutube', icon: Video },
    { name: 'Другие платформы', icon: Share }
  ];

  return (
    <section id="clients" className="py-20 gradient-accent">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Carter_One'] text-4xl md:text-5xl font-bold mb-6 text-white">
            Вся аналитика в одном месте
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Первая колонка - Маркетплейсы */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="font-['Carter_One'] text-2xl text-white mb-6 text-center">
              Не важно, где вы продаете
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {marketplaces.map((platform, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-center gap-4 hover:bg-white/20 transition-all duration-300">
                  <div className="bg-white rounded-full p-1 flex items-center justify-center w-10 h-10 flex-shrink-0">
                    <platform.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-white font-medium">{platform.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Вторая колонка - Рекламные платформы */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="font-['Carter_One'] text-2xl text-white mb-6 text-center">
              Не важно, где ваша реклама
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {platformLogos.map((platform, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-center gap-4 hover:bg-white/20 transition-all duration-300">
                  <div className="bg-white rounded-full p-1 flex items-center justify-center w-10 h-10 flex-shrink-0">
                    <platform.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-white font-medium">{platform.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
