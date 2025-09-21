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
          <Image
            src="/red-keyboard.jpg"
            alt="Main"
            width={800}
            height={500}
            className="rounded-lg mx-auto mb-8 w-full h-auto max-h-[600px] object-cover"
          />
       
        <h1 className="text-text-primary text-4xl font-extralight mb-4 py-8 text-center">
          Code with vision. Create with impact.
        </h1>
         </motion.div>
      </div>
    </section>
  );
}
