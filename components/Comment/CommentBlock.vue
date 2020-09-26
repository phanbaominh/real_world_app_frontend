<template>
  <div class="flex flex-col">
    <textarea
      v-if="!comment"
      v-model="commentBody"
      placeholder="Write a comment..."
      class="border-gray-400 p-2 border rounded-lg"
    />
    <div v-else>{{ comment.body }}</div>
    <div class="flex bg-gray-300 py-2 px-4">
      <div class="flex">
        <nuxt-link :to="`/@${author.username}`">
          <BaseAuthorImage :image="author.image" />
        </nuxt-link>
        <BaseAuthorName :username="author.username" />
        <BaseAuthorCreatedDate
          :created-at="comment ? comment.createdAt : Date.now()"
        />
      </div>
      <button v-if="comment" @click="emitDeleteComment">
        <FontAwesomeIcon icon="trash" />
      </button>
      <BaseButtonSolid v-else @click="$emit('post-comment', commentBody)">
        Post Comment
      </BaseButtonSolid>
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
