<template>
  <BaseButton :class="{ active: currentIsFavorited }" @click="onFavorite"
    ><FontAwesomeIcon icon="heart" />
    <span v-if="hasText">{{
      !currentIsFavorited ? 'Favorite article' : 'Unfavorite article'
    }}</span>
    ({{ currentFavCount }})
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
    hasText: {
      type: Boolean,
      default: true,
    } as PropOptions<boolean>,
  },
  data() {
    return {
      currentIsFavorited: this.isFavorited,
      currentFavCount: this.favCount,
      hasAlreadyUpdated: false,
    };
  },
  watch: {
    isFavorited(val) {
      this.currentIsFavorited = val;
      this.hasAlreadyUpdated = true;
    },
    favCount(val) {
      this.currentFavCount = val;
    },
  },
  methods: {
    async onFavorite() {
      this.hasAlreadyUpdated = false;
      if (!this.currentIsFavorited) {
        await this.$accessor.favoriteArticle(this.articleSlug);
        if (this.hasAlreadyUpdated) return;
        this.currentIsFavorited = true;
        this.currentFavCount += 1;
      } else {
        await this.$accessor.unfavoriteArticle(this.articleSlug);
        if (this.hasAlreadyUpdated) return;
        this.currentIsFavorited = false;
        this.currentFavCount -= 1;
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
