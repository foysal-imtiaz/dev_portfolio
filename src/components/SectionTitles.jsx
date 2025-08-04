import { motion } from "framer-motion";
import { transition, variants } from "../utils/motionAnimation";

const SectionTitles = ({ title }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
    >
      <div className="ml-4 mb-5 relative inline-block  border border-neutral-200 dark:border-neutral-700 rounded-md bg-neutral-100 dark:bg-neutral-800 dark:bg-opacity-70">
        {/* Corner Dots */}
        <span className="absolute top-0 left-0 w-1 h-1 bg-neutral-300 dark:bg-neutral-600 rounded-full -translate-x-1/2 -translate-y-1/2"></span>
        <span className="absolute top-0 right-0 w-1 h-1 bg-neutral-300 dark:bg-neutral-600 rounded-full translate-x-1/2 -translate-y-1/2"></span>
        <span className="absolute bottom-0 left-0 w-1 h-1 bg-neutral-300 dark:bg-neutral-600 rounded-full -translate-x-1/2 translate-y-1/2"></span>
        <span className="absolute bottom-0 right-0 w-1 h-1 bg-neutral-300 dark:bg-neutral-600 rounded-full translate-x-1/2 translate-y-1/2"></span>

        <motion.h1
          transition={{
            duration: 1.2,
            ease: [0.5, 0.2, 0.5, 2],
          }}
          variants={variants}
          className="text-neutral-800 px-1 font-normal dark:text-neutral-300 m-0"
        >
          {title}
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default SectionTitles;
