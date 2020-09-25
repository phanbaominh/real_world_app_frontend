<template>
  <div class="text-lg lg:text-xl px-4 cursor-pointer" @click="onSelectedTab">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
  props: {
    tabNumber: {
      required: true,
      type: Number,
    } as PropOptions<number>,
  },
  methods: {
    onSelectedTab() {
      this.$parent.$emit('switch-tab', this.tabNumber);
    },
  },
});
</script>
