import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'English',
  description: 'Notes',
  base: '/English/',
  lastUpdated: true,
  themeConfig: {
    siteTitle: false,
    nav: [
      { text: 'Grammar', link: '/' },
      { text: 'Vocabulary', link: '/vocabulary/', activeMatch: '/vocabulary/' },
    ],
    sidebar: {
      '/vocabulary/': [
        {
          text: '词汇表一',
          link: '/vocabulary/chapter1',
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CarberryChai/English' },
    ],
  },
})
