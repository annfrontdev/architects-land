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
  <MainWrapper class="!px-0 pt-4 relative w-full h-full">
    <div class="top-0 left-0 absolute w-full h-full overflow-hidden">
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
              class="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <div
        class="absolute z-10 top-0 left-0 text-white bg-zinc-800/30 w-full py-8 px-4"
      >
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
          class="text-white"
        />
      </div>

      <RouterLink
        to="/"
        class="absolute z-10 bottom-0 left-0 text-white bg-zinc-800/30 w-full py-8 px-4 flex justify-end items-center uppercase"
      >
        <span>К проекту</span>
        <i class="fa-solid fa-arrow-right ml-4"></i>
      </RouterLink>
    </div>
  </MainWrapper>
</template>
