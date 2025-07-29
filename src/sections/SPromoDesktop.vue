<script lang="ts" setup>
import { computed, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import MainWrapper from "@/components/MainWrapper.vue";
import { Swiper as SwiperType } from "swiper/types";
import { PROJECTS_PROMO } from "@/model/data";
import SlideChanger from "@/elements/SlideChanger.vue";

import "swiper/css";

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
  <MainWrapper class="grid grid-cols-[400px_1fr] w-full h-full">
    <div class="flex flex-col justify-center">
      <p class="uppercase font-extralight text-4xl mb-2">Project</p>

      <Transition name="jump-fade" mode="out-in">
        <p :key="idx" class="font-semibold text-4xl mb-16">
          {{ title }}
        </p>
      </Transition>

      <SlideChanger
        :index="idx"
        :quantity="PROJECTS_PROMO.length"
        @decrease-index="slidePrev"
        @increase-index="slideNext"
        class="text-zinc-800"
      />
    </div>

    <div class="w-full h-full overflow-hidden">
      <Swiper
        :slides-per-view="1"
        direction="horizontal"
        @swiper="onSwiperInit"
        class="w-full h-full"
      >
        <SwiperSlide v-for="p in PROJECTS_PROMO" :key="p.id" class="w-full h-full">
          <div class="w-full h-full">
            <img
              :srcset="p.full"
              :alt="p.altText"
              sizes="(width <= 600px) 400px,
          (width <= 1200px) 800px, 1200px"
              class="object-cover h-full"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </MainWrapper>
</template>
