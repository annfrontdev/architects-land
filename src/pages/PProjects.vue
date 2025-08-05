<script lang="ts" setup>
import CCard from "@/components/CCard.vue";
import MainWrapper from "@/components/MainWrapper.vue";
import { useSlider } from "@/composables/useSlider";
import SlideChanger from "@/elements/SlideChanger.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { PROJECTS } from "@/model/data";
import { computed } from "vue";

const PREVIEWS_PER_PAGE = 3;
const pagesQuantity = Math.ceil(PROJECTS.length / PREVIEWS_PER_PAGE);

const START_ID = 1;
const { currentIndex, decreaseIndex, increaseIndex } = useSlider(
  pagesQuantity,
  START_ID
);

const currentProjects = computed(() =>
  PROJECTS.slice(
    PREVIEWS_PER_PAGE * (currentIndex.value - 1),
    PREVIEWS_PER_PAGE * currentIndex.value
  )
);
</script>

<template>
  <MainLayout>
    <MainWrapper>
      <h2 class="text-5xl text-zinc-400 font-thin mb-16">Наши проекты</h2>

      <div class="gap-8 flex flex-col">
        <RouterLink
          v-for="(p,i) in currentProjects"
          :key="p.id"
          :to="`/project/${p.id}`"
          class="overflow-hidden group flex  lg:max-h-[300px] animate-fade-slide opacity-0"
          :style="{animationDelay: `${i*100}ms`}"
        >
          <CCard
            :title="p.title"
            :text="p.text"
            class="flex flex-col lg:!grid !grid-cols-[60%_40%]"
          >
            <div class="overflow-hidden max-h-[200px] lg:max-h-none">
              <img
                :srcset="p.thumb"
                :alt="p.title"
                class="group-hover:scale-110 transition-all object-cover h-full w-full"
              />
            </div>
          </CCard>
        </RouterLink>
      </div>

      <SlideChanger
        @decrease-index="decreaseIndex"
        @increase-index="increaseIndex"
        :index="currentIndex"
        :quantity="pagesQuantity"
        class="mt-16"
      />
    </MainWrapper>
  </MainLayout>
</template>
