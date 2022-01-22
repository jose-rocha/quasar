<template>
<div class="flex">
    <div class="flex full-width justify-end">
        <div>
            <q-btn class="text-primary" flat round dense icon="mdi-account-circle" />
            <q-menu>
                <q-list>
                    <router-link
                     class="text-primary"
                     to="/preferencias"
                     style="text-decoration: none;"
                    >
                      <q-item clickable v-close-popup>
                        <q-item-section>
                            Ir para pefrerências
                        </q-item-section>
                      </q-item>
                    </router-link>
                </q-list>
            </q-menu>
        </div>
    </div>
        <h5 class="text-center full-width">Editar perfil</h5>
            <div class="q-pa-md">
                <q-infinite-scroll @load="onLoad" reverse>
                    <template v-slot:loading>
                        <div class="row justify-center q-my-md">
                        <q-spinner color="primary" name="dots" size="40px" />
                        </div>
                    </template>

                    <div v-for="(item, index) in items" :key="index" class="caption q-py-sm">
                        <q-badge class="shadow-1">
                        {{ items.length - index }}
                        </q-badge>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum repellendus sit voluptate voluptas eveniet porro.
                        Rerum blanditiis perferendis totam, ea at omnis vel
                        numquam exercitationem aut, natus minima, porro labore.
                    </div>
                </q-infinite-scroll>
            </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const items = ref([{}, {}, {}, {}, {}, {}, {}]);

    return {
      items,
      onLoad(index, done) {
        setTimeout(() => {
          items.value.splice(0, 0, {}, {}, {}, {}, {}, {}, {});
          done();
        }, 2000);
      },
    };
  },
};
</script>
