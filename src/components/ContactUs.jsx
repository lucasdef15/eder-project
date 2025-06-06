import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const overlayRef = useRef(null);

  useGSAP(() => {
    // Image animation on scroll
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Content animation on scroll
    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Hover animation for image
    const onEnter = () => {
      gsap.to(imageRef.current, {
        scale: 1.05,
        duration: 0.4,
        ease: 'power3.out',
      });
      gsap.to(overlayRef.current, {
        opacity: 0.3,
        duration: 0.4,
        ease: 'power3.out',
      });
    };

    const onLeave = () => {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.4,
        ease: 'power3.out',
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: 'power3.out',
      });
    };

    const container = containerRef.current;
    container.addEventListener('mouseenter', onEnter);
    container.addEventListener('mouseleave', onLeave);

    return () => {
      container.removeEventListener('mouseenter', onEnter);
      container.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section className='bg-gradient-to-b from-white to-gray-50'>
      <section className='py-30  px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto '>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16'>
          {/* Image */}
          <div
            ref={containerRef}
            className='relative w-full max-w-md h-[400px] sm:h-[500px] overflow-hidden rounded-2xl shadow-lg'
          >
            <img
              ref={imageRef}
              src='/assets/images/ederFront2.png'
              alt='Eder Coimbra'
              className='w-full h-full object-cover'
            />
            <div
              ref={overlayRef}
              className='absolute inset-0 bg-gradient-to-t from-teal-600/30 to-transparent opacity-0 transition-opacity duration-300'
            />
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className='w-full max-w-lg flex flex-col gap-6 text-center lg:text-left'
          >
            <h3 className='text-teal-600 text-sm font-semibold uppercase tracking-wider'>
              Entre em Contato
            </h3>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 leading-tight'>
              Fale Conosco
            </h2>
            <p className='text-gray-700 text-base sm:text-lg leading-relaxed'>
              Estamos prontos para te apoiar. Entre em contato por telefone,
              e-mail ou visite nosso espaço acolhedor.
            </p>

            <div className='flex flex-col gap-4 text-gray-800'>
              <div className='flex items-center gap-3 justify-center lg:justify-start'>
                <FaPhoneAlt className='text-teal-600 w-5 h-5' />
                <span>(11) 99999-9999</span>
              </div>
              <div className='flex items-center gap-3 justify-center lg:justify-start'>
                <FaEnvelope className='text-teal-600 w-5 h-5' />
                <span>contato@mindfulness.com.br</span>
              </div>
              <div className='flex items-center gap-3 justify-center lg:justify-start'>
                <FaMapMarkerAlt className='text-teal-600 w-5 h-5' />
                <span>Rua do Equilíbrio, 123 - São Paulo, SP</span>
              </div>
            </div>

            <button className='relative mt-4 px-6 py-3 w-fit mx-auto lg:mx-0 rounded-full bg-teal-600 text-white font-semibold shadow-md hover:bg-teal-700 transition-all duration-300 hover:scale-105'>
              Saiba Mais
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactSection;
