<script lang="ts" setup>
defineEmits(["decreaseIndex", "increaseIndex"]);
</script>

<template>
  <div class="flex gap-4">
    <button @click="$emit('decreaseIndex')">
      <i class="fa-solid fa-arrow-left"></i>
    </button>
    <button @click="$emit('increaseIndex')">
      <i class="fa-solid fa-arrow-right"></i>
    </button>
  </div>
</template>
