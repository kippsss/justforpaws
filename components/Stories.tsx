"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Stories() {
  return (
    <div className="flex flex-col items-center px-16 pt-10 pb-16 bg-[#FFFFFF] ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="flex flex-col items-center z-1"
      >
        <div className="mt-10 mb-20">
          <h2 className="text-4xl font-bold text-center">Our Stories</h2>
        </div>
      </motion.div>
    </div>
  );
}
