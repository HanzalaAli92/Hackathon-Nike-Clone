'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Importing arrows from React Lucide
import Image from "next/image";

const AirMaxSection = () => {
  const items = [
    {
      image: "/Images/shoe1.png",
      title: "Nike Air Max Pulse",
      category: "Women's Shoes",
      price: "₹ 13,995",
    },
    {
      image: "/Images/shoe2.png",
      title: "Nike Air Max Pulse",
      category: "Men's Shoes",
      price: "₹ 13,995",
    },
    {
      image: "/Images/shoe3.png",
      title: "Nike Air Max 97 SE",
      category: "Men's Shoes",
      price: "₹ 16,995",
    },
    {
      image: "/Images/shoe1.png",
      title: "Nike Air Max Pulse",
      category: "Women's Shoes",
      price: "₹ 13,995",
    },
  ];

  return (
    <div className="airmax-section">
      <div className="header">
        <h2>Best of Air Max</h2>
        <div className="arrows">
          <h2 className="shop">Shop</h2>
          <div className="arrow">
            <ChevronLeft size={20} color="white" />
          </div>
          <div className="arrow">
            <ChevronRight size={20} color="white" />
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <Image src={item.image} alt={item.title} width={100} height={100}/>
              <h3>{item.title}</h3>
              <p>{item.category}</p>
              <p className="price">{item.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AirMaxSection;
