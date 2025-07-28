import { ref } from "vue";

const STEP = 1

export function useSlider(maxQuantity: number, startIndex: number = 0) {
  const currentIndex = ref(startIndex);

  function decreaseIndex() {
    currentIndex.value = currentIndex.value > startIndex ? currentIndex.value - STEP : startIndex;
  }

  function increaseIndex() {
    currentIndex.value =
      currentIndex.value < maxQuantity
        ? currentIndex.value + STEP
        : maxQuantity;
  }

  return { currentIndex, decreaseIndex, increaseIndex };
}
