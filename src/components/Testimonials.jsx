import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Depoimentos = () => {
  const depoimentos = [
    {
      nome: 'Mariana Alves',
      cargo: 'Empresária',
      depoimento:
        'O Dr. Eder Coimbra me ajudou a superar questões que me acompanhavam há anos.',
      imagem: 'https://picsum.photos/150?random=1',
      estrelas: 5,
    },
    {
      nome: 'Lucas Ferreira',
      cargo: 'Analista de Sistemas',
      depoimento:
        'A terapia com o Eder foi fundamental para que eu aprendesse a lidar com a ansiedade.',
      imagem: 'https://picsum.photos/150?random=2',
      estrelas: 5,
    },
    {
      nome: 'Carla Menezes',
      cargo: 'Professora',
      depoimento:
        'Com muita sensibilidade, o Dr. Eder me ajudou a ressignificar experiências difíceis.',
      imagem: 'https://picsum.photos/150?random=3',
      estrelas: 5,
    },
    {
      nome: 'Rafael Costa',
      cargo: 'Empreendedor',
      depoimento:
        'Durante um momento de crise, encontrei no Dr. Eder um profissional comprometido.',
      imagem: 'https://picsum.photos/150?random=4',
      estrelas: 5,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  const totalItems = depoimentos.length;

  // Verificar tamanho da tela para responsividade
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  // Auto-play com pausa ao passar o mouse
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current, isHovering]);

  // Renderizar estrelas de avaliação
  const renderStars = (count) => {
    return (
      <div className='flex items-center space-x-1'>
        {[...Array(count)].map((_, i) => (
          <span key={i} className='text-amber-400'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-4 h-4'
            >
              <path
                fillRule='evenodd'
                d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        ))}
      </div>
    );
  };

  return (
    <section
      className='py-20 px-6 bg-white'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className='max-w-5xl mx-auto'>
        {/* Cabeçalho minimalista */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-light text-gray-800 mb-3'>
            Depoimentos
          </h2>
          <div className='w-16 h-px bg-gray-300 mx-auto'></div>
        </div>

        {/* Carrossel */}
        <div ref={carouselRef} className='relative overflow-hidden'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className='flex flex-col md:flex-row items-center gap-8 md:gap-12'
            >
              {/* Imagem do depoente */}
              <div className='relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0'>
                <div className='absolute inset-0 rounded-full bg-gray-100'></div>
                <img
                  src={depoimentos[current].imagem}
                  alt={depoimentos[current].nome}
                  className='absolute inset-0 w-full h-full object-cover rounded-full shadow-sm'
                />
              </div>

              {/* Conteúdo do depoimento */}
              <div className='flex-1 text-center md:text-left'>
                <p className='text-gray-700 text-lg md:text-xl font-light italic leading-relaxed mb-6'>
                  "{depoimentos[current].depoimento}"
                </p>

                <div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-4'>
                  <div>
                    <h3 className='text-gray-900 font-medium'>
                      {depoimentos[current].nome}
                    </h3>
                    <p className='text-gray-500 text-sm'>
                      {depoimentos[current].cargo}
                    </p>
                  </div>

                  <div className='hidden md:block w-px h-6 bg-gray-200 mx-2'></div>

                  {renderStars(depoimentos[current].estrelas)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles de navegação - visíveis apenas em hover ou mobile */}
          <div
            className={`flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none transition-opacity duration-300 ${
              isHovering || isMobile ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <button
              onClick={prevSlide}
              className='w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center pointer-events-auto transition-all duration-300 hover:bg-white hover:shadow'
              aria-label='Depoimento anterior'
            >
              <ChevronLeft className='w-5 h-5 text-gray-600' />
            </button>

            <button
              onClick={nextSlide}
              className='w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center pointer-events-auto transition-all duration-300 hover:bg-white hover:shadow'
              aria-label='Próximo depoimento'
            >
              <ChevronRight className='w-5 h-5 text-gray-600' />
            </button>
          </div>
        </div>

        {/* Indicadores minimalistas */}
        <div className='flex justify-center mt-10 space-x-2'>
          {depoimentos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-8 h-1 transition-all duration-300 ${
                current === index ? 'bg-gray-800' : 'bg-gray-200'
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
