
import { Link2, Activity, Shield, BarChart3 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Link2 className="w-12 h-12 mb-6" />,
      title: "Управление ссылками",
      description: "Создавайте, отслеживайте и оптимизируйте все ваши рекламные ссылки в одном удобном интерфейсе."
    },
    {
      icon: <Activity className="w-12 h-12 mb-6" />,
      title: "Отслеживание в реальном времени",
      description: "Получайте данные о производительности рекламных кампаний сразу же после их запуска."
    },
    {
      icon: <Shield className="w-12 h-12 mb-6" />,
      title: "Защита от накруток",
      description: "Наша система автоматически определяет и фильтрует ненастоящий трафик."
    },
    {
      icon: <BarChart3 className="w-12 h-12 mb-6" />,
      title: "Полный контроль",
      description: "Вся история ваших рекламных кампаний всегда под рукой."
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-6 text-4xl md:text-5xl font-bold mb-10">
                <span className="text-gray-800">PRO</span>
                <span className="text-gray-400">→</span>
                <span className="text-gray-800">ВНЕШКАPRO</span>
              </div>
              <div className="flex justify-center">
                <div className="w-16 h-1 bg-black my-2"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 text-center border border-gray-200"
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-neutral-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
