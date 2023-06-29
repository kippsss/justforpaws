"use client";
import React from "react";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion, AnimatePresence } from "framer-motion";

type Props = { fill: string; classes: string; tooltip_placement: "top" | "bottom" };

export default function Socials({ fill, classes, tooltip_placement }: Props) {
  const [modalOpen, setModalOpen] = React.useState(false);

  const closeModalHandler = (e: any) => {
    if (e.target.id == "telegram-modal-overlay") {
      setModalOpen(false);
    }
  };

  const openModalHandler = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div className={`flex flex-row ${classes}`}>
        <button onClick={openModalHandler}>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,
            }}
          >
            <Tooltip content={"Telegram"} placement={tooltip_placement} hideArrow>
              <TelegramIcon className="m-4 text-3xl" sx={{ color: { fill } }} />
            </Tooltip>
          </motion.div>
        </button>
        <Link
          href="https://www.instagram.com/just4paws_official/"
          target="_blank"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,
            }}
          >
            <Tooltip content={"Instagram"} placement={tooltip_placement} hideArrow>
              <InstagramIcon
                className="m-4 text-3xl"
                sx={{ color: { fill } }}
              />
            </Tooltip>
          </motion.div>
        </Link>
        <Link href="https://www.facebook.com/Just4pawsg/" target="_blank">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,
            }}
          >
            <Tooltip content={"Facebook"} placement={tooltip_placement} hideArrow>
              <FacebookIcon className="m-4 text-3xl" sx={{ color: { fill } }} />
            </Tooltip>
          </motion.div>
        </Link>
      </div>
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            id="telegram-modal-overlay"
            className="w-screen h-screen fixed top-0 bg-black/[.54] flex justify-center items-center cursor-pointer z-40"
            onClick={closeModalHandler}
          >
            <div
              id="telegram-modal-box"
              className="flex flex-row bg-white w-70 h-40 items-center p-8 rounded-md z-50"
            >
              <div className="mr-6 max-[300px]:hidden">
                <img
                  src={"/justforpaws_logo.png"}
                  alt="Image of dog"
                  className="w-[6rem] h-[6rem] object-cover rounded-full "
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="font-semibold">Colin</h2>
                <h3 className="font">@j4paws</h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
