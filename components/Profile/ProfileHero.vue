<template>
  <header class="bg-gray-tag-list">
    <div
      class="flex flex-col items-center mx-auto w-4/6 p-4 pt-8 justify-between"
    >
      <img
        alt="User profile picture"
        class="rounded-full w-32 h-32"
        :src="profile.image"
      />
      <h1 class="text-3xl mt-4 font-bold">
        <strong>{{ profile.username }}</strong>
      </h1>
      <div class="self-center lg:self-end">
        <BaseButtonSettings
          v-if="isCurrentUser"
          class="text-sm self-start lg:text-base text-gray-600 border-2 border-gray-600 p-2 rounded-md hover:text-white hover:bg-gray-600"
        />
        <BaseButtonFollow
          v-else
          :author="profile.username"
          :is-followed="profile.following"
        ></BaseButtonFollow>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Profile } from '~/constants/api';
export default Vue.extend({
  props: {
    profile: {
      required: true,
      type: Object,
    } as PropOptions<Profile>,
  },
  data() {
    return {
      isCurrentUser: this.profile.username === this.$auth.user?.username,
    };
  },
});
</script>
