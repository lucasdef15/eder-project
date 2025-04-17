import { Button } from "@/components/ui/button";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import { useState, useEffect } from "react";
import { CalendarSearch } from "lucide-react";

export function ButtonSecondary({ children }) {
  return (
    <Button
      variant="secondary"
      className="rounded-full bg-emerald-300 cursor-pointer hover:bg-emerald-600 hover:text-white transition-all "
    >
      {children}
    </Button>
  );
}

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 dark:bg-background bg-white shadow-lg px-6 py-4 flex items-center justify-between">
      <div className="flex items-center justify-between w-full ">
        {/* Centro: Logo */}
        <div className="container flex items-center ">
          {/* Esquerda: Mobile Nav ou MainNav */}
          <div className="flex items-center md:w-auto w-1/3">
            <MainNav className="hidden md:flex" />
            <MobileNav className="md:hidden" />
          </div>
        </div>
        <div className="w-1/3 relative md:hidden flex justify-center">
          <img
            src="/assets/images/logoDark.svg"
            className="w-15 h-14 relative -left-5 scale-[2]"
            alt=""
          />
        </div>

        {/* Direita: Botão */}
        <div className="flex justify-end flex-1">
          <ButtonSecondary>
            {isMobile ? <CalendarSearch /> : "Agende Sua Consulta"}
          </ButtonSecondary>
        </div>
      </div>
    </header>
  );
};

export default Header;
