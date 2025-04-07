
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ServicesData } from '@/data/services';
import { Toaster } from '@/components/ui/toaster';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  const serviceData = ServicesData.find(service => service.id === serviceId);
  
  if (!serviceData) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 flex-1 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Услуга не найдена</h1>
          <Button 
            onClick={() => navigate('/services')} 
            className="flex items-center gap-2"
          >
            <ChevronLeft size={16} />
            Вернуться к услугам
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-steel-800 text-white">
        <div className="container-custom">
          <Button 
            variant="ghost" 
            className="text-white mb-6" 
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="mr-2" />
            Назад
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{serviceData.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl">{serviceData.description}</p>
        </div>
      </div>

      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-steel-800">О услуге</h2>
              <div className="prose prose-lg max-w-none">
                {serviceData.content.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-steel-600">{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={serviceData.image} 
                  alt={serviceData.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {serviceData.features && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-steel-800">Особенности</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceData.features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    {feature.icon}
                    <h3 className="text-xl font-bold mt-4 mb-2 text-steel-800">{feature.title}</h3>
                    <p className="text-steel-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-steel-100 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-steel-800">Нужна консультация?</h2>
            <p className="mb-6 text-steel-600">
              Свяжитесь с нами, чтобы получить подробную информацию об этой услуге и узнать, как мы можем помочь с вашим проектом.
            </p>
            <Button 
              onClick={() => navigate('/#contact')}
              className="bg-accent-orange hover:bg-accent-orange/90"
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <Toaster />
    </div>
  );
};

export default ServiceDetail;
