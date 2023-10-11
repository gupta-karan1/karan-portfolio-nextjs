import { UserCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

const problemChats = [
  {
    text: "It's always hard to find places to visit.",
    color: "chat-bubble-primary",
    position: "chat-start",
  },
  {
    text: "Splitting expenses withing a group is a pain.",
    color: "chat-bubble-accent",
    position: "chat-end",
  },
  {
    text: "Different people in a group have different preferences.",
    color: "chat-bubble-primary",
    position: "chat-start",
  },
  {
    text: "Group decisions are difficult to organize and manage.",
    color: "chat-bubble-accent",
    position: "chat-end",
  },
  {
    text: "Making a travel plan is frustrating at times.",
    color: "chat-bubble-primary",
    position: "chat-start",
  },
  {
    text: "Too much time is lost in decision making.",
    color: "chat-bubble-accent",
    position: "chat-end",
  },
  {
    text: "Overwhelming amount of travel information out there. ",
    color: "chat-bubble-primary",
    position: "chat-start",
  },
  {
    text: "Have to look at multiple sources to plan a trip.",
    color: "chat-bubble-accent",
    position: "chat-end",
  },
  {
    text: "I don't know what content to trust.",
    color: "chat-bubble-primary",
    position: "chat-start",
  },
  {
    text: "Coming to a consensus is difficult.",
    color: "chat-bubble-accent",
    position: "chat-end",
  },
  {
    text: "Building a travel itinerary is a tedious task.",
    color: "chat-bubble-primary",
    position: "chat-start",
  },
  {
    text: "No place to store my travel wishlist and memories.",
    color: "chat-bubble-accent",
    position: "chat-end",
  },
];

function Problem() {
  return (
    <section className="min-h-screen py-10 lg:py-20 px-10 lg:px-20 bg-base-300 flex flex-col items-center justify-center gap-5">
      <h1 className="text-6xl mb-10">Problem</h1>
      <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 place-items-center">
        <div className=" bg-neutral-focus p-5 rounded-3xl h-full">
          <p className="text-lg font-light">
            Through interviews and listening, we identified a number of pain
            points that our users require us to solve in our design. These
            include diverging preferences, information overwhelm,
            miscommunication and time wasted when planning a group trip.
          </p>
          <p className="mt-5 text-2xl">
            {" "}
            Problem statement: <br /> People traveling in groups need a simple
            and efficient application in order to coordinate with group members
            and ensure they are satisfied with the trip itinerary.{" "}
          </p>
        </div>

        <div className="bg-neutral-focus p-3 rounded-3xl w-full h-full">
          <iframe
            title="figma-embed"
            width="600"
            height="300"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F24NQas68NpCUYt4Is51yWF%2FTravel-App---User-Problems%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3Dk2S0DZ9CZQQpzbJo-1"
            allowFullScreen
            className=" rounded-2xl w-full"
          ></iframe>
        </div>
        <div className=" lg:col-span-1 lg:row-span-full bg-neutral-focus w-full h-full rounded-3xl p-5">
          {problemChats.map((chat, index) => (
            <div className={`chat ${chat.position}`} key={index}>
              {/* <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <UserCircleIcon className={`w-10 h-10 text-${chat.color}`} />
                </div>
              </div> */}
              <div className={`chat-bubble ${chat.color}`}>{chat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Problem;
