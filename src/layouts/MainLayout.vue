<script lang="ts" setup>
import SFooter from "@/sections/SFooter.vue";
import SHeader from "@/sections/SHeader.vue";
</script>

<template>
  <div class="flex flex-col min-h-[100vh]">
    <SHeader />
    <main class="flex-grow">
      <slot></slot>
    </main>
    <SFooter />
  </div>
</template>
