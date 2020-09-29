<template>
  <section>
    <ProfileHero :profile="profile" />
    <BaseArticleFeed
      :initial-query="$apiUrl.queryArticles({ author: profile.username })"
      class="p-4 lg:mx-auto lg:w-2/3"
    >
      <ProfileMainHeader :username="profile.username" />
    </BaseArticleFeed>
  </section>
</template>
<script lang="ts">
import Vue from 'vue';
import { Profile } from '~/constants/api';
export default Vue.extend({
  async asyncData({ $axios, $apiUrl, route }) {
    const profile = (
      await $axios.$get($apiUrl.getProfile(route.params.profile.slice(1)))
    ).profile;
    return { profile };
  },
  data() {
    return { profile: (null as any) as Profile };
  },
  validate({ params }) {
    return /@.+/.test(params.profile);
  },
  auth: false,
  head() {
    return { title: this.$route.params.profile };
  },
});
</script>
