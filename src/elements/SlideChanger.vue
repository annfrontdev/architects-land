<script lang="ts" setup>
defineEmits(["decreaseIndex", "increaseIndex"]);
defineProps<{ index: number; quantity: number }>();
</script>

<template>
  <div class="flex gap-16 slide-changer">
    <div class="flex gap-4 font-extralight">
      <span>
        {{ index }}
      </span>
      <span>/</span>
      <span>
        {{ quantity }}
      </span>
    </div>
    <div v-if="quantity > 1" class="flex gap-4">
      <button @click="$emit('decreaseIndex')" id="slide-changer__prev">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <button @click="$emit('increaseIndex')" id="slide-changer__next">
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>
