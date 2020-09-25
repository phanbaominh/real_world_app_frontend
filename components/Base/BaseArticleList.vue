<template>
  <BaseFetcher :fetch-state="fetchState">
    <template #pending>
      <span class="text-xl">Fetching articles...<LoadingSpinner /></span>
    </template>
    <section class="mt-4">
      <BasePagination :items="articles">
        <template #default="slotProps">
          <div class="mb-12">
            <HomepageMainFeedArticles :articles="slotProps.items" />
          </div>
        </template>
        <template #empty>
          <span class="text-xl"> No articles are here yet! </span>
        </template>
      </BasePagination>
    </section>
  </BaseFetcher>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Article, FetchState } from '~/constants/api';
export default Vue.extend({
  props: {
    articles: {
      required: true,
      type: Array,
    } as PropOptions<Article[]>,
    fetchState: {
      required: true,
      type: Object,
    } as PropOptions<FetchState>,
  },
});
</script>
