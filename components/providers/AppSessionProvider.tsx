"use client";
import { PropsType } from "@/@types/customTypes";
import { SessionProvider } from "next-auth/react";

const AppSessionProvider = ({ children }: PropsType) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AppSessionProvider;
