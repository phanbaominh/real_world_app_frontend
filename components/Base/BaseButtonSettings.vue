<template>
  <button @click="onSettings"><slot></slot></button>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  methods: {
    onSettings() {},
  },
});
</script>
