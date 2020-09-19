<template>
  <section class="flex items-center flex-col">
    <h1 class="text-5xl">Sign in</h1>
    <form
      method="POST"
      :action="`${$config.apiURL}/api/users/login`"
      class="signin-form text-2xl mt-2 flex-col flex w-1/4"
      @submit="onSignIn"
    >
      <AuthBaseFormInput
        :id="'email-input'"
        v-model="user.email"
        placeholder="Email"
        name="email"
      />
      <AuthBaseFormInput
        :id="'password-input'"
        v-model="user.password"
        placeholder="Password"
        name="password"
      />
      <BaseButton type="submit" :o-class="'px-4 self-end'">
        Sign in
      </BaseButton>
    </form>
  </section>
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
<style scoped>
.signin-form > * {
  @apply mt-4;
}
</style>
