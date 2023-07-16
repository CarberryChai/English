import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'English',
  description: 'Notes',
  base: '/English/',
  themeConfig: {
    siteTitle: false,
    nav: [
      { text: 'Grammar', link: '/' },
      { text: 'Vocabulary', link: '/vocabulary/' },
    ],
    sidebar: {
      '/vocabulary/': [
        {
          text: 'vocabulary 1...100',
          link: '/vocabulary/chapter1',
        },
      ],
      '/': [
        {
          text: 'Grammar',
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CarberryChai/English' },
    ],
  },
})
