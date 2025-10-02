"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section>
      <div className="max-w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
      
        <h1 className="text-text-primary text-4xl font-extralight mb-4 py-8 text-center">
          Code with vision. Create with impact.
        </h1>
         </motion.div>
      </div>
    </section>
  );
}
