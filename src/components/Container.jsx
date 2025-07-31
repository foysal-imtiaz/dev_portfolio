const Container = ({ children }) => {
  return (
    <div className="flex-1 border-l-[1px] border-r-[1px] border-gray-200 border-opacity-70 w-[94%] mx-auto bg-[#ffffff] px-4 pt-4">
      {children}
    </div>
  );
};

export default Container;
