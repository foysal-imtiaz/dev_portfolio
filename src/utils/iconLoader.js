// const modules = import.meta.glob("/assets/icons/*.svg", {
//   eager: true,
//   query: "?url",
//   import: "default",
// });

// export const icons = Object.fromEntries(
//   Object.entries(modules).map(([filePath, url]) => {
//     const name = filePath.split("/").pop().replace(".svg", "");
//     return [name, url];
//   })
// );

// src/utils/icon.js

// List your icons here without the ".svg" extension
const iconNames = [
  "Express",
  "HTML5",
  "JavaScript",
  "MongoDB",
  "MySQL",
  "Next.js",
  "Node.js",
  "React",
  "Tailwind CSS",
  // ...add more icon names as needed
];

// Create an object mapping { iconName: "/assets/icons/iconName.svg" }
export const icons = Object.fromEntries(
  iconNames.map((name) => [name, `/assets/icons/${name}.svg`])
);
