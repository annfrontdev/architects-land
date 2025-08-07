<script lang="ts" setup>
import { useNotificationsStore } from "@/stores/notifications";
import { onMounted, onUnmounted } from "vue";
const { closeNotification } = useNotificationsStore();

function closeModalByKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") {
    window.document.body.style.overflow = "auto";
    closeNotification();
  }
}

onMounted(() => {
  window.document.body.style.overflow = "hidden";
  window.addEventListener("keydown", closeModalByKeydown);
});

onUnmounted(() => {
  window.document.body.style.overflow = "auto";
  window.removeEventListener("keydown", closeModalByKeydown);
});
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full z-100">
    <slot></slot>
  </div>
</template>
