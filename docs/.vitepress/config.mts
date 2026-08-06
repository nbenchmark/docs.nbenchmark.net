import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

const sidebar = generateSidebar({
  documentRootPath: "/docs",
  basePath: "/docs",
  collapsed: true,
  collapseDepth: 1,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
  hyphenToSpace: true,
  capitalizeEachWords: true,
  includeFolderIndexFile: false,
  sortMenusByFrontmatterOrder: true,
});

export default defineConfig({
  title: "NBenchmark",
  description:
    "A lightweight, async-native .NET benchmarking library with a great developer experience.",
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    math: true,
  },
  sitemap: {
    hostname: "https://docs.nbenchmark.net",
  },
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/nbenchmark.png" }],
    [
      "script",
      {
        defer: "",
        src: "https://cloud.umami.is/script.js",
        "data-website-id": "8375d935-70ed-4928-a706-dbe030e5d69a",
      },
    ],
  ],

  themeConfig: {
    logo: "/nbenchmark.png",
    nav: [
      // { text: "Quick Start", link: "/getting-started/quick-start" },
      // { text: "Core Concepts", link: "/core-concepts/" },
      // { text: "Analyzers", link: "/analyzers/" },
    ],
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/nbenchmark/NBenchmark" },
      // { icon: "twitter", link: "https://twitter.com/NBenchmark_" },
    ],
    sidebar: sidebar,
    footer: {
      message: "Released under the MIT License.",
      copyright: "",
    },
  },
});
