import { motion } from "framer-motion";
import { transition, variants } from "../utils/motionAnimation";

const BlogPost = ({ title, description, image, readMoreLink, date }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      className="flex justify-between items-center px-4 py-4  md:hover:shadow-md transition-all duration-300   md:shadow-none rounded-lg border-gray-200 border-[1px] md:border-none dark:border-gray-800"
    >
      <motion.div
        transition={transition}
        variants={variants}
        className="w-full xl:w-2/3 "
      >
        <h1 className="text-md font-bold tracking-tight pb-2 dark:text-neutral-400 text-neutral-800">
          {title}
        </h1>
        <p className="text-[15px] text-neutral-500 pb-4">
          {description}
          <span className="text-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 cursor-pointer font-medium text-[15px] hover:text-blue-500">
            {" "}
            <a href={readMoreLink}>Read more...</a>
          </span>
        </p>
        <span className="text-[13px] text-neutral-600">Posted on: {date}</span>
      </motion.div>
      <motion.div
        transition={transition}
        variants={variants}
        className="hidden xl:block xl:pl-2"
      >
        <img
          className="h-28  border rounded-lg dark:border-none"
          src={image}
          alt=""
        />
      </motion.div>
    </motion.div>
  );
};

export default BlogPost;
