<template>
  <section
    class="max-w-screen-xl mx-auto flex flex-col pt-8 items-start lg:flex-row"
  >
    <BaseArticleFeed
      class="flex-grow p-2 w-full lg:mr-4 lg:w-auto"
      :initial-query="$auth.user ? 'api/articles/feed' : 'api/articles'"
    >
      <HomepageMainFeedHeader />
    </BaseArticleFeed>
    <HomepageMainTagList
      class="bg-gray-tag-list rounded p-4 mt-4 lg:mt-0 lg:w-1/4"
    />
  </section>
</template>
