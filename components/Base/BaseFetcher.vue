<template>
  <div>
    <p v-if="fetchState.pending">
      <slot name="pending"></slot>
    </p>
    <slot v-else-if="fetchState.error" name="error">Error fetching!</slot>
    <slot v-else></slot>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { FetchState } from '~/constants/api';

export default Vue.extend({
  props: {
    fetchState: {
      required: true,
      type: Object,
    } as PropOptions<FetchState>,
  },
});
</script>
