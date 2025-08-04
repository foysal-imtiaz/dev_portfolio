import Resource from "../components/Resource";
import resourceData from "../resouceData.json";
import ContactSection from "../components/ContactSection";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { transition, variants } from "../utils/motionAnimation";
import SectionTitles from "../components/SectionTitles";

const ResoucePage = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.04 }}
        className="px-4"
      >
        <motion.div transition={transition} variants={variants}>
          <h1 className="mt-2 md:mt-0 text-shadow-sm text-4xl flex font-bold bg-gradient-to-b from-neutral-800 to-neutral-700 text-transparent bg-clip-text dark:text-neutral-300">
            Resources
          </h1>
          <p className="text-neutral-500 mt-4 md:w-[65%] dark:text-neutral-400 dark:text-opacity-80">
            Here I share cool and helpful resouces and random stuff that i found
            online. Links are provided with them. Check them out below!
          </p>
        </motion.div>
      </motion.div>

      <span className="dark:bg-[#2a2a2a] dark:shadow-xl dark:opacity-60 my-12 w-full h-[1px] block bg-gray-300 opacity-50"></span>
      <div className="px-4 flex flex-col gap-3">
        {resourceData.map((post, index) => (
          <Resource
            key={index}
            title={post.title}
            link={post.link}
            site_name={post.site_name}
          />
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

export default ResoucePage;
