<template>
  <div>

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="flex no-margin column q-gutter-md q-px-lg justify-center items-center"
      style="width: 30em"
      :style="$q.screen.lt.sm ? 'width: 24em' : ''"
    >
        <div class="flex justify-center">
        <q-icon name="mdi-vuejs" color="positive" size="10em"/>
        </div>
      <q-input
        class="full-width"
        type="email"
        filled
        v-model="email"
        label="seu email *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor digite um email ou usuário']"
      />

      <q-input
        class="full-width"
        filled
        type="password"
        v-model="password"
        label="Digite sua senha*"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor digite sua senha',
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn
          class="full-width q-mb-lg"
          label="Entrar"
          type="submit"
          color="positive"
        />
        <q-btn label="limpar os campos" type="reset" color="positive" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export default {
  setup() {
    const $q = useQuasar();
    const Logo = ref('https://assets.satoleiloes.com.br/logo/light.png');
    const email = ref('');
    const password = ref('');
    const accept = ref(false);

    return {
      Logo,
      email,
      password,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first',
          });
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted',
          });
        }
      },

      onReset() {
        email.value = null;
        password.value = null;
        accept.value = false;
      },
    };
  },
};
</script>
