import {
  ChatBubbleOvalLeftEllipsisIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid";
import React from "react";
const goalsData = [
  {
    title: "Experience Goals - Visceral",
    content:
      "Users planning group travel want to feel a range of emotions. They seek to be excited about the destinations and activities, confident in their choices, connected with their friends, organized and prepared, and most importantly, relaxed and stress-free during the planning process.",
    icon: <ChatBubbleOvalLeftEllipsisIcon className="h-10 w-10 text-primary" />,
  },
  {
    title: "End Goals - Behavioral",
    content:
      "While planning group travel, users aim to take certain actions and achieve specific outcomes. They want to learn about new destinations, create memorable experiences, have fun with friends, save time and money, avoid conflicts, decide on travel destinations efficiently, and find the best places to visit.",
    icon: <MapIcon className="h-10 w-10 text-primary" />,
  },
  {
    title: "Life Goals - Reflective",
    content:
      "At a deeper level, users have long-term life goals. They want to build lasting friendships, escape the routine of urban life, lead a fulfilling life, broaden their worldview through cultural interactions, challenge themselves and grow personally, and fulfill their lifelong dreams and aspirations.",
    icon: <SparklesIcon className="h-10 w-10 text-primary" />,
  },
];

function UserGoals() {
  return (
    <div className="collapse collapse-plus bg-neutral px-2 shadow-sm  hover:shadow-lg transition-shadow duration-300 ease-in-out ">
      <input type="checkbox" placeholder="collapse" />
      <div className="collapse-title text-4xl ">User Goals</div>
      <div className="collapse-content flex gap-5 items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {goalsData.map((data, index) => (
            <div
              key={index}
              className="card bg-neutral-focus shadow-xl w-full rounded-t-none"
            >
              <div className="card-body ">
                <h2 className="card-title">{data.title}</h2>
                <p>{data.content}</p>
                <div className="card-actions justify-end">{data.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserGoals;
