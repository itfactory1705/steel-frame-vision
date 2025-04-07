
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Link, useLocation } from 'react-router-dom';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ServicesData } from '@/data/services';

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

  const navItems = [
    { name: 'Главная', href: isHomePage ? '#home' : '/' },
    { name: 'О нас', href: '#about' },
    { name: 'Проекты', href: '#projects' },
    { name: 'Контакты', href: '#contact' },
  ];

  const renderNavItem = (item: { name: string, href: string }, onClick?: () => void) => {
    const linkClasses = cn(
      "font-medium hover:text-accent-orange transition-colors",
      isScrolled || !isHomePage ? "text-steel-700" : "text-white"
    );

    if (isHomePage && item.href.startsWith('#')) {
      return (
        <a 
          key={item.name}
          href={item.href} 
          className={linkClasses}
          onClick={onClick}
        >
          {item.name}
        </a>
      );
    }

    return (
      <Link 
        key={item.name}
        to={item.href.startsWith('#') ? `/${item.href}` : item.href} 
        className={linkClasses}
        onClick={onClick}
      >
        {item.name}
      </Link>
    );
  };

  // Service dropdown item renderer
  const renderServicesDropdown = () => {
    const dropdownTriggerClasses = cn(
      "flex items-center gap-1 font-medium hover:text-accent-orange transition-colors cursor-pointer",
      isScrolled || !isHomePage ? "text-steel-700" : "text-white"
    );

    return (
      <DropdownMenu>
        <DropdownMenuTrigger className={dropdownTriggerClasses} asChild>
          <div>
            Услуги <ChevronDown className="h-4 w-4" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="w-56 bg-white" 
          align="start"
          sideOffset={8}
        >
          <DropdownMenuItem asChild>
            <Link to="/services" className="w-full">
              Все услуги
            </Link>
          </DropdownMenuItem>
          {ServicesData.map((service) => (
            <DropdownMenuItem key={service.id} asChild>
              <Link to={`/services/${service.id}`} className="w-full">
                {service.title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

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
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <React.Fragment key={item.name}>
              {renderNavItem(item)}
            </React.Fragment>
          ))}
          {renderServicesDropdown()}
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
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          {navItems.map(item => renderNavItem(item, () => setIsOpen(false)))}
          
          {/* Mobile services dropdown */}
          <div className="flex flex-col space-y-2 pl-4">
            <div className="font-medium text-steel-700">Услуги:</div>
            <Link 
              to="/services" 
              className="text-steel-700 hover:text-accent-orange ml-2"
              onClick={() => setIsOpen(false)}
            >
              Все услуги
            </Link>
            {ServicesData.map((service) => (
              <Link 
                key={service.id}
                to={`/services/${service.id}`} 
                className="text-steel-700 hover:text-accent-orange ml-2"
                onClick={() => setIsOpen(false)}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
