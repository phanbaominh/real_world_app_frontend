<template>
  <BaseButton :class="{ active: isFavorited }" @click="onFavorite"
    ><FontAwesomeIcon icon="heart" />
    {{ !isFavorited ? 'Favorite article' : 'Unfavorite article' }}
    ({{ favCount }})
  </BaseButton>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
  props: {
    favCount: {
      required: true,
      type: Number,
    } as PropOptions<number>,
    isFavorited: {
      required: true,
      type: Boolean,
    } as PropOptions<boolean>,
    articleSlug: {
      required: true,
      type: String,
    } as PropOptions<string>,
  },
  methods: {
    onFavorite() {
      if (!this.isFavorited) {
        this.$accessor.favoriteArticle(this.articleSlug);
      } else {
        this.$accessor.unfavoriteArticle(this.articleSlug);
      }
    },
  },
});
</script>
<style scoped>
.active {
  @apply text-white bg-conduit-green;
}

.active:hover {
  @apply bg-green-400;
}
</style>
