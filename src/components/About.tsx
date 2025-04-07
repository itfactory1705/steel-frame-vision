
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title">О нашей компании</h2>
            <p className="mb-6 text-lg">
              Наша компания специализируется на строительстве объектов из металлокаркаса с 2010 года. За это время мы успешно реализовали более 200 проектов различной сложности и масштаба.
            </p>
            <p className="mb-6 text-lg">
              Мы предлагаем полный комплекс услуг: от проектирования и производства металлоконструкций до монтажа и сдачи объекта "под ключ". Наша команда состоит из опытных инженеров, проектировщиков и строителей, которые гарантируют высокое качество работ на всех этапах.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <span className="block text-4xl font-bold text-accent-orange">12+</span>
                <span className="text-steel-600">Лет опыта</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-accent-orange">200+</span>
                <span className="text-steel-600">Проектов</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-accent-orange">50+</span>
                <span className="text-steel-600">Специалистов</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-accent-orange">15+</span>
                <span className="text-steel-600">Регионов</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Steel frame construction" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute bottom-8 -left-8 w-64 h-64 bg-accent-orange rounded-lg -z-10"></div>
            <div className="absolute top-8 -right-8 w-48 h-48 bg-steel-300 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
