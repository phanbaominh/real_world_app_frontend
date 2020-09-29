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
      <BaseButton color="gray-600" class="mr-2" @click="onEditArticle">
        <FontAwesomeIcon icon="edit" /> Edit Article
      </BaseButton>
      <BaseButton color="red-500" @click="onDeleteArticle">
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
