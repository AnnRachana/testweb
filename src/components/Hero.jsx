import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles/Hero.css"

import SlideOne from "../components/images/luzhnikibg.jpg";
import SlideTwo from "../components/images/runningbg.jpg";
import SlideThree from "../components/images/basbg.jpg";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}`;
  };
  const backgroundStyleOne = {
    backgroundImage: `url(${SlideOne})`,
    backgroundSize: "cover",
    backgroundPosition:"center top"
  };
  const backgroundStyleTwo = {
    backgroundImage: `url(${SlideTwo})`,
    backgroundSize: "cover",
    backgroundPosition:"center top"
  };
  const backgroundStyleThree = {
    backgroundImage: `url(${SlideThree})`,
    backgroundSize: "cover",
    backgroundPosition:"center top"
  };

  return (
    <div className="home" id="home">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide style={backgroundStyleOne}>
          <div className=" px-5 lg:px-36">
            <h1 className=" font-bold text-4xl text-white">GET READY FOR</h1>
            <h1 className=" font-bold text-4xl text-white">THE NEW SEASON</h1>
            <p className=" font-bold text-2xl text-white mb-10">
              WITH THE ADIDAS TEAMWEAR COLLECTION
            </p>
            <a
              href="#"
              className="bg-white text-black font-bold text-1xl px-7 py-2"
            >
              SHOP NOW
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide style={backgroundStyleTwo}>
          <div className=" px-5 lg:px-36">
            <h1 className=" font-bold text-4xl text-white">GET READY FOR</h1>
            <h1 className=" font-bold text-4xl text-white">THE NEW SEASON</h1>
            <p className=" font-bold text-2xl text-white mb-10">
              WITH THE ADIDAS TEAMWEAR COLLECTION
            </p>
            <a
              href="#"
              className="bg-white text-black font-bold text-1xl px-7 py-2"
            >
              SHOP NOW
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide style={backgroundStyleThree}>
          <div className=" px-5 lg:px-36">
            <h1 className=" font-bold text-4xl text-white">GET READY FOR</h1>
            <h1 className=" font-bold text-4xl text-white">THE NEW SEASON</h1>
            <p className=" font-bold text-2xl text-white mb-10">
              WITH THE ADIDAS TEAMWEAR COLLECTION
            </p>
            <a
              href="#"
              className="bg-white text-black font-bold text-1xl px-7 py-2"
            >
              SHOP NOW
            </a>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;
