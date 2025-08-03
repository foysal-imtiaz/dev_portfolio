import { motion } from "framer-motion";
import Project from "../components/Project";
import projectsData from "../projectData.json";
import BlogPost from "../components/BlogPost";
import blogPostData from "../blogPostData.json";
import Experience from "../components/Experience";
import ContactSection from "../components/ContactSection";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { transition, variants } from "../utils/motionAnimation";

const HomePage = () => {
  return (
    <div className="">
      {/* INTRO SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.04 }}
        className=""
      >
        <div className="md:flex md:justify-start items-center gap-4">
          <motion.span
            transition={transition}
            variants={variants}
            className="dark:border-gray-600  md:hidden text-neutral-500 border-[1px] border-gray-300 opacity-70 py-[2px] px-2 shadow-sm rounded-md text-sm"
          >
            Full Stack Dev
          </motion.span>
          <motion.h1
            transition={transition}
            variants={variants}
            className="mt-2 md:mt-0 text-shadow-sm text-4xl flex font-extrabold bg-gradient-to-b from-neutral-800 to-neutral-700 text-transparent bg-clip-text dark:text-neutral-400"
          >
            Foysal Imtiaz
          </motion.h1>
          <motion.span
            transition={transition}
            variants={variants}
            className="hidden text-neutral-500 md:flex md:border-[1px] md:h-fit md:border-gray-300 dark:border-gray-600 md:opacity-70 md:shadow-sm md:py-[2px] md:px-2 md:rounded-md md:text-sm"
          >
            Full Stack Dev
          </motion.span>
        </div>
        <motion.p
          transition={transition}
          variants={variants}
          className="text-neutral-500 mt-4 md:w-[65%]"
        >
          Hi, I am a Full Stack developer proficient in MERN stack and NextJS. I
          love building projects, experimenting with new technologies, and
          sharing my work with the community. I'm also exploring SaaS and its
          potential for innovative solutions. I'm open to collaboration and
          always eager to learn something new!
        </motion.p>
      </motion.div>
      <span className="dark:bg-[#2a2a2a] dark:shadow-xl dark:opacity-60 my-12 w-full h-[1px] block bg-gray-300 opacity-50"></span>
      {/* WORK EXPERIENCE */}
      <div>
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-400 font-normal  mb-5 ">
            Work experience so far
          </h1>
        </div>
        <Experience />
      </div>
      <span className="dark:bg-[#2a2a2a] dark:shadow-lg dark:opacity-60 my-12 w-full h-[1px] block bg-gray-300 opacity-50"></span>
      {/* PROJECT SECTION */}
      <div>
        <h1 className="text-neutral-800 font-normal dark:text-neutral-400 mb-5">
          Things I have built so far
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
          {projectsData.slice(0, 3).map((project, index) => (
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
      </div>
      <span className="dark:bg-[#2a2a2a] dark:shadow-xl dark:opacity-60 my-12 w-full h-[1px] block bg-gray-300 opacity-50"></span>

      {/* BLOG SECTION */}
      <div>
        <div>
          <h1 className="text-neutral-800 font-normal dark:text-neutral-400 mb-5">
            Learning and sharing along the journey
          </h1>
        </div>
        <div className="flex flex-col gap-7">
          {blogPostData.slice(0, 2).map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              description={post.description}
              image={post.image}
              readMoreLink={post.readMoreLink}
              date={post.date}
            />
          ))}
        </div>
      </div>
      <span className="dark:bg-[#2a2a2a] dark:shadow-lg dark:opacity-60 my-12 w-full h-[1px] block bg-gray-300 opacity-50"></span>

      {/* CONTACT SECTION */}
      <div>
        <div>
          <h1 className="text-neutral-800 font-normal dark:text-neutral-400 mb-4">
            Get in touch
          </h1>
        </div>
        <ContactSection />
      </div>
      {/* FOOTER */}
      <div className="mt-20 pl-2 pb-7 flex justify-between">
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

export default HomePage;
