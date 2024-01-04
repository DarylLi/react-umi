import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "@/pages/index" },
    // { path: "/docs", component: "./docs" },
  ],
  history: { type: 'hash' },
  publicPath:'./',
  base:'/',
  npmClient: 'yarn',
});
