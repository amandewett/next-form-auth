"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextShuffler from "../shared/TextShuffler";

const Welcome = () => {
  return (
    <motion.div
      className="flex justify-center items-center mt-20 ml-auto mr-auto font-bold text-8xl text-aPrimaryColor w-1/2 overflow-hidden"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="w-[10%] blinkIt">_</span>
      <TextShuffler
        className="w-[90%]"
        arrString={["NextJS", "NextAuth", "Forms"]}
      />
    </motion.div>
  );
};

export default Welcome;
