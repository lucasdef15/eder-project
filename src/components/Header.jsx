import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CalendarSearch, ChevronRight } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import MainNav from './MainNav';
import MobileNav from './MobileNav';
import UserMenu from './UserMenu';
import { motion, AnimatePresence } from 'framer-motion';

// Botão refinado com design mais moderno
export function ButtonPrimary({ children, onClick, className = '' }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-full px-5 py-2.5 group bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-medium text-sm flex items-center gap-2 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
    >
      <span className='relative z-10'>{children}</span>
      <ChevronRight className='w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1' />
      <div className='absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
    </motion.button>
  );
}

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detectar se a página foi rolada para aplicar efeito de vidro
      setIsScrolled(currentScrollY > 10);

      // Lógica para ocultar/mostrar o header ao rolar
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Rolando para baixo - ocultar com atraso para evitar ocultação acidental
        setShowHeader(false);
      } else {
        // Rolando para cima ou no topo - mostrar imediatamente
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleAgenda = () => {
    navigate('/calendar');
  };

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg ${
            isScrolled
              ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-3'
              : 'bg-white dark:bg-gray-900 py-4'
          }`}
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
            <div className='flex items-center justify-between h-full'>
              {/* Logo - sempre visível e consistente */}
              <div className='flex-shrink-0 flex items-center md:pl-10'>
                <Link
                  to='/'
                  className='flex items-center md:scale-[3] md:ml-0 md:p-1 scale-[2] ml-5'
                >
                  <img
                    src='/assets/images/logoDark.svg'
                    className={`transition-all duration-300 ${
                      isScrolled ? 'h-10' : 'h-12'
                    }`}
                    alt='Logo'
                  />
                </Link>
              </div>

              {/* Navegação principal - desktop */}
              <div className='hidden md:flex items-center justify-center flex-1 px-8'>
                <MainNav className='flex space-x-6' />
              </div>

              {/* Área de ações - direita */}
              <div className='flex items-center space-x-4'>
                {/* Menu do usuário */}
                <div className='flex items-center'>
                  <UserMenu />
                </div>

                {/* Botão de agenda */}
                {user !== null && (
                  <ButtonPrimary onClick={handleAgenda}>
                    {isMobile ? (
                      <CalendarSearch className='w-5 h-5' />
                    ) : (
                      'Agende Sua Consulta'
                    )}
                  </ButtonPrimary>
                )}

                {/* Menu mobile */}
                <div className='md:hidden'>
                  <MobileNav />
                </div>
              </div>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
