"use client";
import React, { useState } from "react";
import { Copy, Mail, SquareCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";

export default function AnimatedButton() {
  const [buttonState, setButtonState] = useState("default");

const handleCopy = () => {
  navigator.clipboard.writeText("hi@omarcode.me")
    .then(() => {
      setButtonState("copy");
      setTimeout(() => setButtonState("default"), 2000);
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
    });
};

return (
  <button
    className={twMerge(
      "w-full max-w-[210px] p-px rounded-xl overflow-hidden"
    )}
    onMouseEnter={() => buttonState !== "copy" && setButtonState("hover")}
    onMouseLeave={() => buttonState !== "copy" && setButtonState("default")}
    onClick={handleCopy}
  >
    <div className="text-text-primary bg-gradient-to-br from-primary to-secondary px-4 py-2.5 md:py-3 rounded-[11px]">
      <AnimatePresence initial={false} mode="wait">
        {buttonState === "copy" ? (
          <motion.div
            key="copied"
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            exit={{ y: 40 }}
            transition={{ duration: 0.2 }}
            className="flex justify-center items-center space-x-2"
          >
            <p className="text-sm md:text-base font-medium">Copied</p>
            <SquareCheck size={20} />
          </motion.div>
        ) : (
          <motion.div
            key="copy-mail"
            initial={{ y: -40 }}
            animate={{ y: 0 }}
            exit={{ y: -40 }}
            transition={{ duration: 0.2 }}
            className="flex justify-center items-center"
          >
            <AnimatePresence initial={false}>
              {buttonState === "default" && (
                <motion.div
                  key="mail"
                  initial={{ x: -80, width: 0 }}
                  animate={{ x: 0, width: 20 }}
                  exit={{ x: -80, width: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Mail size={20} />
                </motion.div>
              )}
            </AnimatePresence>
            <p className="text-sm md:text-base font-medium px-2">
              hi@omarcode.me
            </p>
            <AnimatePresence>
              {buttonState === "hover" && (
                <motion.div
                  key="copy"
                  initial={{ x: 80, width: 0 }}
                  animate={{ x: 0, width: 20 }}
                  exit={{ x: 80, width: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Copy size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </button>
);
};
