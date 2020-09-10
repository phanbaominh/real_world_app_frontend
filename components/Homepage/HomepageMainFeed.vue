<template>
  <section>
    <HompageMainFeedHeader @switch-feed="onSwitchFeed" />
    <p v-if="$fetchState.pending">Fetching articles...</p>
    <p v-else-if="$fetchState.error">Error fetching!</p>
    <section v-else class="mt-4">
      <HomepageMainFeedArticle
        v-for="article in articles"
        :key="article.slug"
        :article="article"
        class="mt-4"
      />
    </section>
  </section>
</template>
<script lang="ts">
import Vue from 'vue';
import { Article } from '~/constants/api';

export default Vue.extend({
  async fetch() {
    this.articles = (
      await this.$axios.$get(
        `http://localhost:3000/api/articles?${this.tagQuery}`
      )
    ).articles;
  },
  data() {
    return {
      articles: [] as Article[],
      tagQuery: '',
    };
  },
  methods: {
    onSwitchFeed(tagQuery: string) {
      this.tagQuery = tagQuery;
      this.$fetch();
    },
  },
});
</script>
