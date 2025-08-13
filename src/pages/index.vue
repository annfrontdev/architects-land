<script lang="ts" setup>
import SPromo from "@/sections/SPromo.vue";
import SAbout from "@/sections/SAbout.vue";
import SFocus from "@/sections/SFocus.vue";
import SProjects from "@/sections/SProjects.vue";
import SContactUs from "@/sections/SContactUs.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import ModalPrivacy from "@/components/ModalPrivacy.vue";
import { usePrivacyStore } from "@/stores/privacy";
import { storeToRefs } from "pinia";
import NotificationModal from "@/components/NotificationModal.vue";
import { useNotificationsStore } from "@/stores/notifications";

const { visible } = storeToRefs(usePrivacyStore());
const { notificationIsVisible } = storeToRefs(useNotificationsStore());
</script>

<template>
  <MainLayout>
    <SPromo />
    <SAbout />
    <SFocus />
    <SProjects />
    <SContactUs />
    <ModalPrivacy v-if="visible" />
    <Transition name="jump-fade">
      <NotificationModal v-if="notificationIsVisible" />
    </Transition>
  </MainLayout>
</template>
