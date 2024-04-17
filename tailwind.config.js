/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'body': ['poppins', "san-serif"]
    }
  },
  plugins: [require("daisyui")],
};
