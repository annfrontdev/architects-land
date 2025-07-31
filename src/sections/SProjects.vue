<script lang="ts" setup>
import MainWrapper from "@/components/MainWrapper.vue";
import MainButton from "@/elements/MainButton.vue";

const projects = [
  { alt: "Проект № 6", link: "project-6.webp" },
  { alt: "Проект № 7", link: "project-7.webp" },
  { alt: "Проект № 8", link: "project-8.webp" },
  { alt: "Проект № 5", link: "project-5.webp" },
  { alt: "Проект № 9", link: "project-9.webp" },
];
</script>

<template>
  <section id="projects" class="mt-8">
    <MainWrapper class="!px-0">
      <h2 class="lg:text-6xl text-4xl  text-zinc-400 font-thin mb-16 mx-4">Наши проекты</h2>
      <div class="lg:flex flex-wrap gap-7">
        <div v-for="(p, i) in projects" :key="i" class="w-full lg:w-auto h-[255px]">
          <img :src="p.link" :alt="p.alt" class="w-full h-full object-cover" />
        </div>
      </div>
      <div class="flex lg:justify-end lg:mt-8 w-full">
        <MainButton mode="dark" class="w-full lg:w-auto">
          Все проекты
        </MainButton>
      </div>
    </MainWrapper>
  </section>
</template>
