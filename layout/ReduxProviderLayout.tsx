"use client";
import { PropsType } from "@/@types/customTypes";
import { reduxStore } from "@/store/reduxStore";
import React from "react";
import { Provider } from "react-redux";

const ReduxProviderLayout = ({ children }: PropsType) => {
  return (
    <>
      <Provider store={reduxStore}>{children}</Provider>
    </>
  );
};

export default ReduxProviderLayout;
