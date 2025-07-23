<script lang="ts" setup>
import MainWrapper from "@/components/MainWrapper.vue";
import MainButton from "@/elements/MainButton.vue";
</script>

<template>
  <section id="contacts" class="my-40">
    <MainWrapper>
      <h2 class="text-5xl text-zinc-400 font-thin mb-16">Оставьте заявку</h2>
      <div class="grid grid-cols-[400px_400px] gap-8">
        <form class="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Ваше имя"
            class="bg-zinc-200 min-h-[46px] py-2 px-6"
          />
          <input
            type="text"
            placeholder="Ваша почта"
            class="bg-zinc-200 min-h-[46px] py-2 px-6"
          />
          <input
            type="text"
            placeholder="Ваш номер телефона"
            class="bg-zinc-200 min-h-[46px] py-2 px-6"
          />
          <input
            type="text"
            placeholder="Чем интересуетесь?"
            class="bg-zinc-200 min-h-[46px] py-2 px-6"
          />
          <textarea
            class="bg-zinc-200 min-h-[46px] py-2 px-6"
            placeholder="Ваше сообщение"
            rows="5"
          ></textarea>
        </form>
        <div class="relative">
          <img
            src="/manager.jpg"
            alt="Менеджер"
            height="255"
            class="absolute h-full"
          />
        </div>
      </div>

      <MainButton mode="dark" class="mt-16">Отправить заявку</MainButton>
    </MainWrapper>
  </section>
</template>
