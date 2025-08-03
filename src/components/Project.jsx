import { motion } from "framer-motion";
import { transition, variants } from "../utils/motionAnimation";
import { MdArrowOutward } from "react-icons/md";

const Project = ({ title, description, image, github_link, live_link }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      className="flex flex-col gap-4 md:gap-1 md:flex-col"
    >
      <motion.div
        transition={transition}
        variants={variants}
        className=" md:w-fit"
      >
        <img src={image} alt="" className="h-40 w-72 rounded-lg" />
      </motion.div>
      <motion.div
        transition={transition}
        variants={variants}
        className="p-1 md:pt-6  flex flex-col justify-center md:w-fit"
      >
        <h1 className="md:pt-3 font-medium tracking-tight text-neutral-600 dark:text-neutral-400 pb-1 ">
          {title}
        </h1>
        <p className="text-[15px] dark:text-neutral-500 text-neutral-500  pb-2">
          {description}
        </p>
        <div>
          <a
            href={github_link}
            className="cursor-pointer text-neutral-500 text-[13px] pr-3 hover:text-blue-200"
          >
            Github <MdArrowOutward className="inline" />
          </a>
          <a
            href={live_link}
            className="cursor-pointer text-neutral-500 text-[13px] hover:text-blue-200"
          >
            Live <MdArrowOutward className="inline" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
