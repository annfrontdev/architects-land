<script lang="ts" setup>
import MainLink from '@/elements/MainLink.vue';

type Card = {
  title: string;
  text: string;
  link: string;
};

defineProps<Card>();
</script>

<template>
  <div
    class="bg-zinc-50 relative gap-2 mx-auto"
  >
    <slot></slot>

    <div class="py-4 px-4 flex flex-col items-start justify-between gap-5">
      <h2 class="lg:text-6xl text-4xl text-zinc-400 font-thin">{{ title }}</h2>

      <p class="max-w-[80%] max-h-[90px] font-thin text-sm line-clamp-3">
        {{ text }}
      </p>

      <MainLink :to="link" mode="light">Перейти</MainLink>
    </div>
  </div>
</template>
