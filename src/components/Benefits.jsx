import { IoIosCheckmark } from 'react-icons/io';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  useGSAP(
    () => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Subheading animation
      gsap.fromTo(
        subheadingRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: subheadingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Benefit items animation
      gsap.fromTo(
        '.benefit-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    },
    { scope: containerRef }
  );

  const features = [
    {
      title:
        'Identifique e supere suas crenças limitantes para avançar em sua jornada.',
    },
    {
      title: 'Alcance equilíbrio emocional para uma maior qualidade de vida.',
    },
    {
      title: 'Equilibre mente consciente e inconsciente por meio da autocura.',
    },
    {
      title:
        'Desenvolva empatia e torne-se uma força poderosa na vida de outros.',
    },
    {
      title: 'Cultive autoconfiança e entusiasmo pela vida.',
    },
    {
      title: 'Aprimore habilidades de liderança e autogestão.',
    },
    {
      title: 'Construa relacionamentos saudáveis com Deus, pessoas e o mundo.',
    },
    {
      title: 'Fortaleça o amor próprio por sua trajetória e legado.',
    },
    {
      title: 'Eleve sua autoestima e aceite verdadeiramente quem você é.',
    },
    {
      title: 'Conecte-se aos seus valores mais profundos e viva seu propósito.',
    },
    {
      title:
        'Desenvolva humanidade, pensamento sistêmico e conexão espiritual.',
    },
    {
      title: 'Aprimore o autoconhecimento e tome decisões mais assertivas.',
    },
  ];

  return (
    <section
      ref={containerRef}
      className='py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white'
    >
      {/* Header */}
      <div className='text-center mb-12'>
        <h3
          ref={headingRef}
          className='text-teal-600 text-sm font-semibold uppercase tracking-wider'
        >
          Por que nos escolher
        </h3>
        <h2
          ref={subheadingRef}
          className='mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight'
        >
          Benefícios do Processo Terapêutico
        </h2>
      </div>

      {/* Benefits List */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {features.map((feature, idx) => (
          <div
            key={idx}
            className='benefit-item flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300'
          >
            <div className='bg-teal-100 rounded-full p-2 shrink-0'>
              <IoIosCheckmark className='text-teal-600 w-6 h-6' />
            </div>
            <p className='text-gray-800 text-base leading-relaxed font-medium'>
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
