<template>
  <header>
    <div class="flex border-b border-gray-400">
      <HomepageMainFeedTab
        v-if="$auth.user"
        :class="{ active: currentTab === 2 }"
        :tab-number="2"
        >Your Feed</HomepageMainFeedTab
      >
      <HomepageMainFeedTab :class="{ active: currentTab === 0 }" :tab-number="0"
        >Global Feed</HomepageMainFeedTab
      ><HomepageMainFeedTab
        v-if="selectedTag"
        :class="{ active: currentTab === 1 }"
        :tab-number="1"
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
      currentTab: 0,
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
        this.currentTab !== 1 ? (this.currentTab = 1) : this.switchFeed();
      }
    },
    currentTab() {
      this.switchFeed();
    },
  },
  mounted() {
    this.$on('switch-tab', this.onSwitchTab);
    if (this.$auth.user) this.currentTab = 2;
  },
  methods: {
    onSwitchTab(newTab: number) {
      if (newTab !== this.currentTab) {
        this.currentTab = newTab;
      } else this.switchFeed();
    },
    switchFeed() {
      switch (this.currentTab) {
        case 2:
          this.$parent.$emit('switch-feed', this.$apiUrl.getFeed);
          break;
        case 0:
          this.$parent.$emit('switch-feed', this.$apiUrl.queryArticles());
          break;
        default:
          this.$parent.$emit(
            'switch-feed',
            this.$apiUrl.queryArticles({ tag: this.selectedTag! })
          );
          break;
      }
    },
  },
});
</script>
<style scoped>
.active {
  @apply text-green-500 border-b-2 border-green-500;
}
</style>
