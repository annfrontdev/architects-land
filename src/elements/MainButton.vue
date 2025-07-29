<script lang="ts" setup>
defineProps<{ mode?: "dark" | "light" }>();
</script>

<template>
  <button
    :class="{ 'bg-zinc-800 text-white': mode === 'dark' }"
    class="shadow-[-1px_1px_1px_white] bg-white p-8 uppercase flex gap-4 items-center justify-center font-thin"
  >
    <span>
      <slot></slot>
      <i class="fa-solid fa-arrow-right mx-2"></i>
    </span>
  </button>
</template>
