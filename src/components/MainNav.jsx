import React from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD") // remove acentos
    .replace(/[\u0300-\u036f]/g, "") // remove os acentos mesmo
    .replace(/\s+/g, "-") // espaço vira hífen
    .replace(/[^\w\-]+/g, "") // remove caracteres especiais
    .replace(/\-\-+/g, "-") // hifens duplicados viram um só
    .replace(/^-+/, "") // remove hífens do começo
    .replace(/-+$/, ""); // remove hífens do fim
}

// Dados dos serviços
export const components = [
  {
    title: "Terapias",
    href: "/terapias",
    description:
      "Sessões terapêuticas individuais focadas no autoconhecimento e bem-estar emocional.",
  },
  {
    title: "Terapia de Casal",
    href: "/terapia-de-casal",
    description:
      "Apoio para casais que desejam fortalecer a comunicação e superar conflitos.",
  },
  {
    title: "Adolescente e Adulto",
    href: "/terapia-adolescente-adulto",
    description:
      "Atendimento psicológico para jovens e adultos com foco nas questões emocionais.",
  },
  {
    title: "DBT",
    href: "/dbt",
    description:
      "Conheça a Terapia Dialética Comportamental para regulação emocional.",
  },
  {
    title: "Dependentes Químicos",
    href: "/dependentes-quimicos",
    description:
      "Acompanhamento terapêutico para recuperação de dependência química.",
  },
  {
    title: "Sobre CNV",
    href: "/comunicacao-nao-violenta",
    description:
      "Aprenda a se expressar com empatia e escuta ativa, fortalecendo conexões e prevenindo conflitos.",
    image: "assets/images/cnv.jpg",
  },
];

const MainNav = () => {
  return (
    <section className="hidden md:flex ">
      {/* Logo */}
      <section>
        <Link to={"/"}>
          <img
            src="/assets/images/logoDark.svg"
            className="w-15 h-14 relative left-11 scale-[3]"
            alt=""
          />
        </Link>
      </section>
      <NavigationMenu className={"ml-25"}>
        <NavigationMenuList>
          {/* Início */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Início</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 w-[400px]">
                <ListItem href="/" title="Página Inicial">
                  Apresentação e boas-vindas ao consultório de Eder Coimbra.
                </ListItem>
                <ListItem href="/sobre" title="Sobre o Psicólogo">
                  Informações sobre a formação, experiência e abordagem
                  terapêutica.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Serviços */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[600px] md:grid-cols-2">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={`/blog/servicos/${slugify(component.title)}`}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Sobre */}
          <NavigationMenuItem>
            <Link to="/contato" legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
                Contato
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  );
};

// Item da lista de navegação
export const ListItem = forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            to={props.href}
            ref={ref}
            className={cn(
              "block space-y-1 rounded-md p-3 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
          >
            <div className="text-sm font-semibold">{title}</div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default MainNav;
