import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/study-docs",
  title: "My Study Docs",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/study-docs/logo.svg" }]],
  themeConfig: {
    logo: "/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "面试题汇总", link: "/interview/index" },
      { text: "其他", link: "/others/index" },
    ],

    sidebar: {
      "/interview/": [
        {
          text: "面试题汇总",
          items: [
            {
              text: "CSS面试题汇总",
              link: "/interview/CSS面试题汇总.md",
            },
            {
              text: "浏览器面试题汇总",
              link: "/interview/浏览器面试题汇总.md",
            },
            {
              text: "网络面试题汇总",
              link: "/interview/网络面试题汇总.md",
            },
            {
              text: "Promise面试题归总",
              link: "/interview/Promise面试题归总.md",
            },
            {
              text: "vue笔面试题汇总",
              link: "/interview/vue笔面试题汇总.md",
            },
            {
              text: "工程化面试题汇总",
              link: "/interview/工程化面试题汇总.md",
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/git123-ai/study-docs.git" },
    ],
  },
  markdown:{
    attrs:{
      disable:true
    }
  }
});
