// previous code that cause keyframe error

// export const transition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] };
// export const variants = {
//   hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
//   visible: { filter: "blur(0px)", transform: "translateY(0%)", opacity: 1 },
// };

// new code that works fine

// export const transition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] };
// export const variants = {
//   hidden: { scale: 0.95, transform: "translateY(20%)", opacity: 0 },
//   visible: { scale: 1, transform: "translateY(0%)", opacity: 1 },
// };

// GOING BACK

export const transition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] };
export const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0px)", transform: "translateY(0%)", opacity: 1 },
};
