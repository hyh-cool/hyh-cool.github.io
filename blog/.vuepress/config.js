const isProd = process.env.NODE_ENV === "production";
module.exports = {

  title: "何小胖的个人小站",
  description: "一名从事嵌入式开发的搬砖人.",
  
  head: [
	["link", { rel: "icon", href: "/img/logo/logo.svg" }],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    ["meta", { name: "application-name", content: "何小胖的个人小站" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "何小胖的个人小站" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],
  
  bundler: "@vuepress/vite",
  theme: "vuepress-theme-gungnir",
  themeConfig: {
     //仓库名
    //repo: "hyh-cool/hyh-cool.github.io",
    docsDir: "blog",
    docsBranch: "master",
    navbarTitle: "何小胖的个人小站",
    lastUpdated: '上次更新',
	locales: {
      "/": {
        searchText: "搜索"
      },
      },
      
    searchIcon: "co-search",
    //hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?
    // personal information
    personalInfo: {
      name: "何小胖的个人小站",
      avatar: "/img/avatar.jpg",
      description: "今日任务: Coding(1/1).",
      sns: {
        github: "hyh-cool",
        email: "hyh-cool@163.com",
        }
    },

    // 首页头像
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
      },
    ],

    // 其他页面
    pages: {
      tags: {
        subtitle: "文章标签",
        bgImage: {
          path: "",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      },
	 links: {
	   title:
	   "Docs",
	   subtitle:
	    "",
	   bgImage: {
	     path: "",
	     mask: "rgba(64, 118, 190, 0.5)"
	    }
	  }
    },
    themePlugins: {
	  // only enable git plugin in production mode
      git: isProd,
      search: {
        locales: {
          "/": {
            placeholder: "搜索文章标题"
              },
         }
       },
      katex: true,
      giscus: false,
      /*giscus: {
        repo: "hyh-cool/comments-Giscus",
        repoId: "R_kgDOIe47Jw",
        category: "Announcements",
        categoryId: "DIC_kwDOIe47J84CSstm",
        reactionsEnabled: false,
        lang: "zh-CN",
        darkTheme: "dark_dimmed",
      },*/
      mdPlus: {
        all: true
      },
    },
navbar: [{
      text: "首页",
      link: "/",
      icon: "co-home"
    },
    {
      text: "标签",
      link: "/tags/",
      icon: "co-tag"
    },
    {
      text: "关于",
      link: "/about/",
      icon: "co-user"
     },
     {
      text: "留言",
      link: "https://waline.hyh.cool/",
      icon: "px-notes"
     },
    {
        text: "文档",
        link: "/docs/",
        icon: "co-read-the-docs"
      },
      {
        text: "内功修炼",
        icon: "io-rocket",
        children: [
				{
					text: "数据结构与算法",
					link: "/LeetCode/",
					icon: "co-leetcode"
				},
				{
					text: "操作系统",
					link: "/OS/",
					icon: "md-computer"
				},
                {
					text: "计算机网络",
					link: "/NetWork/",
					icon: "fa-network-wired"
				},
        ],
      },
    ],
    sidebar: {'/LeetCode/': [
        {
          text: '语言基础篇',
          collapsible: true,
          children: [],
        },
        {
          text: '数据结构基础篇',
          collapsible: true,
          children: ['/LeetCode/02_数据结构基础篇/数组.md'],
        },
        {
          text: '算法-数组篇',
          collapsible: true,
          children: [],
        },
      ],},
    footer: `&copy; <a href="https://github.com/hyh-cool" target="_blank">何小胖</a> 2022-至今
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  },

  markdown: {
    extractHeaders: {
      level: [1],
    },
    code: {
      lineNumbers: true,
    },
  },
};
