<template>
  <header class="flex justify-around sm:justify-between px-4 sm:px-2 py-2">
    <transition name="slide-fade">
      <TheHeaderNav
        v-if="isHamburgerActivated"
        class="hamburger-menu"
        @click.native="isHamburgerActivated = false"
      />
    </transition>
    <div class="flex-grow self-start sm:text-center">
      <h1 class="text-conduit-green text-xl md:text-2xl xl:text-3xl">
        conduit
      </h1>
    </div>
    <TheHeaderNav
      class="self-center hidden sm:flex sm:flex-grow sm:justify-center"
    />
    <div class="block sm:hidden">
      <FontAwesomeIcon icon="bars" @click="onHamburger" />
    </div>
  </header>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return { isHamburgerActivated: false };
  },
  methods: {
    async logOut(e: Event) {
      e.preventDefault();
      await this.$auth.logout();
    },
    onHamburger() {
      this.isHamburgerActivated = !this.isHamburgerActivated;
    },
  },
});
</script>
<style>
.hamburger-menu {
  position: absolute;
  top: 2.5rem;
  z-index: 1000;
  @apply bg-white w-full justify-between px-2 py-1 shadow-md flex;
}

.slide-fade-enter-active {
  transition: all 0.1s linear;
}
.slide-fade-leave-active {
  transition: all 0.1s linear;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-0.5rem);
  opacity: 0;
}
</style>
