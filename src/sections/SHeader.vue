<script lang="ts" setup>
import AppNavigation from "@/components/AppNavigation.vue";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import MainWrapper from "@/components/MainWrapper.vue";
</script>

<template>
  <header class="py-4" id="header-js">
    <MainWrapper
      class="grid grid-cols-[400px__max-content] items-center justify-center"
    >
      <LogoIcon width="70" id="logo-js" />

      <AppNavigation class="flex gap-8" />
    </MainWrapper>
  </header>
</template>
