"use client";
import { AnimatedNavType } from "@/@types/customTypes";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const AnimatedItem = ({
  children,
  href,
  onClick = () => {},
}: AnimatedNavType) => {
  const activePath = usePathname();
  return (
    <motion.li
      animate={{
        opacity: activePath === href ? 1 : 0.5,
        fontSize: activePath === href ? "20px" : "18px",
      }}
      transition={{ type: "spring", stiffness: 100 }}
      whileHover={{
        opacity: activePath === href ? 1 : 0.7,
        transition: { type: "tween", delay: 0.1 },
      }}
      className="text-aBgColor text-l ml-5 leading-6"
      onClick={onClick}
    >
      {children === "Logout" ? (
        <div className="cursor-pointer">{children}</div>
      ) : (
        <Link href={href}>{children}</Link>
      )}
      {activePath === href && (
        <motion.div className="h-[3px] bg-aPrimaryColor" layoutId="underline" />
      )}
    </motion.li>
  );
};

export default AnimatedItem;
