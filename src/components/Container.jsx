const Container = ({ children }) => {
  return (
    <div className="dark:bg-[#171717] flex-1 border-l-[1px] border-r-[1px] border-gray-200 dark:border-[#222222] border-opacity-70 w-[94%] mx-auto bg-[#ffffff]  pt-4">
      {children}
    </div>
  );
};

export default Container;
