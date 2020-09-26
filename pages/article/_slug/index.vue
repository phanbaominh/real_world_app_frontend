<template>
  <section class="">
    <ArticleHeader :article="article" />
    <div
      class="flex flex-col items-center w-full mt-2 mx-2 lg:w-3/5 lg:mt-8 lg:m-auto"
    >
      <p class="self-start text-base lg:text-2xl">
        {{ article.body }}
      </p>
      <div class="border border-gray-tag opacity-25 w-full mt-16 mb-4"></div>
      <ArticleFooter :article="article" />
      <BaseFetcher :fetch-state="$fetchState" class="w-3/5">
        <template #pending
          ><span class="text-xl">Fetching comments...<LoadingSpinner /></span
        ></template>
        <CommentSection :comments="comments" :article-slug="article.slug" />
      </BaseFetcher>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue';
import { Article, ArticleComment } from '~/constants/api';
export default Vue.extend({
  async fetch() {
    this.comments = (
      await this.$axios.$get(this.$apiUrl.comments(this.$route.params.slug))
    ).comments;
  },
  async asyncData({ store, route }) {
    await store.dispatch('setArticle', route.params.slug);
  },
  data() {
    return { comments: [] as ArticleComment[] };
  },
  computed: {
    article() {
      return this.$accessor.currentArticle as Article;
    },
  },
});
</script>
