import { defineConfig } from "vitepress";
const date = new Date();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Timed",
  description: "An Open Source Time Tracking App",
  base: "/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/" },
      { text: "Contributors", link: "/contributors" },
    ],

    sidebar: [
      {
        text: "Tracking",
        base: "/docs/tracking/",
        items: [
          { text: "Activities", link: "activities.md" },
          { text: "Attendances", link: "attendances.md" },
          { text: "Timesheet", link: "timesheet.md" },
        ],
      },
      {
        base: "/docs/",
        items: [
          { text: "Analysis", link: "analysis.md" },
          { text: "Statistics", link: "statistics.md" },
          { text: "Projects", link: "projects.md" },
          { text: "Users", link: "users.md" },
          { text: "Profile", link: "profile.md" },
        ],
      },
      {
        text: "Details",
        base: "/docs/details/",
        items: [
          { text: "Filters", link: "filters.md" },
          { text: "Estimated Effort", link: "estimated_effort.md" },
        ],
      },
      {
        text: "Administration",
        base: "/docs/administration/",
        items: [
          { text: "Intro", link: "index.md" },
          { text: "Customers", link: "customers.md" },
          { text: "Projects", link: "projects.md" },
          { text: "Tasks", link: "tasks.md" },
          { text: "Locations", link: "locations.md" },
          { text: "Public Holidays", link: "public-holidays.md" },
          { text: "Absence Type", link: "absence-type.md" },
          { text: "Users", link: "users.md" },
          { text: "User Credits", link: "user-credits.md" },
          { text: "User Responsibilities", link: "user-responsibilities.md" },
        ],
      },
    ],
    footer: {
      message:
        'Adfinis Timed is released under the <a href="https://github.com/adfinis/timed/blob/main/LICENSE">GNU AFFERO GENERAL PUBLIC LICENSE</a>.',
      copyright: `Made with ❤️ by Adfinis 
      <br>
      Copyright © 2019-${date.getFullYear()} <a href="https://github.com/adfinis/timed">Adfinis Timed</a>
      `,
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/adfinis/timed" },
    ],
    search: {
      provider: "local",
    },
  },
});
