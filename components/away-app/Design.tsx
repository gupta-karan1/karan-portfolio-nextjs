"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const designData = [
  {
    title: "1. Initial Ideas & Wireframing",
    content:
      " In the week from 6th-10th February, 2023, we performed our first session of brainstorming wherein we sketched out all possible ideas to resolve the problems with travel planning using crazy 8s. At this point we had not narrowed our problem and solutions to group travel planning but we were considering multiple ideas to resolve problems with every stage of travel planning.",
    image: "/assets/away-app/stage1.png",
    link: "https://www.figma.com/proto/64tkAsYoT24KXxOBPvcOEC/1st_Pitch?type=design&node-id=4-2&scaling=contain&page-id=0%3A1",
  },
  {
    title: "2. Low-Fidelity Paper Prototype",
    content:
      "In the week of 20th to 24th February, 2023, we decided to convert our wireframe sketches to paper prototypes by connecting them in Figma so that we can test out the overall experiences and interactions with potential users. We had to make sure that the overall flow is simple to comprehend and whether users are able understand how they are achieving their goals on the different screens.",
    image: "/assets/away-app/stage2.png",
    link: "https://www.figma.com/proto/pNfVZuXHQmU5SZsRQcrEXA/Prototype-23%2F02?type=design&node-id=2-3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A3",
  },
  {
    title: "3. Low-Fidelity Digital Prototype I",
    content:
      "In the week of 27th February 23 to 3rd March 23, we decided to convert our initial raw prototypes from previous weeks into our first digital prototype in Figma. Primary focus was to work on the trip plan creation process with the trip form and the chat section of the trip plan. This was because we had received positive validation on those features from our user testing and we wanted to refine them further.",
    image: "/assets/away-app/stage3.png",
    link: "https://www.figma.com/proto/czd1volA7sxLl5YdWQmoPQ/Pitch-2-Presentation?type=design&node-id=1-5&scaling=contain&page-id=0%3A1",
  },
  {
    title: "4. Paper Prototyping",
    content:
      "In the week of 20th to 24th March 23, we conducted intensive moderated & recorded user testing sessions using highly detailed paper prototypes. Although we had moved on to digital prototypes, we still had to figure out the Explore section and the Plan section of the application for which it was beneficial to quickly sketch & craft paper prototypes rather than creating digital screens.",
    image: "/assets/away-app/stage4.png",
    link: "https://youtu.be/eqmRAftvTXA",
  },
  {
    title: "5. Low-Fidelity Digital Prototype II",
    content:
      "In the week of March 27th -31st, 2023, we decided to take our paper prototype sketches and convert them into digital prototypes. We focused on how users would find destinations, explore them and finally add them to their itinerary. For this, we created a use case wherein the trip organizer has already created their trip and were tasked with adding a new location to their itinerary.",
    image: "/assets/away-app/stage5.png",
    link: "https://www.figma.com/file/sXgrWqoeuuCulnJZS6UCpx/Away-App-Pitch-3?type=design&node-id=0%3A1&t=GV7LTOd5jojztHTL-1",
  },
  {
    title: "6. Low-Fidelity Digital Prototype III",
    content:
      "In the week of April 3rd-7th 2023, we created the low-fidelity prototype for the Explore, Trips and Profile sections in further detail. We focused on creating a minimalist experience for each of these sections by employing a good use of Google's Material Design Guidelines, UX laws and design principles to make it more usable, aesthetically appealing and aligned with our user persona.",
    image: "/assets/away-app/stage6.png",
    link: "https://www.figma.com/file/iTfekJIfVUvUQwcpzd73O9/1st-Wireframe_28.02.2023?type=design&node-id=0%3A1&t=JlBO14UQpRejxQe1-1",
  },
  {
    title: "7. High-Fidelity Digital Prototype",
    content:
      "In two weeks from 10th-21st April 2023, we took our finalized low-fidelity designs and added a layer of visual design. We started building a brand identity. Then, we created a design system in Figma to quickly apply a consistent styling to UI elements.Then, we began creating the standard UI elements which will be used to build the final UI screens with reference from Material Design guidelines.",
    image: "/assets/away-app/stage7.png",
    link: "https://www.figma.com/proto/3Hh08NUno9m160H45a8DYJ/Hi-Fi-Prototype?type=design&node-id=56-10718&scaling=scale-down&page-id=0%3A1&starting-point-node-id=56%3A10718&show-proto-sidebar=1",
  },
];

function DesignCard({
  title,
  content,
  image,
  link,
}: {
  title: string;
  content: string;
  image: string;
  link?: string;
}) {
  return (
    <div className="card bg-neutral  w-full rounded-t-none ">
      <figure className="px-10 pt-5 w-full">
        <Image
          src={image}
          width={1280}
          height={600}
          alt="stage1"
          className="rounded-box shadow-xl w-full"
          loading="eager"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary " href={link || ""}>
            View Live <ArrowUpRightIcon className="w-5 h-5" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

function Design() {
  return (
    <section className="min-h-screen py-10 lg:py-20 px-5 lg:px-10 bg-base-100 flex flex-col items-center justify-center gap-5">
      <h1 className="text-6xl mb-10">Design</h1>

      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="xl:w-10/12 w-full h-full shadow-xl"
      >
        {designData.map((item, index) => (
          <SwiperSlide key={index} className="w-full h-full ">
            <DesignCard
              title={item.title}
              content={item.content}
              image={item.image}
              link={item.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Design;
