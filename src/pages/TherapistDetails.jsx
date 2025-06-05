import React, { useRef, useEffect } from 'react';
import { IoLogoInstagram } from 'react-icons/io';
import { FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCard from '@/components/AnimatedCard';

gsap.registerPlugin(ScrollTrigger);

const components = [
  {
    title: 'Terapias',
    href: '/blog/servicos/terapias',
    description:
      'Sessões terapêuticas individuais focadas no autoconhecimento e bem-estar emocional.',
    image: 'assets/images/terapia1.png',
  },
  {
    title: 'Terapia de Casal',
    href: '/blog/servicos/terapia-de-casal',
    description:
      'Apoio para casais que desejam fortalecer a comunicação e superar conflitos.',
    image: 'assets/images/terapia2.png',
  },
  {
    title: 'Sobre DBT',
    href: '/blog/servicos/dbt',
    description:
      'Conheça a Terapia Dialética Comportamental para regulação emocional.',
    image: 'assets/images/terapia4.png',
  },
];

const TherapistDetails = () => {
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const infoRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      infoRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      servicesRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <>
      <section
        ref={headerRef}
        className='bg-gradient-to-b from-white to-blue-50 px-5 py-12'
      >
        <div className='max-w-5xl mx-auto text-center'>
          <h2 className='text-4xl font-bold text-gray-800 mb-3'>
            Detalhes do Terapeuta
          </h2>
          <p className='text-gray-600 text-sm'>Home / Detalhes do Terapeuta</p>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-8'>
        <section
          ref={imageRef}
          className='md:w-1/2 sticky top-16 h-fit'
          style={{ willChange: 'opacity, transform' }}
        >
          <img
            className='w-full rounded-2xl shadow-lg object-cover'
            src='/assets/images/ederFront1.png'
            alt='Psic. Eder Coimbra'
          />
        </section>

        <section
          ref={infoRef}
          className='bg-white/70 w-full relative p-3 md:p-0 md:w-1/2 flex flex-col gap-6'
        >
          <div className='flex flex-col gap-4 bg-white/50 w-full  p-3 md:p-0 rounded-4xl'>
            <h3 className='text-blue-600 uppercase text-sm font-semibold tracking-wider'>
              Terapeuta Líder
            </h3>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900'>
              Psic. Eder Coimbra
            </h1>
            <div className='flex gap-3'>
              <Button
                variant='outline'
                size='icon'
                className='bg-white text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300'
                aria-label='Instagram do Psic. Eder Coimbra'
              >
                <IoLogoInstagram size={20} />
              </Button>
              <Button
                variant='outline'
                size='icon'
                className='bg-white text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300'
                aria-label='WhatsApp do Psic. Eder Coimbra'
              >
                <FaWhatsapp size={20} />
              </Button>
              <Button
                variant='outline'
                size='icon'
                className='bg-white text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300'
                aria-label='Twitter do Psic. Eder Coimbra'
              >
                <FaXTwitter size={20} />
              </Button>
            </div>
          </div>

          <p className='text-gray-600 leading-relaxed bg-white/50 w-full  p-3 md:p-0 rounded-4xl'>
            Psic. Eder Coimbra é um terapeuta altamente respeitado com mais de
            15 anos de experiência em saúde mental. Especializado em terapia
            cognitivo-comportamental (TCC) e gestão de estresse, ele se dedica a
            ajudar indivíduos a superar ansiedade, depressão e desafios da vida.
            Eder adota uma abordagem compassiva e personalizada, adaptando seus
            métodos às necessidades únicas de cada cliente. Sua dedicação em
            promover resiliência e bem-estar emocional o torna uma peça
            fundamental da nossa equipe, guiando clientes para uma vida mais
            equilibrada e plena.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm bg-white/50 w-full  p-3 md:p-0 rounded-4xl'>
            <div>
              <p className='font-semibold uppercase text-xs text-gray-600'>
                Idade:
              </p>
              <p className='text-gray-800'>28 anos</p>
              <p className='font-semibold uppercase text-xs text-gray-600 mt-3'>
                WhatsApp:
              </p>
              <p className='text-gray-800'>(555) 123-4567</p>
            </div>
            <div>
              <p className='font-semibold uppercase text-xs text-gray-600'>
                Email:
              </p>
              <p className='text-gray-800'>edercoimbra@psi.com</p>
              <p className='font-semibold uppercase text-xs text-gray-600 mt-3'>
                Localização:
              </p>
              <p className='text-gray-800'>São Paulo, Brasil</p>
            </div>
          </div>

          <div className='bg-white/50 w-full  p-3 md:p-0 rounded-4xl'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              Experiência
            </h2>
            <div className='mb-4'>
              <p className='uppercase text-xs font-semibold text-gray-600'>
                Formação:
              </p>
              <p className='text-gray-800'>
                Mestrado em Psicologia Clínica pela Universidade de São Paulo
              </p>
            </div>
            <div className='mb-4'>
              <p className='uppercase text-xs font-semibold text-gray-600'>
                Experiência Profissional:
              </p>
              <ul className='text-gray-800 list-disc list-inside'>
                <li>Clínica de Psicologia Integrare</li>
                <li>Hospital das Clínicas de São Paulo</li>
              </ul>
            </div>
            <div className='mb-4'>
              <p className='uppercase text-xs font-semibold text-gray-600'>
                Prêmios:
              </p>
              <ul className='text-gray-800 list-disc list-inside'>
                <li>Prêmio Excelência em Terapia 2023</li>
                <li>Reconhecimento em Prática Clínica 2022</li>
              </ul>
            </div>
            <div>
              <p className='uppercase text-xs font-semibold text-gray-600'>
                Anos de Experiência:
              </p>
              <p className='text-gray-800'>15 anos</p>
            </div>
          </div>

          <Button
            className='mt-6 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300'
            onClick={() => window.open('https://wa.me/5551234567', '_blank')}
          >
            Entre em Contato <ArrowRight size={16} className='ml-2' />
          </Button>
        </section>
      </section>

      <section
        ref={servicesRef}
        className='flex flex-col items-center gap-6 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center'
      >
        <div className='flex flex-col items-center gap-3'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900'>
            Serviços Oferecidos por Psic. Eder Coimbra
          </h2>
          <p className='text-lg sm:text-xl text-gray-600 max-w-2xl'>
            Explore as opções de tratamento personalizadas oferecidas por Eder.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
          {components.map((component, index) => (
            <AnimatedCard component={component} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default TherapistDetails;
