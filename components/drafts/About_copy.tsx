"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen flex flex-col md:flex-row justify-center items-center">
      <motion.div
        initial={{
          x: -40,
          opacity: 0,
        }}
        transition={{ duration: 0.8 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="p-5 w-80 md:w-96"
      >
        <img className="rounded-full" src="/self-drawing.jpeg" />
      </motion.div>
      <motion.div
        initial={{
          x: +40,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="flex flex-col justify-center w-80 md:w-96 p-5"
      >
        <h2 className="text-2xl md:text-4xl text-bold pb-2 text-center">
          a little about me.
        </h2>
        <p className="text-center">
          Hi there, I'm Keith. I'm a recent Computational Biology graduate with
          a keen interest in the field of biotechnology.
        </p>
      </motion.div>
    </div>
  );
}
