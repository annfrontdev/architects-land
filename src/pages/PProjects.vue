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
    <MainWrapper class="my-20">
      <h2 class="text-5xl text-zinc-400 font-thin mb-16">Наши проекты</h2>

      <RouterLink
        v-for="p in currentProjects"
        :key="p.id"
        :to="`/project/${p.id}`"
      >
        <CCard
          :title="p.title"
          :text="p.text"
          class="!grid !grid-cols-[60%_40%] group"
        >
          <div class="overflow-hidden h-full">
            <img
              :src="p.photo"
              :alt="p.title"
              class="group-hover:scale-110 transition-all object-cover w-full h-full"
            />
          </div>
        </CCard>
      </RouterLink>

      <SlideChanger
        @decrease-index="decreaseIndex"
        @increase-index="increaseIndex"
        :index="currentIndex"
        :quantity="pagesQuantity"
      />
    </MainWrapper>
  </MainLayout>
</template>
