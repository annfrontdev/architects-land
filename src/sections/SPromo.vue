<script lang="ts" setup>
import MainWrapper from "@/components/MainWrapper.vue";
import EArrows from "@/elements/EArrows.vue";
import MainButton from "@/elements/MainButton.vue";
import SlideChanger from "@/elements/SlideChanger.vue";
import { computed } from "@vue/reactivity";
import { onMounted, onUnmounted, ref } from "vue";
import { useSlider } from "@/composables/useSlider";

// to-do  jpg to webp
const PROJECTS = [
  { id: 1, title: "Willa", img: "project-1.jpg" },
  { id: 2, title: "Coffee shop", img: "project-2.jpg" },
  { id: 3, title: "Museum", img: "project-3.jpg" },
];
const START_ID = 0;
const { currentIndex, decreaseIndex, increaseIndex } = useSlider(
  PROJECTS.length,
  START_ID
);

const currentProject = computed(() => {
  return PROJECTS[currentIndex.value];
});

const promoRef = ref();
const sectionHeight = ref("auto");
const styles = computed(() => ({ height: sectionHeight.value }));

onMounted(() => {
  setSectionOffsets();

  window.addEventListener("resize", setSectionOffsets);
});

onUnmounted(() => {
  window.removeEventListener("resize", setSectionOffsets);
});

function setSectionOffsets() {
  sectionHeight.value = `${window.innerHeight - getHeaderHeight()}px`;
}

function getHeaderHeight() {
  const header = document.getElementById("header-js");
  return header?.offsetHeight || 0;
}
</script>

<template>
  <section class="py-8" ref="promoRef" :style="styles">
    <MainWrapper class="grid grid-cols-[400px_max-content]">
      <div class="grid grid-rows-2">
        <div class="flex flex-col justify-between row-start-2 h-full">
          <div>
            <p class="uppercase text-zinc-300 font-extralight text-4xl">
              Project
            </p>
            <Transition name="jump-fade" mode="out-in">
              <p :key="currentIndex" class="font-semibold text-4xl">
                {{ currentProject.title }}
              </p>
            </Transition>
          </div>

          <EArrows
            @decrease-index="decreaseIndex"
            @increase-index="increaseIndex"
          />

          <SlideChanger>
            <template #index>{{ currentProject.id }}</template>
            <template #quantity>{{ PROJECTS.length }}</template>
          </SlideChanger>
        </div>
      </div>

      <Transition name="slide-fade" mode="out-in">
        <div :key="currentIndex" class="relative h-[70vh] aspect-[7/8] flex">
          <img :src="`${currentProject.img}`" :alt="currentProject.title" />
          <MainButton class="absolute bottom-0 left-0">
            <span>К проекту</span>
          </MainButton>
        </div>
      </Transition>
    </MainWrapper>
  </section>
</template>

<style lang="css">
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.jump-fade-enter-active {
  transition: all 0.2s ease-out;
}

.jump-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.jump-fade-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}

.jump-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
