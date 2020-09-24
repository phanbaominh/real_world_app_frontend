<template>
  <section>
    <slot></slot>
    <BaseArticleList :fetch-state="$fetchState" :articles="articles" />
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
    this.articles = (await this.$axios.$get(this.articlesQuery)).articles;
  },
  data() {
    return {
      articles: [] as Article[],
      articlesQuery: this.initialQuery,
    };
  },
  created() {
    this.$on('switch-feed', this.onSwitchFeed);
    // this.articlesQuery = this.$auth.user ? 'api/articles/feed' : 'api/articles';
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
  },
});
</script>
