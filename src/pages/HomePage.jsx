import { motion } from "framer-motion";
import ProjectTest from "../components/ProjectTest";
import projectData from "../projectData.json";
import BlogPost from "../components/BlogPost";
import blogPostData from "../blogPostData.json";
import Experience from "../components/Experience";
import ContactSection from "../components/ContactSection";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { transition, variants } from "../utils/motionAnimation";
import { Link } from "react-router";
import { ContainerTextFlip } from "../components/ui/CotainerFlip";
import SectionTitles from "../components/SectionTitles";
import { RiArrowDownSLine } from "react-icons/ri";

const HomePage = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="">
      {/* INTRO SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.04 }}
        className="px-4"
      >
        <div className="md:flex md:justify-start items-center gap-4">
          <motion.span
            transition={transition}
            variants={variants}
            className="block md:hidden"
          >
            <ContainerTextFlip />
          </motion.span>
          <motion.h1
            transition={transition}
            variants={variants}
            className="mt-2 md:mt-0 text-shadow-sm text-4xl flex font-extrabold bg-gradient-to-b from-neutral-800 to-neutral-700 text-transparent bg-clip-text dark:text-neutral-300"
          >
            Foysal Imtiaz
          </motion.h1>
          <motion.span
            transition={transition}
            variants={variants}
            className="hidden md:flex "
          >
            <ContainerTextFlip />
          </motion.span>
        </div>
        <motion.p
          transition={transition}
          variants={variants}
          className="text-neutral-600 dark:text-neutral-400 text-[16px]  mt-4 md:w-[65%]"
        >
          Hi, I am a Full Stack developer proficient in MERN stack, NextJS and
          Wordpress. From design to deployment I handle all the clients
          requirements. I am looking for new opportunities. If you are looking
          for a developer to hire or have any queries, just leave a{" "}
          <a
            href="https://www.linkedin.com/in/foysalimtiaz"
            target="_blank"
            className="font-semibold hover:text-blue-500"
          >
            message
          </a>
          .
        </motion.p>
      </motion.div>
      <span className="dark:bg-[#2a2a2a] dark:shadow-xl dark:opacity-60 my-12 w-full h-[1px] block bg-gray-300 opacity-50"></span>
      {/* WORK EXPERIENCE */}
      <SectionTitles title="Work experience so far" />

      <div className="px-4">
        <Experience />
      </div>
      <span className="dark:bg-[#2a2a2a] dark:shadow-lg dark:opacity-60 my-12 w-full h-[1px] block bg-gray-300 opacity-50"></span>
      {/* PROJECT SECTION */}
      <SectionTitles title="Things i have built" />

      <div className="flex flex-col ">
        <div>
          {projectData.slice(0, 2).map((project, index) => (
            <ProjectTest key={index} project={project} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="mt-2 w-fit text-sm text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-400">
            <Link to="/projects" onClick={handleLinkClick}>
              See More <RiArrowDownSLine className="inline" />
            </Link>
          </button>
        </div>
      </div>
      <span className="dark:bg-[#2a2a2a] dark:shadow-xl dark:opacity-60 mt-10 mb-12 w-full h-[1px] block bg-gray-300 opacity-50"></span>

      {/* BLOG SECTION */}
      <SectionTitles title="Sharing knowledge along learning" />

      <div className="px-4 gap-8 grid md:grid-cols-2 mb-4 mt-2">
        {blogPostData.slice(0, 2).map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            image={post.image}
            readMoreLink={post.readMoreLink}
            date={post.date}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="mt-4 w-fit text-sm text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-400">
          <Link to="/posts" onClick={handleLinkClick}>
            See More <RiArrowDownSLine className="inline" />
          </Link>
        </button>
      </div>
      <span className="dark:bg-[#2a2a2a] dark:shadow-lg dark:opacity-60 mt-10 mb-12 w-full h-[1px] block bg-gray-300 opacity-50"></span>

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
            <FaGithub className=" cursor-pointer h-5 w-5 text-neutral-700 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-300" />
          </a>
          <a href="https://www.linkedin.com/in/foysalimtiaz" target="_blank">
            <FaLinkedinIn className=" cursor-pointer h-5 w-5 text-neutral-700 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
