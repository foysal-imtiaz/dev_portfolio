import React from "react";

const SectionTitles = ({ title }) => {
  return (
    <div className="ml-4 mb-5 relative inline-block  border border-neutral-200 dark:border-neutral-700 rounded-md bg-neutral-100 dark:bg-neutral-800 dark:bg-opacity-70">
      {/* Corner Dots */}
      <span className="absolute top-0 left-0 w-1 h-1 bg-neutral-300 dark:bg-neutral-600 rounded-full -translate-x-1/2 -translate-y-1/2"></span>
      <span className="absolute top-0 right-0 w-1 h-1 bg-neutral-300 dark:bg-neutral-600 rounded-full translate-x-1/2 -translate-y-1/2"></span>
      <span className="absolute bottom-0 left-0 w-1 h-1 bg-neutral-300 dark:bg-neutral-600 rounded-full -translate-x-1/2 translate-y-1/2"></span>
      <span className="absolute bottom-0 right-0 w-1 h-1 bg-neutral-300 dark:bg-neutral-600 rounded-full translate-x-1/2 translate-y-1/2"></span>

      <h1 className="text-neutral-800 px-1 font-normal dark:text-neutral-300 m-0">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitles;
