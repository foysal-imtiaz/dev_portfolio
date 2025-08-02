import { motion } from "framer-motion";
const transition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const Project = ({ title, description, image, github_link, live_link }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      className=""
    >
      <motion.div transition={transition} variants={variants}>
        <img src={image} alt="" className="h-40 w-72 rounded-lg" />
      </motion.div>
      <motion.div transition={transition} variants={variants} className="p-1">
        <h1 className="pt-3 font-medium dark:text-neutral-200 pb-1">{title}</h1>
        <p className="text-md text-neutral-500 pb-2">{description}</p>
        <a
          href={github_link}
          className="cursor-pointer text-neutral-500 text-sm pr-3 hover:text-blue-200"
        >
          Github
        </a>
        <a
          href={live_link}
          className="cursor-pointer text-neutral-500 text-sm hover:text-blue-200"
        >
          Live
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Project;
