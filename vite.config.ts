import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Use the port environment variable provided by Render or default to 3000
    port: Number(process.env.PORT) || 3000,
    // Make sure the server listens on all interfaces (required by Render)
    host: "0.0.0.0",
  },
  build: {
    // Ensure the build output directory is `dist` (required for deployment)
    outDir: "dist",
    // Optional: You can also set `publicDir` if you have static assets
  },
});
