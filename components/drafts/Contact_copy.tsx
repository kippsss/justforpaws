"use client";
import React from "react";
import Link from "next/link";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="flex flex-col items-center p-10 bg-[#FFD1D1]">
      <div className="mt-10 mb-20 max-w-xl">
        <h2 className="text-4xl font-bold text-center mb-5">Get In Touch</h2>
        <h4 className="text-xl text-center">Interested in adopting or volunteering? Have any questions for us? Drop us a DM on any of our socials below!</h4>
      </div>
      {/* <Form /> */}
      <div className="flex flex-row justify-center">
        <a href="mailto:just4pawz18@gmail.com">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,
            }}
          >
            <MailOutlineIcon className="m-4 text-black text-3xl" />
          </motion.div>
        </a>
        <Link href="https://www.instagram.com/just4paws_official/">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,
            }}
          >
            <InstagramIcon className="m-4 text-black text-3xl" />
          </motion.div>
        </Link>
        <Link href="https://www.facebook.com/Just4pawsg/">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,
            }}
          >
            <FacebookIcon className="m-4 text-black text-3xl" />
          </motion.div>
        </Link>
      </div>
      <h1 className="text-center">59 Sungei Tengah Rd, Singapore 123456</h1>
    </div>
  );
}
