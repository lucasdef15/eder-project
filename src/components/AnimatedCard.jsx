import React, { useRef, useEffect } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

const AnimatedCard = ({ component }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cardEl = cardRef.current;
      const imgEl = imageRef.current;

      const handleEnter = () => {
        gsap.to(imgEl, {
          scale: 1.1,
          duration: 0.4,
          ease: "ease.inOut",
        });
      };

      const handleLeave = () => {
        gsap.to(imgEl, {
          scale: 1,
          duration: 0.4,
          ease: "ease.inOut",
        });
      };

      cardEl.addEventListener("mouseenter", handleEnter);
      cardEl.addEventListener("mouseleave", handleLeave);

      return () => {
        cardEl.removeEventListener("mouseenter", handleEnter);
        cardEl.removeEventListener("mouseleave", handleLeave);
      };
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <Card
      ref={cardRef}
      className="cursor-pointer hover:bg-teal-400/20 min-w-[300px] sm:min-w-[275px]"
    >
      <CardHeader className="text-left">
        <CardTitle className="z-10 transition-colors duration-300 text-xl sm:text-2xl">
          {component.title}
        </CardTitle>
        <CardDescription>{component.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col items-start">
        <div className="overflow-hidden rounded-2xl w-full h-40">
          <img
            ref={imageRef}
            className="object-cover w-full h-full transition-transform"
            src={component.image}
            alt={component.title}
          />
        </div>
        <Button
          variant="ghost"
          className="cursor-pointer hover:bg-teal-700/10 mt-2"
        >
          Ver Mais <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AnimatedCard;
