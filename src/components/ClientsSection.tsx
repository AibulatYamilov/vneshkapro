
import React from 'react';

const ClientsSection = () => {
  const platformLogos = [
    {
      name: 'Telegram',
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="48" height="48" fill="#ffffff">
          <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375 c0.423-1.298,2.303-14.623,2.521-17.102c0.078-0.973-0.37-1.34-1.04-1.072c-0.851,0.339-8.57,5.223-8.57,5.223 c0,0-3.209-1.107-5.051-1.661c-1.935-0.579-2.154,0.601-2.154,0.601s-0.755,2.237-1.469,3.694 c-0.753,1.572-1.289,2.284-1.289,2.284c0,0,1.45,0.387,2.511,0.939c1.085,0.564,2.41,0.185,2.41,0.185 c0,0,0.332,3.293,0.666,5.126c0.35,1.935,1.156,2.496,1.156,2.496s1,0.549,2.053,0.385 C27.588,36.061,32.484,35.65,32.934,34.375z"/>
        </svg>
      )
    },
    {
      name: 'Вконтакте',
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="48" height="48" fill="#ffffff">
          <path d="M25 2C12.322 2 2 12.322 2 25s10.322 23 23 23 23-10.322 23-23S37.678 2 25 2zm0 4c10.464 0 19 8.536 19 19s-8.536 19-19 19S6 35.464 6 25 14.536 6 25 6zm0 6c-1.837 0-3.635.32-5.295.914-1.42.518-2.648 1.36-3.648 2.347-1.502 1.475-2.265 3.28-2.351 5.241a2 2 0 1 0 4 .086c.052-1.14.48-2.232 1.253-3 .384-.376.83-.684 1.322-.908C22.227 16.615 23.614 16 25 16c1.907 0 3.261.613 4.145 1.504.883.89 1.355 2.086 1.355 3.496 0 1.62-.82 2.765-2.355 3.645C26.227 25.385 25 26.62 25 28v2a2 2 0 1 0 4 0v-1.512c2.234-1.535 4-4.117 4-7.488 0-2.044-.795-3.926-2.109-5.234C29.598 13.477 27.422 12 25 12zm0 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
        </svg>
      )
    },
    {
      name: 'Одноклассники',
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="48" height="48" fill="#ffffff">
          <path d="M25 2C12.318 2 2 12.318 2 25s10.318 23 23 23 23-10.318 23-23S37.682 2 25 2zm0 6c3.453 0 6.25 2.797 6.25 6.25S28.453 20.5 25 20.5s-6.25-2.797-6.25-6.25S21.547 8 25 8zm0 19c5 0 9.406 3.25 9.406 7.25H15.594C15.594 30.25 20 27 25 27z"/>
        </svg>
      )
    },
    {
      name: 'Rutube',
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="48" height="48" fill="#ffffff">
          <path d="M25 2C12.318 2 2 12.318 2 25s10.318 23 23 23 23-10.318 23-23S37.682 2 25 2zm-5 10h10a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H20a3 3 0 0 1-3-3V15a3 3 0 0 1 3-3zm2 5v14h6V17h-6z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="48" height="48" fill="#ffffff">
          <path d="M41 4H9C6.243 4 4 6.243 4 9v32c0 2.757 2.243 5 5 5h32c2.757 0 5-2.243 5-5V9c0-2.757-2.243-5-5-5zm-3.994 18.323c-1.084-.076-2.158-.272-3.208-.585a14.448 14.448 0 0 1-3.016-1.415v9.274c0 4.728-3.472 8.579-7.897 9.456a9.233 9.233 0 0 1-1.777.176c-1.933 0-3.728-.69-5.091-1.907a9.243 9.243 0 0 1-2.815-4.593c-.268-1.263-.213-3.006.258-4.338.647-1.81 2.034-3.296 3.913-4.012 1.549-.594 3.958-.674 5.65-.088.228.076.449.169.666.274v-3.594c.002-.12.02-.238.054-.352a.778.778 0 0 1 .734-.536h3.8a.78.78 0 0 1 .765.637c.024.119.037.24.037.361V28.2c0 1.395.695 2.639 1.765 3.35a5.644 5.644 0 0 0 3.019.896 5.194 5.194 0 0 0 1.651-.256c.933-.295 1.749-1.012 2.04-1.979.098-.324.15-.664.15-1.008v-3.106a.783.783 0 0 1 .616-.768c.133-.025.268-.038.404-.038h3.894a.78.78 0 0 1 .76.621 4.26 4.26 0 0 1 .052.547v2.924c0 1.654-.408 3.237-1.18 4.612-1.086 1.93-2.765 3.288-4.765 3.936a12.327 12.327 0 0 1-4.023.637c-1.08 0-2.147-.132-3.185-.393-2.586-.647-4.728-2.456-5.9-4.899-.647-1.346-.984-2.85-.984-4.367v-9.178a.782.782 0 0 1 .536-.738 11.676 11.676 0 0 0 3.559-1.888c1.023-.815 1.86-1.834 2.41-3.014.18-.39.402-.762.654-1.116.204-.285.438-.552.698-.794.386-.356.916-.516 1.43-.44h.001z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="clients" className="py-20 gradient-accent">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-lg mb-4 text-white font-['Carter_One']">Совсем не важно, где вы размещаете рекламу —</p>
          <h2 className="font-['Carter_One'] text-4xl md:text-5xl font-bold mb-10 text-white">
            Вся аналитика в<br />одном месте
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {platformLogos.map((platform, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm p-8 rounded-xl flex flex-col items-center justify-center hover:bg-white/30 transition-colors duration-300">
              {platform.logo}
              <div className="text-white font-medium mt-2">{platform.name}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-white/80 italic">И другие доступные платформы</p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
