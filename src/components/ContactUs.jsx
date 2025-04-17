import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ContactSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const topOverlayRef = useRef(null);
  const bottomOverlayRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imageRef.current;
    const top = topOverlayRef.current;
    const bottom = bottomOverlayRef.current;

    const onEnter = () => {
      gsap.to(img, { scale: 1.1, duration: 0.5, ease: "power2.out" });
      gsap.to(top, {
        opacity: 1,
        y: 0, // <-- desce para o centro
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(bottom, {
        opacity: 1,
        y: 0, // <-- sobe para o centro
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(img, { scale: 1, duration: 0.5, ease: "power2.out" });
      gsap.to(top, {
        opacity: 0,
        y: "-100%", // <-- volta para cima
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(bottom, {
        opacity: 0,
        y: "100%", // <-- volta para baixo
        duration: 0.5,
        ease: "power2.out",
      });
    };

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto gap-12 lg:gap-20">
      {/* Imagem */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[400px] sm:max-w-[500px] h-[500px] sm:h-[800px] overflow-hidden rounded-3xl"
      >
        <img
          ref={imageRef}
          src="/assets/images/ederFront2.png"
          alt="Eder Coimbra"
          className="w-full h-full object-cover"
        />

        {/* Overlay de cima */}
        <div
          ref={topOverlayRef}
          className="absolute top-0 left-0 w-full h-1/2 bg-white/10 opacity-0"
          style={{ transform: "translateY(-100%)" }}
        />

        {/* Overlay de baixo */}
        <div
          ref={bottomOverlayRef}
          className="absolute bottom-0 left-0 w-full h-1/2 bg-white/10 opacity-0"
          style={{ transform: "translateY(100%)" }}
        />
      </div>

      {/* Conteúdo */}
      <div className="w-full max-w-xl flex flex-col gap-6 text-center lg:text-left">
        <h3 className="text-teal-600 uppercase text-sm font-semibold">
          Entre em contato
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-950">
          Fale com a gente
        </h2>
        <p className="text-emerald-800 text-base sm:text-lg">
          Estamos aqui para te ajudar. Você pode nos ligar, mandar uma mensagem
          ou visitar nosso espaço acolhedor. Escolha o melhor canal para você.
        </p>

        <div className="flex flex-col gap-4 text-emerald-900 items-center lg:items-start">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-teal-600" />
            <span>(11) 99999-9999</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-teal-600" />
            <span>contato@mindfulness.com.br</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-teal-600" />
            <span>Rua do Equilíbrio, 123 - São Paulo, SP</span>
          </div>
        </div>

        <button className="relative overflow-hidden rounded-2xl cursor-pointer w-50  px-6 py-3 font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-500 shadow-lg transition-all duration-500 ease-in-out hover:from-emerald-500 hover:to-teal-500 hover:scale-105">
          <span className="relative z-10 ">Saiba Mais</span>
          <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 opacity-0 hover:opacity-20 transition duration-700 blur-sm" />
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
