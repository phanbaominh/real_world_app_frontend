<template>
  <AuthBaseForm :initial-error="error" @submit="onSubmit">
    <AuthBaseFormInput
      v-model="article.title"
      type="text"
      label="Article Title"
      name="title"
    />
    <AuthBaseFormInput
      v-model="article.description"
      type="text"
      label="What's this article about?"
      name="description"
    />
    <textarea
      v-model="article.body"
      class="border-gray-400 p-2 border rounded-lg"
      aria-label="Write your article (in markdown)"
      placeholder="Write your article (in markdown)"
      name="body"
    />
    <AuthBaseFormInput
      v-model="tagList"
      type="text"
      label="Enter tags"
      name="tagList"
    />

    <BaseButtonSolid type="submit" class="lg:px-4 self-end">
      Publish Article
    </BaseButtonSolid>
  </AuthBaseForm>
</template>
<script lang="ts">
import Vue from 'vue';
import { Article } from '~/constants/api';
export default Vue.extend({
  data() {
    return {
      article: {} as Article,
      tagList: '',
      error: null as any,
    };
  },
  watch: {
    tagList(val: string) {
      this.article.tagList = val.split(' ');
    },
  },
  methods: {
    async onSubmit() {
      try {
        const article = (
          await this.$axios.$post(this.$apiUrl.articles, {
            article: this.article,
          })
        ).article;
        await this.$accessor.setArticle(article.slug);
        this.$router.push(`/article/${article.slug}`);
        this.$toast.success('Successfully create a new article');
      } catch (error) {
        this.error = error;
      }
    },
  },
});
</script>
