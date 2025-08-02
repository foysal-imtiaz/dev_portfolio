import React from "react";

const ContactSection = () => {
  return (
    <div>
      <p className="text-neutral-500 w-1/2">
        I'm open new opportunities. Whether you have a question or want to say
        hi, drop a message in{" "}
        <a
          href="https://www.linkedin.com/in/foysalimtiaz"
          target="_blank"
          className="font-medium text-sm text-neutral-600 hover:text-blue-200"
        >
          LinkedIn
        </a>{" "}
        or reach me at{" "}
        <span className="font-medium text-sm text-neutral-600 ">
          foysalimtiaz96@gmail.com
        </span>
      </p>
    </div>
  );
};

export default ContactSection;
