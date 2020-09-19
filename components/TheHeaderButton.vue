<template>
  <nuxt-link
    class="inline-block ml-2 text-gray-500 hover:text-gray-700 cursor-pointer"
    :to="link"
    :class="{ active: $route.path === link }"
  >
    <slot></slot>
  </nuxt-link>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
  props: {
    link: {
      required: true,
      type: String,
    } as PropOptions<string>,
  },
});
</script>
<style scoped>
.active {
  @apply text-gray-700;
}
.active:hover {
  @apply text-black;
}
</style>
