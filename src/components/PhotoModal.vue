<script lang="ts" setup>
import CModal from "./CModal.vue";
import { PROJECTS } from "@/model/data";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { computed } from "vue";

import "swiper/css";

const modules = [Navigation, Pagination, Scrollbar, A11y];

const props = defineProps<{
  startPhotoId: number;
}>();

const start = computed(() =>
  PROJECTS.findIndex((v) => v.id === props.startPhotoId)
);
</script>

<template>
  <CModal>
    <div class="bg-zinc-800 h-full">
      <button
        @click="$emit('close')"
        class="text-xl text-white font-thin p-4 self-start absolute z-10 top-4 left-4"
      >
        <i class="fa-solid fa-arrow-left"></i>
        <span class="ml-2">В галерею</span>
      </button>

      <Swiper
        :slides-per-view="1"
        :modules="modules"
        :initialSlide="start"
        :loop="true"
      >
        <SwiperSlide v-for="p in PROJECTS" :key="p.id">
          <div class="h-[100vh] flex justify-center">
            <img
              :srcset="p.full"
              :alt="p.altText"
              sizes="(width <= 600px) 400px,
          (width <= 1200px) 800px, 1200px"
              class="h-[100%] object-contain"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </CModal>
</template>
