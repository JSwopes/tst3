/**
 * This Tailwind CSS configuration file defines how Tailwind CSS should process
 * our project's CSS and JavaScript files. It specifies the content to be scanned
 * for CSS classes and defines any customizations or extensions to the default
 * Tailwind CSS theme.
 */

// Import the Tailwind CSS configuration type from the 'tailwindcss' package.
/** @type {import('tailwindcss').Config} */
export default {
  // Define the files to be scanned for CSS classes.
  content: ['./index.css', './src/**/*.{js,jsx,ts,tsx}'],

  // Customize the Tailwind CSS theme (if needed) by extending or modifying it.
  theme: {
    extend: {},
  },

  // Specify any additional plugins to be used with Tailwind CSS (if applicable).
  plugins: [],
}


