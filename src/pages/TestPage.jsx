import { motion } from "framer-motion";
import { transition, variants } from "../utils/motionAnimation";
import SectionTitles from "../components/SectionTitles";
import projectsData from "../projectData.json";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ResoucePage = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      className="h-[200vh]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.04 }}
        className="px-4"
      >
        <div>
          <motion.h1
            transition={transition}
            variants={variants}
            className="mt-2 md:mt-0 text-shadow-sm text-4xl flex font-bold bg-gradient-to-b from-neutral-800 to-neutral-700 text-transparent bg-clip-text dark:text-neutral-300"
          >
            Test
          </motion.h1>
          <motion.p
            transition={transition}
            variants={variants}
            className="text-neutral-500 mt-4 md:w-[65%] dark:text-neutral-400 dark:text-opacity-80"
          >
            For testing new components
          </motion.p>
        </div>
      </motion.div>

      <span className="dark:bg-[#2a2a2a] dark:shadow-xl dark:opacity-60 my-12 w-full h-[1px] block bg-gray-300 opacity-50"></span>
      <SectionTitles title="Testing new components" />

      {/* TEST HERE  */}
      <div className="flex-none xl:flex gap-6 px-4">
        <div className="">
          <img
            src={projectsData[0].image}
            alt=""
            className="rounded-xl xl:min-w-[360px]"
          />
        </div>
        <div className="py-3 px-1 xl:px-0 xl:py-1">
          <div>
            <h1 className="hover:underline underline-offset-4 pb-3 text-neutral-800 font-semibold dark:text-neutral-200">
              {projectsData[0].title}
            </h1>
          </div>
          <div className="pb-3 flex gap-2">
            <p>
              <FaHtml5 />
            </p>
            <p>
              <FaReact />
            </p>
            <p>
              <IoLogoJavascript />
            </p>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-[15px] leading-relaxed">
            {projectsData[0].description}
          </p>
          {/* BUTTONS */}
          <div className="flex items-center space-x-4 mt-2">
            <a
              href={projectsData[0].github_link}
              className="flex items-center space-x-2 py-1.5 text-sm text-gray-600 dark:text-neutral-400 dark:hover:text-neutral-300 hover:text-gray-900 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-4 h-4" />
              <span className="font-medium">Code</span>
            </a>

            <a
              href={projectsData[0].live_link}
              className="flex items-center space-x-2 py-1.5 text-sm text-gray-600 dark:text-neutral-400 dark:hover:text-neutral-300 hover:text-gray-900 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink className="w-4 h-4" />
              <span className="font-medium">Live</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResoucePage;
