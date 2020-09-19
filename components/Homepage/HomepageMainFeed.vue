<template>
  <section>
    <HomepageMainFeedHeader @switch-feed="onSwitchFeed" />
    <BaseFetcher :fetch-state="$fetchState">
      <template #pending>Fetching articles...</template>
      <section class="mt-4">
        <BasePagination v-slot="slotProps" :items="articles">
          <div class="mb-12">
            <HomepageMainFeedArticles :articles="slotProps.items" />
          </div>
        </BasePagination>
      </section>
    </BaseFetcher>
  </section>
</template>
<script lang="ts">
import Vue from 'vue';
import { Article } from '~/constants/api';

export default Vue.extend({
  async fetch() {
    this.articles = (
      await this.$axios.$get(`${this.$config.apiURL}/${this.articlesQuery}`)
    ).articles;
  },
  data() {
    return {
      articles: [] as Article[],
      articlesQuery: '',
    };
  },
  created() {
    this.articlesQuery = this.$auth.user ? 'api/articles/feed' : 'api/articles';
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
