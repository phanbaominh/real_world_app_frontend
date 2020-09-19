<template>
  <input
    class="border-gray-500 border-2 rounded-lg"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  // eslint-disable-next-line vue/require-prop-types
  props: ['value'],
});
</script>
