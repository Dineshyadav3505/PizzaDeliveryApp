/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      first: ['Noto Sans"', 'sans-serif'],
      logo: ['Playwrite BE VLG', 'cursive'],
      Ubuntu: ['Ubuntu', 'sans-serif'],
      code: ['Encode Sans', 'sans-serif'],
    },
    plugins: [],
  }
};