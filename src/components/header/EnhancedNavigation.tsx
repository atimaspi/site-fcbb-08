
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface NavItem {
  label: string;
  href?: string;
  sectionId?: string;
  submenu?: Array<{
    label: string;
    href: string;
  }>;
}

const navItems: NavItem[] = [
  { label: 'Início', href: '/' },
  { 
    label: 'Sobre a FCBB',
    submenu: [
      { label: 'História', href: '/sobre/historia' },
      { label: 'Missão e Visão', href: '/sobre/missao-visao' },
      { label: 'Direção', href: '/sobre/direcao' },
    ]
  },
  { 
    label: 'Competições',
    submenu: [
      { label: 'Liga Nacional', href: '/competicoes/liga-nacional' },
      { label: 'Taça de Cabo Verde', href: '/competicoes/taca' },
      { label: 'Super Taça', href: '/competicoes/super-taca' },
    ]
  },
  { label: 'Equipas', sectionId: 'equipas' },
  { label: 'Notícias', href: '/noticias' },
  { label: 'Contactos', href: '/contacto' },
];

interface EnhancedNavigationProps {
  isScrolled: boolean;
  isMobile?: boolean;
  onCloseMenu?: () => void;
}

const EnhancedNavigation = ({ isScrolled, isMobile = false, onCloseMenu }: EnhancedNavigationProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { scrollToSection } = useSmoothScroll();

  const isActive = (item: NavItem) => {
    if (item.href) {
      return location.pathname === item.href;
    }
    return false;
  };

  const handleItemClick = (item: NavItem) => {
    if (item.sectionId) {
      scrollToSection(item.sectionId);
      if (onCloseMenu) onCloseMenu();
    }
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  if (isMobile) {
    return (
      <nav className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 rounded-b-2xl shadow-2xl mt-2">
        <div className="py-6 space-y-2 max-h-96 overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.href || item.sectionId ? (
                item.href ? (
                  <Link
                    to={item.href}
                    className={`block px-6 py-3 font-semibold rounded-lg mx-3 transition-all duration-300 ${
                      isActive(item)
                        ? 'text-cv-blue bg-cv-blue/10 border-l-4 border-cv-blue'
                        : 'text-gray-700 hover:text-cv-blue hover:bg-cv-blue/5'
                    }`}
                    onClick={onCloseMenu}
                    aria-current={isActive(item) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleItemClick(item)}
                    className="block w-full text-left px-6 py-3 font-semibold rounded-lg mx-3 text-gray-700 hover:text-cv-blue hover:bg-cv-blue/5 transition-all duration-300"
                  >
                    {item.label}
                  </button>
                )
              ) : (
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="block w-full text-left px-6 py-3 font-semibold rounded-lg mx-3 text-gray-700 hover:text-cv-blue hover:bg-cv-blue/5 transition-all duration-300"
                  aria-expanded={activeDropdown === item.label}
                  aria-haspopup="true"
                >
                  <div className="flex items-center justify-between">
                    {item.label}
                    <motion.div
                      animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </div>
                </button>
              )}
              
              {item.submenu && activeDropdown === item.label && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-6 bg-gray-50 rounded-lg ml-6 mr-3 mt-2 overflow-hidden"
                >
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.href}
                      className="block px-4 py-3 text-sm text-gray-600 hover:text-cv-blue hover:bg-white transition-colors rounded font-medium focus:outline-none focus:ring-2 focus:ring-cv-blue focus:ring-offset-2"
                      onClick={onCloseMenu}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <nav className="hidden lg:flex items-center space-x-2">
      {navItems.map((item) => (
        <div key={item.label} className="relative group">
          {item.href || item.sectionId ? (
            item.href ? (
              <Link
                to={item.href}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 relative ${
                  isActive(item)
                    ? isScrolled 
                      ? 'text-cv-blue after:scale-x-100' 
                      : 'text-cv-yellow after:scale-x-100'
                    : isScrolled 
                      ? 'text-gray-700 hover:text-cv-blue' 
                      : 'text-white hover:text-cv-yellow'
                } after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
                aria-current={isActive(item) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ) : (
              <button
                onClick={() => handleItemClick(item)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 relative ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-cv-blue' 
                    : 'text-white hover:text-cv-yellow'
                } after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left focus:outline-none focus:ring-2 focus:ring-cv-blue focus:ring-offset-2`}
              >
                {item.label}
              </button>
            )
          ) : (
            <button
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-1 relative ${
                isScrolled 
                  ? 'text-gray-700 hover:text-cv-blue' 
                  : 'text-white hover:text-cv-yellow'
              } after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left focus:outline-none focus:ring-2 focus:ring-cv-blue focus:ring-offset-2`}
              aria-expanded={activeDropdown === item.label}
              aria-haspopup="true"
            >
              <span>{item.label}</span>
              <motion.div
                animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </button>
          )}
          
          {item.submenu && (
            <motion.div
              className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-2xl border border-gray-100 py-2 z-50 mt-2"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ 
                opacity: activeDropdown === item.label ? 1 : 0,
                y: activeDropdown === item.label ? 0 : -10,
                scale: activeDropdown === item.label ? 1 : 0.95,
                display: activeDropdown === item.label ? 'block' : 'none'
              }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
              role="menu"
              aria-label={`Submenu ${item.label}`}
            >
              {item.submenu.map((subItem, index) => (
                <motion.div
                  key={subItem.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={subItem.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-cv-blue/5 hover:text-cv-blue transition-all duration-200 font-medium border-b border-gray-100 last:border-b-0 focus:outline-none focus:ring-2 focus:ring-cv-blue focus:ring-offset-2"
                    role="menuitem"
                  >
                    {subItem.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default EnhancedNavigation;
