
import React from 'react';
import { Building, Construction, Home, Truck, Hammer, Wrench } from 'lucide-react';

const ServicesData = [
  {
    icon: <Building className="w-10 h-10 text-accent-orange" />,
    title: 'Проектирование',
    description: 'Разработка полного комплекта проектной документации для объектов любой сложности с учетом всех требований и норм.'
  },
  {
    icon: <Construction className="w-10 h-10 text-accent-orange" />,
    title: 'Производство металлоконструкций',
    description: 'Изготовление металлоконструкций на собственном производстве с соблюдением всех технологических требований.'
  },
  {
    icon: <Home className="w-10 h-10 text-accent-orange" />,
    title: 'Строительство зданий',
    description: 'Полный цикл строительства зданий из металлоконструкций от фундамента до отделки.'
  },
  {
    icon: <Truck className="w-10 h-10 text-accent-orange" />,
    title: 'Логистика',
    description: 'Доставка металлоконструкций на объект в любую точку страны собственным транспортом.'
  },
  {
    icon: <Hammer className="w-10 h-10 text-accent-orange" />,
    title: 'Монтаж металлоконструкций',
    description: 'Профессиональный монтаж металлоконструкций с использованием современной техники и оборудования.'
  },
  {
    icon: <Wrench className="w-10 h-10 text-accent-orange" />,
    title: 'Техническое обслуживание',
    description: 'Полное техническое обслуживание и ремонт зданий из металлоконструкций.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section bg-steel-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Наши услуги</h2>
          <p className="section-subtitle mx-auto">
            Полный комплекс услуг по проектированию, производству и строительству зданий из металлоконструкций
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServicesData.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-steel-800">{service.title}</h3>
              <p className="text-steel-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
