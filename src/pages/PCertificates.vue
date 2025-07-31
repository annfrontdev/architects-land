<script lang="ts" setup>
import CModal from "@/components/CModal.vue";
import MainWrapper from "@/components/MainWrapper.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { ref } from "vue";

type Certificate = {
  img: string;
  alt: string;
};
const certificates: Certificate[] = [
  { img: "certificate-1.png", alt: "Сертификат 1" },
  { img: "certificate-2.png", alt: "Сертификат 2" },
];
const currentCertificate = ref<Certificate | null>(null);
</script>

<template>
  <MainLayout>
    <MainWrapper>
      <h2 class="lg:text-6xl text-4xl text-zinc-400 font-thin mb-16">
        Сертификаты
      </h2>

      <div class="grid grid-cols-2 gap-4">
        <img
          v-for="c in certificates"
          :src="c.img"
          alt="Сертификат"
          class="w-full h-max-[400px]"
          @click="currentCertificate = c"
        />
      </div>

      <Transition name="slide-fade">
        <CModal v-if="currentCertificate" class="flex flex-col p-2">
          <div
            @click="currentCertificate = null"
            class="absolute top-0 left-0 w-full h-full bg-zinc-800/90"
          ></div>

          <button
            @click="currentCertificate = null"
            class="self-end relative z-10"
          >
            <i class="fa-solid fa-xmark text-2xl text-white"></i>
          </button>
          <img
            :src="currentCertificate.img"
            alt="certificate"
            class="w-full m-auto z-10 relative"
          />
        </CModal>
      </Transition>
    </MainWrapper>
  </MainLayout>
</template>
