<template>
  <div class="text-xl px-4" @click="onSelectedTab">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  methods: {
    onSelectedTab() {
      this.$parent.$emit('switch-tab');
    },
  },
});
</script>
