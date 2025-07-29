<script lang="ts" setup>
import MainWrapper from "@/components/MainWrapper.vue";
import MainButton from "@/elements/MainButton.vue";

const projects = [
  { alt: "Проект № 6", link: "project-6.jpg" },
  { alt: "Проект № 7", link: "project-7.jpg" },
  { alt: "Проект № 8", link: "project-8.jpg" },
  { alt: "Проект № 5", link: "project-5.jpg" },
  { alt: "Проект № 9", link: "project-9.jpg" },
];
</script>

<template>
  <section id="projects" class="my-20">
    <MainWrapper class="!px-0">
      <h2 class="text-5xl text-zinc-400 font-thin mb-16 mx-4">Наши проекты</h2>
      <div class="lg:flex flex-wrap gap-7">
        <div v-for="(p, i) in projects" :key="i" class="w-full h-[255px]">
          <img :src="p.link" :alt="p.alt" class="w-full h-full object-cover" />
        </div>
      </div>
      <div class="flex lg:justify-end lg:mt-16 w-full">
        <MainButton mode="dark" class="w-full lg:w-auto">
          Все проекты
        </MainButton>
      </div>
    </MainWrapper>
  </section>
</template>
