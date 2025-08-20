import { motion } from "framer-motion";
import { transition, variants } from "../utils/motionAnimation";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { icons } from "../utils/iconLoader.js";
import { Link } from "react-router";

const Project = ({ project }) => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      className="mb-8 xl:mb-10 mt-2"
    >
      <div className="flex-none xl:flex gap-6 px-4">
        <motion.div
          transition={transition}
          variants={variants}
          className="xl:w-[51%] xl:flex-shrink-0"
        >
          <Link to={`/project/${project.id}`} onClick={handleLinkClick}>
            <img
              src={project.image}
              alt=""
              className="hover:cursor-pointer hover:opacity-90 h-auto rounded-xl w-full xl:h-[220px] object-cover shadow-sm border-[1px] border-opacity-30 border-neutral-500"
            />
          </Link>
        </motion.div>
        <div className="py-3 px-1 xl:px-0 xl:pb-1 xl:pt-2 xl:wi-[49%]">
          <motion.div transition={transition} variants={variants}>
            <Link to={`/project/${project.id}`} onClick={handleLinkClick}>
              <h1 className=" pb-3 text-neutral-800 font-semibold dark:text-neutral-200 hover:text-neutral-700 dark:hover:text-neutral-300">
                {project.title}
              </h1>
            </Link>
          </motion.div>
          <motion.div
            transition={transition}
            variants={variants}
            className="pb-3 flex gap-2"
          >
            {project.tech_stack.map((tech) =>
              icons[tech] ? (
                <img
                  key={tech}
                  src={icons[tech]}
                  alt={tech}
                  className="h-5 w-5 hover:animate-ping"
                />
              ) : (
                <div
                  key={tech}
                  className="h-5 w-5 bg-gray-200 rounded"
                  title={tech}
                />
              )
            )}
          </motion.div>
          <motion.p
            transition={transition}
            variants={variants}
            className="text-neutral-600 dark:text-neutral-400 text-[15px] leading-relaxed line-clamp-4"
          >
            {project.description}
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            transition={transition}
            variants={variants}
            className="flex items-center space-x-4 mt-2"
          >
            <a
              href={project.github_link}
              className="flex items-center space-x-2 py-1.5 text-sm text-gray-600 dark:text-neutral-400 dark:hover:text-blue-700 hover:text-blue-700 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-4 h-4" />
              <span className="font-medium">Code</span>
            </a>

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
      </div>
    </motion.div>
  );
};

export default Project;
