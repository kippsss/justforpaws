"use client";
import React from "react";
import Socials from "./Socials";

export default function Contact() {

  return (
    <div className="flex flex-col items-center px-16 pt-10 pb-16 bg-[#FFFFFF] ">
      <div className="mt-10 mb-14 max-w-lg">
        <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
        <h4 className="text-xl text-center">
          Interested in adopting or volunteering? Have any questions for us?
          Drop us a DM on any of our socials below!
        </h4>
      </div>
      <Socials fill="black" classes="" tooltip_placement="top"/>
      <h1 className="text-center">59 Sungei Tengah Rd, Singapore 699014</h1>
    </div>
  );
}
