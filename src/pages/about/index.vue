<script lang="ts" setup>
import MainWrapper from "@/components/MainWrapper.vue";
import MainLink from "@/elements/MainLink.vue";
import MainLayout from "@/layouts/MainLayout.vue";

const employees = [
  {
    id: 1,
    link: "about/photos/employee-1.jpg",
    info: "Анна — ведущий архитектор",
  },
  {
    id: 2,
    link: "about/photos/employee-2.jpg",
    info: " Илья — дизайнер интерьеров",
  },
];

const reviews = [
  {
    id: 1,
    text: `Работать с вами было легко и приятно! Спасибо за тёплый дом.`,
    client: " Мария",
    project: "Дом в Лисьем лесу",
    date: "24.12.2024",
  },
  {
    id: 2,
    text: `Нам понравилось внимание к деталям и чёткость исполнения.`,
    client: " Андрей и Ольга",
    project: "Кофейня в футуристическом стиле",
    date: "12.06.2024",
  },
];
</script>

<template>
  <MainLayout>
    <MainWrapper class="grid gap-16 font-thin">
      <div class="grid lg:grid-cols-[400px__1fr] gap-4 lg:gap-0">
        <h2 class="lg:text-2xl text-4xl text-zinc-400 font-thin mb-4 lg:mb-16">
          О нас
        </h2>

        <div>
          <p>
            Мы — архитектурная студия, которая создаёт пространства с
            характером. Любим чистые линии, свет, практичность и уют. В каждом
            проекте стараемся понять, как именно люди будут в нём жить и
            чувствовать себя.
          </p>
          <div class="flex justify-start mt-8">
            <MainLink to="/projects" mode="dark" direction="right">К Проектам</MainLink>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-[400px__1fr] gap-4 lg:gap-0">
        <h2 class="lg:text-2xl text-4xl text-zinc-400 font-thin mb-4 lg:mb-16">
          Наша команда
        </h2>
        <div>
          <p>
            Мы — это архитекторы, дизайнеры, проектировщики и менеджеры. Мы
            работаем слаженно, потому что ценим доверие и общее видение.
          </p>

          <div class="md:flex gap-4 mt-8">
            <figure
              v-for="employee in employees"
              :key="employee.id"
              class="w-[200px]"
            >
              <img
                :src="employee.link"
                :alt="employee.info"
                class="object-cover"
                width="200"
              />
              <figcaption class="font-thin">
                {{ employee.info }}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-[400px__1fr] gap-4 lg:gap-0">
        <h2 class="lg:text-2xl text-4xl text-zinc-400 font-thin mb-4 lg:mb-16">
          Опыт и достижения
        </h2>

        <div>
          <p>
            15+ реализованных проектов Работаем по всей России Сотрудничаем с
            надёжными поставщиками и подрядчиками
          </p>
          <p>Имеем действующие профессиональные сертификаты</p>
          <div class="flex justify-start mt-8">
            <MainLink to="/certificates" mode="dark" direction="right">К Сертификатам</MainLink>
          </div>
        </div>
      </div>

      <div>
        <h2 class="lg:text-2xl text-4xl text-zinc-400 font-thin mb-4">
          Отзывы наших клиентов
        </h2>

        <div class="grid md:grid-cols-3 gap-4">
          <div v-for="r in reviews" :key="r.id" class="border p-2 rounded">
            <p class="font-semibold text-xl mb-4">{{ r.client }}</p>
            <p class="mb-8 italic font-thin">"{{ r.text }}"</p>

            <div class="text-right">
              <p class="font-thin text-zinc-400">Проект: {{ r.project }}</p>
              <p class="font-thin text-zinc-400">Дата сдачи: {{ r.date }}</p>
            </div>
          </div>

          <div
            class="bg-zinc-800 text-white p-2 rounded flex flex-col gap-4 justify-between"
          >
            <div>
              <p class="text-4xl">60+</p>
              <p>отзывов в <span class="italic underline">ВК</span></p>
            </div>
            <div>
              <p class="text-4xl">40+</p>
              <p>
                отзывов в <span class="italic underline">Одноклассниках</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p class="italic text-2xl font-thin">
          У вас есть идея? Давайте обсудим её. <br />
          Оставьте заявку или напишите нам — мы всегда открыты к новым проектам.
        </p>

        <div class="flex justify-start mt-8">
          <MainLink to="/contacts" mode="dark" direction="right">К контактам</MainLink>
        </div>
      </div>
    </MainWrapper>
  </MainLayout>
</template>
