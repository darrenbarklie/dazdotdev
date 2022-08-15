/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    // fontFamily: {
    //   ...fontFamily,
    //   sans: ["system-ui"],
    // },
    // https://type-scale.com : minor third
    fontSize: {
      xs: "0.694rem",
      sm: "0.833rem",
      base: "1rem",
      lg: "1.2rem",
      xl: "1.44rem",
      "2xl": "1.728rem",
      "3xl": "2.074rem",
      "4xl": "2.488rem",
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
  extend: {
    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme("colors.red.700"),
          h2: {
            color: theme("colors.gray.800"),
          },
          h3: {
            color: theme("colors.gray.800"),
          },
          strong: {
            color: theme("colors.gray.800"),
          },
          a: {
            color: theme("colors.green.500"),
            "&:hover": {
              color: theme("colors.green.600"),
            },
          },
        },
      },
    }),
  },
};
