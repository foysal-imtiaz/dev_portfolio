import BlogPost from "../components/BlogPost";
import blogPostData from "../blogPostData.json";
import ContactSection from "../components/ContactSection";
import SectionTitles from "../components/SectionTitles";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { transition, variants } from "../utils/motionAnimation";

const BlogPostPage = () => {
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
            Notes
          </motion.h1>
          <motion.p
            transition={transition}
            variants={variants}
            className="text-neutral-600 mt-4 md:w-[65%] dark:text-neutral-400 text-[16px]"
          >
            Sharing what I've learned with the community is a great way to help
            others and myself as well. Writing strengthens my understanding and
            it helps others to understand as well. Here are the blog posts that
            I've written so far!
          </motion.p>
        </div>
      </motion.div>
      <span className="dark:bg-[#2a2a2a] dark:shadow-xl dark:opacity-60 my-12 w-full h-[1px] block bg-gray-300 opacity-50"></span>
      <motion.div className="px-4 gap-8 grid md:grid-cols-2">
        {blogPostData.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            description={post.description}
            image={post.image}
            readMoreLink={post.readMoreLink}
            date={post.date}
          />
        ))}
      </motion.div>

      <span className="dark:bg-[#2a2a2a] dark:shadow-lg dark:opacity-60 my-12 w-full h-[1px] block bg-gray-300 opacity-50"></span>

      {/* CONTACT SECTION */}
      <SectionTitles title="Get in touch" />

      <div className="px-4">
        <ContactSection />
      </div>
      {/* FOOTER */}
      <div className="mt-20 px-4 pb-7 gap-2 flex justify-between">
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

export default BlogPostPage;
