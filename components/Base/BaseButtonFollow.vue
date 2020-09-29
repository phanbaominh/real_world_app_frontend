<template>
  <BaseButton
    :class="{ active: currentIsFollowed }"
    color="gray-600"
    @click="onFollow"
  >
    <FontAwesomeIcon icon="plus" />
    {{ currentIsFollowed ? 'Unfollow' : 'Follow' }} {{ author }}
  </BaseButton>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
export default Vue.extend({
  props: {
    author: {
      required: true,
      type: String,
    } as PropOptions<string>,
    isFollowed: {
      type: Boolean,
      required: true,
    } as PropOptions<boolean>,
  },
  data() {
    return {
      currentIsFollowed: this.isFollowed,
    };
  },
  watch: {
    isFollowed(val) {
      this.currentIsFollowed = val;
    },
  },
  methods: {
    async onFollow() {
      if (!this.$auth.loggedIn) {
        this.$router.push('/login');
        return;
      }
      if (!this.currentIsFollowed) {
        await this.$accessor.followUser(this.author);
        this.currentIsFollowed = true;
      } else {
        await this.$accessor.unfollowUser(this.author);
        this.currentIsFollowed = false;
      }
    },
  },
});
</script>
<style scoped>
.active {
  @apply text-white bg-gray-600;
}

.active:hover {
  @apply bg-gray-700;
}
</style>
