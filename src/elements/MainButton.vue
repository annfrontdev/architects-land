<script lang="ts" setup>
defineProps<{ mode?: "dark" | "light" }>();
</script>

<template>
  <button
    :class="{ 'bg-zinc-800 text-white': mode === 'dark' }"
    class="shadow-[-1px_1px_1px_white] bg-white px-8 py-2 uppercase flex gap-4 items-center font-thin"
  >
    <slot></slot>
    <i class="fa-solid fa-arrow-right"></i>
  </button>
</template>
