<template>
  <div class="flex border-b border-gray-400">
    <HomepageMainFeedTab :tab-number="0" :class="{ active: currentTab === 0 }">
      My Articles
    </HomepageMainFeedTab>
    <HomepageMainFeedTab :tab-number="1" :class="{ active: currentTab === 1 }">
      Favorited Articles
    </HomepageMainFeedTab>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    username: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      currentTab: 0,
    };
  },
  watch: {
    currentTab() {
      this.switchFeed();
    },
  },
  mounted() {
    this.$on('switch-tab', this.onSwitchTab);
  },
  methods: {
    onSwitchTab(newTab: number) {
      if (newTab !== this.currentTab) {
        this.currentTab = newTab;
      } else this.switchFeed();
    },
    switchFeed() {
      if (this.currentTab === 0) {
        this.$parent.$emit(
          'switch-feed',
          this.$apiUrl.queryArticles({ author: this.username })
        );
      } else {
        this.$parent.$emit(
          'switch-feed',
          this.$apiUrl.queryArticles({ favorited: this.username })
        );
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
