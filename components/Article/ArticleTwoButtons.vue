<template>
  <div>
    <div
      v-if="!$auth.loggedIn || $auth.user.username !== article.author.username"
    >
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
    <div v-else>
      <BaseButton
        class="mr-2 text-gray-600 border-gray-600 hover:bg-gray-600"
        @click="onEditArticle"
      >
        <FontAwesomeIcon icon="edit" /> Edit Article
      </BaseButton>
      <BaseButton
        class="text-red-500 border-red-500 hover:bg-red-500"
        @click="onDeleteArticle"
      >
        <FontAwesomeIcon icon="trash" /> Delete Article
      </BaseButton>
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
  methods: {
    onEditArticle() {
      this.$router.push(`/editor/${this.article.slug}`);
    },
    async onDeleteArticle() {
      if (!confirm('Are you sure?')) return;
      await this.$axios.$delete(this.$apiUrl.getArticle(this.article.slug));
      this.$router.push(`/@${this.$auth.user.username}`);
      this.$toast.success('Successfully delete article!');
    },
  },
});
</script>
