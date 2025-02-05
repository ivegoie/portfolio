"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const projects = [
  {
    title: "IZI App",
    desc: "Mobile Native Application for iOS & Android to help busy people build better habits & stay on track.",
    technology: ["Expo", "React Native", "Appwrite", "NativeWind"],
    link: "https://theizi.app",
  },
  {
    title: "IZI Admin Page | Official Site",
    desc: "Admin page under official site to manage and to help people with their busy life for building better habits.",
    technology: ["React", "Next.js", "Appwrite", "Tailwind CSS", "Shadnc/ui"],
    link: "https://theizi.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#081210] text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
        My Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={project.link}>
              <Card className="shadow-lg border border-green-500/30 bg-[#0e1c18] hover:shadow-green-500/50 transition cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl text-green-400">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  {project.desc}
                </CardContent>
                <CardContent>
                  <p className="text-gray-400">Technology & Libraries:</p>
                  {project.technology.map((tech, index) => (
                    <span
                      className="inline-block mr-2 mt-2 px-3 py-2 text-sm font-semibold text-green-400 bg-green-900 rounded-full"
                      key={index}
                    >
                      {tech}
                    </span>
                  ))}
                </CardContent>
                <CardContent></CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
