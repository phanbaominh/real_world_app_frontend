<template>
  <section class="flex items-center flex-col">
    <h1 class="text-2xl lg:text-5xl"><slot name="heading"></slot></h1>
    <div v-if="error">
      <ul class="text-lg justify-end lg:text-2xl text-red-700">
        <li v-for="(value, key) in error" :key="key">
          {{ key }} {{ value.join('and') }}
        </li>
      </ul>
    </div>
    <form
      method="POST"
      class="auth-form text-base px-4 lg:p-0 lg:text-2xl lg:mt-2 flex-col flex w-full sm:w-1/2 xl:w-1/3"
      @submit="onSubmit"
    >
      <slot></slot>
    </form>
  </section>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  // eslint-disable-next-line vue/require-prop-types
  props: ['initialError'],
  data() {
    return { error: this.initialError };
  },
  watch: {
    initialError(newError) {
      this.error = newError.response
        ? newError.response.data.errors
        : this.$nuxt.error({ statusCode: 500, message: newError.message });
    },
  },
  methods: {
    onSubmit(e: Event) {
      e.preventDefault();
      this.$emit('submit');
    },
  },
});
</script>
<style scoped>
.auth-form > * {
  @apply mt-4;
}
ul {
  list-style-type: circle;
}
</style>
