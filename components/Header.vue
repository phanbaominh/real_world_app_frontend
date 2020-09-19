<template>
  <header class="flex justify-between">
    <div class="flex-grow text-center">
      <h1 class="text-green-400 text-3xl">conduit</h1>
    </div>
    <nav class="text-xl flex-grow flex justify-center">
      <HeaderButton link="/">Home</HeaderButton>
      <HeaderButton v-if="!$auth.user" link="/login">Sign in</HeaderButton>
      <template v-else>
        <button @click="logOut">Sign out</button>
        <HeaderButton link="#">{{ $auth.user.username }}</HeaderButton>
      </template>
    </nav>
  </header>
</template>
<script lang="ts">
import Vue from 'vue';
import HeaderButton from './HeaderButton.vue';
export default Vue.extend({
  components: {
    HeaderButton,
  },
  methods: {
    async logOut(e: Event) {
      e.preventDefault();
      await this.$auth.logout();
    },
  },
});
</script>
