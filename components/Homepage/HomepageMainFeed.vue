<template>
  <section>
    <HomepageMainFeedHeader @switch-feed="onSwitchFeed" />
    <BaseFetcher :fetch-state="$fetchState">
      <template #pending>Fetching articles...</template>
      <section class="mt-4">
        <BasePagination v-slot="slotProps" :items="articles">
          <div class="mb-12">
            <HomepageMainFeedArticle
              v-for="(article, index) in slotProps.items"
              :key="article.slug"
              :article="article"
              :has-divider="index === slotProps.items.length - 1 ? false : true"
              class="mt-4"
            />
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
      if (
        this.tagQuery !== tagQuery ||
        this.$fetchState.timestamp <= Date.now() - 30000
      ) {
        this.tagQuery = tagQuery;
        this.$fetch();
      }
    },
  },
});
</script>
