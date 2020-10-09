<template>
  <button
    :class="`text-sm self-start p-1 lg:text-base border-2 sm:p-2 rounded-md hover:text-white`"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
