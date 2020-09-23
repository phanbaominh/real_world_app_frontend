<template>
  <header class="flex bg-gray-800 p-4">
    <div class="flex-grow flex justify-center">
      <div class="mr-2">
        <h1 class="text-4xl text-white">{{ article.title }}</h1>
        <BaseAuthor :article="article" />
      </div>
      <div class="flex items-end">
        <ArticleTwoButtons :article="article" />
      </div>
      <div class="text-red-700">{{ article.favoritesCount }}</div>
    </div>
    <div class="flex-grow"></div>
  </header>
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
