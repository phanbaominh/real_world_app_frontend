<template>
  <div>
    <label :for="id" hidden></label>
    <input
      :id="id"
      v-bind="$attrs"
      class="border-gray-400 p-2 border rounded-lg w-full"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ['value', 'id'],
});
</script>
