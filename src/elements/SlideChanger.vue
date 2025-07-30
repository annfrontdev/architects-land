<script lang="ts" setup>
defineEmits(["decreaseIndex", "increaseIndex"]);
defineProps<{ index: number; quantity: number }>();
const START_IDX = 1;
</script>

<template>
  <div class="flex gap-16 slide-changer">
    <div class="flex gap-10 font-extralight text-2xl opacity-40">
      <span>
        {{ index }}
      </span>
      <span>/</span>
      <span>
        {{ quantity }}
      </span>
    </div>
    <div v-if="quantity > 1" class="flex gap-6">
      <button
        @click="$emit('decreaseIndex')"
        id="slide-changer__prev"
        class="flex items-center border-1 aspect-square p-4 border-current/80 hover:bg-zinc-100 transition-all ease-in"
        :class="{ 'opacity-40': index === START_IDX }"
      >
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <button
        @click="$emit('increaseIndex')"
        id="slide-changer__next"
        class="flex items-center border-1 aspect-square p-4 border-current/80 hover:bg-zinc-100 transition-all ease-in"
        :class="{ 'opacity-40': index === quantity }"
      >
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>
