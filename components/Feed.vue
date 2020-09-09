<template>
  <section class="max-w-screen-xl mx-auto">
    <header><FeedTab>Global Feed</FeedTab></header>
    <p v-if="$fetchState.pending">Fetching articles...</p>
    <p v-else-if="$fetchState.error">Error fetching!</p>
    <section v-else>
      <FeedArticle
        v-for="article in articles"
        :key="article.slug"
        :article="article"
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
