// PREVIOUS CODE NO ICON CHANGING ANIMATION

// import { useEffect, useState } from "react";
// import { FaRegMoon, FaSun } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import { transition, variants } from "../utils/motionAnimation";

// const ThemeToggle = () => {
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   return (
//     <motion.div initial="hidden" whileInView="visible" transition={{ staggerChildren: 0.04 }}>
//       <motion.button
//         transition={transition}
//         variants={variants}
//         onClick={toggleTheme}
//         className="px-2 py-2 rounded-md md:hover:bg-neutral-100 text-neutral-600 dark:text-neutral-300 dark:text-opacity-90 md:dark:hover:bg-neutral-800"
//       >
//         <AnimatePresence mode="wait" initial={false}>
//           {theme === "dark" ? (
//             <motion.div
//               key="sun"
//               initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
//               animate={{ rotate: 0, opacity: 1, scale: 1 }}
//               exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
//               transition={{ duration: 0.3 }}
//             >
//               <FaSun />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="moon"
//               initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
//               animate={{ rotate: 0, opacity: 1, scale: 1 }}
//               exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
//               transition={{ duration: 0.3 }}
//             >
//               <FaRegMoon className="h-4 w-4" />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.button>
//     </motion.div>
//   );
// };

// export default ThemeToggle;

// NEW CODE WITH ICON CHANGE ANIMATION

import { useEffect, useState } from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { transition, variants } from "../utils/motionAnimation";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
    >
      <motion.button
        transition={transition}
        variants={variants}
        onClick={toggleTheme}
        className="px-2 py-2 rounded-md md:hover:bg-neutral-100 text-neutral-600 dark:text-neutral-300 dark:text-opacity-90 md:dark:hover:bg-neutral-800"
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === "dark" ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <FaSun />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <FaRegMoon className="h-4 w-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
};

export default ThemeToggle;
