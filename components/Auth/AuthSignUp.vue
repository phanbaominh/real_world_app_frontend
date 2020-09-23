<template>
  <AuthBaseForm :error="error" @submit="onSignUp">
    <template #heading>Sign up</template>
    <AuthBaseFormInput
      :id="'username-input'"
      v-model="user.username"
      :label="'Username'"
      name="username"
      type="text"
    />
    <AuthBaseFormInput
      :id="'email-input'"
      v-model="user.email"
      :label="'Email'"
      name="email"
      type="text"
    />
    <AuthBaseFormInput
      :id="'password-input'"
      v-model="user.password"
      :label="'Password'"
      name="password"
      type="password"
    />
    <BaseSolidButton type="submit" class="px-4 self-end">
      Sign up
    </BaseSolidButton>
  </AuthBaseForm>
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
        this.error = err.response
          ? err.response.data.errors
          : this.$nuxt.error({ statusCode: 500, message: err.message });
      }
    },
  },
});
</script>
