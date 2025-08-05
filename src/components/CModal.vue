<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  window.document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  window.document.body.style.overflow = "auto";
});
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full z-100">
    <slot></slot>
  </div>
</template>
