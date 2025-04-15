
import { Link2, Activity, Shield, BarChart3 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Link2 className="w-12 h-12 mb-6 text-[#5201fe]" />,
      title: "Управление ссылками",
      description: "Создавайте, отслеживайте и оптимизируйте все ваши рекламные ссылки в одном удобном интерфейсе."
    },
    {
      icon: <Activity className="w-12 h-12 mb-6 text-[#5201fe]" />,
      title: "Отслеживание в реальном времени",
      description: "Получайте данные о производительности рекламных кампаний сразу же после их запуска."
    },
    {
      icon: <Shield className="w-12 h-12 mb-6 text-[#5201fe]" />,
      title: "Защита от накруток",
      description: "Наша система автоматически определяет и фильтрует ненастоящий трафик."
    },
    {
      icon: <BarChart3 className="w-12 h-12 mb-6 text-[#5201fe]" />,
      title: "Полный контроль",
      description: "Вся история ваших рекламных кампаний всегда под рукой."
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-r from-[#e5deff]/80 via-[#ffffff] to-[#d6bcfa]/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-12">
            <div className="text-center">
              <div className="font-montserrat text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-6">
                <span className="relative inline-block">
                  <span className="relative z-10 px-1 text-[#5201fe] border-b-2 border-[#78e29e]">
                    Сервис для тех, кто покупает рекламу у блогеров и хочет видеть результат
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#5201fe]/20 to-[#78e29e]/20"></span>
                </span>
              </div>
              <div className="flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-[#5201fe] to-[#78e29e] my-2"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 text-center rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-neutral-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
