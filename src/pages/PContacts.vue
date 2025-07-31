<script lang="ts" setup>
import MainWrapper from "@/components/MainWrapper.vue";
import ContactsList from "@/elements/ContactsList.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { ref } from "vue";
const isVisible = ref(false);
</script>

<template>
  <MainLayout>
    <MainWrapper class="grid lg:grid-cols-[400px__1fr] gap-16 lg:gap-0">
      <div>
        <h2 class="text-6xl text-zinc-400 font-thin mb-16">Контакты</h2>
        <ContactsList class="justify-center text-2xl gap-8 font-thin" />
      </div>

      <div class="relative">
        <iframe
          v-if="isVisible"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab44d8c843d4f05137bec610c63514fe0afb671054ef55d36adb165488950ba82&amp;source=constructor"
          class="w-full h-[400px]"
          title="address"
        ></iframe>
        <img v-else @click="isVisible = true" src="/map.png" alt="map" class="h-[400px] object-cover w-full" />
      </div>
    </MainWrapper>
  </MainLayout>
</template>
