<template>
  <div>
    <ArticleButton color="gray-600" e-class="mr-2" @click="onFollow">
      Follow {{ author }}
    </ArticleButton>
    <ArticleButton @click="onFavorite">Favorite Article</ArticleButton>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
  props: {
    author: {
      required: true,
      type: String,
    } as PropOptions<string>,
  },
  methods: {
    onFollow() {
      console.log('follow');
    },
    onFavorite() {
      console.log('favorite');
    },
  },
});
</script>
