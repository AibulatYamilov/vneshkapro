
import React from 'react';

const ClientsSection = () => {
  const marketplaces = [
    { 
      name: 'Wildberries', 
      logo: '/lovable-uploads/wildberies_logo.png' 
    },
    { 
      name: 'Ozon', 
      logo: '/lovable-uploads/ozon_logo.png' 
    },
    { 
      name: 'Яндекс Маркет', 
      logo: '/lovable-uploads/yandexmarket_logo.png' 
    },
    { 
      name: 'Мегамаркет', 
      logo: '/lovable-uploads/megamarket_logo.png' 
    },
    { 
      name: 'Другие платформы',
      logo: null
    }
  ];

  const platformLogos = [
    { name: 'Telegram' },
    { name: 'ВКонтакте' },
    { name: 'Одноклассники' },
    { name: 'Rutube' },
    { name: 'Другие платформы' }
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
                  {platform.logo && (
                    <img 
                      src={platform.logo} 
                      alt={`${platform.name} logo`} 
                      className="w-8 h-8 object-contain" 
                    />
                  )}
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
