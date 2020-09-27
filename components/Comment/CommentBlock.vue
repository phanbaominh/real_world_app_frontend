<template>
  <div class="flex flex-col mt-8">
    <textarea
      v-if="!comment"
      v-model="commentBody"
      placeholder="Write a comment..."
      class="text-section"
    />
    <div v-else class="text-section">{{ comment.body }}</div>
    <div class="flex bg-gray-200 py-2 px-4 border-gray-400 border rounded-b-lg">
      <div class="flex author-section">
        <nuxt-link :to="`/@${author.username}`">
          <BaseAuthorImage :image="author.image" />
        </nuxt-link>
        <div>
          <BaseAuthorName :username="author.username" />
          <BaseAuthorCreatedDate
            :created-at="comment ? comment.createdAt : Date.now()"
          />
        </div>
      </div>
      <div class="flex flex-grow justify-end items-center">
        <button v-if="comment" @click="emitDeleteComment">
          <FontAwesomeIcon icon="trash" />
        </button>
        <BaseButtonSolid v-else @click="$emit('post-comment', commentBody)">
          Post Comment
        </BaseButtonSolid>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { ArticleComment } from '~/constants/api';

export default Vue.extend({
  props: {
    comment: {
      default: null,
      type: Object,
    } as PropOptions<ArticleComment | null>,
  },
  data() {
    return {
      author: this.comment ? this.comment.author : this.$auth.user,
      commentBody: '',
    };
  },
  methods: {
    emitDeleteComment() {
      if (this.comment) this.$emit('delete-comment', this.comment.id);
    },
  },
});
</script>
<style scoped>
.author-section > * {
  @apply mr-2;
}

.text-section {
  min-height: 8rem;
  @apply border-gray-400 p-4 border border-b-0 rounded-t-lg text-lg;
}
</style>
