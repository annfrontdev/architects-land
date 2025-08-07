<script lang="ts" setup>
import CModal from "./CModal.vue";
import { useNotificationsStore } from "@/stores/notifications";
import { storeToRefs } from "pinia";

const notificationsStore = useNotificationsStore();

const { notificationType, notificationMessage } =
  storeToRefs(notificationsStore);

const { closeNotification } = notificationsStore;
</script>

<template>
  <CModal class="flex justify-center items-center">
    <div class="absolute top-0 left-0 w-full h-full bg-zinc-800/30"></div>
    <div
      class="bg-white relative z-10 rounded-2xl flex items-center p-4 gap-2 max-w-[320px]"
    >
      <div
        class="border-2 w-[30px] h-[30px] rounded-full flex justify-center items-center shrink-0"
        :class="{
          'text-red-500  border-red-500 ': notificationType === 'error',
          'text-green-500  border-green-500 ': notificationType === 'success',
        }"
      >
        <i
          class="fa-solid"
          :class="{
            'fa-exclamation ': notificationType === 'error',
            'fa-check ': notificationType === 'success',
          }"
        ></i>
      </div>

      <p>{{ notificationMessage }}</p>

      <button
        @click="closeNotification"
        type="button"
        class="text-zinc-400"
        aria-label="Закрыть уведомление"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  </CModal>
</template>
