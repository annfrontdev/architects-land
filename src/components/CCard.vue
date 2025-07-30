<script lang="ts" setup>
import MainButton from "@/elements/MainButton.vue";

type Card = {
  title: string;
  text: string;
};
defineProps<Card>();
</script>

<template>
  <div
    class="bg-zinc-50 lg:grid lg:grid-cols-[max-content_500px] relative gap-2 lg:max-h-[435px] mx-auto"
  >
    <slot></slot>

    <div class="py-8 px-4 max-h-[381px] flex flex-col items-start justify-between gap-5">
      <h2 class="text-6xl text-zinc-400 font-thin">{{ title }}</h2>
      <p class="max-w-[80%] font-thin">
        {{ text }}
      </p>

      <MainButton class="w-full lg:w-auto mt-16">
        <span>Перейти</span>
      </MainButton>
    </div>
  </div>
</template>
