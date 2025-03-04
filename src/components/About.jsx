import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaDocker, FaGit, FaJava } from "react-icons/fa";
import {
  SiExpress,
  SiFlutter,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
} from "react-icons/si";
import { Link } from "react-scroll";

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

const companies = [
  "/images/andalusia.webp",
  "/images/cats.webp",
  "/images/dhis2.webp",
  "/images/sansum.webp",
  "/images/tma.webp",
  "/images/tppl.webp",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 text-gray-800">
              About <span className="text-blue-600">Me</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              I love building stuff. I started playing with computers when I was 9 years old, and
              since then, I have been amazed to explore the technologies behind websites,
              applications, and all kinds of computer systems.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Download CV
              </a>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Educational Journey
          </h3>
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full opacity-20"></div>
                <img
                  src="/images/udsm.webp"
                  alt="UDSM Logo"
                  className="w-32 h-32 object-contain relative z-10"
                />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">
                  University of Dar es Salaam
                </h4>
                <p className="text-lg text-blue-600 mb-2">BSc in Computer Science</p>
                <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                  2022 - 2025
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-800">
            My <span className="text-blue-600">Tech</span> Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <p className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Background Decorations */}
          <div className="absolute -z-10 top-1/2 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -z-10 bottom-0 right-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-30"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
