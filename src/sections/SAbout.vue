<script lang="ts" setup>
import CCard from "@/components/CCard.vue";
import MainWrapper from "@/components/MainWrapper.vue";
</script>

<template>
  <section class="mt-[120px]">
    <MainWrapper>
      <CCard
        title="О нас"
        text="Наша команда архитекторов объединяет опыт, креативность и внимание к
            деталям. Используя современные технологии и помощь искусственного
            интеллекта, мы создаём проекты, сочетающие эстетику,
            функциональность и инновации."
        link="/about"
        class="grid grid-cols-2"
      >
        <div class="grid grid-cols-[1fr_1fr] gap-2">
          <img
            src="/about-3.webp"
            alt="О нас"
            class="col-start-1 col-end-2 object-cover w-full h-full"
          />

          <img
            src="/about-2.webp"
            alt="О нас"
            class="col-start-1 col-end-2 object-cover w-full h-full"
          />

          <img
            src="/about-1.webp"
            alt="О нас"
            class="col-start-2 col-end-3 row-start-1 row-end-3 my-auto object-cover w-full h-full"
          />
        </div>
      </CCard>
    </MainWrapper>
  </section>
</template>
