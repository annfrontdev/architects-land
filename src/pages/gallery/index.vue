<script lang="ts" setup>
import { ref } from "vue";

import MainWrapper from "@/components/MainWrapper.vue";
import PhotoModal from "@/components/PhotoModal.vue";
import PhotoPreviews from "@/components/PhotoPreviews.vue";
import MainLayout from "@/layouts/MainLayout.vue";

const startPhotoId = ref(-1);
</script>

<template>
  <MainLayout>
    <MainWrapper>
      <h2 class="text-5xl text-zinc-400 font-thin mb-4 lg:mb-16">Галерея</h2>
      <PhotoPreviews @changeStartPhotoId="startPhotoId = $event" />
    </MainWrapper>

    <Transition name="slide-down">
      <PhotoModal
        v-if="startPhotoId >= 0"
        @close="startPhotoId = -1"
        :startPhotoId="startPhotoId"
      />
    </Transition>
  </MainLayout>
</template>

<style lang="css">
.slide-gallery-enter-active {
  transition: all 0.2s ease-out;
}

.slide-gallery-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-gallery-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}
.slide-gallery-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
