<template>
  <header>
    <div class="flex">
      <HomepageMainFeedTab :class="{ active: isGlobalTabActive }"
        >Global Feed</HomepageMainFeedTab
      ><HomepageMainFeedTab
        v-if="selectedTag"
        :class="{ active: !isGlobalTabActive }"
      >
        {{ selectedTag }}
      </HomepageMainFeedTab>
    </div>
    <div class="border-b border-gray-400 mt-4"></div>
  </header>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      isGlobalTabActive: true,
    };
  },
  computed: {
    selectedTag() {
      return this.$accessor.selectedTag;
    },
  },
  watch: {
    selectedTag(newSelectedTag) {
      if (newSelectedTag) this.isGlobalTabActive = false;
    },
    isGlobalTabActive(newValue) {
      newValue
        ? this.$emit('switch-feed', '')
        : this.$emit('switch-feed', `tag=${this.selectedTag}`);
    },
  },
  mounted() {
    this.$on('switch-tab', this.onSwitchTab);
  },
  methods: {
    onSwitchTab() {
      this.isGlobalTabActive = !this.isGlobalTabActive;
    },
  },
});
</script>
<style scoped>
.active {
  @apply text-green-500 border-b border-green-500;
}
</style>
