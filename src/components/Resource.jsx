import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { transition, variants } from "../utils/motionAnimation";

const Resource = ({ title, link, site_name }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      className="flex gap-3"
    >
      <div className="flex items-center ">
        <motion.p
          transition={transition}
          variants={variants}
          className="inline text-neutral-600 dark:text-neutral-400 text-[16px]"
        >
          <span className=" text-blue-600 dark:text-blue-800">➤</span> {title}{" "}
          <a
            href={link}
            target="_blank"
            className="inline pl-1 text-[14px] text-neutral-700 hover:text-blue-700 dark:text-neutral-500 dark:hover:text-blue-500"
          >
            {site_name}
            <MdOutlineArrowOutward className="inline pl-1" />{" "}
          </a>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Resource;
