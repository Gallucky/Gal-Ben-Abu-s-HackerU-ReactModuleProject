import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      screens: {
        sm: "320px",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
