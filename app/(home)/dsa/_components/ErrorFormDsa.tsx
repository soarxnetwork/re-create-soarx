import { AnimatePresence } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
interface ErrorFormDsaProps {
  message: string | undefined;
}
const ErrorFormDsa = ({ message }: ErrorFormDsaProps) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "linear", duration: 0.3 }}
          className="text-sm text-red-500"
        >
          {message}
        </motion.span>
      )}
    </AnimatePresence>
  );
};

export default ErrorFormDsa;
