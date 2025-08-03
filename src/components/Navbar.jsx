import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { LuMenu } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

// NAVBAR LINKS
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Posts", path: "/posts" },
  { name: "Resources", path: "/resources" },
];

// MOTION Animation Values
const transition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

// MAIN Component
const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Function to Handle Scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(scrollTop > 50);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 w-full z-50 px-6 pb-4 pt-3 text-xl mx-auto border-b border-gray-200 dark:border-[#222222] border-opacity-70 
    md:border-b-0 md:border-x md:border-opacity-70
    ${
      scrolled
        ? "md:w-[94%] dark:bg-[#171717]/80 backdrop-blur-sm bg-white/80 md:shadow-sm "
        : "bg-white dark:bg-[#171717] md:w-[94%]"
    }`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.04 }}
        className="flex justify-between items-center"
      >
        <motion.div transition={transition} variants={variants}>
          <Link to="/">
            <img
              src="/assets/image2color.jpg"
              alt="profile picture"
              className={`rounded-full transition-all duration-300,
                ${scrolled ? "h-8 w-8" : "h-10 w-10"}`}
            />
          </Link>
        </motion.div>
        {/* DESKTOP VIEW */}
        <div className="hidden md:flex  justify-center items-center text-sm text-neutral-800">
          <ThemeToggle />
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="dark:text-white relative px-2 py-1 text-sm"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === index && (
                <motion.span
                  layoutId="hovered-span"
                  className="dark:bg-neutral-800 h-full w-full absolute inset-0 rounded-md bg-neutral-100"
                />
              )}
              <motion.span
                transition={transition}
                variants={variants}
                className="relative z-10"
              >
                {link.name}
              </motion.span>
            </Link>
          ))}
        </div>
        {/* MOBILE VIEW */}
        <motion.div
          transition={transition}
          variants={variants}
          className=" md:hidden flex gap-2 justify-center items-center"
        >
          <div className="">
            <ThemeToggle />
          </div>
          <div
            className="md:hidden flex justify-center items-center gap-2"
            onClick={toggleMenu}
          >
            <LuMenu className="dark:text-neutral-300 h-6 w-6" />
          </div>
        </motion.div>
        {/* Conditional Rendering of MENU */}

        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ ...transition, staggerChildren: 0.06 }}
            className="absolute top-14 right-4 bg-white dark:bg-[#171717] shadow-lg border-2 border-gray-200 dark:border-[#222222] border-t-0 flex flex-col rounded-lg gap-2 p-4 text-center text-sm text-neutral-500 dark:text-neutral-400 font-semibold min-w-[150px]"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                transition={transition}
                variants={variants}
              >
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-3 rounded-md transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-700  dark:hover:text-white"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <span className="dark:bg-[#2a2a2a] dark:shadow-lg dark:opacity-60 w-full h-[1px] block bg-gray-300 opacity-50"></span>
            <motion.div
              transition={transition}
              variants={variants}
              className="flex gap-3 pt-1 items-center justify-center"
            >
              <a href="https://github.com/foysal-imtiaz/" target="_blank">
                <FaGithub className="hover:h-6 hover:w-6 cursor-pointer h-5 w-5 text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/foysalimtiaz"
                target="_blank"
              >
                <FaLinkedinIn className="hover:h-6 hover:w-6 cursor-pointer h-5 w-5 text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Navbar;
