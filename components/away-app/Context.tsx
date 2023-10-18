"use client";

import ContextCard from "./ContextCard";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const contextData = [
  {
    title: "Empowering Seamless Adventures",
    content:
      "In a world filled with opportunities to explore, our travel planning app is your key to unlocking seamless adventures. Designed with a passion for travel, it's not just an app; it's your trusted travel companion.",
    image: "/assets/away-app/away-context-1.jpg",
  },
  {
    title: "Tailored for Diverse Travelers",
    content:
      "Our app is as diverse as the travelers it serves. Whether you're a globe-trotting enthusiast, a tourist seeking cultural richness, or a busy professional on the go, we've crafted a tool that adapts to your unique journey. ",
    image: "/assets/away-app/away-context-2.jpg",
  },
  {
    title: "Navigating Today's Fast-Paced World",
    content:
      "In today's fast-paced world, time is a precious commodity. Travel planning, while exciting, can be a daunting task. Our app is here to alleviate the stress of managing it all, ensuring your travel plans align seamlessly with your busy life. ",
    image: "/assets/away-app/away-context-3.jpg",
  },
  {
    title: "A Solution to Information Overload",
    content:
      "The information age has given us an abundance of choices when it comes to travel. However, this often leads to information overload. Our app acts as your personal travel curator, aggregating and simplifying the wealth of information out there. ",
    image: "/assets/away-app/away-context-4.jpg",
  },
  {
    title: "Enhancing the Joy of Travel",
    content:
      "Travel isn't just about reaching a destination; it's about the journey itself. Our app goes beyond logistics, helping you uncover hidden gems, design unforgettable experiences, and stay organized, so you can focus on the joy of travel.",
    image: "/assets/away-app/away-context-5.jpg",
  },
  {
    title: " Making Group Travel Easy and Fun",
    content:
      "Traveling with a group can be a logistical puzzle, but it doesn't have to be. Our app is your ultimate solution for making group travel a breeze. We focus on ensuring that your journeys with friends, family, or colleagues are not only easy to plan but also incredibly enjoyable.",
    image: "/assets/away-app/away-context-6.jpg",
  },
];

export default function Context() {
  return (
    <section className="min-h-screen py-10 lg:py-20 px-5 lg:px-10 bg-base-100 flex flex-col items-center justify-center gap-5">
      <h1 className="text-6xl mb-10">Context</h1>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className=" w-full  lg:w-9/12 h-full"
      >
        {contextData.map((card, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center shadow-2xl"
          >
            <ContextCard
              title={card.title}
              description={card.content}
              image={card.image}
              classes="w-full bg-neutral"
              width={1000}
              height={1000}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
