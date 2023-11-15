"use client";
import React from "react";
import ReactCompareImage from "react-compare-image";

function UserFlow() {
  return (
    <section className="min-h-screen py-10 lg:py-20 px-5 lg:px-10 bg-base-300 flex flex-col items-center justify-center gap-5">
      <h1 className="text-6xl mb-10">User Flow Update - Post Feedback</h1>
      <p className="text-lg">
        After conducting usability testing with 20+ users, we discovered that
        people had difficulty in creating an itinerary and wishlist because of a
        complex navigation, unclear prompts, and lack of multiple pathways. So,
        we redesigned the user flow by simplifying the navigation, using clear
        words, and creating a modal to allow them to quickly add places to
        either itinerary or wishlist or both, resulting in an intuitive
        interaction.
      </p>

      <ReactCompareImage
        leftImage="/assets/away-app/before.jpg"
        rightImage="/assets/away-app/after.jpg"
        sliderLineColor="#ffffff"
        sliderLineWidth={5}
        sliderPositionPercentage={0.5}
        handleSize={50}
        // hover={true}
        leftImageAlt="before"
        rightImageAlt="after"
      />
    </section>
  );
}

export default UserFlow;
