<template>
  <div>
    <input
      v-bind="$attrs"
      class="border-gray-400 p-2 border rounded-lg w-full"
      :placeholder="label"
      :value="value"
      :aria-label="label"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ['value', 'label'],
});
</script>
