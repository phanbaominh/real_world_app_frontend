<template>
  <BaseForm :initial-error="error" @submit="onSignIn">
    <template #heading>Sign in</template>
    <BaseFormInput
      v-model="user.email"
      :label="'Email'"
      name="email"
      type="text"
    />
    <BaseFormInput
      v-model="user.password"
      :label="'Password'"
      name="password"
      type="password"
    />
    <BaseButtonSolid type="submit" class="px-4 self-end">
      Sign in
    </BaseButtonSolid>
  </BaseForm>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      user: {} as { email?: string; password?: string },
      error: null as Object | null,
    };
  },
  methods: {
    async onSignIn() {
      try {
        await this.$auth.loginWith('local', { data: { user: this.user } });
        this.$router.push('/');
      } catch (err) {
        this.error = err;
      }
    },
  },
});
</script>
