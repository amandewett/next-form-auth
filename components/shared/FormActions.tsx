"use client";
import { FormActionsType } from "@/@types/customTypes";
import { motion } from "framer-motion";

const FormActions = ({ children, isSubmitting }: FormActionsType) => {
  return (
    <>
      <div className="flex justify-end mb-10 mt-2 w-full px-5">
        <motion.button
          whileHover={{ y: -1, transition: { duration: 0.2 } }}
          disabled={isSubmitting}
          className={`px-3 py-2 rounded-md text-aBgColor bg-aTextColor font-medium text-center text-sm ${
            isSubmitting ? "opacity-50" : "opacity-100"
          }`}
        >
          {!isSubmitting ? children : "Submitting..."}
        </motion.button>
      </div>
    </>
  );
};

export default FormActions;
