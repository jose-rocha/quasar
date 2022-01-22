<template>
    <div class="flex items-center justify-center" style="height: 44.2em">
        <!-- <h5>Login</h5> -->
        <Form/>
    </div>
</template>

<script>
import Form from '../../components/formLogin/Form.vue';

export default {
  components: { Form },
  setup() {
    return { Form };
  },
};
</script>
