import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Projects", path: "/projects" },
  { name: "Posts", path: "/posts" },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

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
          ? "bg-white/80 backdrop-blur-sm shadow-sm px-[8px] pb-1 pt-1 md:w-[82%] mx-auto top-3 rounded-full"
          : "bg-[#ffffff] px-6 pb-4 pt-3 w-full md:w-[94%] mx-auto"
      }`}
    >
      <div className="flex justify-between items-center">
        <div>
          <Link to="/">
            <img
              src="./src/assets/image2color.jpg"
              alt="profile picture"
              className="h-10 w-10 rounded-full"
            />
          </Link>
        </div>
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
              <span className="relative z-10">{link.name}</span>
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
      </div>
    </div>
  );
};

export default Navbar;
