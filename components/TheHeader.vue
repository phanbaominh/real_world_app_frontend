<template>
  <header class="flex justify-between py-2">
    <div class="flex-grow text-center">
      <h1 class="text-conduit-green text-xl xl:text-3xl">conduit</h1>
    </div>
    <nav class="flex-grow flex justify-center self-center">
      <HeaderButton link="/">Home</HeaderButton>
      <template v-if="!$auth.user">
        <HeaderButton link="/login">Sign in</HeaderButton>
        <HeaderButton link="/signup">Sign up</HeaderButton>
      </template>
      <template v-else>
        <HeaderButton link="/editor">
          <FontAwesomeIcon icon="edit" /> New Article
        </HeaderButton>
        <HeaderButton link="/settings">
          <BaseButtonSettings class="focus:outline-none" />
        </HeaderButton>
        <HeaderButton :link="`/@${$auth.user.username}`">{{
          $auth.user.username
        }}</HeaderButton>
      </template>
    </nav>
  </header>
</template>
<script lang="ts">
import Vue from 'vue';
import HeaderButton from './TheHeaderButton.vue';
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
