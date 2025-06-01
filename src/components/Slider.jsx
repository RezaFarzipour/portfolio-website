import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; 
import { Navigation,Pagination } from "swiper/modules"; // ماژول ناوبری


export default function MySlider({ activeFeature }) {


  return (
    <Swiper
    
      spaceBetween={30}
      slidesPerView={1}
      navigation
      modules={[Navigation,Pagination ]}
      pagination={{
        type: 'fraction',
      }}
     
      className="w-[1000px]  mx-auto mySwiper relative "
    >
      {activeFeature?.map((img) => (
        <SwiperSlide>
          <div className="flex items-center justify-center  w-full h-[400px] ">
            <img
              src={img.src}
              alt=""
              className="max-h-full max-w-full object-contain rounded-lg"
            />
          </div>
          <h1 className="my-10 text-2xl md:text-3xl">{img.title}</h1>
          <p className="mt- text-sm md:text-xl">{img.desc}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
