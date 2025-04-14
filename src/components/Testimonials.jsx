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

const Testimonials = () => {
  const sliderRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);

  const testimonials = [
    {
      name: "Jhon Doe",
      title: "CEO of Company",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: "https://picsum.photos/150?random=1",
      stars: 5,
    },
    {
      name: "Jane Smith",
      title: "CTO of Company",
      testimonial:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
      image: "https://picsum.photos/150?random=2",
      stars: 4,
    },
    {
      name: "Alice Johnson",
      title: "CFO of Company",
      testimonial:
        "Duis aute irure dolor in reprehenderit in voluptate velit...",
      image: "https://picsum.photos/150?random=3",
      stars: 5,
    },
    {
      name: "Bob Brown",
      title: "COO of Company",
      testimonial:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa...",
      image: "https://picsum.photos/150?random=4",
      stars: 5,
    },
  ];

  useEffect(() => {
    const container = sliderRef.current;
    const totalCards = testimonials.length;
    const cardWidth = container.children[0].offsetWidth + 30; // 32px = gap-8
    let index = 0;

    const animate = () => {
      gsap.to(container, {
        x: -cardWidth * index,
        duration: 0.8,
        ease: "back.out(1.7)",
        onComplete: () => {
          index++;
          // quando chegar na metade (fim da 1ª cópia), reseta
          if (index === totalCards) {
            gsap.set(container, { x: 0 });
            index = 1;
          }
          setTimeout(animate, 2000); // tempo de pausa
        },
      });
    };

    animate();
  }, []);

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
  }, []);

  return (
    <section className="bg-teal-900/10 p-20">
      <div className="flex flex-col justify-center items-center w-full gap-3 text-center mb-10">
        <h3
          ref={titleRef}
          className="text-teal-600 uppercase text-sm font-semibold"
        >
          CLIENT TESTIMONIALS
        </h3>
        <h2
          ref={subtitleRef}
          className="text-3xl md:text-4xl font-bold text-emerald-950"
        >
          What Our Clients Are Saying
        </h2>
        <p ref={descRef} className="text-emerald-800 text-lg">
          Hear firsthand accounts of healing and positive change.
        </p>
      </div>
      <section className="overflow-hidden w-[80%] mx-auto my-16">
        <div
          ref={sliderRef}
          className="flex gap-8 px-4"
          style={{ willChange: "transform" }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card
              key={index}
              className="w-80 bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0"
            >
              <CardHeader className="flex items-center p-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <CardTitle className="text-xl font-bold">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription className="text-gray-500">
                    {testimonial.title}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-gray-700">{testimonial.testimonial}</p>
              </CardContent>
              <CardFooter className="p-4">
                {[...Array(testimonial.stars)].map((_, i) => (
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

export default Testimonials;
