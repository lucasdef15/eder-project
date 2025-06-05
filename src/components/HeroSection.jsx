import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const elements = heroRef.current.querySelectorAll('.hero-text');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reseta as propriedades antes de animar de novo
            gsap.set(elements, { opacity: 0, y: 0 });

            // Executa a animação
            gsap.to(elements, {
              opacity: 1,
              y: -100,
              duration: 2,
              ease: 'power4.out',
              stagger: 0.5,
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play().catch((err) => {
        console.error('Erro ao tentar rodar o vídeo:', err);
      });
    }
  }, []);

  return (
    <section className='relative w-full h-screen overflow-hidden'>
      {/* Vídeo de fundo */}
      <video
        ref={videoRef}
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
        autoPlay
        loop
        muted
        playsInline
        preload='auto'
      >
        <source src='/assets/videos/hero.mp4' type='video/mp4' />
        Seu navegador não suporta vídeo.
      </video>

      {/* Overlay escura */}
      <div className='absolute top-0 left-0 w-full h-full bg-black/50 z-[1]' />

      {/* Conteúdo principal */}
      <div
        ref={heroRef}
        className='relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6 sm:px-10'
      >
        <h1 className='hero-text text-3xl sm:text-4xl md:text-6xl font-bold mb-4 opacity-0'>
          Bem-vindo à Mindfulness
        </h1>
        <p className='hero-text text-base sm:text-lg md:text-xl opacity-0 max-w-xl'>
          Cuidado psicológico com empatia, acolhimento e profissionalismo
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
