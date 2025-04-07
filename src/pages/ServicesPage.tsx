
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ServicesData } from '@/data/services';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';

const ServicesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-steel-800 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Наши услуги</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Полный комплекс услуг по проектированию, производству и строительству зданий из металлоконструкций
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ServicesData.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-steel-800">{service.title}</h3>
                <p className="text-steel-600 mb-6 flex-grow">{service.description}</p>
                <div className="mt-auto">
                  <Button 
                    asChild 
                    className="w-full bg-accent-orange hover:bg-accent-orange/90"
                  >
                    <Link to={`/services/${service.id}`}>Подробнее</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Toaster />
    </div>
  );
};

export default ServicesPage;
