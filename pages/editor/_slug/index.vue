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
  created() {
    // If the user is not authenticated
    if (this.article.author.username !== this.$auth.user.username) {
      this.$nuxt.error({ statusCode: 401, message: 'Unauthorized' });
    }
  },
  head: {
    title: 'Edit Article',
  },
});
</script>
