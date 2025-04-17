import React, { useRef, useState } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const components = [
  {
    title: "Terapias",
    href: "/blog/servicos/terapias",
    description:
      "Sessões terapêuticas individuais focadas no autoconhecimento e bem-estar emocional.",
    image: "assets/images/terapia1.png",
  },
  {
    title: "Terapia de Casal",
    href: "/blog/servicos/terapia-de-casal",
    description:
      "Apoio para casais que desejam fortalecer a comunicação e superar conflitos.",
    image: "assets/images/terapia2.png",
  },
  {
    title: "Adolescente e Adulto",
    href: "/blog/servicos/adolescente-e-adulto",
    description:
      "Atendimento psicológico para jovens e adultos com foco nas questões emocionais.",
    image: "assets/images/terapia3.png",
  },
  {
    title: "Sobre DBT",
    href: "/blog/servicos/dbt",
    description:
      "Conheça a Terapia Dialética Comportamental para regulação emocional.",
    image: "assets/images/terapia4.png",
  },
  {
    title: "Dependentes Químicos",
    href: "blog/servicos/dependentes-quimicos",
    description:
      "Acompanhamento terapêutico para recuperação de dependência química.",
    image: "assets/images/terapia5.png",
  },
  {
    title: "Sobre CNV",
    href: "/blog/servicos/sobre-cnv",
    description:
      "Aprenda a se expressar com empatia e escuta ativa, fortalecendo conexões e prevenindo conflitos.",
    image: "assets/images/cnv.jpg",
  },
];

const ServicesSection = () => {
  const [clickedButtons, setClickedButtons] = useState(
    Array(components.length).fill(false)
  );

  const navigate = useNavigate();

  const handleCkickService = (index, component) => {
    const newClickedButtons = [...clickedButtons];
    newClickedButtons[index] = !newClickedButtons[index];
    setClickedButtons(newClickedButtons);

    navigate(components[index].href);
  };

  const containerRef = useRef(null);
  const headingRef = useRef(null);

  const imageRefs = useRef([]);
  const cardRefs = useRef([]);
  const titleRefs = useRef([]);
  const descRefs = useRef([]);
  const btnRefs = useRef([]);

  useGSAP(() => {
    // animação dos cards
    gsap.from(".card-item", {
      opacity: 0,
      y: 0,
      duration: 1.5,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
    });

    // animação dos textos do heading
    gsap.from(headingRef.current.children, {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative after:content-[''] sm:pb-20 after:absolute after:inset-0 after:z-[-1] after:-skew-y-3 after:bg-gradient-to-br after:from-teal-900 after:via-teal-700 after:to-emerald-500"
    >
      <div
        ref={headingRef}
        className="w-[90%] p-5 sm:p-10 sm:pt-20  mx-auto flex flex-col gap-3 pt-15 text-left text-white"
      >
        <h3 className="title uppercase text-sm font-semibold">What We Do</h3>
        <h2 className="title text-3xl sm:text-4xl font-bold">
          Counseling & Therapy Services
        </h2>
        <p className="title text-lg sm:text-xl">
          We offer a wide range of services to meet your personal needs
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 sm:p-12 w-[90%] mx-auto">
        {components.map((component, index) => {
          const handleMouseEnter = () => {
            const imgEl = imageRefs.current[index];
            const cardEl = cardRefs.current[index];
            const titleEl = titleRefs.current[index];
            const descEl = descRefs.current[index];
            const btnEl = btnRefs.current[index];

            if (imgEl) {
              gsap.to(imgEl, {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
              });
            }
            if (cardEl) {
              gsap.to(cardEl, {
                backgroundColor: "rgba(0,0,0,0.3)",
                border: "none",
                duration: 0.5,
                ease: "power3.out",
              });
            }

            // Letra branca na entrada
            if (titleEl && descEl && btnEl) {
              gsap.to([titleEl, descEl], {
                color: "#ffffff",
                duration: 0.1,
                ease: "power3.out",
              });
            }
          };

          const handleMouseLeave = () => {
            const imgEl = imageRefs.current[index];
            const cardEl = cardRefs.current[index];
            const titleEl = titleRefs.current[index];
            const descEl = descRefs.current[index];
            const btnEl = btnRefs.current[index];

            if (imgEl) {
              gsap.to(imgEl, {
                x: -50,
                opacity: 0,
                duration: 0.5,
                ease: "power3.in",
              });
            }
            if (cardEl) {
              gsap.to(cardEl, {
                backgroundColor: "#ffffff",
                duration: 0.5,
                ease: "power3.in",
              });
            }

            if (titleEl && descEl && btnEl) {
              gsap.to([titleEl, descEl], {
                color: "#000000",
                duration: 0.5,
                ease: "power3.out",
              });
            }
          };

          return (
            <div
              key={index}
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                ref={(el) => (imageRefs.current[index] = el)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-full rounded-lg overflow-hidden opacity-1 pointer-events-none shadow-lg"
              >
                <img
                  src={component.image}
                  alt={component.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              <Card
                ref={(el) => (cardRefs.current[index] = el)}
                onClick={() => handleCkickService(index)}
                className="card-item transition-transform duration-500 overflow-hidden h-[250px] sm:h-[250px] flex justify-between hover:text-white cursor-pointer"
              >
                <CardHeader>
                  <CardTitle
                    ref={(el) => (titleRefs.current[index] = el)}
                    className="z-10 transition-colors duration-300 text-xl sm:text-2xl"
                  >
                    {component.title}
                  </CardTitle>
                  <CardDescription
                    ref={(el) => (descRefs.current[index] = el)}
                    className="z-10 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {component.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    ref={(el) => (btnRefs.current[index] = el)}
                    onClick={() => handleCkickService(index, component)}
                    variant="ghost"
                    className={`z-10 group-hover:text-white transition-colors duration-300 cursor-pointer ${
                      clickedButtons[index] ? "text-white" : "text-black"
                    }`}
                  >
                    Ver Mais <Check />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
