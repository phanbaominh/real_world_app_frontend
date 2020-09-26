<template>
  <button
    :class="`bg-${color} text-white border-2 border-${color} p-2 rounded-md hover:bg-${hoverColor}`"
  >
    <slot> </slot>
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
    hoverColor: {
      default: 'green-600',
      type: String,
    },
  },
});
</script>
