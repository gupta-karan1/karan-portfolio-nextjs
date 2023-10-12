"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import ReactCompareImage from "react-compare-image";

const developmentData = [
  {
    title: "Form follows Function",
    content:
      "After the UX/UI was completed to a certain stage, we started developing it. After technical research & evaluating capabilities, we decided to go for React Native, Expo, and JavaScript for Frontend and Firebase for Backend. We developed the most important features to test the main use cases without applying any styling. After usability testing and validation, we applied the final styling and refined the overall UX.",
    image: "/assets/away-app/away-before.png",
    image2: "/assets/away-app/away-after.png",
  },
  {
    title: "Building a Data Model",
    content:
      "Since our app had a complex relationship between different datasets, we had to map out the data model. This helped us understand the relationships between different datasets and how they would interact with each other. We also had to consider the limitations of the database we were using and how we could optimize the data model to work with the database. Collaborative features were possible with sharing datasets between users.",
    image: "/assets/away-app/away-data-model.png",
  },
  {
    title: "Component Based Architecture",
    content:
      "We used a component-based architecture to build the app. This allowed us to reuse components and build the app faster. We developed custom hooks and react's context API to manage the state of the app. We used several NPM packages, like draggable list, reanimated, navigation, etc to add functionality to the app. We also used several third-party APIs like Unsplash & Google Maps to add features to the app.",
    image: "/assets/away-app/away-code.png",
  },
];

function Development() {
  return (
    <section className="min-h-screen py-10 lg:py-20 px-10 lg:px-20 bg-base-300 flex flex-col items-center justify-center gap-5">
      <h1 className="text-6xl mb-10">Development</h1>

      <Swiper
        rewind={true}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="w-full h-full shadow-xl"
        allowTouchMove={false}
      >
        {developmentData.map((item, index) => (
          <SwiperSlide className="w-full h-full">
            <div
              className="card lg:card-side bg-neutral shadow-xl w-full"
              key={index}
            >
              <figure className="w-full">
                {item.image && !item.image2 && (
                  <Image
                    src={item.image}
                    width={1280}
                    height={600}
                    alt="stage1"
                    className="rounded-box shadow-xl w-full"
                  />
                )}
                {item.image2 && (
                  <ReactCompareImage
                    leftImage={item.image}
                    rightImage={item.image2}
                    sliderLineColor="#ffffff"
                    sliderLineWidth={5}
                    sliderPositionPercentage={0.5}
                    handleSize={50}
                    // hover={true}
                    leftImageAlt="before"
                    rightImageAlt="after"
                  />
                )}
              </figure>
              <div className="card-body w-8/12 ">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Development;
