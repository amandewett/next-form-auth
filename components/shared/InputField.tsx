"use client";
import { InputFieldType } from "@/@types/customTypes";
import { AnimatePresence, motion } from "framer-motion";

const InputField = (props: InputFieldType) => {
  const {
    htmlFor,
    label,
    inputType,
    value,
    placeHolder,
    onBlur,
    onChange,
    isInvalid,
  } = props;
  return (
    <motion.div className="w-full px-5 mb-2 flex flex-col">
      <label htmlFor={htmlFor} className="font-bold text-sm">
        {label}
      </label>
      <motion.input
        className={`p-2 rounded-sm text-aTextColor font-normal placeholder:text-slate-500 placeholder:font-light placeholder:text-xs text-sm outline-aPrimaryColor ${
          !isInvalid.status ? "bg-rose-200" : "bg-slate-200"
        }`}
        initial={{ x: 0 }}
        animate={{ x: !isInvalid.status ? [10, 0] : 0 }}
        transition={{ repeat: 2, duration: 0.1 }}
        id={htmlFor}
        type={inputType}
        name={htmlFor}
        autoComplete="off"
        value={value}
        placeholder={placeHolder}
        onBlur={() => onBlur()}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value);
        }}
      />
      {!isInvalid.status ? (
        <motion.div className="text-red-500 mt-1 italic text-xs h-4">
          {isInvalid.message}
        </motion.div>
      ) : (
        <div className="h-4"></div>
      )}
    </motion.div>
  );
};

export default InputField;
