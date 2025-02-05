"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "AI-Powered App",
    desc: "A next-gen AI tool for businesses.",
    link: "#",
  },
  {
    title: "E-Commerce Platform",
    desc: "High-performance online store.",
    link: "#",
  },
  { title: "Crypto Dashboard", desc: "Real-time data for traders.", link: "#" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#081210] text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
        My Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="shadow-lg border border-green-500/30 bg-[#0e1c18] hover:shadow-green-500/50 transition cursor-pointer">
              <CardHeader>
                <CardTitle className="text-xl text-green-400">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                {project.desc}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
