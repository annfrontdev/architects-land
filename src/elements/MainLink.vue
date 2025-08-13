<script lang="ts" setup>
type Link = {
  mode: "dark" | "light";
  direction: "left" | "right";
};
defineProps<Link>();
</script>

<template>
  <RouterLink
    to=""
    class="inline-block border py-2 px-4 uppercase gap-4 font-thin transition-all ease-in duration-200 cursor-pointer"
    :class="{
      'bg-zinc-800 text-white hover:bg-zinc-800/50 hover:text-white':
        mode === 'dark',
      'hover:bg-zinc-800 bg-transparent hover:text-white': mode === 'light',
    }"
  >
    <div class="font-light flex justify-between items-center">
      <i v-if="direction === 'left'" class="fa-solid fa-arrow-left mr-4"></i>
      <slot></slot>
      <i v-if="direction === 'right'" class="fa-solid fa-arrow-right ml-4"></i>
    </div>
  </RouterLink>
</template>
