import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";

const config: UserConfig = {
  plugins: [react()],
  server: {
    proxy: {
        '/api': {
            target: 'http://localhost:4000', // Your backend server URL
            changeOrigin: true,
            // rewrite: (path) => path.replace(/^\/api/, ''), // Optional: rewrite the path if needed
        },
    },
},
};

export default defineConfig(config);
