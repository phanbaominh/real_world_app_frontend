<template>
  <AuthSignIn />
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  auth: false,
  head: {
    title: 'Sign in',
  },
});
</script>
