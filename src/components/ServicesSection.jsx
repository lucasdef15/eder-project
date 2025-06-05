import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Info } from 'lucide-react';

// Registrando plugins GSAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Dados dos serviços (sem alterações)
const services = [
  {
    title: 'Terapias',
    href: '/blog/servicos/terapias',
    description: 'Sessões individuais para autoconhecimento e bem-estar.',
    image: '/assets/images/terapia1.png',
    color: 'from-emerald-400 to-teal-600',
    icon: '🧠',
  },
  {
    title: 'Terapia de Casal',
    href: '/blog/servicos/terapia-de-casal',
    description: 'Fortalecimento da comunicação e resolução de conflitos.',
    image: '/assets/images/terapia2.png',
    color: 'from-pink-400 to-rose-600',
    icon: '💞',
  },
  {
    title: 'Adolescente e Adulto',
    href: '/blog/servicos/adolescente-e-adulto',
    description: 'Suporte psicológico para jovens e adultos.',
    image: '/assets/images/terapia3.png',
    color: 'from-blue-400 to-indigo-600',
    icon: '👥',
  },
  {
    title: 'Sobre DBT',
    href: '/blog/servicos/dbt',
    description: 'Terapia Dialética Comportamental para regulação emocional.',
    image: '/assets/images/terapia4.png',
    color: 'from-amber-400 to-orange-600',
    icon: '🌊',
  },
  {
    title: 'Dependentes Químicos',
    href: '/blog/servicos/dependentes-quimicos',
    description: 'Acompanhamento para recuperação de dependência.',
    image: '/assets/images/terapia5.png',
    color: 'from-purple-400 to-violet-600',
    icon: '🌱',
  },
  {
    title: 'Sobre CNV',
    href: '/blog/servicos/sobre-cnv',
    description: 'Comunicação empática para conexões mais fortes.',
    image: '/assets/images/cnv.jpg',
    color: 'from-cyan-400 to-blue-600',
    icon: '💬',
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCarouselView, setIsCarouselView] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Debounce para o evento de resize
  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsCarouselView(window.innerWidth < 768);
      }, 100); // Ajuste o delay conforme necessário
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animações GSAP otimizadas
  useGSAP(() => {
    const cards = cardsRef.current.filter((card) => card);

    // Animação do título e subtítulo
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );

    // Animação dos cards (grid)
    if (!isCarouselView) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          },
        }
      );
    } else {
      // Animação do carrossel
      gsap.fromTo(
        cards[activeIndex],
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
      );
    }

    // Partículas reduzidas e simplificadas
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle) => {
      gsap.to(particle, {
        x: 'random(-50, 50)', // Maior amplitude de movimento
        y: 'random(-50, 50)', // Maior amplitude de movimento
        scale: 'random(0.8, 1.2)', // Variação de escala para pulsação
        opacity: 'random(0.2, 0.6)', // Variação de opacidade
        rotation: 'random(-30, 30)', // Adiciona leve rotação
        duration: 'random(1.5, 3)', // Animação mais rápida
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  }, [isCarouselView, activeIndex]);

  // Navegação no carrossel
  const navigateCarousel = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const newIndex =
      direction === 'next'
        ? (activeIndex + 1) % services.length
        : (activeIndex - 1 + services.length) % services.length;

    const cards = cardsRef.current.filter((card) => card);

    gsap.to(cards[activeIndex], {
      opacity: 0.4,
      scale: 0.9,
      duration: 0.5,
      ease: 'power2.inOut',
    });

    gsap.fromTo(
      cards[newIndex],
      { opacity: 0.4, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => setIsAnimating(false),
      }
    );

    setActiveIndex(newIndex);
  };

  // Hover simplificado
  const handleMouseEnter = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, { scale: 1.05, duration: 0.4, ease: 'power2.out' });
    gsap.to(card.querySelector('.card-gradient'), {
      opacity: 0.95,
      duration: 0.4,
    });
  };

  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, { scale: 1, duration: 0.4, ease: 'power2.out' });
    gsap.to(card.querySelector('.card-gradient'), {
      opacity: 0.85,
      duration: 0.4,
    });
  };

  // Partículas reduzidas (10 em vez de 20)
  const renderParticles = () => {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      // Aumenta aqui
      const size = Math.random() * 8 + 4;
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;

      particles.push(
        <div
          key={i}
          className='particle absolute rounded-full bg-white'
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left,
            top,
            opacity: 0.3,
          }}
        />
      );
    }
    return particles;
  };

  return (
    <section
      ref={containerRef}
      className='relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900'
    >
      <div className='absolute inset-0 pointer-events-none'>
        {renderParticles()}
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center text-white mb-16'>
          <h2
            ref={titleRef}
            className='text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-300 pb-2'
          >
            Nossos Serviços
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto my-4 rounded-full' />
          <p
            ref={subtitleRef}
            className='text-lg md:text-xl mt-3 opacity-80 max-w-2xl mx-auto font-light'
          >
            Explore como podemos transformar sua vida com nossas soluções
            especializadas
          </p>
        </div>

        {isCarouselView ? (
          <div className='relative w-full max-w-sm mx-auto overflow-hidden rounded-2xl'>
            <div
              ref={cardsContainerRef}
              className='flex transition-transform duration-500 ease-in-out'
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className='flex-shrink-0 w-full h-[380px] relative rounded-2xl overflow-hidden shadow-lg'
                >
                  <div
                    className='absolute inset-0 bg-cover bg-center'
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div
                    className={`card-gradient absolute inset-0 bg-gradient-to-t ${service.color} opacity-85`}
                    style={{ mixBlendMode: 'multiply' }}
                  />
                  <div className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent' />
                  <div className='relative z-10 h-full flex flex-col justify-end p-6 text-white'>
                    <div className='absolute top-4 right-4 text-3xl'>
                      {service.icon}
                    </div>
                    <h3 className='text-2xl font-bold mb-2'>{service.title}</h3>
                    <p className='text-sm opacity-90 leading-relaxed mb-4'>
                      {service.description}
                    </p>
                    <button
                      onClick={() => navigate(service.href)}
                      className='self-start flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 text-sm font-medium border border-white/30'
                      aria-label={`Explorar ${service.title}`}
                    >
                      Explorar <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Controles */}
            <div className='flex justify-center items-center gap-6 mt-6'>
              <button
                onClick={() => navigateCarousel('prev')}
                className='p-4 rounded-full bg-white/15 backdrop-blur-md hover:bg-white/30 transition-colors duration-300'
                disabled={isAnimating}
                aria-label='Serviço anterior'
              >
                <ChevronLeft size={24} className='text-white' />
              </button>

              <div className='flex gap-3'>
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (index !== activeIndex && !isAnimating) {
                        const direction = index > activeIndex ? 'next' : 'prev';
                        navigateCarousel(direction);
                      }
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-white w-8 rounded-full'
                        : 'bg-white/50'
                    }`}
                    aria-label={`Ir para serviço ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => navigateCarousel('next')}
                className='p-4 rounded-full bg-white/15 backdrop-blur-md hover:bg-white/30 transition-colors duration-300'
                disabled={isAnimating}
                aria-label='Próximo serviço'
              >
                <ChevronRight size={24} className='text-white' />
              </button>
            </div>
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className='relative w-full h-[380px] rounded-2xl shadow-lg overflow-hidden'
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                style={{ willChange: 'transform, opacity' }}
              >
                <div
                  className='absolute inset-0 bg-cover bg-center'
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div
                  className={`card-gradient absolute inset-0 bg-gradient-to-t ${service.color} opacity-85`}
                  style={{ mixBlendMode: 'multiply' }}
                />
                <div className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent' />
                <div className='relative z-10 h-full flex flex-col justify-end p-6 text-white'>
                  <div className='absolute top-6 right-6 text-4xl'>
                    {service.icon}
                  </div>
                  <h3 className='text-2xl font-bold mb-3'>{service.title}</h3>
                  <p className='text-sm opacity-90 leading-relaxed mb-4'>
                    {service.description}
                  </p>
                  <button
                    onClick={() => navigate(service.href)}
                    className='self-start flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 text-sm font-medium border border-white/30'
                    aria-label={`Explorar ${service.title}`}
                  >
                    Explorar <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* <div className='mt-16 text-center'>
          <button
            onClick={() => navigate('/blog/servicos')}
            className='inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all duration-300 group'
          >
            <span>Ver todos os serviços</span>
            <div className='w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300'>
              <Info size={16} className='text-white' />
            </div>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;
