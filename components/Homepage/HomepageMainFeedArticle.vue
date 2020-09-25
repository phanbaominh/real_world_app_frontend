<template>
  <article>
    <div class="flex justify-between">
      <BaseAuthor :article="article" />
      <BaseButtonFavorite
        :fav-count="article.favoritesCount"
        :is-favorited="article.favorited"
        :article-slug="article.slug"
        :has-text="false"
      />
    </div>
    <nuxt-link :to="`/article/${article.slug}`">
      <h2 class="text-2xl lg:text-3xl font-bold">{{ article.title }}</h2>
    </nuxt-link>
    <p class="text-lg lg:text-xl text-gray-600 opacity-75 mb-4">
      {{ article.description }}
    </p>
    <div class="flex">
      <nuxt-link
        :to="`/article/${article.slug}`"
        class="text-gray-500 opacity-75 text-sm lg:text-base"
      >
        Read more...
      </nuxt-link>
      <div class="flex flex-grow justify-end">
        <div
          v-for="tag in article.tagList"
          :key="tag"
          class="rounded-full px-2 text-lg border-gray-500 opacity-75 border text-gray-500 cursor-pointer mr-2"
          @click="onSelectTag(tag)"
        >
          {{ tag }}
        </div>
      </div>
    </div>
    <BaseDivider v-if="hasDivider" class="mt-8" />
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
  methods: {
    onSelectTag(tag: string) {
      this.$accessor.SET_SELECTED_TAG(tag);
    },
  },
});
</script>
