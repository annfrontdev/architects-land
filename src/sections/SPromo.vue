<script lang="ts" setup>
import MainWrapper from "@/components/MainWrapper.vue";
import MainButton from "@/elements/MainButton.vue";
import { computed } from "@vue/reactivity";
import { onMounted, onUnmounted, ref } from "vue";

// to-do  jpg to webp
const projects = [
  { id: 1, title: "Willa", img: "project-1.jpg" },
  { id: 2, title: "Coffee shop", img: "project-2.jpg" },
  { id: 3, title: "Museum", img: "project-3.jpg" },
];
const currentIndex = ref(0);
const currentProject = computed(() => {
  return projects[currentIndex.value];
});

const promoRef = ref();
const sectionHeight = ref("auto");
const sectionLeft = ref("0px");

onMounted(() => {
  setSectionOffsets();

  window.addEventListener("resize", setSectionOffsets);
});

onUnmounted(() => {
  window.removeEventListener("resize", setSectionOffsets);
});

function setSectionOffsets() {
  sectionHeight.value = `${window.innerHeight - getHeaderHeight()}px`;
  sectionLeft.value = `${getLogoLeft()}px`;
}

function getLogoLeft() {
  const logo = document.getElementById("logo-js");
  console.log(logo?.getBoundingClientRect().left);

  return logo?.getBoundingClientRect().left || 0;
}

function getHeaderHeight() {
  const header = document.getElementById("header-js");
  return header?.offsetHeight || 0;
}

function decreaseIndex() {
  currentIndex.value = currentIndex.value > 0 ? currentIndex.value - 1 : 0;
}

function increaseIndex() {
  currentIndex.value = currentIndex.value < 3 ? currentIndex.value + 1 : 3;
}
</script>

<template>
  <section
    class="py-8"
    ref="promoRef"
    :style="{ height: sectionHeight, marginLeft: sectionLeft }"
  >
    <MainWrapper class="!px-0 grid grid-cols-[400px_max-content]">
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

          <div class="flex gap-4">
            <button @click="decreaseIndex">
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <button @click="increaseIndex">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div class="flex gap-4 text-zinc-300 font-extralight">
            <span>{{ currentProject.id }} </span>
            <span>/</span>
            <span>{{ projects.length }}</span>
          </div>
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

/* to-do  */
.jump-fade-enter-active {
  transition: all 0.2s ease-out;
}

.jump-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.jump-fade-enter-from,
.jump-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
