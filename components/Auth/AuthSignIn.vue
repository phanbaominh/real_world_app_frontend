<template>
  <form
    method="POST"
    :action="`${$config.apiURL}/api/users/login`"
    @submit="onSignIn"
  >
    <AuthBaseFormInput v-model="user.email" placeholder="Email" name="email" />
    <AuthBaseFormInput
      v-model="user.password"
      placeholder="Password"
      name="password"
    />
    <button type="submit">Sign in</button>
  </form>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      user: {} as { email?: string; password?: string },
    };
  },
  methods: {
    async onSignIn(e: Event) {
      e.preventDefault();
      try {
        await this.$auth.loginWith('local', { data: { user: this.user } });
        this.$router.push('/');
      } catch (err) {
        alert('Failed to login');
      }
    },
  },
});
</script>
