import { motion } from "framer-motion";
import { transition, variants } from "../utils/motionAnimation";

const Experience = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      className="w-[100%]"
    >
      <motion.div
        transition={transition}
        variants={variants}
        className="flex flex-col md:flex-row md:justify-between pb-2"
      >
        <h1 className="pb-2 md:pb-0 font-medium tracking-tight text-neutral-800 dark:text-neutral-300">
          Freelance Full Stack Developer
        </h1>
        <p className="text-[12px] text-neutral-500 opacity-90 dark:text-neutral-400 dark:text-opacity-80">
          Feb 2025 - Present
        </p>
      </motion.div>
      <motion.div transition={transition} variants={variants}>
        <p className="text-md text-neutral-500 dark:text-neutral-400 dark:text-opacity-80 pb-3">
          Designing and developing end to end application both Frontend and
          Backend. Using Wordpress or Fullstack depending on the client's
          projects requirements.
        </p>
        <p className="text-[12px] text-neutral-500 opacity-90 dark:text-neutral-400 dark:text-opacity-80">
          ReactJS / NodeJS / Express / MongoDB / Tailwind / Next.js / TypeScript
          / Wordpress
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
