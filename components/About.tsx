"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-[#FFFFFF]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="flex flex-col p-14 lg:px-14"
      >
        <h2 className="text-4xl font-bold text-left mb-4">About Us</h2>
        <p className="text-lg text-left">
          Welcome to Just For Paws, a haven for our furry friends in
          need. We are dedicated to rescuing, rehabilitating, and rehoming dogs,
          providing them with a second chance at a happy and fulfilling life.
          Our compassionate team of volunteers work tirelessly to
          ensure the well-being of every dog that comes through our doors. 
        </p>
      </motion.div>
      <img
        src="/about_image.jpeg"
        width="50%"
        alt="Picture of Just4Paws team"
        className="hidden lg:block max-w-4xl"
      />
    </div>
  );
}
