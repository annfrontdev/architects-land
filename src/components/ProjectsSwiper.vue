<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { PROJECTS_PROMO } from "@/model/data";
import "swiper/css";
defineEmits(['onSwiperInit'])
</script>

<template>
  <Swiper
    :slides-per-view="1"
    direction="horizontal"
    @swiper="$emit('onSwiperInit', $event)"
    class="w-full h-full"
  >
    <SwiperSlide v-for="p in PROJECTS_PROMO" :key="p.id" class="w-full h-full">
      <div class="w-full h-full relative">
        <img
          :srcset="p.full"
          :alt="p.altText"
          sizes="(width <= 600px) 400px,
          (width <= 1200px) 800px, 1200px"
          class="object-cover h-full w-full"
          loading="lazy"
        />
      </div>
    </SwiperSlide>
  </Swiper>
</template>
