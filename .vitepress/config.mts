import { defineConfig } from 'vitepress'
const date = new Date;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Timed",
  description: "An Open Source Time Tracking App",
  base: "/timed-docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/' },
      { text: 'Contributors', link: '/contributors' },
    ],

    sidebar: [
      {
        text: 'Tracking',
        items: [
          { text: 'Activities', link: '/docs/tracking/activities' },
          { text: 'Attendances', link: '/docs/tracking/attendances' },
          { text: 'Timesheet', link: '/docs/tracking/timesheet' },
        ]
      },
      {
        // text: 'Documentation',
        items: [
          { text: 'Analysis', link: '/docs/analysis/' },
          { text: 'Statistics', link: '/docs/statistics/' },
          { text: 'Projects', link: '/docs/projects/' },
        ]
      }
    ],
    footer: {
      message: 'Adfinis Timed is released under the <a href="https://github.com/adfinis/timed-frontend/blob/main/LICENSE">GNU AFFERO GENERAL PUBLIC LICENSE</a>.',
      copyright: `Made by Adfinis with ❤️
      <br>
      Copyright © 2019-${date.getFullYear()} <a href="https://github.com/adfinis/timed-frontend">Adfinis Timed</a>
      `
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/adfinis/timed-frontend' }
    ]
  }
})
