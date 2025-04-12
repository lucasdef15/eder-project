import { IoIosCheckmark } from "react-icons/io";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(headingRef.current, {
        y: -40,
        opacity: 0,
        duration: 1.2,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });

      gsap.from(subheadingRef.current, {
        y: -30,
        opacity: 0,
        duration: 1.1,
        delay: 0.2,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: subheadingRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".benefit-item", {
        opacity: 0,
        y: 30,
        duration: 1.5,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: containerRef } // nova forma de escopo
  );

  const features = [
    {
      title:
        "Para avançar em sua jornada é preciso identificar suas CRENÇAS LIMITANTES e superá-las.",
    },
    {
      title:
        "Para ter mais qualidade de vida é imprescindível ter EQUILÍBRIO EMOCIONAL.",
    },
    {
      title:
        "Melhore sua saúde equilibrndo sua Mente Consciente e Inconsciente através da AUTOCURA.",
    },
    {
      title:
        "Desenvolva sua humanidade através da EMPATIA e seja uma poderosa força na vida daqueles que o cercam.",
    },
    {
      title:
        "Crie um sentimento profundo de AUTOCONFIANÇA e BOM ÂNIMO em si mesmo e na vida.",
    },
    {
      title: "Melhoria das habilidades de LIDERANÇA e AUTOGESTÃO.",
    },
    {
      title:
        "Desenvolva RELACIONAMENTOS SAUDÁVEIS com DEUS, com as outras pessoas e o mundo em geral.",
    },
    {
      title:
        "Desenvolva o AMOR PRÓPRIO pela sua trajetória e pelo legado que está construindo.",
    },
    {
      title:
        "Eleve sua AUTOESTIMA, aceite verdadeiramente quem você é e tenha mais confiança em você mesmo.",
    },
    {
      title:
        "Acesse seus VALORES mais profundos e viva integralmente seu PROPÓSITO DE VIDA.",
    },
    {
      title:
        "Desenvolva um senso de HUMANIDADE, PENSAMENTO SISTÊMICO e CONEXÃO consigo mesmo e com DEUS.",
    },
    {
      title: "Maior autoconhecimento e melhoria na tomada de DECISÃO.",
    },
  ];

  return (
    <div className="p-10 max-w-6xl mx-auto" ref={containerRef}>
      <div className="py-10">
        <h3
          ref={headingRef}
          className="text-teal-600 uppercase text-sm font-semibold mb-2"
        >
          Por que nos escolher
        </h3>
        <h2
          ref={subheadingRef}
          className="text-3xl font-bold text-brown-900 mb-6 text-emerald-950"
        >
          Quais os ganhos ao fazer um Processo Terapêutico?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {features.map((feature, idx) => (
          <div key={idx} className="benefit-item flex items-start gap-3">
            <div className="bg-teal-200 rounded-full p-1">
              <IoIosCheckmark className="text-teal-700 w-5 h-5" />
            </div>
            <p className="text-emerald-950 text-[16px]">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
