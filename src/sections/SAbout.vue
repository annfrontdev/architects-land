<script lang="ts" setup>
import MainWrapper from "@/components/MainWrapper.vue";
import MainButton from "@/elements/MainButton.vue";
</script>

<template>
  <section>
    <MainWrapper>
      <div
        class="bg-zinc-50 p-8 my-16 grid grid-cols-[max-content_500px] relative justify-center gap-8 max-w-[1170px] max-h-[435px] mx-auto"
      >
        <div class="grid grid-cols-2 grid-rows-[max-content_max-content] gap-4">
          <img
            src="/about-3.jpg"
            alt="О нас"
            class="col-start-1 col-end-2"
            height="265"
          />

          <img
            src="/about-2.jpg"
            alt="О нас"
            class="col-start-1 col-end-2"
            height="140"
          />

          <img
            src="/about-1.jpg"
            alt="О нас"
            class="col-start-2 col-end-3 row-start-1 row-end-3 my-auto"
            height="345"
          />
        </div>

        <div class="max-h-[381px] flex flex-col items-start justify-between">
          <h2 class="text-5xl text-zinc-400 font-thin">О нас</h2>
          <p class="max-w-[80%] font-thin">
            Наша команда архитекторов объединяет опыт, креативность и внимание к
            деталям. Используя современные технологии и помощь искусственного
            интеллекта, мы создаём проекты, сочетающие эстетику,
            функциональность и инновации.
          </p>

          <MainButton>
            <span>Далее</span>
          </MainButton>
        </div>
      </div>
    </MainWrapper>
  </section>
</template>
