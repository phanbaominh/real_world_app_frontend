<template>
  <AuthBaseForm :error="error">
    <template #heading>Your Settings</template>
    <AuthBaseFormInput
      label="Url of profile picture"
      name="image"
      type="text"
      :value="user.image"
    />
    <AuthBaseFormInput
      label="Username"
      name="username"
      type="text"
      :value="user.username"
    />
    <textarea
      placeholder="Short bio about you"
      :value="user.bio"
      aria-label="Short bio about you"
      class="border-gray-400 p-2 border rounded-lg"
      name="bio"
    />
    <AuthBaseFormInput
      label="Email"
      name="email"
      type="text"
      :value="user.email"
    />
    <AuthBaseFormInput
      label="New password"
      name="password"
      type="password"
      :value="user.password"
    />
    <BaseButtonSolid type="submit" class="px-4 self-end">
      Update Profile
    </BaseButtonSolid>
    <BaseDivider />
    <BaseButton
      type="button"
      :class="{ active: false }"
      class="self-start px-2 lg:text-lg"
      color="red-500"
      @click="onLogOut"
    >
      Logout
    </BaseButton>
  </AuthBaseForm>
</template>
<script lang="ts">
import Vue from 'vue';
import { User } from '~/constants/api';
export default Vue.extend({
  data() {
    return {
      user: this.$auth.user as User,
      error: null as Object | null,
    };
  },
  methods: {
    async onSubmit(e: Event) {
      e.preventDefault();
      try {
        await this.$axios.$put(this.$apiUrl.user);
      } catch (err) {
        this.error = err.response
          ? err.response.data.errors
          : this.$nuxt.error({ statusCode: 500, message: err.message });
      }
    },
    async onLogOut() {
      await this.$auth.logout();
      this.$router.push('/login');
    },
  },
  middleware: 'auth',
});
</script>
