import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

// Botão reutilizável
export function ButtonSecondary({ children }) {
  return (
    <Button
      variant="secondary"
      className="rounded-full bg-emerald-400 cursor-pointer hover:bg-emerald-700 hover:text-white transition-all"
    >
      {children}
    </Button>
  );
}

// Dados dos serviços
const components = [
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
    title: "Sobre DBT",
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
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50  dark:bg-background flex justify-between items-center px-6 py-4 shadow-lg bg-white">
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
      {/* Navegação */}
      <NavigationMenu>
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
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Sobre */}
          <NavigationMenuItem>
            <Link to="/sobre" legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
                Sobre
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Botão de Ação */}
      <ButtonSecondary>Agende sua consulta</ButtonSecondary>
    </header>
  );
};

// Item da lista de navegação
const ListItem = forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block space-y-1 rounded-md p-3 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold">{title}</div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
