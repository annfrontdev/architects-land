<script lang="ts" setup>
import CModal from "@/components/CModal.vue";
import MainWrapper from "@/components/MainWrapper.vue";
import EArrows from "@/elements/EArrows.vue";
import SlideChanger from "@/elements/SlideChanger.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { computed, ref } from "vue";
import { useSlider } from "@/composables/useSlider";

const PREVIEWS = [
  {
    id: 1,
    full: "gallery-1-mobile.jpg 400w, gallery-1-tablet.jpg 800w, gallery-1-desktop.jpg 1200w",
    thumb: "gallery-preview-1.jpg",
    altText: "проект № 11",
  },
  {
    id: 2,
    full: "gallery-2-mobile.jpg 400w, gallery-2-tablet.jpg 800w, gallery-2-desktop.jpg 1200w",
    thumb: "gallery-preview-2.jpg",
    altText: "проект № 22",
  },
  {
    id: 3,
    full: "gallery-3-mobile.jpg 400w, gallery-3-tablet.jpg 800w, gallery-3-desktop.jpg 1200w",
    thumb: "gallery-preview-3.jpg",
    altText: "проект № 33",
  },
  {
    id: 4,
    full: "gallery-4-mobile.jpg 400w, gallery-4-tablet.jpg 800w, gallery-4-desktop.jpg 1200w",
    thumb: "gallery-preview-4.jpg",
    altText: "проект № 44",
  },

  //
  {
    id: 1,
    full: "gallery-1-mobile.jpg 400w, gallery-1-tablet.jpg 800w, gallery-1-desktop.jpg 1200w",
    thumb: "gallery-preview-1.jpg",
    altText: "проект № 11",
  },
  {
    id: 2,
    full: "gallery-2-mobile.jpg 400w, gallery-2-tablet.jpg 800w, gallery-2-desktop.jpg 1200w",
    thumb: "gallery-preview-2.jpg",
    altText: "проект № 22",
  },
  {
    id: 3,
    full: "gallery-3-mobile.jpg 400w, gallery-3-tablet.jpg 800w, gallery-3-desktop.jpg 1200w",
    thumb: "gallery-preview-3.jpg",
    altText: "проект № 33",
  },
  {
    id: 4,
    full: "gallery-4-mobile.jpg 400w, gallery-4-tablet.jpg 800w, gallery-4-desktop.jpg 1200w",
    thumb: "gallery-preview-4.jpg",
    altText: "проект № 44",
  },
  {
    id: 1,
    full: "gallery-1-mobile.jpg 400w, gallery-1-tablet.jpg 800w, gallery-1-desktop.jpg 1200w",
    thumb: "gallery-preview-1.jpg",
    altText: "проект № 11",
  },
  {
    id: 2,
    full: "gallery-2-mobile.jpg 400w, gallery-2-tablet.jpg 800w, gallery-2-desktop.jpg 1200w",
    thumb: "gallery-preview-2.jpg",
    altText: "проект № 22",
  },
  {
    id: 3,
    full: "gallery-3-mobile.jpg 400w, gallery-3-tablet.jpg 800w, gallery-3-desktop.jpg 1200w",
    thumb: "gallery-preview-3.jpg",
    altText: "проект № 33",
  },
  {
    id: 4,
    full: "gallery-4-mobile.jpg 400w, gallery-4-tablet.jpg 800w, gallery-4-desktop.jpg 1200w",
    thumb: "gallery-preview-4.jpg",
    altText: "проект № 44",
  },
];

const PREVIEWS_PER_PAGE = 8;
const pagesQuantity = Math.ceil(PREVIEWS.length / PREVIEWS_PER_PAGE);

const START_ID = 1;
const { currentIndex, decreaseIndex, increaseIndex } = useSlider(
  pagesQuantity,
  START_ID
);

const currentProject = ref(null);

const currentPreviews = computed(() => {
  let res = [];

  res = [
    ...PREVIEWS.slice(
      PREVIEWS_PER_PAGE * (currentIndex.value - 1),
      PREVIEWS_PER_PAGE * currentIndex.value
    ),
  ];

  if (PREVIEWS_PER_PAGE > res.length) {
    const diff = PREVIEWS_PER_PAGE - res.length;
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
  <MainLayout>
    <MainWrapper class="my-20">
      <h2 class="text-5xl text-zinc-400 font-thin mb-16">Галерея</h2>

      <Transition mode="out-in" name="slide-gallery">
        <ul :key="currentIndex" class="flex flex-wrap gap-8">
          <li
            v-for="p in currentPreviews"
            :key="p.id"
            @click="currentProject = p"
            class="overflow-hidden"
          >
            <img
              v-if="p.thumb"
              :src="p.thumb"
              :alt="p.altText"
              width="210"
              height="260"
              class="hover:scale-110 transition-all"
            />

            <div v-else class="w-[210px] h-[260px] bg-zinc-100"></div>
          </li>
        </ul>
      </Transition>

      <div class="flex gap-8 items-center mt-8">
        <SlideChanger>
          <template #index>{{ currentIndex }}</template>
          <template #quantity>{{ pagesQuantity }}</template>
        </SlideChanger>

        <EArrows
          v-if="pagesQuantity > 1"
          @decrease-index="decreaseIndex"
          @increase-index="increaseIndex"
        />
      </div>
    </MainWrapper>

    <CModal v-if="currentProject">
      <img
        :srcset="currentProject.full"
        :alt="currentProject.altText"
        sizes="(width <= 600px) 400px,
        (width <= 1200px) 800px, 1200px"
        class="max-h-[90vh]"
      />
    </CModal>
  </MainLayout>
</template>

<style lang="css">
.slide-gallery-enter-active {
  transition: all 0.2s ease-out;
}

.slide-gallery-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-gallery-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}
.slide-gallery-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
