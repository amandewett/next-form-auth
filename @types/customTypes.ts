import { ElementType } from "@/enums/enums";
import { ScrambleTexts } from "@twistezo/react-text-scramble";
import { FC, PropsWithChildren, ReactNode } from "react";

export type PropsType = {
  children?: ReactNode;
};

export type NavType = PropsType & {
  href: string;
  styles: {
    elementType: ElementType;
    active: string;
    passive?: string;
  };
};

export type AnimatedNavType = PropsType & {
  href: string;
  onClick?: () => void;
};

export type TextShufflerType = PropsType & {
  arrString: ScrambleTexts;
  className: string;
};

export type ResponseType = {
  status: boolean;
  message?: string;
};

export type InputFieldType = {
  htmlFor: string;
  label: string;
  inputType: string;
  value: string;
  placeHolder: string;
  onBlur: () => void;
  onChange: (inputValue: string) => void;
  isInvalid: ResponseType;
};

export type FormActionsType = PropsType & { isSubmitting: boolean };
