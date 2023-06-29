"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function Process({}: Props) {
  return (
    <div className="flex flex-col items-center p-8 sm:p-10 bg-[#F6F6F6]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="w-full"
      >
        <div className="mt-10 mb-20">
          <h2 className="text-4xl font-bold text-center">Adoption process</h2>
        </div>
        <div className="flex flex-col max-w-screen-lg">
          <div className="bg-white mb-16 p-16 self-end w-3/4">
            <h2 className="text-2xl text-right font-bold mb-5">
              Indication of interest and initial screening
            </h2>
            <p className="text-lg text-right">fdeqwfew</p>
          </div>
          <div className="bg-white mb-16 p-16 self-start w-3/4">
            <h2 className="text-3xl text-left font-bold mb-5">
              Familiarisation
            </h2>
            <p className="text-lg text-left">fdeqwfew</p>
          </div>
          <div className="bg-white mb-16 p-16 self-end w-3/4">
            <h2 className="text-3xl text-right font-bold mb-5">Confirmation</h2>
            <p className="text-lg text-right">fdeqwfew</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
