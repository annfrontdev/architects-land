<script lang="ts" setup>
import CCard from "@/components/CCard.vue";
import MainWrapper from "@/components/MainWrapper.vue";
import MainLayout from "@/layouts/MainLayout.vue";

const PROJECTS = [
  {
    id: 1,
    img: "project-7.jpg",
    title: "Hotel",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    id: 2,
    img: "project-6.jpg",
    title: "Apartment",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    id: 3,
    img: "project-5.jpg",
    title: "Restaurant",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
];
</script>

<template>
  <MainLayout>
    <MainWrapper class="my-20">
      <h2 class="text-5xl text-zinc-400 font-thin mb-16">Наши проекты</h2>

      <CCard v-for="p in PROJECTS" :key="p.id" :title="p.title" :text="p.text" class="!grid !grid-cols-[60%_40%]">
        <div>
          <img :src="p.img" :alt="p.title" class="object-cover h-full w-full" />
        </div>
      </CCard>
    </MainWrapper>
  </MainLayout>
</template>
