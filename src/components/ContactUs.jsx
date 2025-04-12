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
    <section className="flex flex-col md:flex-row items-center justify-center px-6 py-20 max-w-7xl mx-auto gap-20">
      {/* Imagem */}
      <div
        ref={containerRef}
        className="relative w-[500px] h-[800px] overflow-hidden rounded-4xl"
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
          className="absolute bottom-0 left-0 w-full h-1/2 bg-white/10  opacity-0"
          style={{ transform: "translateY(100%)" }}
        />
      </div>

      {/* Conteúdo */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h3 className="text-teal-600 uppercase text-sm font-semibold">
          Entre em contato
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-950">
          Fale com a gente
        </h2>
        <p className="text-emerald-800 text-lg">
          Estamos aqui para te ajudar. Você pode nos ligar, mandar uma mensagem
          ou visitar nosso espaço acolhedor. Escolha o melhor canal para você.
        </p>
        <div className="flex flex-col gap-4 text-emerald-900">
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

        <button className="mt-6 w-fit bg-emerald-500 hover:bg-emerald-700 text-white px-6 py-3 rounded-full transition-all cursor-pointer">
          Enviar Mensagem
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
