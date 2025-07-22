import { useRouter } from 'vitepress';
import DefaultTheme from "vitepress/theme";
import { onMounted, watch, computed, nextTick } from "vue";
import mediumZoom from "medium-zoom";
import "./index.css";

export default {
  ...DefaultTheme,
  setup() {
    const router = useRouter();
    onMounted(() => {
      mediumZoom(document.querySelectorAll('img'), { background: 'var(--vp-c-bg)' });
      watch(computed(() => router.route.data), async () => {
        await nextTick();
        mediumZoom(document.querySelectorAll('img'), { background: 'var(--vp-c-bg)' })
      })
    });
  },
};
