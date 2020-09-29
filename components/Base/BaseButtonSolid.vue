<template>
  <button
    :class="`bg-conduit-green text-white border-2 border-conduit-green p-2 rounded-md hover:bg-green-600`"
    @click="$emit('click')"
  >
    <slot> </slot>
  </button>
</template>
