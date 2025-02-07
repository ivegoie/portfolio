"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const generateBinaryMatrix = (rows: number, cols: number) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => (Math.random() > 0.5 ? "1" : "0"))
  );
};

const Hero = () => {
  const [matrix, setMatrix] = useState(generateBinaryMatrix(4, 4));
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMatrix(generateBinaryMatrix(8, 12));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24  text-white">
      <div className="relative max-w-2xl z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-base pt-16 font-mono text-gray-400 leading-tight"
        >
          Hi, I&apos;m
        </motion.p>
        <motion.h1
          className={`text-6xl font-extrabold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent leading-tight drop-shadow-lg ${
            glitchActive ? "glitch" : ""
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <span className="glitch-text font-mono uppercase">Ivan Živolić</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-2xl mb-4 text-gray-400 font-semibold"
        >
          I build cutting-edge digital experiences
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-8 font-mono leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          Passionate about crafting innovative software that transforms ideas
          into reality. Let&apos;s build something amazing together.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            asChild
            variant="outline"
            className="px-6 py-3 text-lg border-green-400 text-green-400 hover:text-green-500 hover:border-green-500 transition-transform transform hover:scale-110 shadow-md font-mono"
          >
            <Link href="#contact">Get in Touch</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="px-6 py-3 text-lg border-green-400 text-green-400 hover:text-green-500 hover:border-green-500 transition-transform transform hover:scale-110 shadow-md font-mono"
          >
            <Link href="https://github.com/ivegoie" target="_blank">
              GitHub
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="px-6 py-3 text-lg border-green-400 text-green-400 hover:text-green-500 hover:border-green-500 transition-transform transform hover:scale-110 shadow-md font-mono"
          >
            <Link
              href="https://europa.eu/europass/eportfolio/screen/share/documents/31635ad1-df70-42ac-aa0b-349849802c31?lang=en"
              target="_blank"
            >
              Resume
            </Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="relative w-72 h-72 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <motion.div
          className="absolute w-full h-full border-4 border-green-500 rounded-full animate-pulse"
          style={{ animationDuration: "2s" }}
        />

        <div className="absolute w-64 h-64 flex flex-col items-center justify-center bg-[#0e1c18] border border-green-500/30 rounded-full shadow-lg backdrop-blur-md text-green-400 font-mono text-lg leading-tight text-center overflow-hidden">
          {matrix.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
              {row.map((num, colIndex) => (
                <motion.div
                  key={colIndex}
                  className="text-green-400 text-xl font-mono mx-1 my-1"
                  animate={{ opacity: [0.5, 1], y: [5, 0] }}
                  transition={{ duration: 0.3, delay: Math.random() * 0.5 }}
                  suppressHydrationWarning
                >
                  {num}
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
