<template>
  <section>
    <slot v-if="displayedItems.length > 0" :items="displayedItems"></slot>
    <slot v-else name="empty"></slot>
    <div v-if="pageCount > 1" class="page-button-wrapper">
      <button
        v-for="i in pageCount"
        :key="i"
        class="text-green-500 border-green-400 border-2 px-4 py-2 mr-1 rounded hover:text-white hover:bg-green-500"
        @click="changePage($event, i)"
      >
        {{ i }}
      </button>
    </div>
  </section>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
  props: {
    items: {
      required: true,
      type: Array,
    } as PropOptions<any[]>,
    itemPerPage: {
      default: 10,
      type: Number,
    } as PropOptions<number>,
  },
  data() {
    return {
      pageCount: 0,
      displayedItems: [] as any[],
      currentPageButton: null as HTMLElement | null,
    };
  },
  mounted() {
    this.pageCount = Math.ceil(this.items.length / this.itemPerPage);
    this.displayedItems = this.items.slice(0, this.itemPerPage);
    this.$nextTick(() => {
      this.currentPageButton = this.$el.querySelector(
        '.page-button-wrapper button'
      );
      this.currentPageButton?.classList.add('active');
    });
  },
  methods: {
    changePage(event: Event, pageNumber: number) {
      const target = event.target as HTMLElement;
      target.classList.add('active');
      if (this.currentPageButton && this.currentPageButton !== target)
        this.currentPageButton.classList.remove('active');
      this.currentPageButton = target;
      this.displayedItems = this.items.slice(
        (pageNumber - 1) * this.itemPerPage,
        pageNumber * this.itemPerPage
      );
    },
  },
});
</script>
<style scoped>
.active {
  @apply text-white bg-green-500;
}
.active:hover {
  @apply bg-green-400;
}
</style>
