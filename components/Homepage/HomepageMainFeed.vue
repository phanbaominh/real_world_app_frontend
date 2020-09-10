<template>
  <section>
    <header>
      <div><HomepageMainFeedTab>Global Feed</HomepageMainFeedTab></div>
      <div class="border-b border-gray-400 mt-4"></div>
    </header>
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

export interface User {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}
export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: Date;
  updatedAt: Date;
  favorited: boolean;
  favoritesCount: number;
  author: User;
}

export default Vue.extend({
  async fetch() {
    this.articles = (
      await this.$axios.$get('http://localhost:3000/api/articles')
    ).articles;
  },
  data() {
    return {
      articles: [] as Article[],
    };
  },
});
</script>
