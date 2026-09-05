import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaGooglePlay, FaApple } from "react-icons/fa";

const projects = [
  {
    id: 2,
    title: "IntelyFlow",
    description:
      "An intelligent stock and POS management system used to track inventory, make sales and get intelligent insights regarding your business. Transform your business with comprehensive modular platform featuring real-time analytics.",
    image: "/images/intelyflow.png",
    githubLink: null,
    liveLink: "https://youtu.be/mFLLd6l4kew",
    websiteLink: "https://intelyflow.com/",
    techStack: ["React", "Express", "Node.js", "PostgreSQL"],
  },
  {
    id: 5,
    title: "PesaTrack",
    description:
      "A private, offline-first expense tracker and budget manager that helps you understand where your money goes. Track income and expenses, manage budgets, and gain spending insights—all without an account or cloud sync.",
    image: "/images/pesatrack.png",
    githubLink: null,
    liveLink: null,
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.akil.financetracker.finance_tracker",
    appStoreLink: "https://apps.apple.com/tz/app/pesatrack/id6805447133",
    detailPageLink: "/pesatrack",
    techStack: ["Flutter", "Riverpod"],
  },
  {
    id: 1,
    title: "Network Monitoring Web Application",
    description:
      "A full-stack application that provides real-time monitoring of network devices. Seamlessly add your network devices, connect switches and monitor your network in real-time!",
    image: "/images/network-monitoring.webp",
    githubLink: "https://github.com/AK1239/network-ping-app",
    liveLink: "https://youtu.be/y7o3MDPGLYY",
    techStack: ["React", "Express", "PostgreSQL", "Node.js"],
  },
  {
    id: 6,
    title: "Ndotoni",
    description:
      "A mobile-first property rental platform built for Tanzania. Find verified rentals, browse listings on an interactive map, message landlords directly, and list your own property — all in one place.",
    image: "/images/ndotoni.jpg",
    githubLink: null,
    liveLink: "https://ndotoni.com",
    detailPageLink: "/ndotoni",
    showViewProject: true,
    techStack: ["React", "TypeScript", "AWS Lambda"],
  },
  // {
  //   id: 3,
  //   title: "Neutralfy",
  //   description:
  //     "Neutralfy is a comprehensive carbon credit marketplace platform that democratizes carbon markets for Africa, It provides AI-driven verification, blockchain technology, and a multi-stakeholder ecosystem.",
  //   image: "/images/neutralfy.png",
  //   githubLink: "https://github.com/askmgm/neutralfy",
  //   liveLink: "https://neutralfy.com",
  //   techStack: ["React", "Express", "MySQL", "Node.js"],
  // },
  // {
  //   id: 4,
  //   title: "Sansum Investment",
  //   description:
  //     "A responsive website for a drinks-manufacturing business. Features a clean and modern design, easy navigation, and a responsive layout.",
  //   image: "/images/sansum-investment.webp",
  //   githubLink: "https://github.com/AK1239/sansum-investment",
  //   liveLink: "https://sansuminvestment.netlify.app",
  //   techStack: ["HTML", "CSS", "JavaScript"],
  // },
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
            Here are some of the recent projects I&apos;ve worked on. Each represents different
            challenges and learning experiences.
          </p>
        </motion.div>

        <div className="space-y-28">
          {projects.map((project) => (
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
                {project.detailPageLink ? (
                  <Link
                    to={project.detailPageLink}
                    className="block overflow-hidden rounded-xl shadow-lg cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                ) : (
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
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
                <div className="flex flex-wrap gap-4">
                  {project.showViewProject && project.detailPageLink && (
                    <Link
                      to={project.detailPageLink}
                      className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt /> View Project
                    </Link>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 github-button"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.websiteLink && (
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt /> Website
                    </a>
                  )}
                  {project.playStoreLink && (
                    <a
                      href={project.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
                    >
                      <FaGooglePlay /> Google Play
                    </a>
                  )}
                  {project.appStoreLink && (
                    <a
                      href={project.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 live-demo-button"
                    >
                      <FaApple /> App Store
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 live-demo-button"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
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
            className="inline-flex items-center gap-3 px-6 py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white text-base font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
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
