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
  <section id="projects" class="my-40">
    <MainWrapper class="!px-0">
      <h2 class="text-5xl text-zinc-400 font-thin mb-16">Наши проекты</h2>
      <div class="flex flex-wrap gap-7">
        <img
          v-for="(p, i) in projects"
          :key="i"
          :src="p.link"
          :alt="p.alt"
          height="255"
        />
      </div>
      <div class="flex justify-end mt-16">
        <MainButton mode="dark">Все проекты</MainButton>
      </div>
    </MainWrapper>
  </section>
</template>
