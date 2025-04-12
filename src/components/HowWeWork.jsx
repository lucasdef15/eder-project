import React, { useEffect, useRef } from "react";
import Stepper from "./Stepper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowWeWork = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const stepsRef = useRef([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Cabeçalho
    gsap.fromTo(
      [titleRef.current, subtitleRef.current, descRef.current],
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play reset play reset", // repete ao subir e descer
        },
      }
    );

    // Bolinhas dos steps
    gsap.fromTo(
      stepsRef.current,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: stepsRef.current[0],
          start: "top 80%",
          toggleActions: "play reset play reset",
        },
      }
    );

    // Cards
    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 80%",
          toggleActions: "play reset play reset",
        },
      }
    );
  }, []);

  return (
    <section className="p-10 sm:p-20">
      <div className="flex flex-col justify-center items-center w-full gap-3 text-center mb-10">
        <h3
          ref={titleRef}
          className="text-teal-600 uppercase text-sm font-semibold"
        >
          How WE Work
        </h3>
        <h2
          ref={subtitleRef}
          className="text-3xl md:text-4xl font-bold text-emerald-950"
        >
          Counseling & Therapy Process
        </h2>
        <p ref={descRef} className="text-emerald-800 text-lg">
          Supporting you from consultation to care for a smooth path to mental
          well-being.
        </p>
      </div>
      <Stepper stepRefs={stepsRef} cardRefs={cardsRef} />
    </section>
  );
};

export default HowWeWork;
