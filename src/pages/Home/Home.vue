<template>
  <div class="flex">
    <div class="flex full-width justify-end">
        <div>
            <q-btn class="text-positive" flat round dense icon="mdi-account-circle" />
            <q-menu>
                <q-list>
                    <router-link
                     v-for="(menuLink) in menuLinks"
                     :key="menuLink.label"
                     class="text-positive"
                     :to="{name: menuLink.routeLink}"
                     style="text-decoration: none;"
                    >
                      <q-item clickable v-close-popup>
                        <q-item-section>
                            {{menuLink.label}}
                        </q-item-section>
                      </q-item>
                    </router-link>
                </q-list>
            </q-menu>
        </div>
    </div>
    <div class="flex justify-center">
        <q-card
            class="q-ma-sm"
            style="max-width: 270px"
            v-for="n in 10" :key="n"
            >
            <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
            <q-card-section>
                <q-btn
                fab
                color="positive"
                icon="place"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%);"
                />

                <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                    Cafe Basilico
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                    <q-icon name="place" />
                    250 ft
                </div>
                </div>
            </q-card-section>
            <q-card-section class="q-pt-none">
                <div class="text-subtitle1">
                $・Italian, Cafe
                </div>
                <div class="text-caption text-grey">
                Small plates, salads & sandwiches in an intimate setting.
                </div>
            </q-card-section>
        </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const menuLinks = [
      { routeLink: 'login', label: 'Ir para Login' },
      { routeLink: 'preferencias', label: 'Ir para minhas Preferências' },
      { routeLink: 'perfil', label: 'Editar perfil' },
      { routeLink: 'rascunho', label: 'Rascunho' },
    ];
    return { menuLinks };
  },
});
</script>
