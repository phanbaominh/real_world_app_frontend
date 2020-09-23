<template>
  <footer class="flex flex-col lg:flex-row">
    <BaseAuthor class="mr-2" :article="article" />
    <ArticleTwoButtons
      class="mt-2 flex items-center lg:mt-0"
      :article="article"
    />
  </footer>
</template>
<script lang="ts">
import Vue from 'vue';
import { Article } from '~/constants/api';
export default Vue.extend({
  computed: {
    article() {
      return this.$accessor.currentArticle as Article;
    },
  },
});
</script>
