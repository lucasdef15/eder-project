import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

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
