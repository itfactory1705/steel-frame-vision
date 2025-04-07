
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getNavItemProps = (href: string) => {
    const isAnchor = href.startsWith('#');
    const linkClasses = cn(
      "font-medium hover:text-accent-orange transition-colors",
      isScrolled || !isHomePage ? "text-steel-700" : "text-white"
    );

    if (isHomePage && isAnchor) {
      return {
        as: 'a',
        href,
        className: linkClasses
      };
    }

    return {
      as: Link,
      to: isAnchor ? `/${href}` : href,
      className: linkClasses
    };
  };

  const navItems = [
    { name: 'Главная', href: isHomePage ? '#home' : '/' },
    { name: 'Услуги', href: isHomePage ? '#services' : '/services' },
    { name: 'О нас', href: '#about' },
    { name: 'Проекты', href: '#projects' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled || !isHomePage ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-steel-800">
            <span className="text-accent-orange">Steel</span>Frame
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(item => {
            const { as: Component, ...props } = getNavItemProps(item.href);
            return <Component key={item.name} {...props}>{item.name}</Component>;
          })}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={isScrolled || !isHomePage ? "text-steel-800" : "text-white"} size={24} />
          ) : (
            <Menu className={isScrolled || !isHomePage ? "text-steel-800" : "text-white"} size={24} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden absolute w-full bg-white shadow-md transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          {navItems.map(item => {
            const { as: Component, ...props } = getNavItemProps(item.href);
            return (
              <Component 
                key={item.name} 
                {...props}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Component>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
