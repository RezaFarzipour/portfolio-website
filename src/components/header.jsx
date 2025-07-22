"use client";
import React, { useState } from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const t = useTranslations()

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header class="flex absolute max-[700px]:h-[50px] max-[700px]:fixed top-0 right-0 left-0 items-center justify-between h-[70px] bg-white/15 backdrop-blur-md px-[30px] shadow-[0_0_15px_#72a1de68] z-[999]">
        <div className="flex items-center">
          {/* <img className={styles.logo} src="images/miladicode.png" alt="logo" /> */}
          <h1 className="text-3xl max-[700px]:text-[25px]">
            <span style={{ color: "#72a1de" }}>{t("reza")}</span> {t("farzipour")}
          </h1>
        </div>
<div></div>
        <ul className="flex  border-2 max-[700px]:hidden justify-between w-[30%] px-[15px] py-[15px] rounded-full bg-[rgba(0,0,69,0.3)] shadow-[0_0_10px_#727fde65]">
          <li className="list-none">
            <a className="no-underline text-white font-bold mx-[10px]" href="#about">
           {t("about")}
            </a>
          </li>
          <li className="list-none">
            <a className="no-underline text-white font-bold mx-[10px]" href="#skills">
            {t("headerSkil")}
            </a>
          </li>
          <li className="list-none">
            <a className="no-underline text-white font-bold mx-[10px]" href="#projects">
            {t("HeaderProject")}
            </a>
          </li>
        </ul>

        <div className="flex gap-[40px] max-[700px]:hidden">
          <a
            className="flex items-center  justify-center text-[20px] w-[30px] h-[30px] border-2 border-[#727fde] no-underline text-gray-300 rounded-full transition-all duration-500 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]"
            title="Linkedin"
            href="#"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="flex items-center justify-center text-[20px] w-[30px] h-[30px] border-2 border-[#727fde] no-underline text-gray-300 rounded-full transition-all duration-500 hover:bg-[#333] hover:text-white hover:border-[#333]"
            title="Github"
            href="#"
          >
            <FaGithub />
          </a>
          <a
            className="flex items-center justify-center text-[20px] w-[30px] h-[30px] border-2 border-[#727fde] no-underline text-gray-300 rounded-full transition-all duration-500 hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"
            title="Whatsapp"
            href="#"
          >
            <FaWhatsapp />
          </a>

          <LanguageSwitcher/>
        </div>



        <div
          className="text-[35px] pointer hidden max-[700px]:inline"
          onClick={openSidebar}
        >
          <IoMdMenu />
        </div>
      </header>

      {isSidebarOpen && (
  <Sidebar  isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
)}


  

      
    </>
  );
};

export default Header;
