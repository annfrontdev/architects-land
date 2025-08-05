<script lang="ts" setup>
type Link = {
    mode: "dark" | "light";
}
defineProps<Link>();
</script>

<template>
  <RouterLink
    to="/"
    class="py-2 px-4 uppercase flex gap-4 items-center justify-center font-thin transition-all ease-in duration-200 cursor-pointer"
    :class="{
      'bg-zinc-800 text-white hover:bg-zinc-800/50 hover:text-white':
        mode === 'dark',
      'hover:bg-zinc-800 bg-white hover:text-white': mode === 'light',
    }"
  >
    <span class="font-light">
      <slot></slot>
      <i class="fa-solid fa-arrow-right ml-4"></i>
    </span>
  </RouterLink>
</template>
