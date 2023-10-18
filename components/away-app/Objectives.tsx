"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination, Navigation } from "swiper/modules";

const objectivesData = [
  {
    title: "To simplify the process of planning a trip.",
    content:
      "The Away App will offer an intuitive and user-friendly platform with minimum necessary functionalities to plan a group trip. The intention is to reduce the number of steps required to create a flexible trip itinerary. Since we want the experience to be stress-free and intuitive, our interface will take inspiration from their existing mental models of commonly used apps. The app will be designed to be used by a wide range of users, from novice to expert. It will allow multiple ways to accomplish a task, and will not require the users to memorize the steps to perform a task. It will focus on the user's goals and will not require them to learn the system.",
    image: "/assets/away-app/away-objective-1.png",
  },
  {
    title: "To make group travel planning a collaborative experience.",
    content:
      "When a single person is given the task of planning the entire trip for the group, it can be overwhelming for them to make all the decisions, incorporate everyone's preferences, and avoid raising a conflict with any member. Our app will allow multiple group members to modify and suggest the decisions within a single trip plan in real time, thereby sharing the workload of planning the trip. They will be able to invite their friends to join a trip. They will be able to add places to the group's itinerary and wishlist, and chat with each other to discuss their travel plans which will help in reducing the number of communication channels required to plan a trip.",
    image: "/assets/away-app/away-objective-2.png",
  },
  {
    title:
      "To reduce information overload and help users find places to visit.",
    content:
      "A centralized hub of travel related content so that users won't have to leave the application and hop on to multiple platforms to look for the perfect travel destinations. The authenticity of content will allow users to place more trust in them and thus make quicker decisions. Taking a step further, the curated selection of editorial content will be re-formatted into a custom template that would extract the necessary information such as location data and present them to our users. This will transfer the effort of extracting data from travel articles from the users to the software. It'll help in reducing the cognitive effort required to read multiple articles, and help them make quicker decisions.",
    image: "/assets/away-app/away-objective-3.png",
  },
  {
    title: "To allow users to personalize their travel profile.",
    content:
      "The Away App will allow users to create a profile that will store their personal information such as their name, profile picture, and other details. They will be able to select a cover image for their profile. It will also allow them to create a travel board of places they want to visit, and a list of places they have already visited. This will allow them to keep track of their travel history and future plans. They will also be able to create a list of their favorite places. This will allow them to enhance their travel experiences and help them plan their future trips.",
    image: "/assets/away-app/away-objective-4.png",
  },
];

function Objectives() {
  return (
    <section className="min-h-screen py-10 lg:py-20 px-5 lg:px-10 bg-neutral flex flex-col items-center justify-center gap-5">
      <h1 className="text-6xl mb-10">Objectives</h1>

      <Swiper
        effect={"cube"}
        loop={true}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 50,
          shadowScale: 0.99,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          enabled: true,
        }}
        allowSlideNext={true}
        allowSlidePrev={true}
        modules={[EffectCube, Pagination, Navigation]}
        className="w-full h-full flex justify-center items-center"
      >
        {objectivesData.map((data, index) => {
          return (
            <SwiperSlide
              className="flex justify-center items-center w-full"
              key={index}
            >
              <div className="card w-full xl:card-side bg-neutral-focus shadow-xl">
                <figure>
                  <Image
                    src={data.image}
                    alt="away-app-objective"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body xl:w-8/12">
                  <h2 className="card-title">{data.title}</h2>
                  <p>{data.content}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Objectives;
