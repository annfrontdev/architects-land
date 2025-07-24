import { ref } from "vue";

export function useSlider(maxQuantity: number, startIndex: number = 0) {
  const currentIndex = ref(startIndex);

  function decreaseIndex() {
    currentIndex.value = currentIndex.value > 0 ? currentIndex.value - 1 : 0;
  }

  function increaseIndex() {
    currentIndex.value =
      currentIndex.value < maxQuantity
        ? currentIndex.value + 1
        : maxQuantity;
  }

  return { currentIndex, decreaseIndex, increaseIndex };
}
