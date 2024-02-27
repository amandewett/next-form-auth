"use client";
import { NavType } from "@/@types/customTypes";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { ElementType } from "@/enums/enums";
import { motion } from "framer-motion";

const Nav = ({ children, href, styles }: NavType) => {
  const activePath = usePathname();
  const { elementType, active, passive } = styles;
  return (
    <Link href={href}>
      {elementType === ElementType.H1 && <h1 className={active}>{children}</h1>}
      {elementType === ElementType.H4 && (
        <motion.h4
          className={activePath === href ? active : passive}
          whileHover={{
            textDecoration: "underline",
            underlineThickness: "4px",
          }}
        >
          {children}
        </motion.h4>
      )}
      {elementType === ElementType.BUTTON && (
        <button className={activePath === href ? active : passive}>
          {children}
        </button>
      )}
    </Link>
  );
};

export default Nav;
