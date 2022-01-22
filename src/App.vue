<template>
  <router-view />
</template>
<script>
import { defineComponent, onBeforeMount } from 'vue';
import { useQuasar, LocalStorage } from 'quasar';

export default defineComponent({
  name: 'App',
  setup() {
    const q = useQuasar();
    onBeforeMount(() => {
      const isDarkTheme = LocalStorage.getItem('quasarDarkTheme');
      if (isDarkTheme === 'auto') {
        q.dark.set('auto');
      } else {
        q.dark.set(!!LocalStorage.getItem('quasarDarkTheme'));
      }
    });

    return { q };
  },
});
</script>
