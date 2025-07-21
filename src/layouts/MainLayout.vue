<script lang="ts" setup>
import SFooter from "@/sections/SFooter.vue";
import SHeader from "@/sections/SHeader.vue";
</script>

<template>
  <div>
    <SHeader />
    <main>
      <slot></slot>
    </main>
    <SFooter />
  </div>
</template>
