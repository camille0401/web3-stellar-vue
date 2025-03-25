import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 2800, // 这里改成你想要的端口，比如 3000
    allowedHosts: ["demo.rongzai.com"], // 允许该域名访问
  },
  define: {
    "process.env": process.env,
  },
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
});
