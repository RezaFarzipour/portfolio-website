import React from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useLocale } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
const Sidebar = ({ closeSidebar, isOpen, t }) => {
  const locale = useLocale();
  return (
    <div
      className={`fixed top-0 ${
        locale === "fa" ? "right-0" : "left-0"
      } w-[80%] min-h-screen bg-[#000000b8] backdrop-blur-xl z-[999] shadow-[0_0_20px_rgba(211,211,211,0.4111)] 
      transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="text-[30px] text-[lightgray] p-[10px] cursor-pointer">
        <IoIosCloseCircleOutline onClick={closeSidebar} />
      </div>

      <div className="px-8 mt-4">
        <p className="font-bold text-xl  py-4">{t("language")}</p>
        <LanguageSwitcher />
      </div>

      <ul
        className={`pl-[20px] p-8 ${
          locale === "fa" ? "text-right" : "text-left"
        }`}
      >
        <li className="list-none mb-[30px] text-xl flex items-center gap-2 text-gray-300 hover:text-purple-700 transition-colors duration-300 cursor-pointer">
          <span>
            <i className="text-[22px]">{/* آیکون info یا user */}</i>
            <svg
              className="inline-block mr-1"
              fill="currentColor"
              height="1em"
              viewBox="0 0 512 512"
              width="1em"
            >
              <path d="M256 0C114.624 0 0 114.624 0 256s114.624 256 256 256 256-114.624 256-256S397.376 0 256 0zm0 96c26.512 0 48 21.488 48 48s-21.488 48-48 48-48-21.488-48-48 21.488-48 48-48zm64 304h-32v-96h-64v96h-32V256h128v144z" />
            </svg>
          </span>
          <a className="no-underline   " href="#about">
            {t("about")}
          </a>
        </li>

        <li className="list-none mb-[30px] text-xl flex items-center gap-2 text-gray-300 hover:text-purple-700 transition-colors duration-300 cursor-pointer">
          <span>
            <i className="text-[22px]">{/* آیکون project */}</i>
            <svg
              className="inline-block mr-1"
              fill="currentColor"
              height="1em"
              viewBox="0 0 512 512"
              width="1em"
            >
              <path d="M64 64v384h384V64H64zm64 64h256v64H128v-64zm0 128h256v64H128v-64z" />
            </svg>
          </span>
          <a className="no-underline" href="#projects">
            {t("HeaderProject")}
          </a>
        </li>

        <li className="list-none mb-[30px] text-xl flex items-center gap-2 text-gray-300 hover:text-purple-700 transition-colors duration-300 cursor-pointer">
          <span>
            <i className="text-[22px]">{/* آیکون skills */}</i>
            <svg
              className="inline-block mr-1"
              fill="currentColor"
              height="1em"
              viewBox="0 0 24 24"
              width="1em"
            >
              <path d="M12 0l8.485 8.485-8.485 8.485L3.515 8.485 12 0zm0 4.828L7.757 9.07l4.243 4.243 4.243-4.243L12 4.828z" />
            </svg>
          </span>
          <a className="no-underline" href="#skills">
            {t("headerSkil")}
          </a>
        </li>
      </ul>

      <div className="flex gap-[40px] p-[40px] mt-[20px] text-nowrap">
        <a
          className="flex items-center justify-center text-[20px] w-[30px] h-[30px] border-2 border-[#727fde] no-underline text-gray-300 rounded-full transition-all duration-500 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]"
          title="Linkedin"
          target="_blank"
          href="https://www.linkedin.com/in/rezafarzipour/"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="flex items-center justify-center text-[20px] w-[30px] h-[30px] border-2 border-[#727fde] no-underline text-gray-300 rounded-full transition-all duration-500 hover:bg-[#333] hover:text-white hover:border-[#333]"
          title="Github"
          href="https://github.com/RezaFarzipour"
        >
          <FaGithub />
        </a>
        <a
          className="flex items-center justify-center text-[20px] w-[30px] h-[30px] border-2 border-[#727fde] no-underline text-gray-300 rounded-full transition-all duration-500 hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"
          title="Whatsapp"
          href="https://wa.me/989921188364"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
