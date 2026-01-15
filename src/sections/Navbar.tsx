import { useState } from "react";
import { useTranslation } from "react-i18next";

import { MdOutlineLightMode, MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="w-full bg-background text-primary px-4 py-2 shadow-lg shadow-shadow/60 z-20 fixed">
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="text-3xl hover:text-4xl hover:tracking-wide w-60 h-10 md:h-auto transition-all!"
          style={{ fontFamily: "Pattaya" }}
        >
          Arthur Bender
        </a>

        <button
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <MdClose /> : <MdMenu />}
        </button>

        <div
          className={`
            absolute md:static left-0 right-0 top-full
            md:flex md:items-center md:gap-12
            md:flex-1 md:justify-between md:-ml-20
            bg-background md:bg-transparent
            transition-[transform,color]! overflow-hidden
            ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:opacity-100"}
            md:max-h-none shadow-lg shadow-dark/80 md:shadow-none
          `}
        >
          <div></div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 px-4 py-4 md:p-0 nav-links items-center">
            <a href="#projects" onClick={() => setOpen(false)}>{t("projects.sectionName")}</a>
            <a href="#skills" onClick={() => setOpen(false)}>{t("skills.sectionName")}</a>
            <a href="#experiences" onClick={() => setOpen(false)}>{t("experiences.sectionName")}</a>
            <a href="#contact" onClick={() => setOpen(false)}>{t("contact.sectionName")}</a>
          </div>

          <div className="flex gap-4 text-2xl items-center px-4 pb-4 md:p-0 nav-actions justify-end">
            <span>🇧🇷</span>
            <MdOutlineLightMode className="cursor-pointer text-4xl" onClick={toggleTheme} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
