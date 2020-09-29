<template>
  <button
    :class="`text-sm self-start p-1 lg:text-base text-${color} border-2 border-${color} sm:p-2 rounded-md hover:text-white hover:bg-${color}`"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    color: {
      default: 'conduit-green',
      type: String,
    },
  },
});
</script>
