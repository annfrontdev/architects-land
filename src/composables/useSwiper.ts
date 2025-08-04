import { type Swiper } from "swiper/types";
import { ref } from "vue";

export function useSwiper() {
  const swiperRef = ref<Swiper | null>(null);

  const slideNext = () => swiperRef.value?.slideNext();
  const slidePrev = () => swiperRef.value?.slidePrev();
  const onSwiperInit = (s: Swiper) => (swiperRef.value = s);

  return { swiperRef, slideNext, slidePrev, onSwiperInit };
}
