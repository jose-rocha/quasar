<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-positive">
      <q-toolbar>
        <q-toolbar-title class="column text-center">
          Sitema de login
          <div>
          <router-link :to="{name: 'home'}" style="text-decoration: none;">
            <q-icon color="white" name="home"/>
          </router-link>
          </div>
        </q-toolbar-title>

        <!-- <q-icon name="mdi-account-circle" size="30px"/> -->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- <q-footer>
     <h5 class="text-center">Sitema de login</h5>
    </q-footer> -->
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>
