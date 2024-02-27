"use client";
import { TextShufflerType } from "@/@types/customTypes";
import dynamic from "next/dynamic";
const NoSSRTextScramble = dynamic(
  () => import("@twistezo/react-text-scramble"),
  { ssr: false }
);

const TextShuffler = ({ arrString, className }: TextShufflerType) => {
  return (
    <>
      <NoSSRTextScramble
        texts={arrString}
        className={className}
        letterSpeed={100}
        nextLetterSpeed={200}
        pauseTime={2000}
        paused={false}
      />
    </>
  );
};

export default TextShuffler;
