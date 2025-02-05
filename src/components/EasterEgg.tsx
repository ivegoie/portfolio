"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const HiddenEasterEgg = () => {
  const [showSecret, setShowSecret] = useState(false);
  const [asciiArt, setAsciiArt] = useState<string>("");

  const loadAsciiArt = async () => {
    try {
      const response = await fetch("/ascii-night-sky.txt");
      const text = await response.text();
      setAsciiArt(text);
      setShowSecret(true);
    } catch (error) {
      console.error("Error loading ASCII art:", error);
    }
  };

  return (
    <div className="relative">
      <motion.div
        className="fixed bottom-5 right-5 w-10 h-10 bg-green-500 text-white flex items-center justify-center font-bold text-xl cursor-pointer shadow-lg rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={loadAsciiArt}
      >
        ?
      </motion.div>

      {showSecret && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-95 text-green-400 text-lg font-mono p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <pre className="text-center text-green-400 text-sm md:text-lg leading-tight">
            {asciiArt}
          </pre>
          <motion.p
            className="mt-6 text-2xl text-green-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Look at the sky... isn&apos;t it beautiful? ✨
          </motion.p>

          <motion.button
            className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowSecret(false)}
          >
            Close
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default HiddenEasterEgg;
