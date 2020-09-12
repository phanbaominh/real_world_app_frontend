<template>
  <div class="text-xl px-4 cursor-pointer" @click="onSelectedTab">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  methods: {
    onSelectedTab() {
      this.$parent.$emit('switch-tab', (this.$el.textContent || '').trim());
    },
  },
});
</script>
