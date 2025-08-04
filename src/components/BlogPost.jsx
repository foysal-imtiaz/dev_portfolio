import { motion } from "framer-motion";
import { transition, variants } from "../utils/motionAnimation";

const BlogPost = ({ title, image, readMoreLink, date }) => {
  return (
    <motion.div
      // initial="hidden"
      //   whileInView="visible"
      //   transition={{ staggerChildren: 0.04 }}

      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      className=""
    >
      <motion.div transition={transition} variants={variants}>
        <a href={readMoreLink} target="_blank">
          <div>
            <div>
              <img
                src={image}
                alt=""
                className="rounded-xl w-full min-h-[180px]"
              />
            </div>
            <div>
              <h1 className="hover:underline underline-offset-4 p-2 pt-4 text-neutral-800 font-semibold dark:text-neutral-300">
                {title}
              </h1>
            </div>
            <p className="pl-2 text-sm text-neutral-500 dark:text-neutral-400">
              {date}
            </p>
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default BlogPost;
