<template>
  <img
    :src="image"
    alt="User profile picture"
    class="rounded-full h-12 w-12 mr-2 self-center"
  />
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  props: {
    image: {
      required: true,
      type: String,
    } as PropOptions<string>,
  },
});
</script>
