import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [react(), svgr(), eslint()],
  resolve: {
    alias: [{ find: "~", replacement: "/src" }],
  },
});
