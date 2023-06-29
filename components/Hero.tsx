"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion, AnimatePresence } from "framer-motion";
import Socials from "./Socials";

export default function Hero() {
  const [text, count] = useTypewriter({
    words: ["hi!", "we are Just For Paws!"],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="h-screen flex flex-col justify-center items-center relative">
      <Socials
        classes="absolute top-8 min-[600px]:right-8 z-10"
        fill="white"
        tooltip_placement="bottom"
      />
      <Image
        src={`/hero_image.jpg`}
        alt="Hero Image"
        className="opacity-100 object-cover"
        fill
      />
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-white z-10 text-center p-10">
        <span>{text}</span>
        <Cursor cursorColor="white" />
      </h1>
    </div>
  );
}
