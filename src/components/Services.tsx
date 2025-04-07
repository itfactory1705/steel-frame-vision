
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ServicesData } from '@/data/services';

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
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-steel-800">{service.title}</h3>
              <p className="text-steel-600 mb-6 flex-grow">{service.description}</p>
              <Button 
                asChild 
                variant="outline" 
                className="mt-2 border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white"
              >
                <Link to={`/services/${service.id}`}>Подробнее</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
