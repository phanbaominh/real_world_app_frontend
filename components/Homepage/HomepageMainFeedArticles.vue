<template>
  <div>
    <HomepageMainFeedArticle
      v-for="(article, index) in articles"
      :key="article.slug"
      :article="article"
      :has-divider="index === articles.length - 1 ? false : true"
      class="mt-4"
    />
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Article } from '~/constants/api';
export default Vue.extend({
  props: {
    articles: {
      required: true,
      type: Array,
    } as PropOptions<Article[]>,
  },
});
</script>
