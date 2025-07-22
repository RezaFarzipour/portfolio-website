"use client"
import React from "react";
import { GoOrganization } from "react-icons/go";
import { IoPerson } from "react-icons/io5";
const ClientAndMyRole = ({ Role, client,roleLabel,clientLabel }) => {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3  bg-[#111] shadow-[0_2px_30px_rgba(255,255,255,0.1)] rounded-3xl p-6 md:p-10 flex items-center justify-center">
        <div className="flex items-center mx-4">
          <IoPerson className="text-purple-600 text-xl mx-1" />
          <h1 className="font-extrabold text-sm md:text-xl text-nowrap">
          {roleLabel}:
          </h1>
        </div>
        <p className="font-bold  text-sm md:text-lg">{Role}</p>
      </div>

      <div className=" w-full  md:w-1/2 lg:w-1/3 bg-[#111] shadow-[0_2px_30px_rgba(255,255,255,0.1)] rounded-3xl p-6 md:p-10 flex items-center justify-center">
        <div className="flex items-center mx-4">
          <GoOrganization className="text-purple-600 text-xl mx-1" />
          <h1 className="font-extrabold text-sm md:text-xl text-nowrap ">
           {clientLabel}:
          </h1>
        </div>
        <p className="font-bold  text-sm md:text-lg">{client}</p>
      </div>
    </>
  );
};

export default ClientAndMyRole;
