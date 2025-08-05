import { motion } from "framer-motion";
import { transition, variants } from "../utils/motionAnimation";
import SectionTitles from "../components/SectionTitles";
import ProjectTest from "../components/ProjectTest";

const ResoucePage = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      className="h-[200vh]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.04 }}
        className="px-4"
      >
        <div>
          <motion.h1
            transition={transition}
            variants={variants}
            className="mt-2 md:mt-0 text-shadow-sm text-4xl flex font-bold bg-gradient-to-b from-neutral-800 to-neutral-700 text-transparent bg-clip-text dark:text-neutral-300"
          >
            Test
          </motion.h1>
          <motion.p
            transition={transition}
            variants={variants}
            className="text-neutral-500 mt-4 md:w-[65%] dark:text-neutral-400 dark:text-opacity-80"
          >
            For testing new components
          </motion.p>
        </div>
      </motion.div>

      <span className="dark:bg-[#2a2a2a] dark:shadow-xl dark:opacity-60 my-12 w-full h-[1px] block bg-gray-300 opacity-50"></span>
      <SectionTitles title="Testing new components" />

      {/* TEST HERE  */}
      <div className="">
        <ProjectTest />
      </div>
    </motion.div>
  );
};

export default ResoucePage;
