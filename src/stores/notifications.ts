import { defineStore } from "pinia";
import { ref } from "vue";

export const useNotificationsStore = defineStore("notifications", () => {
  const notificationIsVisible = ref(false);
  const notificationType = ref("error");
  const notificationMessage = ref("");

  function showNotification(text: string, type: string = "error") {
    notificationType.value = "error";
    notificationType.value = type;
    notificationIsVisible.value = true;
    notificationMessage.value = text;
  }

  function closeNotification() {
    notificationIsVisible.value = false;
  }

  return {
    showNotification,
    notificationMessage,
    notificationType,
    notificationIsVisible,
    closeNotification,
  };
});
