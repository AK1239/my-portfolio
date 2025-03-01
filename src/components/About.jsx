import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaDocker, FaGit, FaJava } from "react-icons/fa";
import { SiExpress, SiFlutter, SiMongodb, SiPostgresql, SiTypescript, SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact className="w-12 h-12 text-purple-700" /> },
  { name: "Express.js", icon: <SiExpress className="w-12 h-12 text-gray-800" /> },
  { name: "Flutter", icon: <SiFlutter className="w-12 h-12 text-blue-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-12 h-12" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-12 h-12 text-blue-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-12 h-12 text-green-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-12 h-12 text-blue-500" /> },
  { name: "Git", icon: <FaGit className="w-12 h-12 text-red-500" /> },
  { name: "Java", icon: <FaJava className="w-12 h-12 text-red-600" /> },
  { name: "Docker", icon: <FaDocker className="w-12 h-12 text-blue-500" /> },
  { name: "Figma", icon: <SiFigma className="w-12 h-12 text-pink-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-12 h-12 text-black" /> },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I love building stuff. I started playing with computers when I was 9 years old, and since then, I have been amazed to explore the
            technologies behind websites, applications, and all kinds of computer systems.
          </p>
        </motion.div>

        <motion.div className="mt-24" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">My Tech Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="bg-white p-4 rounded-lg shadow-md text-center transition-all hover:shadow-lg hover:-translate-y-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">{tech.icon}</div>
                <p className="font-medium text-gray-800">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
