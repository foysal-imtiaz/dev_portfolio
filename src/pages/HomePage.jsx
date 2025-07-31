import { motion } from "framer-motion";
const HomePage = () => {
  return (
    <div>
      {/* INTRO SECTION */}
      <div>
        <div className="md:flex md:justify-start items-center gap-4">
          <span className="md:hidden text-neutral-700 border-[1px] border-gray-300 opacity-70 py-1 px-2 shadow-sm rounded-md text-sm">
            Full Stack Dev
          </span>
          <h1 className="text-shadow-sm text-4xl flex font-extrabold text-neutral-700">
            Foysal Imtiaz
          </h1>
          <span className="hidden text-neutral-700 md:flex md:border-[1px] md:h-fit md:border-gray-300 md:opacity-70 md:shadow-sm md:py-1 md:px-2 md:rounded-md md:text-sm">
            Full Stack Dev
          </span>
        </div>
        <p className="text-neutral-500 mt-4 md:w-[65%]">
          Hi, I am a Full Stack developer proficient in MERN stack and NextJS. I
          love building projects, experimenting with new technologies, and
          sharing my work with the community. I’m also exploring SaaS and its
          potential for innovative solutions. I’m open to collaboration and
          always eager to learn something new!
        </p>
      </div>
      <span className="my-10 w-full h-[1px] block bg-gray-200"></span>
      {/* PROJECT SECTION */}
      <div>
        <h1 className="text-gray-800">Things I have built so far</h1>
        <div></div>
      </div>
    </div>
  );
};

export default HomePage;
