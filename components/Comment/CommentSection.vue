<template>
  <div>
    <CommentBlock v-if="this.$auth.user" @post-comment="onPostComment" />
    <div>
      <CommentBlock
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
        @delete-comment="onDeleteComment"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { ArticleComment } from '~/constants/api';
export default Vue.extend({
  props: {
    comments: {
      required: true,
      type: Array,
    } as PropOptions<ArticleComment[]>,
    articleSlug: {
      required: true,
      type: String,
    } as PropOptions<string>,
  },
  methods: {
    async onPostComment(commentBody: string) {
      this.comments.unshift(
        (
          await this.$axios.$post(this.$apiUrl.comments(this.articleSlug), {
            comment: { body: commentBody },
          })
        ).comment
      );
    },
    async onDeleteComment(commentId: number) {
      await this.$axios.$delete(
        this.$apiUrl.deleteComment(this.articleSlug, commentId)
      );
      this.comments.splice(
        this.comments.findIndex((comment) => comment.id === commentId),
        1
      );
    },
  },
});
</script>
