<template>
  <BaseForm :initial-error="error" @submit="onSubmit">
    <template #heading>Article Form</template>
    <BaseFormInput
      v-model="article.title"
      type="text"
      label="Article Title"
      name="title"
    />
    <BaseFormInput
      v-model="article.description"
      type="text"
      label="What's this article about?"
      name="description"
    />
    <textarea
      v-model="article.body"
      class="border-gray-400 p-2 border rounded-lg"
      aria-label="Write your article"
      placeholder="Write your article"
      name="body"
    />
    <BaseFormInput
      v-model="tagList"
      type="text"
      label="Enter tags"
      name="tagList"
    />

    <BaseButtonSolid type="submit" class="lg:px-4 self-end">
      Publish Article
    </BaseButtonSolid>
  </BaseForm>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Article } from '~/constants/api';
export default Vue.extend({
  props: {
    initialArticle: {
      default: null,
      type: Object,
    } as PropOptions<Article | null>,
  },
  data() {
    return {
      article: (this.initialArticle || {}) as Article,
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
        const article = (!this.initialArticle
          ? await this.$axios.$post(this.$apiUrl.articles, {
              article: this.article,
            })
          : await this.$axios.$put(this.$apiUrl.getArticle(this.article.slug), {
              article: this.article,
            })
        ).article;
        await this.$accessor.setArticle(article.slug);
        this.$router.push(`/article/${article.slug}`);
        this.$toast.success(
          `Successfully ${
            this.initialArticle ? 'edit' : 'create a new'
          }  article`
        );
      } catch (error) {
        this.error = error;
      }
    },
  },
});
</script>
