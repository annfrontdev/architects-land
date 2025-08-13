<script lang="ts" setup>
import MainWrapper from "@/components/MainWrapper.vue";
import MainButton from "@/elements/MainButton.vue";
import { PROJECTS_GRID } from "@/model/data";
</script>

<template>
  <section class="mt-[150px]">
    <MainWrapper>
      <h2 class="lg:text-6xl text-4xl text-zinc-400 font-thin mb-16 mx-4">
        Наши проекты
      </h2>
      <div
        class="grid grid-cols-4 grid-rows-[155px_155px] lg:grid-rows-[255px_255px] gap-2 lg:gap-7"
      >
        <RouterLink
          v-for="(p, i) in PROJECTS_GRID"
          :to="`/projects/${p.slug}`"
          :key="i"
          class="w-full lg:w-auto"
          :class="{
            'col-start-1 col-end-3 row-start-1 row-end-2': i === 0,
            'col-start-3 col-end-5 row-start-1 row-end-2': i === 1,
            'col-start-1 col-end-2 row-start-2 row-end-3': i === 2,
            'col-start-2 col-end-4 row-start-2 row-end-3': i === 3,
            'col-start-4 col-end-5 row-start-2 row-end-3': i === 4,
          }"
        >
          <img :src="p.thumb" :alt="p.altText" class="w-full h-full object-cover" />
        </RouterLink>
      </div>
      <div class="flex lg:justify-end lg:mt-8 w-full">
        <MainButton mode="dark" class="w-full lg:w-auto">
          Все проекты
        </MainButton>
      </div>
    </MainWrapper>
  </section>
</template>
