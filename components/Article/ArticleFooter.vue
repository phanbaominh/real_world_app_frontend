<template>
  <footer class="flex">
    <BaseAuthor :article="article" />
    <ArticleTwoButtons :article="article" />
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
