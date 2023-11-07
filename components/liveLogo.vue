<template>
    <div class="clock-container" style="display: none;">
        <svg class="timed-clock" viewBox="0 0 512 512" width="100%" height="100%">
            <circle class="circle" r="240" cx="256" cy="256" stroke-width="20" />
            <line class="hour" x1="256" y1="144" x2="256" y2="288" stroke-width="30" stroke-linecap="round"
                :transform="`rotate(${data.hours} 256 256)`" />
            <line class="minute" x1="256" y1="80" x2="256" y2="288" stroke-width="20" stroke-linecap="round"
                :transform="`rotate(${data.minutes} 256 256)`" />
            <line class="second" x1="256" y1="64" x2="256" y2="288" stroke-width="20" stroke-linecap="round"
                :transform="`rotate(${data.seconds} 256 256)`" />
        </svg>
    </div>
</template>
<script lang="ts" setup>
import { reactive, onMounted } from 'vue';
const data = reactive({
    hours: 0,
    minutes: 0,
    seconds: 0,
});
updateClock();
onMounted(() => {
    const imageContainer = document.querySelector('.image-container');
    const timedClock = document.querySelector('.clock-container');
    if (imageContainer && timedClock) {
        imageContainer.innerHTML = timedClock.innerHTML;
    }
    updateClock();
    setInterval(() => {
        updateClock();
        if (!imageContainer || !timedClock) return;
        imageContainer.innerHTML = timedClock.innerHTML;
    }, 1000);
});
function updateClock() {
    const date = new Date;
    data.seconds = date.getSeconds() * 6;
    data.minutes = date.getMinutes() * 6 + data.seconds / 60;
    data.hours = ((date.getHours() % 12) / 12) * 360 + data.minutes / 12;
}
</script>

<style>
.timed-clock {
    --clock-size: 200px;
    --clock-color: rgb(87, 87, 87);
    --clock-color-secondary: rgb(217, 83, 79);

    width: var(--clock-size);
    height: var(--clock-size);
}


.circle {
    fill: transparent;
    stroke: var(--clock-color);
}

.hour {
    stroke: var(--clock-color);
}

.minute {
    stroke: var(--clock-color);
}

.second {
    stroke: var(--clock-color-secondary);
}
</style>