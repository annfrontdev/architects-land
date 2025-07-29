<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { onMounted, onUnmounted, ref } from "vue";
import SPromoMobile from "@/sections/SPromoMobile.vue";
import SPromoDesktop from "./SPromoDesktop.vue";

const promoRef = ref();
const sectionHeight = ref("auto");
const styles = computed(() => ({ height: sectionHeight.value }));

onMounted(() => {
  setSectionOffsets();

  window.addEventListener("resize", setSectionOffsets);
});

onUnmounted(() => {
  window.removeEventListener("resize", setSectionOffsets);
});

function setSectionOffsets() {
  sectionHeight.value = `${window.innerHeight - getHeaderHeight()}px`;
}

function getHeaderHeight() {
  const header = document.getElementById("header-js");
  return header?.offsetHeight || 0;
}
</script>

<template>
  <section ref="promoRef" :style="styles">
    <SPromoDesktop class="lg:grid hidden" />
    <SPromoMobile class="block lg:hidden" />
  </section>
</template>

<style lang="css">
.jump-fade-enter-active {
  transition: all 0.2s ease-out;
}

.jump-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.jump-fade-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}

.jump-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
