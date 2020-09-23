<template>
  <section>
    <ArticleHeader :article="article" />
    <p>
      {{ article.body }}
    </p>
    <div class="border border-gray-tag"></div>
    <ArticleFooter :article="article" />
  </section>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  async asyncData({ store, route }) {
    await store.dispatch('setArticle', route.params.slug);
  },
  computed: {
    article() {
      return this.$accessor.currentArticleD;
    },
  },
});
</script>
