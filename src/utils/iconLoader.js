const modules = import.meta.glob("../../assets/icons/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
});

export const icons = Object.fromEntries(
  Object.entries(modules).map(([filePath, url]) => {
    const name = filePath.split("/").pop().replace(".svg", "");
    return [name, url];
  })
);
