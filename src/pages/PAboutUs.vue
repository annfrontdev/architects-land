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
</script>

<template>
  <MainLayout>
    <MainWrapper class="grid gap-16">
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
            <MainLink to="/projcts" mode="dark">К Проектам</MainLink>
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

          <div class="flex gap-4 my-8">
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
            <MainLink to="/certificates" mode="dark">К Сертификатам</MainLink>
          </div>
        </div>
      </div>
    </MainWrapper>
  </MainLayout>
</template>
