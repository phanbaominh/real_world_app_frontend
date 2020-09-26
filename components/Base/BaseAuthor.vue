<template>
  <div class="flex">
    <nuxt-link :to="`/@${article.author.username}`">
      <BaseAuthorImage :image="article.author.image" />
    </nuxt-link>
    <div>
      <BaseAuthorName :username="article.author.username" />
      <BaseAuthorCreatedDate :created-at="article.createdAt" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Article } from '~/constants/api';
export default Vue.extend({
  props: {
    article: {
      required: true,
      type: Object,
    } as PropOptions<Article>,
  },
});
</script>
