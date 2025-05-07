import React, { useState, useEffect } from 'react';
import { Icon } from '../../utils/IconUtil';
import NavItem from '../ui/NavItem';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navbarStrings } from '../../lib/defaultStrings/navbarStrings';

interface NavItem {
  id: string;
  label: string;
  type: 'section' | 'page';
  path?: string; // Usado apenas para type='page'
}

interface NavbarProps {
  items?: NavItem[];
  logo?: {
    text: string;
    subtext?: string;
    path: string;
  };
  contactInfo?: {
    text: string;
    phone: string;
    icon: string;
  };
}

// Estilos CSS para animação da barra colorida
const navLinkStyles = `
  .nav-link {
    position: relative;
  }
  .nav-link:before {
    content: "";
    position: absolute;
    width: 0;
    height: 10px;
    top: -30px;
    left: 50%;
    background-color: #ffffff;
    transition: all 0.5s ease;
  }
  .nav-link:hover:before, .nav-link.active:before {
    width: 100%;
    left: 0;
  }
  @media (max-width: 991px) {
    .nav-link:before {
      display: none;
    }
  }
`;

const Navbar: React.FC<NavbarProps> = ({ 
  items = navbarStrings.items,
  logo = navbarStrings.logo,
  contactInfo = navbarStrings.contactInfo
}) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [windowWidth, setWindowWidth] = useState(0);
  
  useEffect(() => {
    // Inicializar o windowWidth somente no cliente
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      
      // Detectar seção ativa durante o scroll apenas se estivermos na página inicial
      if (pathname === '/') {
        const sectionIds = items.filter(item => item.type === 'section').map(item => item.id);
        const scrollPosition = window.scrollY + 100; // Offset para melhorar detecção
        
        for (const sectionId of sectionIds) {
          const element = document.getElementById(sectionId);
          if (element) {
            const offsetTop = element.offsetTop;
            const height = element.clientHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items, pathname]);
  
  // Função para detectar a seção ou página ativa
  useEffect(() => {
    // Se estivermos em uma página específica, marcar o item correspondente como ativo
    const currentPageItem = items.find(item => 
      item.type === 'page' && item.path === pathname
    );
    
    if (currentPageItem) {
      setActiveSection(currentPageItem.id);
    } else if (pathname === '/') {
      // Se estivermos na página inicial, o scroll vai determinar a seção ativa
      setActiveSection('home');
    }
  }, [pathname, items]);

  const handleNavigation = (item: NavItem, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (item.type === 'section') {
      // Navegação para seção na mesma página
      const element = document.getElementById(item.id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 70, // ajuste para compensar a altura da navbar
          behavior: 'smooth'
        });
        setActiveSection(item.id);
      } else if (pathname !== '/') {
        // Se a seção não existe na página atual, redireciona para home com âncora
        window.location.href = `/#${item.id}`;
      }
    } else if (item.type === 'page' && item.path) {
      // Navegação para outra página
      window.location.href = item.path;
    }
  };

  // Função para renderizar informações de contato com base no tamanho da tela
  const renderContactInfo = () => {
    if (!contactInfo || windowWidth === 0) return null; // Evita renderizar com windowWidth inválido
    
    // Tela grande: mostrar texto e telefone
    if (windowWidth >= 1500) {
      return (
        <div className="flex items-center">
          <Icon icon={contactInfo.icon} className="text-primary mr-3 text-2xl" />
          <div>
            <p className="text-base font-medium text-gray-600">{contactInfo.text}</p>
            <h4 className="text-black font-bold text-2xl">{contactInfo.phone}</h4>
          </div>
        </div>
      );
    }
    
    // Tela pequena: já está coberta pelo menu mobile
    return null;
  };

  return (
    <nav className={`bg-white shadow-navbar border-t-[5px] border-t-primary sticky z-50 ${
      isSticky ? 'top-0 transition-all duration-300' : 'top-[-100px] transition-all duration-300'
    }`}>
      <style>{navLinkStyles}</style>
      <div className="w-full pr-4">
        <div className="flex items-center justify-between">
          {/* Logo à esquerda */}
          <Link 
            href={logo.path}
            className="bg-primary px-12 py-4 lg:px-12 lg:py-4 flex flex-col items-center"
          >
            <h2 className="text-white font-bold text-3xl text-center w-full">{logo.text}</h2>
            {logo.subtext && (
              <h3 className="text-white font-semibold text-xl text-center w-full tracking-widest">{logo.subtext}</h3>
            )}
          </Link>

          {/* Botão do menu mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
          
          {/* Container para agrupar menu e informações de contato à direita */}
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-grow">
            {/* Menu de navegação */}
            <div className="lg:flex lg:mr-6">
              {items.map((item) => (
                <NavItem 
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  isActive={activeSection === item.id}
                  onClick={(e) => handleNavigation(item, e)}
                  href={item.type === 'page' ? item.path || '#' : `#${item.id}`}
                />
              ))}
            </div>

            {/* Informações de contato */}
            {renderContactInfo()}
          </div>
          
          {/* Menu mobile */}
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white z-50 shadow-lg`}>
            <div className="p-4">
              {items.map((item) => (
                <NavItem 
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  isActive={activeSection === item.id}
                  onClick={(e) => handleNavigation(item, e)}
                  href={item.type === 'page' ? item.path || '#' : `#${item.id}`}
                  isMobile={true}
                />
              ))}
              
              {contactInfo && (
                <div className="flex items-center mt-4 pt-4 border-t border-gray-200">
                  <Icon icon={contactInfo.icon} className="text-primary mr-3 text-2xl flex-shrink-0" />
                  <div className="flex-grow">
                    <p className="text-base font-medium text-gray-600 mb-0.5">{contactInfo.text}</p>
                    <h4 className="text-primary font-bold text-xl break-words">{contactInfo.phone}</h4>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;