<template>
  <article>
    <div class="flex justify-between">
      <div class="flex">
        <img
          :src="article.author.image"
          alt="User profile picture"
          class="rounded-full h-12 w-12 mr-2 self-center"
        />
        <div>
          <a href="#" class="text-green-500 text-xl">
            {{ article.author.username }}</a
          >
          <time class="block text-gray-600 opacity-75">
            {{ formattedDate }}
          </time>
        </div>
      </div>
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
    <a href="#" class="text-gray-500 opacity-75">Read more...</a>
    <div v-if="hasDivider" class="border-b border-gray-400 mt-8"></div>
  </article>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
import moment from 'moment';
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

  computed: {
    formattedDate(): string {
      return moment(this.article.createdAt).format('MMMM D, Y');
    },
  },
});
</script>
