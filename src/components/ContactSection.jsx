import { motion } from "framer-motion";
import { transition, variants } from "../utils/motionAnimation";

const ContactSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      className=""
    >
      <motion.p
        transition={transition}
        variants={variants}
        className="text-neutral-500 w-full md:w-1/2 dark:text-neutral-400 dark:text-opacity-80"
      >
        I'm open to new opportunities. Whether you have a question or want to
        say hi, drop a message in{" "}
        <a
          href="https://www.linkedin.com/in/foysalimtiaz"
          target="_blank"
          className="font-semibold text-sm text-neutral-600  hover:text-blue-500 dark:text-neutral-300 opacity-80 dark:hover:text-blue-500"
        >
          LinkedIn
        </a>{" "}
        or reach me at{" "}
        <span className="font-semibold text-sm text-neutral-600 dark:text-neutral-300 opacity-80 dark:hover:text-neutral-200">
          foysalimtiaz96@gmail.com
        </span>
      </motion.p>
    </motion.div>
  );
};

export default ContactSection;
