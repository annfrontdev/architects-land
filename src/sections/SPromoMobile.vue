<script lang="ts" setup>
import { computed, ref } from "vue";
import MainWrapper from "@/components/MainWrapper.vue";
import { Swiper as SwiperType } from "swiper/types";
import { PROJECTS_PROMO } from "@/model/data";

import GoToProject from "@/elements/GoToProject.vue";
import ProjectsSwiper from "@/components/ProjectsSwiper.vue";
import PromoTitle from "@/components/PromoTitle.vue";

const swiperRef = ref<SwiperType | null>(null);

const idx = computed(() => {
  const index = swiperRef.value?.realIndex;
  return typeof index === "number" ? index + 1 : 1;
});

const slideNext = () => swiperRef.value?.slideNext();
const slidePrev = () => swiperRef.value?.slidePrev();
const onSwiperInit = (s: SwiperType) => (swiperRef.value = s);

const title = computed(() => PROJECTS_PROMO[idx.value - 1].title);
</script>

<template>
  <MainWrapper class="!px-0 pt-4 relative w-full h-full">
    <div class="top-0 left-0 absolute w-full h-full overflow-hidden">
      <ProjectsSwiper @onSwiperInit="onSwiperInit" />

      <PromoTitle
        :idx="idx"
        :title="title"
        :quantity="PROJECTS_PROMO.length"
        @slideNext="slideNext"
        @slidePrev="slidePrev"
        class="absolute z-10 top-0 left-0 text-white bg-zinc-800/30 w-full py-8 px-4"
      />

      <GoToProject />
    </div>
  </MainWrapper>
</template>
