<template>
  <time class="block text-gray-600 opacity-75">
    {{ $formatDate(createdAt) }}
  </time>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
  props: {
    createdAt: {
      required: true,
      type: [String, Number],
    } as PropOptions<string | number>,
  },
});
</script>
