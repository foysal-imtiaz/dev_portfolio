import Project from "../components/Project";
import projectData from "../projectData.json";
import ContactSection from "../components/ContactSection";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { transition, variants } from "../utils/motionAnimation";
import SectionTitles from "../components/SectionTitles";

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
            className="text-neutral-600 mt-4 md:w-[65%] dark:text-neutral-400 text-[16px]"
          >
            Building projects is a great way to learn. Be it a small, pet
            project, the learning and impact is high. I have been building
            projects to solidify my learning. Here are all my projects!
          </motion.p>
        </div>
      </motion.div>
      <span className="dark:bg-[#2a2a2a] dark:shadow-xl dark:opacity-60 my-12 w-full h-[1px] block bg-gray-300 opacity-50"></span>
      <div>
        {projectData.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>

      <span className="dark:bg-[#2a2a2a] dark:shadow-lg dark:opacity-60 my-12 w-full h-[1px] block bg-gray-300 opacity-50"></span>

      {/* CONTACT SECTION */}
      <SectionTitles title="Get in touch" />

      <div className="px-4">
        <ContactSection />
      </div>
      {/* FOOTER */}
      <div className="mt-20 px-4 pb-7 flex justify-between">
        <p className="text-[11px] text-neutral-500">
          <a
            className="hover:text-blue-800 pr-1"
            href="https://minimal-portfolio-website-template.vercel.app/"
            target="_blank"
          >
            Templates
          </a>
          <a
            className="hover:text-blue-800 pr-1"
            href="https://chanhdai.com/"
            target="_blank"
          >
            That
          </a>
          <a
            className="hover:text-blue-800 pr-1"
            href="https://www.remi-jara.fr/"
            target="_blank"
          >
            Inspired
          </a>
          <a
            className="hover:text-blue-800"
            href="https://ouassim.tech/"
            target="_blank"
          >
            Me
          </a>
        </p>
        <div className="flex gap-2 pr-2">
          <a href="https://github.com/foysal-imtiaz/" target="_blank">
            <FaGithub className=" cursor-pointer h-5 w-5 text-neutral-700 hover:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-600" />
          </a>
          <a href="https://www.linkedin.com/in/foysalimtiaz" target="_blank">
            <FaLinkedinIn className=" cursor-pointer h-5 w-5 text-neutral-700 hover:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-600" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
