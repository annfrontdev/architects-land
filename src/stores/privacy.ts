import { defineStore } from "pinia";
import { ref } from "vue";

export const usePrivacyStore = defineStore("privacy", () => {
  const visible = ref(false);
  const typeOfDoc = ref("reading");
  const isAccepted = ref(false);

  function openForReading() {
    typeOfDoc.value = "reading";
    visible.value = true;
  }

  function openForAccepting() {
    console.log("openForAccepting");

    typeOfDoc.value = "accepting";
    visible.value = true;
  }

  function close() {
    visible.value = false;
  }

  function acceptPrivacy() {
    isAccepted.value = true;
    close();
  }

  return {
    openForAccepting,
    openForReading,
    visible,
    typeOfDoc,
    close,
    acceptPrivacy,
    isAccepted,
  };
});
