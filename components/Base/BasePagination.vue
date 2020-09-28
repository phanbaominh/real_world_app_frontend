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
    allCount: {
      required: true,
      type: Number,
    } as PropOptions<number>,
    itemPerQuery: {
      default: 20,
      type: Number,
    } as PropOptions<number>,
    currentPage: {
      required: true,
      type: Number,
    } as PropOptions<number>,
  },
  data() {
    return {
      pageCount: 0,
      displayedItems: [] as any[],
      currentPageButton: null as Element | null,
    };
  },
  computed: {
    currentOffset() {
      return this.currentPage * this.itemPerPage;
    },
  },
  watch: {
    items(newItems) {
      this.displayedItems = newItems;
    },
    currentPage() {
      this.changeButtonHighlight(this.getNewPageButton());
    },
  },
  mounted() {
    this.pageCount = Math.ceil(this.allCount / this.itemPerPage);
    this.displayedItems = this.items.slice(0, this.itemPerPage);
    this.$nextTick(() => {
      this.currentPageButton = this.getNewPageButton();
      this.currentPageButton?.classList.add('active');
    });
  },
  methods: {
    changePage(event: Event, pageNumber: number) {
      const newOffset = (pageNumber - 1) * this.itemPerPage;
      if (
        newOffset >= this.currentOffset + this.itemPerQuery ||
        newOffset < this.currentOffset
      ) {
        this.$emit('new-page', newOffset);
      } else {
        const relativePageNumber =
          (newOffset - this.currentOffset) / this.itemPerPage;
        this.displayedItems = this.items.slice(
          relativePageNumber * this.itemPerPage,
          (relativePageNumber + 1) * this.itemPerPage
        );
      }
      this.changeButtonHighlight(event.target as Element);
    },
    changeButtonHighlight(newButton: Element) {
      newButton.classList.add('active');
      if (this.currentPageButton && this.currentPageButton !== newButton)
        this.currentPageButton.classList.remove('active');
      this.currentPageButton = newButton;
    },
    getNewPageButton(): Element {
      return this.$el.querySelectorAll('.page-button-wrapper button')[
        this.currentPage
      ];
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
