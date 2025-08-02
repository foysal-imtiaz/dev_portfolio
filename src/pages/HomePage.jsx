import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const HomePage = () => {
  return (
    <div className="">
      {/* INTRO SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.04 }}
        className=""
      >
        <div className="md:flex md:justify-start items-center gap-4">
          <motion.span
            transition={transition}
            variants={variants}
            className="dark:border-gray-600  md:hidden text-neutral-500 border-[1px] border-gray-300 opacity-70 py-[2px] px-2 shadow-sm rounded-md text-sm"
          >
            Full Stack Dev
          </motion.span>
          <motion.h1
            transition={transition}
            variants={variants}
            className="mt-2 md:mt-0 text-shadow-sm text-4xl flex font-extrabold bg-gradient-to-b from-neutral-800 to-neutral-700 text-transparent bg-clip-text dark:text-white/90"
          >
            Foysal Imtiaz
          </motion.h1>
          <motion.span
            transition={transition}
            variants={variants}
            className="hidden text-neutral-500 md:flex md:border-[1px] md:h-fit md:border-gray-300 dark:border-gray-600 md:opacity-70 md:shadow-sm md:py-[2px] md:px-2 md:rounded-md md:text-sm"
          >
            Full Stack Dev
          </motion.span>
        </div>
        <motion.p
          transition={transition}
          variants={variants}
          className="text-neutral-500 mt-4 md:w-[65%]"
        >
          Hi, I am a Full Stack developer proficient in MERN stack and NextJS. I
          love building projects, experimenting with new technologies, and
          sharing my work with the community. I'm also exploring SaaS and its
          potential for innovative solutions. I'm open to collaboration and
          always eager to learn something new!
        </motion.p>
      </motion.div>
      <span className="dark:bg-[#2a2a2a] dark:shadow-lg my-10 w-full h-[1px] block bg-gray-200 opacity-50"></span>

      {/* PROJECT SECTION */}
      <div>
        <h1 className="text-gray-800 dark:text-white/90">
          Things I have built so far
        </h1>
        <div></div>
      </div>
    </div>
  );
};

export default HomePage;
