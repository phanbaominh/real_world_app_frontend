<template>
  <aside>
    <h2 class="block mb-2 text-xl">Popular Tags</h2>
    <BaseFetcher :fetch-state="$fetchState">
      <template #pending>Loading tags</template>
      <ul class="flex flex-wrap">
        <li
          v-for="tag in tags"
          :key="tag"
          class="bg-gray-tag text-white rounded-full text-lg px-3 pb-1 mr-2 mb-2 hover:bg-gray-700"
        >
          <TagItem :tag-name="tag" />
        </li>
      </ul>
    </BaseFetcher>
  </aside>
</template>
<script lang="ts">
import Vue from 'vue';
import TagItem from './HomepageMainTagListItem.vue';
export default Vue.extend({
  components: {
    TagItem,
  },
  async fetch() {
    this.tags = (await this.$axios.$get('http://localhost:3000/api/tags')).tags;
  },
  data() {
    return {
      tags: [] as string[],
    };
  },
});
</script>
