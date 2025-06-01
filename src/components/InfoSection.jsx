import React from "react";
import styles from "./infosection.module.css";
import { cardsData } from "../constants/data";
import AutoDisplaySection from "./animations/AutoDisplay";

const InfoSection = () => {
  return (
    <section className="flex flex-col items-center w-[80%] mt-[100px]">
      <AutoDisplaySection>
        <h1 className="text-[40px] font-bold max-[1000px]:text-30px">
          Hello, There 🖐️
        </h1>
      </AutoDisplaySection>
      <div className="grid grid-cols-3 gap-[20px] w-full h-full mt-[30px] max-[1000px]:grid-cols-[auto]">
        {cardsData.map((card, index) => (
          <div className={styles.card} key={index}>
            <h1 className="absolute m-0 bottom-[30%] left-[5%] text-[20px] z-1 text-gray-200 max-[1000px]:text-15px">
              {card.title}
            </h1>
            <p className="absolute bottom-[5%] left-[5%] z-1 max-w-[300px] text-gray text-[14px] leading-[20px]">
              {card.text}
            </p>

            {card.type === "image" && (
              <img
                className="w-[80%] h-[60%] object-cover"
                src={card.image}
                alt="card-image"
              />
            )}

            {card.type === "video" && (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="mt-[10%] w-[80%] h-[60%] object-cover mix-blend-lighten max-[1000px]:h-[65%] max-[700px]:w-full"
                src={card.video}
                type="video/mp4"
              />
            )}

            {card.button && (
              <button className="text-white px-[15px] py-[10px] rounded-[10px] border border-[#727fdeb4] bg-[#2200493d] shadow-[0_0_5px_#727fde86] cursor-pointer transition-all duration-300 absolute bottom-[2%] left-[5%] hover:shadow-[0_0_15px_#727fde86] hover:opacity-70">
                <i className="bx bx-link-external"></i> Contact Me
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
