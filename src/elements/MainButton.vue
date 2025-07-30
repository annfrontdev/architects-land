<script lang="ts" setup>
defineProps<{ mode?: "dark" | "light" }>();
</script>

<template>
  <button
    :class="{
      'bg-zinc-800 text-white hover:bg-white hover:text-zinc-800':
        mode === 'dark',
    }"
    class="shadow-[-1px_1px_1px_white] bg-white py-5 px-10 uppercase flex gap-4 items-center justify-center font-thin hover:shadow-[-1px_1px_1px_zinc-800] hover:bg-zinc-800 hover:text-white transition-all ease-in duration-200 cursor-pointer"
  >
    <span class="font-light">
      <slot></slot>
      <i class="fa-solid fa-arrow-right ml-4"></i>
    </span>
  </button>
</template>
