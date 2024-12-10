"use client"

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules"; // Navigation module
import { Swiper as SwiperType } from "swiper"; // Swiper Type
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const GearUp = () => {
  const menSwiperRef = useRef<SwiperType | null>(null); // Corrected type
  const womenSwiperRef = useRef<SwiperType | null>(null); // Corrected type

  const menItems = [
    { image: "/Images/men-tshirt.png", title: "Nike Dri-FIT ADV TechKnit Ultra", category: "Men's Short-Sleeve Running Top", price: "₹ 3,895" },
    { image: "/Images/men-shorts.png", title: "Nike Dri-FIT Challenger", category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts", price: "₹ 2,495" },
  ];

  const womenItems = [
    { image: "/Images/women-tshirt.png", title: "Nike Dri-FIT ADV Run Division", category: "Women's Long-Sleeve Running Top", price: "₹ 5,295" },
    { image: "/Images/women-trouser.png", title: "Nike Fast", category: "Women's Mid-Rise 7/8 Running Leggings with Pockets", price: "₹ 3,795" },
  ];

  const handlePrevMen = () => {
    if (menSwiperRef.current) menSwiperRef.current.slidePrev();
  };

  const handleNextMen = () => {
    if (menSwiperRef.current) menSwiperRef.current.slideNext();
  };

  const handlePrevWomen = () => {
    if (womenSwiperRef.current) womenSwiperRef.current.slidePrev();
  };

  const handleNextWomen = () => {
    if (womenSwiperRef.current) womenSwiperRef.current.slideNext();
  };

  return (
    <div className="airmax-section">
      {/* Men Section */}
      <div className="section men-section">
        <div className="arrows">
          <div className="arrow" onClick={handlePrevMen} aria-label="Previous Men Item">
            <ChevronLeft size={20} />
          </div>
          <div className="arrow" onClick={handleNextMen} aria-label="Next Men Item">
            <ChevronRight size={20} />
          </div>
        </div>
        <Swiper
          onSwiper={(swiper) => (menSwiperRef.current = swiper)} // Correctly assign ref
          slidesPerView={2}
          spaceBetween={20}
          navigation={false}
          modules={[Navigation]}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="mySwiper"
        >
          {menItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <Image src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.category}</p>
                <p className="price">{item.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Women Section */}
      <div className="section women-section">
        <div className="arrows">
          <div className="arrow" onClick={handlePrevWomen} aria-label="Previous Women Item">
            <ChevronLeft size={20} />
          </div>
          <div className="arrow" onClick={handleNextWomen} aria-label="Next Women Item">
            <ChevronRight size={20} />
          </div>
        </div>
        <Swiper
          onSwiper={(swiper) => (womenSwiperRef.current = swiper)} // Correctly assign ref
          slidesPerView={2}
          spaceBetween={20}
          navigation={false}
          modules={[Navigation]}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="mySwiper"
        >
          {womenItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <Image src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.category}</p>
                <p className="price">{item.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GearUp;
