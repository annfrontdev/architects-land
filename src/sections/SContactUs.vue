<script lang="ts" setup>
import MainWrapper from "@/components/MainWrapper.vue";
import MainButton from "@/elements/MainButton.vue";
</script>

<template>
  <section id="contacts" class="my-40">
    <MainWrapper class="!px-0">
      <h2 class="text-5xl text-zinc-400 font-thin mb-16">Оставьте заявку</h2>
      <div class="grid grid-cols-[400px_1fr] gap-8">
        <form class="flex flex-col gap-4" ref="formRef">
          <input
            type="text"
            placeholder="Ваше имя"
            class="font-thin bg-zinc-100 min-h-[46px] p-6"
          />
          <input
            type="text"
            placeholder="Ваша почта"
            class="font-thin bg-zinc-100 min-h-[46px] p-6"
          />
          <input
            type="text"
            placeholder="Ваш номер телефона"
            class="font-thin bg-zinc-100 min-h-[46px] p-6"
          />
          <input
            type="text"
            placeholder="Чем интересуетесь?"
            class="font-thin bg-zinc-100 min-h-[46px] p-6"
          />
          <textarea
            class="font-thin bg-zinc-100 min-h-[46px] p-6"
            placeholder="Ваше сообщение"
            rows="5"
          ></textarea>
        </form>

        <div>
          <img src="/manager.jpg" alt="Менеджер" class="object-cover h-full" />
        </div>
      </div>

      <MainButton mode="dark" class="mt-16">Отправить заявку</MainButton>
    </MainWrapper>
  </section>
</template>
