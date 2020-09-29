<template>
  <nuxt-link
    :to="`/@${username}`"
    class="text-green-500 sm:text-xl hover:underline"
  >
    {{ username }}
  </nuxt-link>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  props: {
    username: {
      required: true,
      type: String,
    } as PropOptions<string>,
  },
});
</script>
