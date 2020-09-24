<template>
  <div>
    <BaseButtonFollow
      class="mr-2"
      :is-followed="false"
      :author="article.author.username"
    />
    <BaseButtonFavorite
      :fav-count="article.favoritesCount"
      :is-favorited="article.favorited"
      :article-slug="article.slug"
    />
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
