<template>
  <BaseForm :initial-error="error" @submit="onSignUp">
    <template #heading>Sign up</template>
    <BaseFormInput
      v-model="user.username"
      :label="'Username'"
      name="username"
      type="text"
    />
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
      Sign up
    </BaseButtonSolid>
  </BaseForm>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      user: {} as { email?: string; password?: string; username?: string },
      error: null as Object | null,
    };
  },
  methods: {
    async onSignUp() {
      try {
        await this.$axios.$post(`${this.$config.apiURL}/api/users`, {
          user: this.user,
        });
        await this.$auth.loginWith('local', { data: { user: this.user } });
        this.$router.push('/');
      } catch (err) {
        this.error = err;
      }
    },
  },
});
</script>
