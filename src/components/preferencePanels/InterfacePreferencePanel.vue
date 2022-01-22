<template>
  <div class="flex column bg-grey" style="height: 400px">
    <h6 class="text-center">Interface de preferências</h6>
    <div
      class="flex row justify-around"
      :class="q.screen.lt.sm ? 'column' : ''"
     >
      <q-btn @click="modeDark" color="dark">Tema Dark</q-btn>
      <q-btn @click="modeLight" color="primary">Tema Light</q-btn>
      <q-btn @click="modeAutomatic" color="transparent">Tema Automático</q-btn>
    </div>
  </div>
</template>

<script>
import { LocalStorage, useQuasar } from 'quasar';

export default {
  setup() {
    const q = useQuasar();
    const modeDark = () => {
      q.dark.set(true);
      LocalStorage.set('quasarDarkTheme', true);
    };
    const modeLight = () => {
      q.dark.set(false);
      LocalStorage.remove('quasarDarkTheme');
    };
    const modeAutomatic = () => {
      q.dark.set('auto');
      LocalStorage.set('quasarDarkTheme', 'auto');
    };

    return {
      q,
      modeDark,
      modeLight,
      modeAutomatic,
    };
  },
};
</script>
