<template>
  <div id="loading-spinner"></div>
</template>
<style scoped>
@keyframes spinning {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
#loading-spinner {
  display: inline-block;
  animation-name: spinning;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  @apply border-2 border-blue-400 rounded-full w-4 h-4;

  border-top-color: white;
}
</style>
