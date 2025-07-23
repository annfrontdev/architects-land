<script lang="ts" setup>
import SPromo from "@/sections/SPromo.vue";
import SAbout from "@/sections/SAbout.vue";
import SFocus from "@/sections/SFocus.vue";
import SProjects from "@/sections/SProjects.vue";
import SContactUs from "@/sections/SContactUs.vue";
import MainLayout from "@/layouts/MainLayout.vue";
</script>

<template>
  <MainLayout>
    <SPromo />
    <SAbout />
    <SFocus />
    <SProjects />
    <SContactUs />
  </MainLayout>
</template>
