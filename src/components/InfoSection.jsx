import React from "react";
import styles from "./infosection.module.css";
import { cardsData } from "../constants/data";
import AutoDisplaySection from "./animations/AutoDisplay";
import SectionTitle from "./common/Tilte";
import { FaUser } from "react-icons/fa";



const InfoSection = ({t}) => {
  return (
    <section className="flex flex-col items-center w-[80%] mt-[100px] " id="about">
      <AutoDisplaySection>


        <SectionTitle
        icon={<FaUser/>}
        text= {t("summeryTitle")}
        />
      </AutoDisplaySection>
      <div className="grid grid-cols-3 gap-[20px] w-full h-full mt-[30px] max-[1000px]:grid-cols-[auto]">
        {cardsData.map((card, index) => (
          <div className={styles.card} key={index}>
            <h1 className="absolute m-0 bottom-[30%] left-[5%] text-[20px] z-1 text-gray-200 max-[1000px]:text-15px">
              {t(card.titleKey)}
            </h1>
            <p className="absolute bottom-[5%] left-[5%] z-1 max-w-[300px] text-gray text-[14px] leading-[20px]">
            {t(card.textKey)}
            </p>

            {card.type === "image" && (
              <img
                className="w-[50%] h-[50%] md:h-[57%] mt-3 object-cover rounded-full"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
