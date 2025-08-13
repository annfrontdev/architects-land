<script lang="ts" setup>
import MainButton from "@/elements/MainButton.vue";
import CModal from "./CModal.vue";
import { usePrivacyStore } from "@/stores/privacy";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { getDoc } from "@/shared/utils";

const store = usePrivacyStore();
const htmlContent = ref("");

onMounted(async () => {
  htmlContent.value = await getDoc("docs/policy.md");
});

const { close, acceptPrivacy } = store;
const { typeOfDoc } = storeToRefs(store);
</script>

<template>
  <CModal>
    <div class="h-[100vh] overflow-scroll p-4 bg-white">
      <button @click="close" class="p-4 w-full text-right">
        <i class="fa-solid fa-xmark"></i>
      </button>

      <div v-html="htmlContent" class="prose py-8"></div>

      <div v-if="!htmlContent">
        <p class="text-2xl text-red-500 text-center my-8">Нет данных</p>
      </div>

      <MainButton
        v-if="typeOfDoc === 'accepting' && htmlContent"
        @click="acceptPrivacy"
        class="p-4 w-auto border m-auto"
        mode="light"
      >
        Принять и продолжить
      </MainButton>
    </div>
  </CModal>
</template>
