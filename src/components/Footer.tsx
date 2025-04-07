
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-steel-800 text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="text-accent-orange">Steel</span>Frame
            </h3>
            <p className="text-steel-300 mb-6">
              Мы специализируемся на проектировании, производстве и строительстве зданий из металлоконструкций любой сложности.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Навигация</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-steel-300 hover:text-white transition-colors">Главная</a>
              </li>
              <li>
                <a href="#services" className="text-steel-300 hover:text-white transition-colors">Услуги</a>
              </li>
              <li>
                <a href="#about" className="text-steel-300 hover:text-white transition-colors">О нас</a>
              </li>
              <li>
                <a href="#projects" className="text-steel-300 hover:text-white transition-colors">Проекты</a>
              </li>
              <li>
                <a href="#contact" className="text-steel-300 hover:text-white transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Услуги</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-steel-300 hover:text-white transition-colors">Проектирование</a>
              </li>
              <li>
                <a href="#services" className="text-steel-300 hover:text-white transition-colors">Производство металлоконструкций</a>
              </li>
              <li>
                <a href="#services" className="text-steel-300 hover:text-white transition-colors">Строительство зданий</a>
              </li>
              <li>
                <a href="#services" className="text-steel-300 hover:text-white transition-colors">Монтаж металлоконструкций</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Контакты</h4>
            <address className="not-italic text-steel-300 space-y-3">
              <p>г. Москва, ул. Строителей, 10, офис 505</p>
              <p>Телефон: +7 (800) 123-45-67</p>
              <p>Email: info@steelframe.ru</p>
            </address>
          </div>
        </div>
        
        {/* Separator */}
        <div className="border-t border-steel-700 my-8"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-steel-400 mb-4 md:mb-0">
            © {currentYear} SteelFrame. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-steel-400 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-steel-400 hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
