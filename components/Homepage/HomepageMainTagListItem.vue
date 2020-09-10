<template>
  <span
    ><button @click="filterFeedByTag"><slot></slot></button
  ></span>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  methods: {
    filterFeedByTag() {},
  },
});
</script>
