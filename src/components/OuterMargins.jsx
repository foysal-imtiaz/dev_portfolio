import React from "react";

const OuterMargins = ({ children }) => {
  return (
    <>
      <div className="bg-angled-lines min-h-screen flex flex-col border-l-[1px] border-r-[1px] border-gray-200 border-opacity-70 mx-auto md:w-[80%] lg:w-[58%]">
        {children}
      </div>
    </>
  );
};

export default OuterMargins;
