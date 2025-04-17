
import React from 'react';
import { Card } from "@/components/ui/card";

const ClientsSection = () => {
  const marketplaces = [
    {
      name: 'Wildberries',
      icon: (
        <div className="w-12 h-12 bg-[#CB11AB] rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">WB</span>
        </div>
      )
    },
    {
      name: 'Ozon',
      icon: (
        <div className="w-12 h-12 bg-[#005BFF] rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">O</span>
        </div>
      )
    },
    {
      name: 'Яндекс Маркет',
      icon: (
        <div className="w-12 h-12 bg-[#FFCC00] rounded-full flex items-center justify-center">
          <span className="text-black font-bold text-lg">Я</span>
        </div>
      )
    },
    {
      name: 'Мегамаркет',
      icon: (
        <div className="w-12 h-12 bg-[#D13B3B] rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">М</span>
        </div>
      )
    },
    {
      name: 'Другие платформы',
      icon: (
        <div className="w-12 h-12 bg-white/70 rounded-full flex items-center justify-center">
          <span className="text-gray-800 font-bold text-lg">+</span>
        </div>
      )
    }
  ];

  const platformLogos = [
    {
      name: 'Telegram',
      icon: (
        <div className="w-12 h-12 bg-[#0088CC] rounded-full flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2.3335C7.56359 2.3335 2.33334 7.56375 2.33334 14.0002C2.33334 20.4366 7.56359 25.6668 14 25.6668C20.4364 25.6668 25.6667 20.4366 25.6667 14.0002C25.6667 7.56375 20.4364 2.3335 14 2.3335ZM20.3346 9.92183L18.1951 19.4723C18.0561 20.0893 17.7001 20.2343 17.1856 19.9447L13.9001 17.5343L12.3186 19.0447C12.1681 19.1952 12.0396 19.3237 11.7501 19.3237L11.9536 16.0382L17.8361 10.7422C18.0691 10.5382 17.7851 10.4237 17.4781 10.6277L10.1921 15.1557L7.00859 14.1612C6.40859 13.9782 6.39709 13.5807 7.14309 13.2912L19.4671 8.38975C19.9701 8.21825 20.4986 8.51325 20.3346 9.92183Z" fill="white"/>
          </svg>
        </div>
      )
    },
    {
      name: 'ВКонтакте',
      icon: (
        <div className="w-12 h-12 bg-[#0077FF] rounded-full flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24Z" fill="#0077FF"/>
            <path d="M34.0522 16.2423H30.7305C30.4022 16.2423 30.0861 16.3273 29.8124 16.4864C29.5387 16.6455 29.3184 16.8729 29.1785 17.1423L29.1735 17.1523C29.1735 17.1523 26.8545 21.0933 26.2692 22.0325C24.8475 24.4142 23.9857 23.332 23.9857 20.9368V18.0368C23.9857 17.0736 23.2098 16.2976 22.2465 16.2976H19.7953C18.9793 16.2976 17.9959 16.6574 17.3377 17.3156L17.32 17.3334C17.1369 17.5126 17.0331 17.7551 17.0331 18.0083C17.0331 18.5114 17.4415 18.9198 17.9446 18.9198C18.1978 18.9198 18.4248 18.8161 18.5964 18.6473L18.5984 18.6451C18.711 18.5442 18.8447 18.4659 18.9918 18.4146C19.1389 18.3633 19.2965 18.3402 19.4542 18.3465H19.9934V18.3535C20.4276 18.4074 20.771 18.7819 20.771 19.2328V21.0223C20.771 21.7911 20.1438 22.4184 19.375 22.4184C18.6062 22.4184 17.9789 21.7911 17.9789 21.0223V20.0917C17.9789 19.6613 17.8512 19.2391 17.6104 18.8712C17.3696 18.5033 17.0248 18.2037 16.618 18.0058C16.2111 17.8079 15.7593 17.7196 15.3096 17.7495C14.8599 17.7794 14.4257 17.9263 14.0537 18.1749L13.9911 18.2177C13.5584 18.4966 13.2029 18.8677 12.9504 19.3031C12.6979 19.7385 12.5553 20.2247 12.5342 20.7244C12.5132 21.2241 12.6143 21.7209 12.8292 22.1748C13.0442 22.6286 13.3667 23.0261 13.7745 23.3374L13.8173 23.37C13.8173 23.37 18.8616 27.0576 19.8008 27.6429C19.9642 27.7497 20.0911 27.9013 20.1673 28.0788C20.2435 28.2563 20.2661 28.4525 20.2324 28.6421C20.1988 28.8318 20.1102 29.0082 19.9775 29.1496C19.8448 29.291 19.6737 29.3912 19.4857 29.437L19.4757 29.44C18.9243 29.5836 17.4613 29.9425 16.7482 30.1217C15.5624 30.4273 15.0175 30.9772 14.9641 31.0322L14.9583 31.0392C14.8246 31.1917 14.7292 31.3754 14.6795 31.5744C14.6297 31.7734 14.6271 31.9819 14.6716 32.1822C14.7162 32.3825 14.8067 32.5688 14.9363 32.725C15.0658 32.8813 15.23 33.0029 15.4168 33.0797L15.4238 33.0828C15.755 33.2209 16.1169 33.2698 16.4726 33.2243C18.5044 32.9188 19.6767 32.5934 20.7683 32.2897L20.8083 32.2797C21.1339 32.2024 21.4708 32.2024 21.7964 32.2797L21.8364 32.2897C22.628 32.5078 24.5211 33.0458 27.0033 33.2243C27.359 33.2698 27.7208 33.2209 28.052 33.0828L28.059 33.0797C28.2458 33.0029 28.41 32.8813 28.5396 32.725C28.6691 32.5688 28.7597 32.3825 28.8043 32.1822C28.8488 31.9819 28.8462 31.7734 28.7964 31.5744C28.7466 31.3754 28.6512 31.1917 28.5176 31.0392L28.5117 31.0322C28.4584 30.9772 27.9135 30.4273 26.7276 30.1217C26.0145 29.9425 24.5515 29.5836 24.0001 29.44L23.9901 29.437C23.8021 29.3912 23.6311 29.291 23.4983 29.1496C23.3656 29.0082 23.2771 28.8318 23.2434 28.6421C23.2097 28.4525 23.2323 28.2563 23.3085 28.0788C23.3848 27.9013 23.5116 27.7497 23.675 27.6429C24.5475 27.1029 28.6042 24.1235 29.6709 23.37L29.7137 23.337C30.1215 23.0261 30.444 22.6286 30.659 22.1748C30.8739 21.7209 30.975 21.2241 30.954 20.7244C30.9329 20.2247 30.7903 19.7385 30.5378 19.3031C30.2853 18.8677 29.9298 18.4966 29.4971 18.2177L29.4345 18.1749C29.0625 17.9263 28.6283 17.7794 28.1786 17.7495C27.7289 17.7196 27.277 17.8079 26.8702 18.0058C26.4633 18.2037 26.1186 18.5033 25.8778 18.8712C25.637 19.2391 25.5092 19.6613 25.5092 20.0917V21.0223C25.5092 21.7911 24.882 22.4184 24.1132 22.4184C23.3444 22.4184 22.7171 21.7911 22.7171 21.0223V19.2328C22.7171 18.7819 23.0606 18.4074 23.4948 18.3535V18.3465H24.034C24.1916 18.3402 24.3493 18.3633 24.4963 18.4146C24.6434 18.4659 24.7772 18.5442 24.8898 18.6451L24.8918 18.6473C25.0634 18.8161 25.2904 18.9198 25.5436 18.9198C26.0467 18.9198 26.4551 18.5114 26.4551 18.0083C26.4551 17.7551 26.3513 17.5126 26.1682 17.3334L26.1504 17.3156C25.4923 16.6574 24.5089 16.2976 23.6929 16.2976H21.2417C20.2785 16.2976 19.5025 17.0736 19.5025 18.0368L19.5017 20.9348C19.5017 21.7036 19.2114 22 19.0161 22C18.8209 22 18.5306 21.7036 18.5306 20.9348V20.9025C18.5306 20.9025 18.8384 19.2551 19.0117 18.7443C19.4232 17.5586 20.4273 16.0155 22.173 16.0155H32.1473C33.5689 16.0155 34.3579 17.4648 34.0522 18.2423L34.0522 16.2423Z" fill="white"/>
          </svg>
        </div>
      )
    },
    {
      name: 'Одноклассники',
      icon: (
        <div className="w-12 h-12 bg-[#FF9800] rounded-full flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 11.5C26.7614 11.5 29 9.26142 29 6.5C29 3.73858 26.7614 1.5 24 1.5C21.2386 1.5 19 3.73858 19 6.5C19 9.26142 21.2386 11.5 24 11.5Z" fill="white"/>
            <path d="M24 15.5C19.0294 15.5 15 11.4706 15 6.5C15 1.52944 19.0294 -2.5 24 -2.5C28.9706 -2.5 33 1.52944 33 6.5C33 11.4706 28.9706 15.5 24 15.5ZM24 4.5C21.2386 4.5 19 6.73858 19 9.5C19 12.2614 21.2386 14.5 24 14.5C26.7614 14.5 29 12.2614 29 9.5C29 6.73858 26.7614 4.5 24 4.5Z" fill="white"/>
            <path d="M35 24C34 23 31.5 23 30.5 24C24 30.5 17 30.5 10.5 24C9.5 23 7 23 6 24C5 25 5 27.5 6 28.5C10.5 33 16.5 35 24 35C31.5 35 37.5 33 42 28.5C43 27.5 43 25 42 24C41 23 36 25 35 24Z" fill="white"/>
            <path d="M30.5 34L24 28L17.5 34C16.5 35 14 35 13 34C12 33 12 30.5 13 29.5L21 23C23 22 25 22 27 23L35 29.5C36 30.5 36 33 35 34C34 35 31.5 35 30.5 34Z" fill="white"/>
          </svg>
        </div>
      )
    },
    {
      name: 'Rutube',
      icon: (
        <div className="w-12 h-12 bg-[#102042] rounded-full flex items-center justify-center relative">
          <span className="text-white font-bold text-2xl">R</span>
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#ff2d55] rounded-full"></span>
        </div>
      )
    },
    {
      name: 'Другие платформы',
      icon: (
        <div className="w-12 h-12 bg-white/70 rounded-full flex items-center justify-center">
          <span className="text-gray-800 font-bold text-lg">+</span>
        </div>
      )
    }
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
              Не важно, где ты продаешь
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {marketplaces.map((platform, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-center gap-4 hover:bg-white/20 transition-all duration-300">
                  {platform.icon}
                  <div className="text-white font-medium">{platform.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Вторая колонка - Рекламные платформы */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="font-['Carter_One'] text-2xl text-white mb-6 text-center">
              Не важно, где размещаешь рекламу
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {platformLogos.map((platform, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-center gap-4 hover:bg-white/20 transition-all duration-300">
                  {platform.icon}
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

