import { useEffect, useState } from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

// MOTION Animation Values
const transition = { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Add or remove dark mode class on <html> tag
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Store user preference in localStorage
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
        className="px-2 py-2 rounded-md md:hover:bg-neutral-100 text-neutral-600 dark:text-slate-300 md:dark:hover:bg-neutral-800"
      >
        {theme === "dark" ? <FaSun /> : <FaRegMoon className="h-4 w-4" />}
      </motion.button>
    </motion.div>
  );
};

export default ThemeToggle;
