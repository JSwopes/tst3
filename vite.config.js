/**
 * This Vite configuration file defines the build settings for the project and
 * specifies the Vite plugins to be used, including the 'react' plugin.
 */

// Import the 'defineConfig' function from 'vite' to create the configuration.
import { defineConfig } from 'vite'

// Import the Vite 'react' plugin for enhancing Vite's capabilities with React.
import react from '@vitejs/plugin-react'

// Define the Vite configuration for the project.
export default defineConfig({
  // Specify the Vite plugins to be used, in this case, the 'react' plugin.
  plugins: [react()],
})
