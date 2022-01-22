<template>
<div class="flex">
    <div class="flex full-width justify-end">
        <div>
            <q-btn class="text-primary" flat round dense icon="mdi-account-circle" />
            <q-menu>
            <q-list>
                <router-link
                    class="text-primary"
                    :to="{name: 'perfil'}"
                    style="text-decoration: none;"
                >
                <q-item clickable v-close-popup>
                    <q-item-section>
                        Editar perfil
                    </q-item-section>
                </q-item>
                </router-link>
            </q-list>
            </q-menu>
        </div>
    </div>
    <div class="full-width">
        <h5 class="text-center">Preferências</h5>
        <TabsDesktop v-if="!$q.screen.lt.sm"/>
        <TabsMobile v-else/>
    </div>
</div>
</template>

<script>
import TabsDesktop from '../../components/preferencesTabs/TabsDesktop.vue';
import TabsMobile from '../../components/preferencesTabs/TabsMobile.vue';

export default {
  components: { TabsDesktop, TabsMobile },
  setup() {
    return { TabsDesktop, TabsMobile };
  },
};
</script>
