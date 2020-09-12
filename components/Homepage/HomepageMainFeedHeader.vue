<template>
  <header>
    <div class="flex border-b border-gray-400">
      <HomepageMainFeedTab :class="{ active: isGlobalTabActive }"
        >Global Feed</HomepageMainFeedTab
      ><HomepageMainFeedTab
        v-if="selectedTag"
        :class="{ active: !isGlobalTabActive }"
      >
        {{ selectedTag }}
      </HomepageMainFeedTab>
    </div>
  </header>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      isGlobalTabActive: true,
      currentTab: 'Global Feed',
    };
  },
  computed: {
    selectedTag() {
      return this.$accessor.selectedTag;
    },
  },
  watch: {
    selectedTag(newSelectedTag) {
      if (newSelectedTag) {
        this.isGlobalTabActive = false;
        this.currentTab = newSelectedTag;
        this.switchFeed();
      }
    },
  },
  created() {
    this.$on('switch-tab', this.onSwitchTab);
  },
  methods: {
    onSwitchTab(newTab: string) {
      if (newTab !== this.currentTab) {
        this.isGlobalTabActive = !this.isGlobalTabActive;
        this.currentTab = newTab;
      }
      this.switchFeed();
    },
    switchFeed() {
      this.isGlobalTabActive
        ? this.$emit('switch-feed', '')
        : this.$emit('switch-feed', `tag=${this.selectedTag}`);
    },
  },
});
</script>
<style scoped>
.active {
  @apply text-green-500 border-b-2 border-green-500;
}
</style>
