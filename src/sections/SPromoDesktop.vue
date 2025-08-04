<script lang="ts" setup>
import { computed } from "vue";
import MainWrapper from "@/components/MainWrapper.vue";
import { PROJECTS_PROMO } from "@/model/data";
import GoToProject from "@/elements/GoToProject.vue";
import ProjectsSwiper from "@/components/ProjectsSwiper.vue";
import PromoTitle from "@/components/PromoTitle.vue";

import { useSwiper } from "@/composables/useSwiper";

const { swiperRef, slideNext, slidePrev, onSwiperInit } = useSwiper();

const START_IDX = 1;

const idx = computed(() => {
  const index = swiperRef.value?.realIndex;
  return typeof index === "number" ? index + 1 : START_IDX;
});

const currentProject = computed(() => PROJECTS_PROMO[idx.value - 1]);

const title = computed(() => currentProject.value.title);
const link = computed(() => `/project/${currentProject.value.id}`);
</script>

<template>
  <MainWrapper class="grid grid-cols-[400px_1fr] w-full h-full">
    <PromoTitle
      :idx="idx"
      :title="title"
      :quantity="PROJECTS_PROMO.length"
      @slideNext="slideNext"
      @slidePrev="slidePrev"
      class="flex flex-col justify-center text-zinc-800"
    />

    <div class="w-full h-full overflow-hidden relative">
      <GoToProject :to="link" />
      <ProjectsSwiper @onSwiperInit="onSwiperInit" />
    </div>
  </MainWrapper>
</template>
