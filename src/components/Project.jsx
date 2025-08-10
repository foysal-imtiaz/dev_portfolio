import { motion } from "framer-motion";
import { transition, variants } from "../utils/motionAnimation";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { icons } from "../utils/iconLoader.js";

const Project = ({ project }) => {
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
          <img
            src={project.image}
            alt=""
            className="h-auto rounded-xl w-full xl:h-[220px] object-cover"
          />
        </motion.div>
        <div className="py-3 px-1 xl:px-0 xl:pb-1 xl:pt-2 xl:wi-[49%]">
          <motion.div transition={transition} variants={variants}>
            <h1 className=" pb-3 text-neutral-800 font-semibold dark:text-neutral-200">
              {project.title}
            </h1>
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
                  className="h-5 w-5"
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
            className="text-neutral-600 dark:text-neutral-400 text-[15px] leading-relaxed xl:line-clamp-4"
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
              className="flex items-center space-x-2 py-1.5 text-sm text-gray-600 dark:text-neutral-400 dark:hover:text-neutral-300 hover:text-gray-900 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-4 h-4" />
              <span className="font-medium">Code</span>
            </a>

            <a
              href={project.live_link}
              className="flex items-center space-x-2 py-1.5 text-sm text-gray-600 dark:text-neutral-400 dark:hover:text-neutral-300 hover:text-gray-900 transition-colors duration-200"
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
