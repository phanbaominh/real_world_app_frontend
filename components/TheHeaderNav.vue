<template>
  <nav>
    <TheHeaderButton link="/"
      ><FontAwesomeIcon icon="home" /> Home
    </TheHeaderButton>
    <template v-if="!$auth.user">
      <TheHeaderButton link="/login">Sign in</TheHeaderButton>
      <TheHeaderButton link="/signup">Sign up</TheHeaderButton>
    </template>
    <template v-else>
      <TheHeaderButton link="/editor"
        ><FontAwesomeIcon icon="edit" /> New Article
      </TheHeaderButton>
      <TheHeaderButton link="/settings">
        <BaseButtonSettings class="focus:outline-none" />
      </TheHeaderButton>
      <TheHeaderButton :link="`/@${$auth.user.username}`"
        >{{ $auth.user.username }}
      </TheHeaderButton>
    </template>
  </nav>
</template>
