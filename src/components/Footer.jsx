import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-cyan-100/20 px-6 py-4">
        <img
          src="assets/images/logoLight.svg"
          className="w-10 scale-[3] relative left-5"
          alt="Logo Eder Coimbra"
        />
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <p className="font-medium">Siga-nos:</p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className=" border-white hover:cursor-pointer text-teal-800"
            >
              <IoLogoInstagram />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className=" border-white hover:cursor-pointer text-teal-800"
            >
              <FaWhatsapp />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className=" border-white hover:cursor-pointer text-teal-800"
            >
              <FaXTwitter />
            </Button>
          </div>
        </div>
      </div>

      {/* Middle Info Section */}
      <div className="flex flex-wrap justify-center items-center gap-4 px-6 py-4 text-sm font-medium">
        <p>Eder Coimbra</p>
        <span className="w-[1px] h-4 bg-white" />
        <p>Psicólogo</p>
        <span className="w-[1px] h-4 bg-white" />
        <p>CRP: 123456</p>
        <span className="w-[1px] h-4 bg-white" />
        <p>São Paulo - SP</p>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm px-6 py-4 border-t border-cyan-100/20">
        <p>© 2023 Eder Coimbra. Todos os direitos reservados.</p>
        <p className="mt-1">
          Desenvolvido por <span className="font-semibold">Lucas Faria</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
