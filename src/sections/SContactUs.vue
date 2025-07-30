<script lang="ts" setup>
import MainWrapper from "@/components/MainWrapper.vue";
import MainButton from "@/elements/MainButton.vue";
</script>

<template>
<section id="contacts" class="mt-[120px]">
    <MainWrapper>
      <h2 class="text-6xl text-zinc-400 font-thin mb-8">Оставьте заявку</h2>
      <div class="grid lg:grid-cols-[400px_1fr] gap-8">
        <form class="flex flex-col gap-4 justify-between h-full" ref="formRef">
          <input
            type="text"
            placeholder="Ваше имя"
            class="font-thin bg-zinc-100 min-h-[46px] px-5 py-3"
          />
          <input
            type="text"
            placeholder="Ваша почта"
            class="font-thin bg-zinc-100 min-h-[46px] px-5 py-3"
          />
          <input
            type="text"
            placeholder="Ваш номер телефона"
            class="font-thin bg-zinc-100 min-h-[46px] px-5 py-3"
          />
          <input
            type="text"
            placeholder="Чем интересуетесь?"
            class="font-thin bg-zinc-100 min-h-[46px] px-5 py-3"
          />
          <textarea
            class="font-thin bg-zinc-100 min-h-[46px] px-5 py-3"
            placeholder="Ваше сообщение"
            rows="5"
          ></textarea>
        </form>

        <div class="hidden lg:block">
          <img src="/manager.jpg" alt="Менеджер" class="object-cover h-full" />
        </div>
      </div>

      <MainButton mode="dark" class="mt-8 w-full lg:w-auto">
        Отправить заявку
      </MainButton>
    </MainWrapper>
  </section>
</template>
