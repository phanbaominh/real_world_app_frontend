<template>
  <span
    ><button @click="filterFeedByTag">{{ tagName }}</button></span
  >
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
  props: {
    tagName: {
      required: true,
      type: String,
    } as PropOptions<string>,
  },
  methods: {
    filterFeedByTag() {
      this.$accessor.setSelectedTag(this.tagName);
    },
  },
});
</script>
