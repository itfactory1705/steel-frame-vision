
import React from 'react';
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-steel-800 text-white overflow-hidden"
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-steel-900/80 to-steel-800/70"></div>
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-white mb-6 leading-tight">
            Современные решения для строительства из металлокаркаса
          </h1>
          <p className="text-xl md:text-2xl text-steel-100 mb-10">
            Мы проектируем и строим надёжные, экономичные и долговечные здания с использованием передовых технологий металлокаркасного строительства
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="btn-accent">Наши услуги</a>
            <a href="#contact" className="btn-secondary">Связаться с нами</a>
          </div>
          
          {/* Scroll indicator */}
          <div className="hidden md:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 flex-col items-center">
            <span className="text-steel-200 mb-2">Прокрутите вниз</span>
            <div className="w-6 h-10 border-2 border-steel-200 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
