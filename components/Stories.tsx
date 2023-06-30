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
        <div className="flex flex-col items-center border-solid border-2 max-h-[75vh] max-w-[50vh] overflow-auto">
          <img src="justforpaws_logo.png" />
          <div>
            <p>
              My wife, Yumi and I, have been truly blessed to have Woody as part
              of our family. She has been an amazing addition to our home and we
              always look forward to seeing her happy face when we come back
              home. We have been able to watch her blossom in a home environment
              - she was quiet and reserved, and she especially didn't like other
              dogs coming into her space (she was called Grumpy by the
              volunteers for this!) Yet on the second day she plonked herself on
              our living room floor asking for belly rubs. Woody has brought us
              a lot of joy with her quirky habits, and we are very grateful to
              Just4Paws for allowing us to give Woody a forever home.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
