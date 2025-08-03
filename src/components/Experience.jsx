import { motion } from "framer-motion";
import { transition, variants } from "../utils/motionAnimation";

const Experience = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      className="w-[100%] px-3"
    >
      <motion.div
        transition={transition}
        variants={variants}
        className="flex flex-col md:flex-row md:justify-between pb-2"
      >
        <h1 className="pb-2 md:pb-0 font-medium tracking-tight text-neutral-800 dark:text-neutral-400">
          Software Engieenr at Zero Mail Inc.
        </h1>
        <p className="text-[12px] text-neutral-500 opacity-90">
          Feb 2025 - Present
        </p>
      </motion.div>
      <motion.div transition={transition} variants={variants}>
        <p className="text-md text-neutral-500 pb-3">
          Software engineer responsible for core features and performance
          optimisations for an innovative AI-powered email client, focusing on
          intelligent email processing and real-time collaboration.
        </p>
        <p className="text-[12px] text-neutral-500 opacity-90">
          Next.js / TypeScript / Tailwind CSS / Postgres / Google APIs
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
