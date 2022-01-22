<template>
  <q-page class="flex">
    <Home/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Home from './Home/Home.vue';

export default defineComponent({
  name: 'PageIndex',
  components: { Home },
  setup() {
    return { Home };
  },
});
</script>
