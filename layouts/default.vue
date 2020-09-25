<template>
  <div class="flex flex-col">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow: -moz-scrollbars-vertical;
  overflow-y: scroll;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.custom-toast-container {
  top: 0% !important;
  right: 0% !important;
}

.custom-toast-content {
  @screen lg {
    @apply max-w-xs;
  }
  @apply text-lg !important;
}
</style>
