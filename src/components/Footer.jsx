import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoLogoInstagram } from 'react-icons/io';
import { FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

// Registrando plugin GSAP
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const containerRef = useRef(null);
  const logoSectionRef = useRef(null);
  const navSectionRef = useRef(null);
  const socialSectionRef = useRef(null);
  const infoSectionRef = useRef(null);
  const copyrightRef = useRef(null);

  // Animações GSAP
  useGSAP(() => {
    if (!containerRef.current) return;

    const animateSection = (ref, delay = 0) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    };

    animateSection(logoSectionRef);
    animateSection(navSectionRef, 0.2);
    animateSection(socialSectionRef, 0.4);
    animateSection(infoSectionRef, 0.6);
    animateSection(copyrightRef, 0.8);
  }, []);

  return (
    <footer
      ref={containerRef}
      className='relative bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900 text-white mt-20 pt-10 px-6 sm:px-10 overflow-hidden'
    >
      {/* Top Grid Section */}
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 pb-10 border-b border-white/20 justify-items-center text-center'>
        {/* Logo & About */}
        <div ref={logoSectionRef} className='flex flex-col items-center gap-4'>
          <img
            src='/assets/images/logoLight.svg'
            className='w-12 scale-[2.5]'
            alt='Logo Eder Coimbra'
          />
          <p className='text-sm max-w-[250px] opacity-80 font-light'>
            Psicólogo dedicado ao cuidado emocional e bem-estar humano.
          </p>
        </div>

        {/* Navegação */}
        <div ref={navSectionRef} className='flex flex-col items-center gap-3'>
          <h4 className='text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-300 mb-3'>
            Navegação
          </h4>
          <div className='flex flex-col gap-2'>
            <a
              href='/terapias'
              className='text-sm hover:bg-white/10 hover:backdrop-blur-md px-3 py-1 rounded-full transition-all duration-300'
            >
              Terapias
            </a>
            <a
              href='/dbt'
              className='text-sm hover:bg-white/10 hover:backdrop-blur-md px-3 py-1 rounded-full transition-all duration-300'
            >
              Sobre DBT
            </a>
            <a
              href='/comunicacao-nao-violenta'
              className='text-sm hover:bg-white/10 hover:backdrop-blur-md px-3 py-1 rounded-full transition-all duration-300'
            >
              Sobre CNV
            </a>
            <a
              href='/dependentes-quimicos'
              className='text-sm hover:bg-white/10 hover:backdrop-blur-md px-3 py-1 rounded-full transition-all duration-300'
            >
              Dependência Química
            </a>
          </div>
        </div>

        {/* Redes Sociais */}
        <div
          ref={socialSectionRef}
          className='flex flex-col items-center gap-4'
        >
          <h4 className='text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-300 mb-3'>
            Redes Sociais
          </h4>
          <div className='flex gap-4'>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300'
              aria-label='Instagram'
            >
              <IoLogoInstagram size={20} />
            </a>
            <a
              href='https://whatsapp.com'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300'
              aria-label='WhatsApp'
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href='https://x.com'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300'
              aria-label='Twitter'
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div
        ref={infoSectionRef}
        className='max-w-7xl mx-auto flex flex-wrap justify-center gap-4 py-6 text-sm text-center opacity-80'
      >
        <p>Eder Coimbra</p>
        <span className='hidden sm:inline w-[1px] h-4 bg-white/50 mx-2' />
        <p>Psicólogo</p>
        <span className='hidden sm:inline w-[1px] h-4 bg-white/50 mx-2' />
        <p>CRP: 123456</p>
        <span className='hidden sm:inline w-[1px] h-4 bg-white/50 mx-2' />
        <p>São Paulo - SP</p>
      </div>

      {/* Bottom Copyright */}
      <div
        ref={copyrightRef}
        className='text-center text-xs text-white/70 border-t border-white/20 py-4'
      >
        <p>
          © {new Date().getFullYear()} Eder Coimbra. Todos os direitos
          reservados.
        </p>
        <p className='mt-1'>
          Desenvolvido com 💙 por{' '}
          <span className='font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-300'>
            Lucas Faria
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
