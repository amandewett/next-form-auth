"use client";
import { PropsType } from "@/@types/customTypes";
import { motion } from "framer-motion";

const SignupFormContainer = (props: PropsType) => {
  return (
    <>
      <motion.div
        className="w-1/3 bg-slate-100 rounded-md ml-auto mr-auto mt-14 flex flex-col items-center justify-start min-h-60 drop-shadow-md overflow-hidden"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <motion.h1
          className="mt-3 text-2xl font-bold"
          variants={{
            hidden: {
              y: -10,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
            },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.5,
          }}
        >
          Signup
        </motion.h1>
        {props.children}
      </motion.div>
    </>
  );
};

export default SignupFormContainer;
