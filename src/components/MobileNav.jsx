import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="p-2">
          <AlignJustify size={24} />
        </SheetTrigger>
        <SheetContent side="left" className="p-6">
          {/* Logo */}
          <section className="mb-8">
            <Link to="/">
              <img
                src="/assets/images/logoDark.svg"
                className="w-32 h-auto"
                alt="Logo"
              />
            </Link>
          </section>
          {/* Menu Links */}
          <nav>
            <ul className="flex flex-col gap-6">
              <li>
                <Link
                  to="/"
                  className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors"
                >
                  Sobre o Psicólogo
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors"
                >
                  Serviços
                </Link>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
