
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Свяжитесь с нами</h2>
          <p className="section-subtitle mx-auto">
            Готовы обсудить ваш проект? Заполните форму или свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-steel-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-steel-800">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-white rounded-full shadow-sm">
                    <Phone className="w-5 h-5 text-accent-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-steel-800">Телефон</h4>
                    <p className="text-steel-600">+7 (800) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-white rounded-full shadow-sm">
                    <Mail className="w-5 h-5 text-accent-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-steel-800">Email</h4>
                    <p className="text-steel-600">info@steelframe.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-white rounded-full shadow-sm">
                    <MapPin className="w-5 h-5 text-accent-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-steel-800">Адрес</h4>
                    <p className="text-steel-600">г. Москва, ул. Строителей, 10, офис 505</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-white rounded-full shadow-sm">
                    <Clock className="w-5 h-5 text-accent-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium text-steel-800">Часы работы</h4>
                    <p className="text-steel-600">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-steel-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-steel-800">Отправить сообщение</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-steel-700 mb-1">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-white border border-steel-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-steel-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-white border border-steel-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ваш email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-steel-700 mb-1">
                  Тема
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 bg-white border border-steel-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Тема сообщения"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-steel-700 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-white border border-steel-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ваше сообщение"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-accent w-full sm:w-auto"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
