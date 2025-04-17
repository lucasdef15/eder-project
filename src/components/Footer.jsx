import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white mt-20 pt-10 px-6 sm:px-10">
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 pb-10 border-b border-cyan-100/20 justify-items-center text-center">
        {/* Logo & About */}
        <div className="flex flex-col items-center gap-3">
          <img
            src="/assets/images/logoLight.svg"
            className="w-10 scale-[3]"
            alt="Logo Eder Coimbra"
          />
          <p className="text-sm max-w-[250px]">
            Psicólogo dedicado ao cuidado emocional e bem-estar humano.
          </p>
        </div>

        {/* Navegação */}
        <div className="flex flex-col items-center gap-2">
          <h4 className="font-semibold text-lg mb-2">Navegação</h4>
          <a href="/terapias" className="hover:underline text-sm">
            Terapias
          </a>
          <a href="/dbt" className="hover:underline text-sm">
            Sobre DBT
          </a>
          <a
            href="/comunicacao-nao-violenta"
            className="hover:underline text-sm"
          >
            Sobre CNV
          </a>
          <a href="/dependentes-quimicos" className="hover:underline text-sm">
            Dependência Química
          </a>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col items-center gap-3">
          <h4 className="font-semibold text-lg mb-2">Redes Sociais</h4>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              className="bg-white text-teal-800 hover:bg-teal-600 hover:text-white transition"
            >
              <IoLogoInstagram />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white text-teal-800 hover:bg-teal-600 hover:text-white transition"
            >
              <FaWhatsapp />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white text-teal-800 hover:bg-teal-600 hover:text-white transition"
            >
              <FaXTwitter />
            </Button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 py-6 text-sm text-center">
        <p>Eder Coimbra</p>
        <span className="hidden sm:inline w-[1px] h-4 bg-white mx-2" />
        <p>Psicólogo</p>
        <span className="hidden sm:inline w-[1px] h-4 bg-white mx-2" />
        <p>CRP: 123456</p>
        <span className="hidden sm:inline w-[1px] h-4 bg-white mx-2" />
        <p>São Paulo - SP</p>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs text-cyan-100/80 border-t border-cyan-100/20 py-4">
        <p>
          © {new Date().getFullYear()} Eder Coimbra. Todos os direitos
          reservados.
        </p>
        <p className="mt-1">
          Desenvolvido com 💙 por{" "}
          <span className="font-semibold text-white">Lucas Faria</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
