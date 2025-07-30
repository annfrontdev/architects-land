<script lang="ts" setup>
import AppNavigation from "@/components/AppNavigation.vue";
import CModal from "@/components/CModal.vue";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import MainWrapper from "@/components/MainWrapper.vue";
import { ref } from "vue";

const isVisible = ref(false);
</script>

<template>
  <header class="py-8" id="header-js">
    <MainWrapper
      class="flex lg:grid lg:grid-cols-[400px__max-content] items-center justify-between lg:justify-start"
    >
      <LogoIcon width="70" id="logo-js" />

      <button @click="isVisible = !isVisible" class="lg:hidden">
        <i class="fa-solid fa-bars"></i>
      </button>

      <AppNavigation class="lg:flex hidden gap-16" :is-header="true" />
    </MainWrapper>

    <Transition name="slide-fade">
      <CModal v-if="isVisible">
        <div
          class="bg-white h-full w-full flex justify-center items-center absolute"
        >
          <button @click="isVisible = false" class="absolute top-10 right-2">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <div>
            <AppNavigation class="grid gap-4" :is-header="false" />
          </div>
        </div>
      </CModal>
    </Transition>
  </header>
</template>

<style lang="css">
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
