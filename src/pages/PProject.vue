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
      <h2 class="text-5xl text-zinc-400 font-thin mb-16">Проект</h2>
      <div v-if="project">
        {{ project.img }}
        <img
          :src="project.img"
          :alt="project.title"
          width="210"
          height="260"
          class="hover:scale-110 transsition-all"
        />
      </div>
    </MainWrapper>
  </MainLayout>
</template>
