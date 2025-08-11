// import { FaGithub } from "react-icons/fa";
// import { FiExternalLink } from "react-icons/fi";
// import { motion } from "framer-motion";
// import { transition, variants } from "../utils/motionAnimation";

// export default function ProjectTest({ project }) {
//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       transition={{ staggerChildren: 0.04 }}
//       className="relative pt-2 pl-4 pr-4 pb-2 mb-8 hover:shadow-lg border-[1px] dark:border-neutral-800 shadow-md max-w-6xl mx-2 lg:mx-3 rounded-lg min-h-fit overflow-hidden group"
//     >
//       <div className="mb-3 mt-1">
//         <motion.h1
//           transition={transition}
//           variants={variants}
//           className="text-neutral-800 font-semibold dark:text-neutral-200"
//         >
//           {project.title}
//         </motion.h1>
//       </div>
//       <div className="md:hidden mb-4">
//         <motion.img
//           transition={transition}
//           variants={variants}
//           src={project.image}
//           alt={`${project.title} Preview`}
//           className=" rounded-lg w-[420px] max-h-[215px] shadow-md md:shadow-lg
//                       md:transition-transform duration-300 ease-out
//                       md:group-hover:transform group-hover:-translate-x-2 group-hover:-translate-y-1 md:group-hover:-rotate-3
//                       md:group-hover:shadow-[-10px_-10px_20px_-5px_rgba(0,0,0,0.15)]
//                       md:dark:group-hover:shadow-[-12px_-12px_30px_-5px_rgba(0,0,0,0.6)]"
//         />
//       </div>
//       <div className="relative z-10 w-full xl:max-w-3xl xl:pr-[330px]">
//         {/* Description */}
//         <div className="space-y-3">
//           <motion.p
//             transition={transition}
//             variants={variants}
//             className="text-neutral-600 dark:text-neutral-400 text-[15px] leading-relaxed"
//           >
//             {project.description}
//           </motion.p>
//         </div>
//         {/* TECH STACK */}
//         <motion.p
//           transition={transition}
//           variants={variants}
//           className="text-[12px] pt-4 text-neutral-500 opacity-90 dark:text-neutral-400 dark:text-opacity-80"
//         >
//           {project.tech_stack}
//         </motion.p>

//         {/* Buttons as links */}
//         <motion.div
//           transition={transition}
//           variants={variants}
//           className="flex items-center space-x-3 mt-4 mb-1"
//         >
//           <a
//             href={project.github_link}
//             className="flex items-center space-x-2 py-1.5 text-sm text-gray-600 dark:text-neutral-400 dark:hover:text-neutral-300 hover:text-gray-900 transition-colors duration-200"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaGithub className="w-4 h-4" />
//             <span className="font-medium">Code</span>
//           </a>

//           <a
//             href={project.live_link}
//             className="flex items-center space-x-2 py-1.5 text-sm text-gray-600 dark:text-neutral-400 dark:hover:text-neutral-300 hover:text-gray-900 transition-colors duration-200"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FiExternalLink className="w-4 h-4" />
//             <span className="font-medium">Live</span>
//           </a>
//         </motion.div>
//       </div>

//       {/* Preview image */}
//       <div className="absolute -bottom-8 -right-[130px] hidden xl:flex">
//         <img
//           src={project.image}
//           alt={`${project.title} Preview`}
//           className=" rounded-lg w-[420px] max-h-[215px] shadow-lg
//                       transition-transform duration-300 ease-out
//                       group-hover:transform group-hover:-translate-x-2 group-hover:-translate-y-1 group-hover:-rotate-3
//                       group-hover:shadow-[-10px_-10px_20px_-5px_rgba(0,0,0,0.15)]
//                       dark:group-hover:shadow-[-12px_-12px_30px_-5px_rgba(0,0,0,0.6)]"
//         />
//       </div>
//     </motion.div>
//   );
// }
