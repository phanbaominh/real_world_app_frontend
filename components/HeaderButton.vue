<template>
  <a class="inline-block ml-2 text-gray-500 hover:text-black cursor-pointer"
    ><slot></slot
  ></a>
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
