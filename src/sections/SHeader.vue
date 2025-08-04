<script lang="ts" setup>
import AppNavigation from "@/components/AppNavigation.vue";
import CModal from "@/components/CModal.vue";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import MainWrapper from "@/components/MainWrapper.vue";
import { ref } from "vue";

const isVisible = ref(false);
</script>

<template>
  <header id="header-js">
    <MainWrapper
      class="flex xl:grid xl:grid-cols-[400px__max-content] items-center justify-between xl:justify-start py-4 lg:py-8"
    >
      <RouterLink to="/">
        <LogoIcon width="70" id="logo-js" />
      </RouterLink>

      <button @click="isVisible = !isVisible" class="xl:hidden">
        <i class="fa-solid fa-bars"></i>
      </button>

      <AppNavigation class="xl:flex hidden gap-16" :is-header="true" />
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
