import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="sticky top-0 h-fit bg-neutral-200 text-xl text-center w-full md:w-[94%] mx-auto">
      <Link to={"/"}>Home</Link>
      <Link to={"/projects"}>Projects</Link>
    </div>
  );
};

export default Navbar;
