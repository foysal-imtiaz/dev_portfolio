import { motion } from "framer-motion";
import { transition, variants } from "../utils/motionAnimation.js";
import projectsData from "../projectData.json";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { icons } from "../utils/iconLoader.js";
import { useParams } from "react-router"; // 🔹 Import useParams

const SingleProject = () => {
  const { id } = useParams(); // 🔹 Get project id from URL
  const project = projectsData.find((p) => p.id.toString() === id); // 🔹 Find the project

  if (!project) {
    return (
      <div className="p-6 text-center text-red-500 font-bold">
        Project not found 🚫
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      className=""
    >
      <div className="px-4 pt-2 mb-24">
        {/* Title + Links */}
        <div className="flex justify-between items-center pb-5">
          <motion.h1
            transition={transition}
            variants={variants}
            className="text-2xl text-neutral-800 font-semibold dark:text-neutral-200 pl-1"
          >
            {project.title}
          </motion.h1>

          <motion.div
            transition={transition}
            variants={variants}
            className="flex items-center space-x-4 pr-3"
          >
            {/* Github Link */}
            <a
              href={project.github_link}
              className="flex items-center space-x-2 py-1.5 text-sm text-gray-600 dark:text-neutral-400 dark:hover:text-blue-700 hover:text-blue-700 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-4 h-4" />
              <span className="font-medium">Code</span>
            </a>

            {/* Live Link */}
            <a
              href={project.live_link}
              className="flex items-center space-x-2 py-1.5 text-sm text-gray-600 dark:text-neutral-400 dark:hover:text-blue-700 hover:text-blue-700 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink className="w-4 h-4" />
              <span className="font-medium">Live</span>
            </a>
          </motion.div>
        </div>

        {/* Project Image */}
        <motion.img
          transition={transition}
          variants={variants}
          src={project.image}
          alt={project.title}
          className="rounded-lg"
        />

        {/* Tech Stack */}
        <div className="flex gap-2 pt-5 pl-1">
          {project.tech_stack.map((tech) => (
            <motion.img
              transition={transition}
              variants={variants}
              key={tech}
              src={icons[tech]}
              className="h-5 w-5 hover:animate-ping"
            />
          ))}
        </div>

        {/* Description */}
        <motion.p
          transition={transition}
          variants={variants}
          className="pt-5 text-neutral-600 dark:text-neutral-400 text-[16px] leading-relaxed pl-1"
        >
          {project.description}
        </motion.p>

        {/* Features */}
        <motion.div
          transition={transition}
          variants={variants}
          className="mt-3 text-neutral-600 dark:text-neutral-400 text-[16px] leading-relaxed pl-1"
        >
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SingleProject;
