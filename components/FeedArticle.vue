<template>
  <article>
    <div class="flex justify-between">
      <div class="flex">
        <img
          :src="article.author.image"
          alt="User profile picture"
          class="rounded-full h-12 w-12"
        />
        <div>
          <a href="#"> {{ article.author.username }}</a>
          <time class="block">{{ formattedDate }}</time>
        </div>
      </div>
      <form method="POST" action="#">
        <button type="submit">favorite {{ article.favoritesCount }}</button>
      </form>
    </div>
    <h2>{{ article.title }}</h2>
    <p>{{ article.description }}</p>
    <a href="#">Read more...</a>
  </article>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
import moment from 'moment';
import { Article } from './Feed.vue';
export default Vue.extend({
  props: {
    article: {
      required: true,
      type: Object,
    } as PropOptions<Article>,
  },

  computed: {
    formattedDate(): string {
      return moment(this.article.createdAt).format('MMMM D, Y');
    },
  },
});
</script>
