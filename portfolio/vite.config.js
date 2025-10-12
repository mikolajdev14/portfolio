import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          gsap: ["gsap"],
          slick: ["react-slick", "slick-carousel"],
        },
      },
    },
    cssCodeSplit: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    proxy: {
      "/web3forms": {
        target: "https://api.web3forms.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/web3forms/, ""),
      },
    },
  },
});
