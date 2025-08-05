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
        className="text-neutral-600 w-full md:w-2/3 dark:text-neutral-400 text-[16px]"
      >
        I'm open to new opportunities. Whether you have a question or want to
        say hi, drop a message.
      </motion.p>
      <motion.div transition={transition} variants={variants} className="pt-3">
        <p className="text-[16px] text-neutral-600 dark:text-neutral-400 pr-16 inline">
          LinkedIn
        </p>{" "}
        <a
          href="https://www.linkedin.com/in/foysalimtiaz"
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-300 underline underline-offset-2"
        >
          linkedin.com/in/foysalimtiaz
        </a>
      </motion.div>
      <motion.div transition={transition} variants={variants} className="pt-3">
        <p className="text-[16px] text-neutral-600 dark:text-neutral-400 pr-[74px] inline">
          GitHub
        </p>{" "}
        <a
          href="https://github.com/foysal-imtiaz/"
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-300 underline underline-offset-2 "
        >
          github.com/foysal-imtiaz
        </a>
      </motion.div>
      <motion.div transition={transition} variants={variants} className="pt-3">
        <p className="text-[16px] text-neutral-600 dark:text-neutral-400 pr-[86px] inline">
          Email
        </p>{" "}
        <a
          href="mailto:foysalimtiaz96@gmail.com"
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-300 underline underline-offset-2 "
        >
          foysalimtiaz96@gmail.com
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;
