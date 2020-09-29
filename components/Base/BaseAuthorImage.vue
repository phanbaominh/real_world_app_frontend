<template>
  <img
    :src="
      image ||
      'https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg'
    "
    alt="User profile picture"
    class="rounded-full w-10 h-10 sm:h-12 sm:w-12 mr-2 self-center"
  />
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  props: {
    image: {
      default: '',
      type: String,
    } as PropOptions<string>,
  },
});
</script>
