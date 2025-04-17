import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Depoimentos = () => {
  const sliderRef = useRef(null);
  const tituloRef = useRef(null);
  const subtituloRef = useRef(null);
  const descricaoRef = useRef(null);

  const depoimentos = [
    {
      nome: "Jhon Doe",
      cargo: "CEO da Empresa",
      depoimento: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      imagem: "https://picsum.photos/150?random=1",
      estrelas: 5,
    },
    {
      nome: "Jane Smith",
      cargo: "CTO da Empresa",
      depoimento:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
      imagem: "https://picsum.photos/150?random=2",
      estrelas: 4,
    },
    {
      nome: "Alice Johnson",
      cargo: "CFO da Empresa",
      depoimento:
        "Duis aute irure dolor in reprehenderit in voluptate velit...",
      imagem: "https://picsum.photos/150?random=3",
      estrelas: 5,
    },
    {
      nome: "Bob Brown",
      cargo: "COO da Empresa",
      depoimento:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa...",
      imagem: "https://picsum.photos/150?random=4",
      estrelas: 5,
    },
  ];

  useEffect(() => {
    const container = sliderRef.current;
    const totalCards = depoimentos.length;
    const larguraCard = container.children[0].offsetWidth + 30; // 32px = gap-8
    let indice = 0;

    const animar = () => {
      gsap.to(container, {
        x: -larguraCard * indice,
        duration: 0.8,
        ease: "back.out(1.7)",
        onComplete: () => {
          indice++;
          if (indice === totalCards) {
            gsap.set(container, { x: 0 });
            indice = 1;
          }
          setTimeout(animar, 2000);
        },
      });
    };

    animar();
  }, []);

  useEffect(() => {
    // Cabeçalho
    gsap.fromTo(
      [tituloRef.current, subtituloRef.current, descricaoRef.current],
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tituloRef.current,
          start: "top 80%",
          toggleActions: "play reset play reset",
        },
      }
    );
  }, []);

  return (
    <section className="bg-teal-900/10 p-6 sm:p-10 lg:p-20">
      <div className="flex flex-col justify-center items-center w-full gap-3 text-center mb-10">
        <h3
          ref={tituloRef}
          className="text-teal-600 uppercase text-sm sm:text-base font-semibold"
        >
          DEPOIMENTOS DE CLIENTES
        </h3>
        <h2
          ref={subtituloRef}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-950"
        >
          O que nossos clientes estão dizendo
        </h2>
        <p ref={descricaoRef} className="text-emerald-800 text-lg sm:text-xl">
          Veja relatos reais de transformação e mudança positiva.
        </p>
      </div>
      <section className="overflow-hidden w-full mx-auto my-16">
        <div
          ref={sliderRef}
          className="flex gap-8 px-4 sm:px-6"
          style={{ willChange: "transform" }}
        >
          {[...depoimentos, ...depoimentos].map((depoimento, index) => (
            <Card
              key={index}
              className="w-72 sm:w-80 bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0"
            >
              <CardHeader className="flex items-center p-4">
                <img
                  src={depoimento.imagem}
                  alt={depoimento.nome}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <CardTitle className="text-xl sm:text-lg font-bold">
                    {depoimento.nome}
                  </CardTitle>
                  <CardDescription className="text-gray-500 text-wrap">
                    {depoimento.cargo}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-gray-700">{depoimento.depoimento}</p>
              </CardContent>
              <CardFooter className="p-4">
                {[...Array(depoimento.estrelas)].map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Depoimentos;
