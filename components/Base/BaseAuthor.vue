<template>
  <div class="flex">
    <nuxt-link :to="`/@${article.author.username}`">
      <img
        :src="article.author.image"
        alt="User profile picture"
        class="rounded-full h-12 w-12 mr-2 self-center"
      />
    </nuxt-link>
    <div>
      <nuxt-link
        :to="`/@${article.author.username}`"
        class="text-green-500 text-xl hover:underline"
      >
        {{ article.author.username }}
      </nuxt-link>
      <time class="block text-gray-600 opacity-75">
        {{ $formatDate(article.createdAt) }}
      </time>
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
