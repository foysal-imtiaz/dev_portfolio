import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

// NAVBAR LINKS
const navLinks = [
  { name: "Projects", path: "/projects" },
  { name: "Posts", path: "/posts" },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" },
];

// MOTION Animation Values
const transition = { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] };
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
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50); // Change threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 px-6 pb-4 pt-3 text-xl w-full md:w-[94%] mx-auto border-b-[1px] border-gray-200 md:border-b-0 md:border-r-[1px] md:border-l-[1px] md:border-opacity-70 md:border-gray-200 transition-all duration-300 z-50 ${
        scrolled
          ? "bg-[#ffffff] md:bg-white/80 md:backdrop-blur-sm md:shadow-sm md:px-[5px] md:pb-[3px] md:pt-[4px] md:w-[78%] mx-auto md:top-3 md:rounded-full"
          : "bg-[#ffffff] px-6 pb-4 pt-3 w-full md:w-[94%] mx-auto"
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
              src="./src/assets/image2color.jpg"
              alt="profile picture"
              className={`h-10 w-10 rounded-full
                ${scrolled ? "md:h-8 md:w-8" : "h-10 w-10 rounded-full"}`}
            />
          </Link>
        </motion.div>
        {/* DESKTOP VIEW */}
        <div className="hidden md:flex  justify-center items-center text-sm text-neutral-800">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="relative px-2 py-1 text-sm"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === index && (
                <motion.span
                  layoutId="hovered-span"
                  className="h-full w-full absolute inset-0 rounded-md bg-neutral-100"
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
        <div className="md:hidden" onClick={toggleMenu}>
          <img
            src="./src/assets/menu-icon.png"
            alt="Menu"
            className="h-5 w-5"
          />
        </div>
        {/* Conditional Rendering of MENU */}

        {menuOpen && (
          <div className="absolute top-16 right-16 bg-[#f5f5f5] flex flex-col rounded-lg gap-2 p-4 text-center text-sm text-neutral-800">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Navbar;
