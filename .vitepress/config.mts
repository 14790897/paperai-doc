import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "www.paperai.life",
  description: "paperai docs",
  head: [["link", { rel: "icon", href: "public/favicon.ico" }]],
  // base: "/paperai-doc/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "GitHub",
        link: "https://github.com/14790897/paper-ai",
      },
      {
        text: "website",
        link: "https://www.paperai.life",
      },
    ],

    sidebar: [
      {
        text: "www.paperai.life",
        items: [
          // { text: "Markdown Examples", link: "/markdown-examples" },
          // { text: "Runtime API Examples", link: "/api-examples" },
          { text: "功能介绍 function", link: "/paperai-function" },
          { text: "部署方法 deploy", link: "/paperai-deploy" },
          { text: "环境变量 env", link: "/paperai-env" },
          { text: "界面展示 show", link: "/paperai-interface" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://t.me/+Wepuy5fpPV04YTU1" }],
  },
});
