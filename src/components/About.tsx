"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const technologies = [
  { name: "TypeScript", link: "https://www.typescriptlang.org" },
  { name: "Expo", link: "https://expo.dev" },
  { name: "Next.js", link: "https://nextjs.org" },
  { name: "TailWind CSS", link: "https://tailwindcss.com" },
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-green-400 mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg font-mono text-gray-400 leading-relaxed text-left mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          Meet me, who found my passion for programming through my love for
          building games. I&apos;ve been honing my skills since 2022 while
          building a <b className="text-green-400">IZI App</b> with a friends,
          and have since become a{" "}
          <b className="text-green-400">creative problem solver</b> in all
          aspects of code. I&apos;m committed to sharing my knowledge and
          skills. When I&apos;m not coding, you&apos;ll find me{" "}
          <b className="text-green-400">
            producing music, DMC DJ-ing, fishing, cooking, reading, or playing
            board and video games
          </b>
          .
        </motion.p>

        <motion.h3
          className="text-xl font-semibold text-green-400 mb-6 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Favorite Technologies:
        </motion.h3>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-lg border border-green-500/30 bg-[#0e1c18] hover:shadow-green-500/50 transition text-center cursor-pointer">
                <Link href={tech.link}>
                  <CardContent className="py-4 font-mono text-green-400 text-lg font-semibold">
                    {tech.name}
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
