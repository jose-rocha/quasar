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
    <q-page-sticky
      :style="seamless ? 'display: none;' : ''"
      style="z-index:1"
      position="bottom-right"
      :offset="[18, 18]"
    >
      <q-btn
        @click="seamless = !seamless"
        fab color="green"
        icon="mdi-forum-outline"
      >
        <span class="q-ml-sm">{{$q.screen.gt.sm ? ' Fale conosco, nós estamos online' : ''}}</span>
      </q-btn>
    </q-page-sticky>
    <q-page-sticky
    v-show="seamless"
    position="bottom-right"
    style="z-index:1"
    :offset="[1, 80]"
    class="shadow-10"
  >
    <div
        :class="$q.dark.isActive ? 'bg-black' : 'bg-white'"
        class="bg-white q-pa-sm rounded-borders"
        style="width: 380px; height: 400px;"
    >
      <q-icon
        class="cursor-pointer no-margin"
        name="mdi-close-circle"
        color="green"
        size="30px"
        @click="seamless = !seamless"
      />
      <q-form >
        <q-input
          v-model="nome"
          class="q-ma-sm"
          label="Nome"
          outlined dense
        />
        <q-input
          v-model="telefone"
          class="q-ma-sm"
          label="telefone"
          mask="(##) #####-####"
          outlined dense
        />
        <q-input
          v-model="email"
          class="q-ma-sm"
          label="email"
          type="email"
          outlined dense
        />
        <q-input
          v-model="mensagem"
          class="q-ma-sm"
          label="Sua
          mensagem"
          type="textarea"
          outlined/>
        <div class="full-width q-px-sm">
          <q-btn
            class="full-width"
            label="Eviar dados"
            type="submit"
            color="green"/>
        </div>
      </q-form>
    </div>
  </q-page-sticky>
</div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import TabsDesktop from '../../components/preferencesTabs/TabsDesktop.vue';
import TabsMobile from '../../components/preferencesTabs/TabsMobile.vue';

export default defineComponent({
  components: { TabsDesktop, TabsMobile },
  setup() {
    return {
      TabsDesktop,
      TabsMobile,
      seamless: ref(false),
      nome: ref(''),
      telefone: ref(''),
      email: ref(''),
      mensagem: ref(''),
    };
  },
});
</script>
