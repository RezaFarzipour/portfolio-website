import React from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Sidebar = ({ closeSidebar, isOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-[80%] min-h-screen bg-[#000000b8] backdrop-blur-xl z-[999] shadow-[0_0_20px_rgba(211,211,211,0.4111)] 
      transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}
    >
      <div className="text-[30px] text-[lightgray] p-[10px] cursor-pointer">
        <IoIosCloseCircleOutline onClick={closeSidebar} />
      </div>

      <ul className="pl-[20px] p-8">
        <li className="list-none mb-[30px] text-xl">Home</li>
        <li className="list-none mb-[30px] text-xl">About</li>
        <li className="list-none mb-[30px] text-xl">Projects</li>
        <li className="list-none mb-[30px] text-xl">Skills</li>
      </ul>

      <div className="flex gap-[40px] pl-[40px] mt-[50px] text-nowrap">
        <a
          className="flex items-center justify-center text-[20px] w-[30px] h-[30px] border-2 border-[#727fde] no-underline text-gray-300 rounded-full transition-all duration-500 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]"
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
      </div>
    </div>
  );
};

export default Sidebar;