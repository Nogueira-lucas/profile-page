import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { emailContact } from "./environments";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
        "menu.home": "home",
        "menu.about": "about",
        "menu.skills": "skills",
        "menu.contact": "contact",
        "menu.hire": "hire",
        "main.freelancer": "freelancer",
        "main.developer": "developer",
        "main.ui": "ui engineer",
        "main.engineer": "software engineer",
        "about.title": "About me",
        "about.glad": "Hello, glad to see you 😄",
        "about.description": `Technical with aproach focus on web 
          development and application. Searching learn 
          more about new technologies and concepts. Special Skills: Front-end`,
        "skills.title": "Skills",
        "worthies.title": "Worthies",
        "worthies.deli": "Deliverying focus by results",
        "worthies.code": "Clean Code and SOLID principles",
        "contact.title": "Contact",
        "contact.email": emailContact,
        "hire.title": "Hire me at:",
        "footer.description": "Designed and developed by Lucas Nogueira, 2022."
    }
  },
  pt: {
    translation: {
        "menu.home": "início",
        "menu.about": "sobre mim",
        "menu.skills": "habilidades",
        "menu.contact": "contato",
        "menu.hire": "contrate",
        "main.freelancer": "freelancer",
        "main.developer": "desenvolvedor",
        "main.ui": "ui design",
        "main.engineer": "engenheiro de software",
        "about.title": "Sobre mim",
        "about.glad": "Olá, bom te ver aqui 😄",
        "about.description": "Técnico com foco em desenvolvimento e aplicação web. Buscando saber mais sobre novas tecnologias e conceitos. Habilidades Especiais: Front-end",
        "skills.title": "Habilidades",
        "worthies.title": "Valores",
        "worthies.deli": "Entrega com foco em resultados",
        "worthies.code": "Código limpo e princípios SOLID",
        "contact.title": "Contato",
        "contact.email": emailContact,
        "hire.title": "Contrate me:",
        "footer.description": "Desenhado e desenvolvido por Lucas Nogueira, 2022."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt-br",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
