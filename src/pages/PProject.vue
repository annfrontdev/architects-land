<script lang="ts" setup>
import MainWrapper from "@/components/MainWrapper.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { PROJECTS } from "@/model/data";
import { useRoute } from "vue-router";

const route = useRoute();
const project = PROJECTS.find((v) => `${v.id}` === route.params.id);
</script>

<template>
  <MainLayout>
    <MainWrapper class="my-20">
      <div v-if="project">
        <h2 class="text-5xl text-zinc-400 font-thin mb-16">
          Проект {{ project.title }}
        </h2>
        <div class="flex gap-16">
          <img :src="project.photo" :alt="project.title" />

          <p>{{ project.text }}</p>
        </div>
      </div>

      <div v-else class="text-left">
        <h2 class="text-5xl text-zinc-400 font-thin mb-16">Проект не найден</h2>
        <RouterLink to="/" class="border border-zinc-400 p-4 py-2 rounded">
          <i class="fa-solid fa-arrow-left"></i>
          <span class="ml-2">На главную</span>
        </RouterLink>
      </div>
    </MainWrapper>
  </MainLayout>
</template>
