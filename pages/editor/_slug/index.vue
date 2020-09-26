<template>
  <TheEditor :initial-article="article" />
</template>
<script lang="ts">
import Vue from 'vue';
import { Article } from '~/constants/api';
export default Vue.extend({
  async asyncData({ route, $axios, $apiUrl }) {
    const article = (await $axios.$get($apiUrl.getArticle(route.params.slug)))
      .article;
    return { article };
  },
  data() {
    return { article: (null as any) as Article };
  },
});
</script>
