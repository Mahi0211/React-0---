/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-light": "0px 15px 40px -20px rgba(0, 0, 0, 0.25)",
        "custom-box": "0px 8px 16px 0px rgba(0, 0, 0, 0.04)",
        "add-button": "0px 3px 8px 0px rgba(40, 44, 63, 0.08)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
