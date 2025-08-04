import Project from "../components/Project";
import projectsData from "../projectData.json";
import ContactSection from "../components/ContactSection";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { transition, variants } from "../utils/motionAnimation";

const ProjectsPage = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.04 }}
      >
        <div className="px-4">
          <motion.h1
            transition={transition}
            variants={variants}
            className="mt-2 md:mt-0 text-shadow-sm text-4xl flex font-bold bg-gradient-to-b from-neutral-800 to-neutral-700 text-transparent bg-clip-text dark:text-neutral-300"
          >
            Projects
          </motion.h1>
          <motion.p
            transition={transition}
            variants={variants}
            className="text-neutral-500 mt-4 md:w-[65%] dark:text-neutral-400 dark:text-opacity-80"
          >
            Building projects is a great way to learn. Be it a small, pet
            project, the learning and impact is high. I have been building
            projects to solidify my learning. Here are all my projects!
          </motion.p>
        </div>
      </motion.div>
      <span className="dark:bg-[#2a2a2a] dark:shadow-xl dark:opacity-60 my-12 w-full h-[1px] block bg-gray-300 opacity-50"></span>
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            github_link={project.github_link}
            live_link={project.live_link}
          />
        ))}
      </div>

      <span className="dark:bg-[#2a2a2a] dark:shadow-lg dark:opacity-60 my-12 w-full h-[1px] block bg-gray-300 opacity-50"></span>

      {/* CONTACT SECTION */}
      <div className="px-4">
        <div>
          <h1 className="text-neutral-800 font-normal dark:text-neutral-300 mb-4">
            Get in touch
          </h1>
        </div>
        <ContactSection />
      </div>
      {/* FOOTER */}
      <div className="mt-20 px-4 pb-7 flex justify-between">
        <p className="text-[11px] text-neutral-500">
          Template Inspired from{" "}
          <a
            className="text-blue-500 dark:text-opacity-60"
            href="https://minimal-portfolio-website-template.vercel.app/"
            target="_blank"
          >
            Here
          </a>
        </p>
        <div className="flex gap-2 pr-2">
          <a href="https://github.com/foysal-imtiaz/" target="_blank">
            <FaGithub className="hover:h-6 hover:w-6 cursor-pointer h-5 w-5 text-neutral-700 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-300" />
          </a>
          <a href="https://www.linkedin.com/in/foysalimtiaz" target="_blank">
            <FaLinkedinIn className="hover:h-6 hover:w-6 cursor-pointer h-5 w-5 text-neutral-700 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
