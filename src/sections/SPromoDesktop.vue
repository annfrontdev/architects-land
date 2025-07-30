<script lang="ts" setup>
import { computed, ref } from "vue";
import MainWrapper from "@/components/MainWrapper.vue";
import { Swiper as SwiperType } from "swiper/types";
import { PROJECTS_PROMO } from "@/model/data";
import GoToProject from "@/elements/GoToProject.vue";
import ProjectsSwiper from "@/components/ProjectsSwiper.vue";
import PromoTitle from "@/components/PromoTitle.vue";

const START_IDX = 1;

const swiperRef = ref<SwiperType | null>(null);

const idx = computed(() => {
  const index = swiperRef.value?.realIndex;
  return typeof index === "number" ? index + 1 : START_IDX;
});

const slideNext = () => swiperRef.value?.slideNext();
const slidePrev = () => swiperRef.value?.slidePrev();
const onSwiperInit = (s: SwiperType) => (swiperRef.value = s);

const title = computed(() => PROJECTS_PROMO[idx.value - 1].title);
</script>

<template>
  <MainWrapper class="grid grid-cols-[400px_1fr] w-full h-full">
    <PromoTitle
      :idx="idx"
      :title="title"
      :quantity="PROJECTS_PROMO.length"
      @slideNext="slideNext"
      @slidePrev="slidePrev"
      class="flex flex-col justify-center text-zinc-800 "
    />

    <div class="w-full h-full overflow-hidden relative">
      <GoToProject />
      <ProjectsSwiper @onSwiperInit="onSwiperInit" />
    </div>
  </MainWrapper>
</template>
