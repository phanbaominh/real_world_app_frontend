<template>
  <BaseForm :initial-error="error" @submit="onSubmit">
    <template #heading>Your Settings</template>
    <BaseFormInput
      v-model="user.image"
      label="Url of profile picture"
      name="image"
      type="text"
    />
    <BaseFormInput
      v-model="user.username"
      label="Username"
      name="username"
      type="text"
    />
    <textarea
      v-model="user.bio"
      placeholder="Short bio about you"
      aria-label="Short bio about you"
      class="border-gray-400 p-2 border rounded-lg"
      name="bio"
    />
    <BaseFormInput
      v-model="user.email"
      label="Email"
      name="email"
      type="text"
    />
    <BaseFormInput
      v-model="user.password"
      label="New password"
      name="password"
      type="password"
    />
    <BaseButtonSolid type="submit" class="lg:px-4 self-end">
      Update Profile
    </BaseButtonSolid>
    <BaseDivider />
    <BaseButton
      type="button"
      :class="{ active: false }"
      class="self-start px-2 lg:text-lg text-red-500 border-red-500 hover:bg-red-500"
      color="red-500"
      @click="onLogOut"
    >
      Logout
    </BaseButton>
  </BaseForm>
</template>
<script lang="ts">
import Vue from 'vue';
import { User } from '~/constants/api';
export default Vue.extend({
  data() {
    return {
      user: { ...this.$auth.user } as User,
      error: null as Object | null,
    };
  },
  methods: {
    async onSubmit() {
      try {
        await this.$axios.$put(this.$apiUrl.user, { user: this.user });
        await this.$auth.fetchUser();
        this.$toast.success('Successfully update your profile');
      } catch (err) {
        this.error = err;
      }
    },
    async onLogOut() {
      await this.$auth.logout();
      this.$router.push('/login');
    },
  },
  head: {
    title: 'Settings',
  },
});
</script>
