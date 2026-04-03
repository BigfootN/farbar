import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const host = process.env.TAURI_DEV_HOST;
const PORT = 1420;

export default defineConfig(async () => ({
  plugins: [react()],
  server: {
    port: PORT,
    strictPort: true,
    host: host || false,
    watch: {
      ignored: ["**/back/**"],
    },
  },
}));
