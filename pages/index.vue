<template>
  <div class=""><Header /> <Hero /> <Feed /></div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '~/components/Header.vue';
import Hero from '~/components/Hero.vue';
export default Vue.extend({
  components: {
    Header,
    Hero,
  },
});
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
