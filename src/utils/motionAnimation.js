export const transition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] };
export const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20px)", opacity: 0 },
  visible: { filter: "blur(0px)", transform: "translateY(0px)", opacity: 1 },
};
