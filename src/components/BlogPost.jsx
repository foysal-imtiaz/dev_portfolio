import { motion } from "framer-motion";
import { transition, variants } from "../utils/motionAnimation";

const BlogPost = () => {
  return (
    <a href="">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.04 }}
        className="w-[100%] flex justify-between items-center px-4 py-4 cursor-pointer  md:hover:shadow-md shadow-sm  md:shadow-none rounded-lg border-gray-200 border-[1px] md:border-none dark:border-gray-800"
      >
        <motion.div
          transition={transition}
          variants={variants}
          className="w-full xl:w-2/3"
        >
          <h1 className="text-md font-bold tracking-tight pb-2 dark:text-neutral-400 text-neutral-800">
            Everything you need to know about deep learning
          </h1>
          <p className="text-[15px] text-neutral-500 pb-4">
            Sharing my work with the community. I'm also exploring SaaS and its
            potential for innovative solutions. I'm open to collaboration and
            <span className="text-neutral-700 font-medium text-[15px] hover:text-blue-300">
              {" "}
              Read more...
            </span>
          </p>
          <span className="text-[13px] text-neutral-600">
            Posted on: 27 July, 2025
          </span>
        </motion.div>
        <motion.div
          transition={transition}
          variants={variants}
          className="hidden xl:block xl:pl-2"
        >
          <img
            className="h-28  border rounded-lg"
            src="https://www.droptica.com/sites/droptica.com/files/styles/blog_banner_image/public/media/image/dark%20background.jpg?itok=NPC7pcFP"
            alt=""
          />
        </motion.div>
      </motion.div>
    </a>
  );
};

export default BlogPost;
