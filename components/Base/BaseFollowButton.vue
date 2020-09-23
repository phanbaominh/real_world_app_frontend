<template>
  <BaseButton
    :class="{ active: isFollowed }"
    color="gray-600"
    @click="onFollow"
  >
    <FontAwesomeIcon icon="plus" /> Follow {{ author }}
  </BaseButton>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
  props: {
    author: {
      required: true,
      type: String,
    } as PropOptions<string>,
    isFollowed: {
      type: Boolean,
      required: true,
    } as PropOptions<boolean>,
  },
  methods: {
    onFollow() {
      console.log('follow');
    },
  },
});
</script>
