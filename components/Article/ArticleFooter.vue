<template>
  <footer class="flex">
    <BaseAuthor :article="article" />
    <ArticleTwoButtons :author="article.author.username" />
  </footer>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  computed: {
    article() {
      return this.$accessor.currentArticleD;
    },
  },
});
</script>
