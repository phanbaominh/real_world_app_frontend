<template>
  <article>
    <div class="flex justify-between">
      <BaseAuthor :article="article" />
      <form method="POST" action="#">
        <button
          type="submit"
          class="text-green-500 border-green-400 border-2 p-2 rounded hover:text-white hover:bg-green-500"
        >
          <FontAwesomeIcon icon="heart" /> {{ article.favoritesCount }}
        </button>
      </form>
    </div>
    <h2 class="text-3xl font-bold">{{ article.title }}</h2>
    <p class="text-xl text-gray-600 opacity-75 mb-4">
      {{ article.description }}
    </p>
    <nuxt-link
      :to="`/article/${article.slug}`"
      class="text-gray-500 opacity-75"
    >
      Read more...
    </nuxt-link>
    <div v-if="hasDivider" class="border-b border-gray-400 mt-8"></div>
  </article>
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
    hasDivider: {
      default: true,
      type: Boolean,
    } as PropOptions<boolean>,
  },
});
</script>
