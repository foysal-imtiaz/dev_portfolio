import React from "react";

const BlogPost = () => {
  return (
    <a href="">
      <div className="w-[100%] flex justify-between items-center px-5 py-4 cursor-pointer  hover:shadow-md rounded-lg border-gray-200">
        <div className="w:full xl:w-2/3">
          <h1 className="text-md font-medium pb-2 dark:text-neutral-200 text-neutral-800">
            Everything you need to know about deep learning
          </h1>
          <p className="text-md text-neutral-500 pb-4">
            sharing my work with the community. I'm also exploring SaaS and its
            potential for innovative solutions. I'm open to collaboration and
          </p>
          <span className="text-sm text-neutral-600">
            Posted on: 27 July, 2025
          </span>
        </div>
        <div className="hidden xl:block">
          <img
            className="h-28 border rounded-lg"
            src="https://www.droptica.com/sites/droptica.com/files/styles/blog_banner_image/public/media/image/dark%20background.jpg?itok=NPC7pcFP"
            alt=""
          />
        </div>
      </div>
    </a>
  );
};

export default BlogPost;
