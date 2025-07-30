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
        class="pl-[100px]"
      >
        <div
          class="mt-8 grid grid-cols-[max-content_max-content] grid-rows-[max-content_max-content] gap-8"
        >
          <img
            src="/about-3.webp"
            alt="О нас"
            class="col-start-1 col-end-2"
            height="265"
          />

          <img
            src="/about-2.webp"
            alt="О нас"
            class="col-start-1 col-end-2"
            height="140"
          />

          <img
            src="/about-1.webp"
            alt="О нас"
            class="col-start-2 col-end-3 row-start-1 row-end-3 my-auto"
            height="345"
          />
        </div>
      </CCard>
    </MainWrapper>
  </section>
</template>
