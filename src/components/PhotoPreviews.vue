<script lang="ts" setup>
import { PROJECTS } from "@/model/data";
import { useSlider } from "@/composables/useSlider";
import { computed } from "vue";
import SlideChanger from "@/elements/SlideChanger.vue";

const PHOTOS_PER_PAGE = 8;
const START_ID = 1;

const pagesQuantity = Math.ceil(PROJECTS.length / PHOTOS_PER_PAGE);

const { currentIndex, decreaseIndex, increaseIndex } = useSlider(
  pagesQuantity,
  START_ID
);

defineEmits(["changeStartPhotoId"]);

const currentPreviews = computed(() => [
  ...PROJECTS.slice(
    PHOTOS_PER_PAGE * (currentIndex.value - 1),
    PHOTOS_PER_PAGE * currentIndex.value
  ),
]);
</script>

<template>
  <div>
    <Transition mode="out-in" name="slide-gallery">
      <ul
        :key="currentIndex"
        class="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-8 justify-center lg:justify-start"
      >
        <li v-for="p in currentPreviews" :key="p.id" class="overflow-hidden">
          <img
            v-if="p.thumb"
            :src="p.thumb"
            :alt="p.altText"
            class="hover:scale-110 transition-all h-[260px] w-full object-cover"
            @click="$emit('changeStartPhotoId', p.id)"
          />
        </li>
      </ul>
    </Transition>

    <SlideChanger
      @decrease-index="decreaseIndex"
      @increase-index="increaseIndex"
      :index="currentIndex"
      :quantity="pagesQuantity"
      class="mt-16 justify-start"
    />
  </div>
</template>
