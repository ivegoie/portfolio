"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const funFacts = [
  "The first computer bug was actually a real insect—a moth found inside a computer in 1947! 🦋",
  "NASA’s Apollo 11 spacecraft that landed on the moon had less computing power than your smartphone! 🚀",
  "The first website ever created still exists! You can visit it at info.cern.ch. 🌐",
  "The world’s first email was sent in 1971. It was just a random test message—imagine if it was 'Hello World'! 📩",
  "The 'save' icon is still a floppy disk, even though most people today have never used one! 💾",
  "More than 90% of the world's fastest computers run on Linux, an operating system created by a college student for fun! ⚡",
  "The first computer mouse was made of wood in 1964. Would you use a wooden mouse today? 🖱️",
  "There are more than 700 different programming languages, but most apps and websites use only a handful! 💻",
  "Google handles over 8.5 billion searches per day—that's over 100,000 searches per second! 🔍",
  "Typing 'Google in 1998' into Google will show you how it looked back then! Try it! ⏳",
  "The world's first computer was the size of a room and weighed 27 tons! Imagine carrying that around! 🏋️",
  "The entire Bitcoin network uses more electricity than some countries! 💰⚡",
  "Your voice assistant (like Siri or Alexa) understands you using artificial intelligence and machine learning. 🤖",
  "One of the first video games, 'Spacewar!', was made in 1962 and ran on a computer that had no screen! 🎮",
  "The first iPhone had less RAM than a modern smartwatch! Would you trade your phone for an Apple Watch? ⌚",
];

const Contact = () => {
  const [showSecret, setShowSecret] = useState(false);
  const [fact, setFact] = useState("");
  const [clickCount, setClickCount] = useState(0);

  const revealFunFact = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount === 5) {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      setClickCount(0);
      return;
    }

    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    setFact(randomFact);
    setShowSecret(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0f0d] text-white">
      <div className="max-w-3xl mx-auto text-center px-6">
        <motion.h2
          className="text-4xl font-bold text-green-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          Let&apos;s Connect 🤝
        </motion.h2>

        <motion.p
          className="text-lg font-mono text-gray-400 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          I&apos;m open to new opportunities and collaborations. Feel free to
          reach out via LinkedIn or email!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex justify-center gap-5"
        >
          <Button
            asChild
            variant="outline"
            className="px-6 py-3 text-lg border-green-400 text-green-400 hover:text-green-500 hover:border-green-500 transition-transform transform hover:scale-110 shadow-md"
          >
            <Link href="https://www.linkedin.com/in/ivan-zivolic/">
              LINKEDIN
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="px-6 py-3 text-lg border-green-400 text-green-400 hover:text-green-500 hover:border-green-500 transition-transform transform hover:scale-110 shadow-md"
          >
            <Link href="mailto:ivzivolic@gmail.com">EMAIL</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-10 flex items-center justify-center cursor-pointer"
          onClick={revealFunFact}
        >
          <span className="text-2xl hover:text-green-400 transition">👀</span>
        </motion.div>

        {showSecret && (
          <motion.div
            className="mt-4 text-lg font-mono text-green-300 bg-[#142820] p-4 rounded-md shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {fact}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
