import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export function ButtonSecondary({ children, onClick }) {
  return (
    <Button
      variant='secondary'
      onClick={onClick}
      className='rounded-full bg-emerald-500 text-white cursor-pointer px-6 py-4 hover:bg-emerald-700 transition-all text-base font-semibold shadow-md'
    >
      {children}
    </Button>
  );
}

export function ButtonIcon() {
  return (
    <Button
      variant='outline'
      size='icon'
      className='border-emerald-500 text-emerald-700 cursor-pointer bg-white hover:bg-emerald-700 hover:text-white transition-all shadow'
    >
      <FaWhatsapp />
    </Button>
  );
}

const BookSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });

    tl.from('.book-heading', {
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    })
      .from(
        '.book-paragraph',
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.5'
      )
      .from(
        '.book-buttons',
        {
          scale: 0.95,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.4'
      );
  }, []);

  const navigate = useNavigate();

  return (
    <section ref={containerRef} className='bg-emerald-50 py-16 px-6 md:px-10'>
      <div className='px-4 py-10 md:p-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12'>
        {/* Título */}
        <div className='flex-1'>
          <h2 className='text-4xl md:text-5xl font-bold text-emerald-900 leading-tight book-heading'>
            Dê o Primeiro Passo <br className='hidden md:block' /> em Direção a
            uma Vida Equilibrada e Plena.
          </h2>
        </div>

        {/* Parágrafo + Botões */}
        <div className='flex-1 flex flex-col gap-8 text-emerald-800 book-paragraph'>
          <p className='text-lg leading-relaxed'>
            Com uma equipe de psicólogos altamente qualificados, oferecemos
            terapias eficazes e personalizadas conforme suas necessidades. Conte
            conosco para te apoiar em cada etapa dessa jornada.
          </p>

          <div className='flex flex-col sm:flex-row sm:items-center gap-4 book-buttons'>
            <ButtonSecondary onClick={() => navigate('/calendar')}>
              Agendar uma Consulta <FaArrowRight className='ml-2' />
            </ButtonSecondary>

            <span className='flex items-center gap-2 font-medium text-emerald-700'>
              ou envie uma mensagem
              <ButtonIcon />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
