<template>
  <aside>
    <h2 class="block mb-2 text-xl">Popular Tags</h2>
    <p v-if="$fetchState.pending">Loading tags</p>
    <p v-else-if="$fetchState.error">Error loading tags</p>
    <ul v-else class="flex flex-wrap">
      <li
        v-for="tag in tags"
        :key="tag"
        class="bg-gray-tag text-white rounded-full text-lg px-3 pb-1 mr-2 mb-2 hover:bg-gray-700"
      >
        <TagItem>
          {{ tag }}
        </TagItem>
      </li>
    </ul>
  </aside>
</template>
<script lang="ts">
import Vue from 'vue';
import TagItem from './HomepageMainTagListItem.vue';

export type Tag = string;
export default Vue.extend({
  components: {
    TagItem,
  },
  async fetch() {
    this.tags = (await this.$axios.$get('http://localhost:3000/api/tags')).tags;
  },
  data() {
    return {
      tags: [] as Tag[],
    };
  },
});
</script>
