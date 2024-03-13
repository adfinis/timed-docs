---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Timed"
  text: "An Open Source Time Tracking App"
  tagline: "And easy to use time tracking app."
  image:
    src: https://raw.githubusercontent.com/adfinis/timed-frontend/main/public/assets/logo.svg
  actions:
    - theme: brand
      text: Documentation
      link: /docs/

features:
  - title: For Employees
    details: Track your working hours by simply pressing a record button.
  - title: For Project Manager
    details: Gain a quick overview about spent hours and your current project budget.
  - title: For Adminstration
    details: Analyse your companies activies and gather valuable insights.
---

<TimedLiveClock />
<script setup>
import TimedLiveClock from './components/liveLogo.vue'
</script>
