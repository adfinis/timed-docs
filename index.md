---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Timed"
  text: "An Open Source Time Tracking App"
  tagline: "Log your Working Activities, Attendances, Holidays"
  image:
    src: https://raw.githubusercontent.com/adfinis/timed-frontend/main/public/assets/logo.svg
  actions:
    - theme: brand
      text: Documentation
      link: /docs/

features:
  - title: For Employees
    details: You can report the working time, and register the activites that you ware doing in each day
  - title: For Project Manager
    details: You can track the activitis in your team, and check the activities of each member in your team
  - title: For Adminstration
    details: You can check duration of the work that happend for your customer, and generate reports about those activities
---
<TimedLiveClock />
<script setup>
import TimedLiveClock from './components/liveLogo.vue'
</script>