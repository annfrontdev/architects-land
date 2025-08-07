<script lang="ts" setup>
import MainWrapper from "@/components/MainWrapper.vue";
</script>

<template>
  <section class="mt-[150px]">
    <MainWrapper>
      <h2 class="lg:text-6xl text-4xl  text-zinc-400 font-thin">Наш фокус</h2>
      <div class="grid lg:grid-cols-2 lg:gap-16">
        <div class="flex gap-4 items-center">
          <p class="text-[120px] md:text-[200px] leading-[200px] text-zinc-100 font-extrabold">1</p>
          <div class="text-left font-thin flex flex-col gap-2 text-[12px] md:text-[18px]">
            <p>Соединить людей и творчество ИИ,</p>
            <p>чтобы создать новые возможности.</p>
            <p>Соединить людей и творчество ИИ,</p>
            <p>чтобы создать новые возможности.</p>
          </div>
        </div>

        <div class="flex gap-4 items-center">
          <p class="text-[120px] md:text-[200px] leading-[200px] text-zinc-100 font-extrabold">2</p>
          <div class="text-left font-thin flex flex-col gap-2 text-[12px] md:text-[18px]">
            <p>Делать проекты качественно,</p>
            <p>красиво, внимательно к деталям.</p>
            <p>Делать проекты качественно,</p>
            <p>красиво, внимательно к деталям.</p>
          </div>
        </div>
      </div>
    </MainWrapper>
  </section>
</template>
