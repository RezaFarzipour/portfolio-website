import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useLocale } from "next-intl";

export default function MySlider({ activeFeature }) {
  const locale = useLocale();
  const isRTL = locale === "fa";
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);



  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.params.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  }, [activeFeature]);

  return (
    <div className="relative w-full max-w-[1000px] mx-auto px-4">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        pagination={{ type: "fraction" }}
        dir="ltr"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="mySwiper"
      >
        {activeFeature?.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center w-full h-[400px]">
              <img
                src={img.src}
                alt=""
                className="w-full h-auto max-h-[400px] object-contain rounded-lg"
              />
            </div>
            <h1
              className={`my-10 text-2xl md:text-3xl ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {img.title}
            </h1>
            <p
              className={`mt-2 text-sm md:text-xl ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {img.desc}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute top-1/4 md:top-1/3 -left-6 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full shadow-md hover:bg-purple-700 transition z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/4 md:top-1/3 -right-6 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full shadow-md hover:bg-purple-700 transition z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
