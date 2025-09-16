import React, { useState, useEffect, useId } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/tailwind.js";

export function ContainerTextFlip({
  words = ["Full Stack", "Front End", "Back End", "Database", "AI Integration"],
  interval = 2500,
  className,
  textClassName,
  animationDuration = 800,
}) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = React.useRef(null);

  const updateWidthForWord = () => {
    if (textRef.current) {
      // Add some padding to the text width (30px on each side)
      const textWidth = textRef.current.scrollWidth + 30;
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    // Update width whenever the word changes
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      // Width will be updated in the effect that depends on currentWordIndex
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.div
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 5000 }}
      className={cn(
        "text-neutral-500 dark:text-neutral-400  border-[1px] h-fit border-gray-300 dark:border-gray-600 opacity-80 shadow-sm pt-[1px] pb-[2px] px-1 rounded-md text-sm",
        "relative inline-block text-center",
        "dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]",
        className
      )}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("inline-block", textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className="inline-block text-nowrap">
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                y: 10, //
              }}
              animate={{
                opacity: 1,
                y: 0, //
              }}
              transition={{
                delay: index * 0.02,
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
