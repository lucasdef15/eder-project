import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function ButtonSecondary({ children }) {
  return (
    <Button
      variant="secondary"
      className="rounded-full bg-emerald-400 cursor-pointer py-7 hover:bg-emerald-700 hover:text-white transition-all"
    >
      {children}
    </Button>
  );
}

export function ButtonIcon() {
  return (
    <Button
      variant="outline"
      size="icon"
      className="border-emerald-200 cursor-pointer bg-emerald-200 hover:bg-emerald-700 hover:text-white transition-all"
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
        start: "top 80%",
      },
    });

    tl.from(".book-heading", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        ".book-paragraph",
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        ".book-buttons",
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          ease: "bounce.out",
        },
        "-=0.4"
      );
  }, []);

  return (
    <div
      className="flex gap-10 py-15 px-5 bg-[rgba(167,243,208,0.36)] flex-col md:flex-row"
      ref={containerRef}
    >
      <h2 className="text-5xl font-medium text-emerald-950 book-heading">
        Dê o Primeiro Passo em Direção a uma Vida Equilibrada e Plena.
      </h2>
      <div className="flex flex-col justify-between items-start gap-5 book-paragraph">
        <p className="text-emerald-800">
          Com uma equipe de psicólogos altamente qualificados, oferecemos
          terapias eficazes e personalizadas de acordo com suas necessidades.
          Conte conosco para te apoiar em cada etapa dessa jornada.
        </p>
        <div className="flex items-center justify-between w-full text-emerald-800 book-buttons gap-4">
          <ButtonSecondary>
            Agendar uma Consulta <FaArrowRight />
          </ButtonSecondary>
          <span className="flex items-center gap-2 font-medium text-emerald-800">
            Ou envie uma mensagem no WhatsApp
            <ButtonIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookSection;
