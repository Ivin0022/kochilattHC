/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Custom grid row layout
        layout: "auto 1fr auto", // Header, Main (flexible), Footer
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
    ],
  },

}

// primary: #449495
// secondary: #b6d037

