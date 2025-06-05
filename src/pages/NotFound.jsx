import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Registrando plugin GSAP
gsap.registerPlugin(ScrollTrigger);

const NotFound = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  // Animações GSAP
  useGSAP(() => {
    // Animação do título
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

    // Animação do subtítulo
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

    // Animação do botão
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );

    // Animação das partículas mais dinâmica
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
  }, []);

  // Partículas (aumentando a quantidade para mais impacto)
  const renderParticles = () => {
    const particles = [];
    for (let i = 0; i < 80; i++) {
      // Aumentado de 50 para 80
      const size = Math.random() * 10 + 5; // Tamanhos maiores
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;

      particles.push(
        <div
          key={i}
          className='particle absolute rounded-full bg-gradient-to-r from-cyan-300 to-violet-300' // Gradiente nas partículas
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left,
            top,
            opacity: 0.4,
          }}
        />
      );
    }
    return particles;
  };

  return (
    <section
      ref={containerRef}
      className='relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900 flex items-center justify-center'
    >
      <div className='absolute inset-0 pointer-events-none'>
        {renderParticles()}
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center text-white'>
        <h2
          ref={titleRef}
          className='text-6xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-300 pb-4'
        >
          404
        </h2>
        <div className='w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto my-6 rounded-full' />
        <p
          ref={subtitleRef}
          className='text-lg md:text-xl mt-3 opacity-80 max-w-2xl mx-auto font-light'
        >
          Oops! Parece que a página que você está procurando não existe ou foi
          movida.
        </p>
        <div ref={buttonRef} className='mt-12'>
          <button
            onClick={() => navigate('/')}
            className='inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all duration-300 group'
            aria-label='Voltar para a página inicial'
          >
            <ArrowLeft
              size={16}
              className='group-hover:-translate-x-1 transition-transform'
            />
            <span>Voltar para a Home</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
