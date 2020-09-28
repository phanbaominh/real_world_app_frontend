<template>
  <section>
    <slot></slot>
    <BaseArticleList
      :fetch-state="$fetchState"
      :articles="articles"
      :articles-count="articlesCount"
      :current-page="currentPage"
      @new-page="onNewPage"
    />
  </section>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Article } from '~/constants/api';

export default Vue.extend({
  props: {
    initialQuery: {
      required: true,
      type: String,
    } as PropOptions<string>,
  },
  async fetch() {
    const response = await this.$axios.$get(this.articlesQuery);
    this.articles = response.articles;
    this.articlesCount = response.articlesCount;
  },
  data() {
    return {
      articles: [] as Article[],
      articlesCount: 0,
      articlesQuery: this.initialQuery,
      currentPage: 0,
    };
  },
  created() {
    this.$on('switch-feed', this.onSwitchFeed);
  },
  methods: {
    onSwitchFeed(articlesQuery: string) {
      if (
        this.articlesQuery !== articlesQuery ||
        this.$fetchState.timestamp <= Date.now() - 30000
      ) {
        this.articlesQuery = articlesQuery;
        this.$fetch();
      }
    },
    async onNewPage(offset: number) {
      if (this.articlesQuery.includes('?')) {
        this.articlesQuery = `${this.articlesQuery}&offset=${offset}`;
      } else {
        this.articlesQuery = `${this.articlesQuery}?offset=${offset}`;
      }
      await this.$fetch();
      this.currentPage = offset / 10;
    },
  },
});
</script>
