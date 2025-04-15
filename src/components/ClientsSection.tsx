
import React from 'react';
import { Card } from "@/components/ui/card";

const ClientsSection = () => {
  const platformLogos = [
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
      name: 'Одноклассники',
      icon: (
        <div className="w-12 h-12 bg-[#ee8208] rounded-full flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 60C111.046 60 120 51.0457 120 40C120 28.9543 111.046 20 100 20C88.9543 20 80 28.9543 80 40C80 51.0457 88.9543 60 100 60Z" fill="white"/>
            <path d="M100 75C79.5867 75 63 58.4133 63 38C63 17.5867 79.5867 1 100 1C120.413 1 137 17.5867 137 38C137 58.4133 120.413 75 100 75ZM100 20C90.075 20 83 27.075 83 37C83 46.925 90.075 54 100 54C109.925 54 117 46.925 117 37C117 27.075 109.925 20 100 20Z" fill="white"/>
            <path d="M150 103C147 100 142 100 139 103C115 127 85 127 61 103C58 100 53 100 50 103C47 106 47 111 50 114C65 129 84 136.5 100 136.5C116 136.5 135 129 150 114C153 111 153 106 150 103Z" fill="white"/>
            <path d="M136.5 145L100 120L63.5 145C60 147.5 55 146.5 52.5 143C50 139.5 51 134.5 54.5 132L91 107C96.4051 103.362 103.595 103.362 109 107L145.5 132C149 134.5 150 139.5 147.5 143C145 146.5 140 147.5 136.5 145Z" fill="white"/>
          </svg>
        </div>
      )
    },
    {
      name: 'Вконтакте',
      icon: (
        <div className="w-12 h-12 bg-[#0077FF] rounded-full flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M162 138C159 142 154 146 148 150C142 154 136 157 131 159C126 161 120 162 114 162H99C93 162 87 161 82 159C77 157 71 154 65 150C59 146 54 142 51 138L49 136C50 136 51 137 53 138C55 139 57 140 59 139C61 138 63 136 65 133C67 130 68 127 68 125C68 124 69 122 71 119C73 116 76 112 78 108C80 104 81 100 82 97C83 94 83 91 83 89C83 85 82 82 81 80C80 78 78 77 76 76C74 75 72 75 70 75C68 75 67 75 66 75H58C57 75 55 76 53 76C51 76 49 77 47 79C45 81 43 83 42 86C41 89 40 92 40 96V99C40 105 41 110 43 116C45 122 48 127 51 132C54 137 58 142 63 146C68 150 73 154 78 157C83 160 89 162 94 164C99 166 104 167 109 167H123C127 167 131 166 135 164C139 162 142 159 144 155C145 153 145 151 146 149C147 147 147 145 147 144C147 143 147 141 147 140C147 139 146 137 146 135C146 133 146 131 147 130C148 129 148 127 149 126C150 125 151 125 152 124C153 123 153 123 154 122C155 121 156 121 156 122C159 124 162 127 163 131C164 135 165 139 165.5 143.5C166 148 165.5 152 165 155C164.5 158 163 161 162 163V138Z" fill="white"/>
          </svg>
        </div>
      )
    },
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
      name: 'TikTok',
      icon: (
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.8334 10.5C22.1667 12.1667 25.0834 12.3334 25.0834 12.3334V8.75004C25.0834 8.75004 22.5001 8.75004 20.6667 7.00004C19.1334 5.63337 18.6667 3.73337 18.6667 3.73337H15.0834C15.0834 3.73337 15.0834 14.4334 15.0834 16.6667C15.0834 19.6667 13.1834 20.5334 11.9001 20.5334C9.91674 20.5334 8.40007 18.8167 8.40007 17.0334C8.40007 15.05 9.91674 13.4667 11.9001 14C11.9001 11.6667 11.9001 9.45004 11.9001 9.33337C9.21674 9.21671 6.41674 11.4334 6.41674 17.15C6.41674 22.1667 10.2334 23.3334 11.9001 23.3334C14.0001 23.3334 18.3334 22.1667 18.3334 16.6667C18.3334 14.5834 18.3334 12.5 18.3334 12.5" stroke="#00FFF0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.8334 10.5C22.1667 12.1667 25.0834 12.3334 25.0834 12.3334V8.75004C25.0834 8.75004 22.5001 8.75004 20.6667 7.00004C19.1334 5.63337 18.6667 3.73337 18.6667 3.73337H15.0834C15.0834 3.73337 15.0834 14.4334 15.0834 16.6667C15.0834 19.6667 13.1834 20.5334 11.9001 20.5334C9.91674 20.5334 8.40007 18.8167 8.40007 17.0334C8.40007 15.05 9.91674 13.4667 11.9001 14C11.9001 11.6667 11.9001 9.45004 11.9001 9.33337C9.21674 9.21671 6.41674 11.4334 6.41674 17.15C6.41674 22.1667 10.2334 23.3334 11.9001 23.3334C14.0001 23.3334 18.3334 22.1667 18.3334 16.6667C18.3334 14.5834 18.3334 12.5 18.3334 12.5" stroke="#FF004F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0.1 3"/>
            <path d="M19.8334 10.5C22.1667 12.1667 25.0834 12.3334 25.0834 12.3334V8.75004C25.0834 8.75004 22.5001 8.75004 20.6667 7.00004C19.1334 5.63337 18.6667 3.73337 18.6667 3.73337H15.0834C15.0834 3.73337 15.0834 14.4334 15.0834 16.6667C15.0834 19.6667 13.1834 20.5334 11.9001 20.5334C9.91674 20.5334 8.40007 18.8167 8.40007 17.0334C8.40007 15.05 9.91674 13.4667 11.9001 14C11.9001 11.6667 11.9001 9.45004 11.9001 9.33337C9.21674 9.21671 6.41674 11.4334 6.41674 17.15C6.41674 22.1667 10.2334 23.3334 11.9001 23.3334C14.0001 23.3334 18.3334 22.1667 18.3334 16.6667C18.3334 14.5834 18.3334 12.5 18.3334 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3"/>
          </svg>
        </div>
      )
    }
  ];

  return (
    <section id="clients" className="py-20 gradient-accent">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-xl mb-4 text-white font-['Carter_One']">Совсем не важно, где вы размещаете рекламу —</p>
          <h2 className="font-['Carter_One'] text-4xl md:text-5xl font-bold mb-10 text-white">
            Вся аналитика в одном месте
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {platformLogos.map((platform, index) => (
            <Card key={index} className="bg-white/20 backdrop-blur-sm p-8 rounded-xl flex flex-col items-center justify-center hover:scale-105 hover:bg-white/30 transition-all duration-300 border-0 shadow-md">
              <div className="rounded-full bg-white p-2 flex items-center justify-center w-16 h-16 mb-3">
                {platform.icon}
              </div>
              <div className="text-white font-medium mt-2 font-['Carter_One']">{platform.name}</div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-white/90 italic font-['Carter_One']">И другие доступные платформы</p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
