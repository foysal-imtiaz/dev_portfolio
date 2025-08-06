import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectTest({ project }) {
  return (
    <div className="relative pt-2 pl-4 pr-4 pb-2 mb-8 shadow-md dark:shadow-lg max-w-6xl mx-auto min-h-fit overflow-hidden group">
      {/* Main content */}
      <div className="relative z-10 w-full xl:max-w-3xl xl:pr-[330px]">
        {/* Header with title */}
        <div className="mb-4">
          <h1 className="text-neutral-800 font-semibold dark:text-neutral-200">
            {project.title}
          </h1>
        </div>

        {/* Technology icons - Dynamic rendering */}
        {/* <div className="flex items-center space-x-3 mb-4">
          {project.tech_stack.map((tech) => (
            <TechIcon key={tech} tech={tech} />
          ))}
        </div> */}

        {/* Description */}
        <div className="space-y-3">
          <p className="text-neutral-600 dark:text-neutral-400 text-[15px] leading-relaxed">
            {project.description}
          </p>
        </div>
        {/* TECH STACK */}
        <p className="text-[12px] pt-4 text-neutral-500 opacity-90 dark:text-neutral-400 dark:text-opacity-80">
          {project.tech_stack}
        </p>

        {/* Buttons as links */}
        <div className="flex items-center space-x-3 mt-4 mb-1">
          <a
            href={project.github_link}
            className="flex items-center space-x-2 py-1.5 text-sm text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-300 hover:text-gray-900 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-4 h-4" />
            <span className="font-medium">Code</span>
          </a>

          <a
            href={project.live_link}
            className="flex items-center space-x-2 py-1.5 text-sm text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-300 hover:text-gray-900 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink className="w-4 h-4" />
            <span className="font-medium">Live</span>
          </a>
        </div>
      </div>

      {/* Preview image */}
      <div className="absolute -bottom-8 -right-[130px] hidden xl:flex">
        <img
          src={project.image}
          alt={`${project.title} Preview`}
          className=" rounded-lg w-[420px] max-h-[215px] shadow-lg 
                      transition-transform duration-300 ease-out 
                      group-hover:transform group-hover:-translate-x-2 group-hover:-translate-y-1 group-hover:-rotate-3 
                      group-hover:shadow-[-10px_-10px_20px_-5px_rgba(0,0,0,0.15)] 
                      dark:group-hover:shadow-[-12px_-12px_30px_-5px_rgba(0,0,0,0.6)]"
        />
      </div>
    </div>
  );
}
