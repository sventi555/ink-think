module.exports = {
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
    // breaks tailwindcss plugin
    // "prettier-plugin-astro-organize-imports",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
