<template>
<div >
      <q-tabs
        active-color="yellow"
        v-model="setPreferences"
        inline-label
        align="justify"
        class="bg-positive text-white shadow-2"
      >
        <q-tab
            v-for="(tabsOption) in tabsOptions"
            :key="tabsOption.name"
            :name="tabsOption.name"
            :icon="tabsOption.icon"
            :label="tabsOption.label"
        >
        </q-tab>
      </q-tabs>
      <q-tab-panels v-model="setPreferences" >
          <q-tab-panel name="preferenceInterface">
            <InterfacePreferencePanel/>
          </q-tab-panel>
          <q-tab-panel name="preferenceOutros">
            <OuthersPreferencePanel/>
          </q-tab-panel>
      </q-tab-panels>
</div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import InterfacePreferencePanel from '../preferencePanels/InterfacePreferencePanel.vue';
import OuthersPreferencePanel from '../preferencePanels/OuthersPreferencePanel.vue';

export default defineComponent({
  components: { InterfacePreferencePanel, OuthersPreferencePanel },
  setup() {
    const store = useStore();
    const tabsOptions = [
      { name: 'preferenceInterface', label: 'Preferência de Interface', icon: 'mdi-gesture-spread' },
      { name: 'preferenceOutros', label: 'Outras opções', icon: 'mdi-gesture-tap-button' },
    ];
    const setPreferences = computed({
      /* chamando a mutation
        set: (value) => { store.commit('preferences/setPreferences', value); },
        */
      get: () => store.state.preferences.preferencesState,
      set: (value) => { store.commit('preferences/setPreferences', value); },
    });
    return {
      tabs: ref('preferenceInterface'),
      tabsOptions,
      setPreferences,
    };
  },
});
</script>
