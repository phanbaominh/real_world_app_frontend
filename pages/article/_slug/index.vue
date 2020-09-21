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
  async asyncData({ $axios, route, $config, store }) {
    const response = await $axios.$get(
      `${$config.apiURL}/api/articles/${route.params.slug}`
    );
    store.commit('setArticle', response.article);
  },
  computed: {
    article() {
      return this.$accessor.currentArticleD;
    },
  },
});
</script>
