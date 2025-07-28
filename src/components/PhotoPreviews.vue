<script lang="ts" setup>
import { GALLERY } from "@/model/data";
import { useSlider } from "@/composables/useSlider";
import { computed } from "vue";
import SlideChanger from "@/elements/SlideChanger.vue";

const PHOTOS_PER_PAGE = 8;
const START_ID = 1;

const pagesQuantity = Math.ceil(GALLERY.length / PHOTOS_PER_PAGE);

const { currentIndex, decreaseIndex, increaseIndex } = useSlider(
  pagesQuantity,
  START_ID
);

defineEmits(["changeStartPhotoId"]);

const currentPreviews = computed(() => {
  let res = [];

  res = [
    ...GALLERY.slice(
      PHOTOS_PER_PAGE * (currentIndex.value - 1),
      PHOTOS_PER_PAGE * currentIndex.value
    ),
  ];

  if (PHOTOS_PER_PAGE > res.length) {
    const diff = PHOTOS_PER_PAGE - res.length;
    for (let i = 0; i < diff; i++) {
      res.push({
        id: res.length + i + 1,
        full: "",
        thumb: "",
        altText: "нет фото",
      });
    }
  }

  return res;
});
</script>

<template>
  <div>
    <Transition mode="out-in" name="slide-gallery">
      <ul :key="currentIndex" class="flex flex-wrap gap-8">
        <li v-for="p in currentPreviews" :key="p.id" class="overflow-hidden">
          <img
            v-if="p.thumb"
            :src="p.thumb"
            :alt="p.altText"
            width="210"
            height="260"
            class="hover:scale-110 transition-all"
            @click="$emit('changeStartPhotoId', p.id)"
          />

          <div v-else class="w-[210px] h-[260px] bg-zinc-100"></div>
        </li>
      </ul>
    </Transition>

    <SlideChanger
      @decrease-index="decreaseIndex"
      @increase-index="increaseIndex"
      :index="currentIndex"
      :quantity="pagesQuantity"
      class="mt-8"
    />
  </div>
</template>
