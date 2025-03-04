import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Network Monitoring Web Application",
    description:
      "A full-stack application that provides real-time monitoring of network devices. Seamlessly add your network devices, connect switches and play monitor your network in real-time!",
    image: "/images/network-monitoring.webp",
    githubLink: "https://github.com/AK1239/network-ping-app",
    liveLink: "https://youtu.be/y7o3MDPGLYY",
    techStack: ["React", "Express", "PostgreSQL", "Node.js"],
  },
  {
    id: 2,
    title: "Sansum Investment",
    description:
      "A responsive website for a drinks-manufacturing business. Features a clean and modern design, easy navigation, and a responsive layout.",
    image: "/images/sansum-investment.webp",
    githubLink: "https://github.com/AK1239/sansum-investment",
    liveLink: "https://sansuminvestment.tz",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "PapersHub",
    description:
      "A full stack web application that is an all in one platform for students to have access to all their academic needs, with a clean user experience!",
    image: "/images/paperhub.webp",
    githubLink: "https://github.com/AK1239/papershub-main",
    liveLink: "https://papershub.co.tz",
    techStack: ["HTML", "CSS", "JavaScript", "Django", "SQLite"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-600">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the recent projects I've worked on. Each represents different
            challenges and learning experiences.
          </p>
        </motion.div>

        <div className="space-y-28">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col lg:flex-row gap-8 items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Projects Link */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/AK1239"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-base font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaGithub className="text-xl" />
            See All My Projects
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
