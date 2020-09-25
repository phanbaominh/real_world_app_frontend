<template>
  <button @click="onSettings"><FontAwesomeIcon icon="cog" /> Settings</button>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  methods: {
    onSettings() {
      this.$router.push('/settings');
    },
  },
});
</script>
