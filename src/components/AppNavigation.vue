<script lang="ts" setup>
import { type NavLink } from "@/model/types";
import { useRoute } from "vue-router";

defineProps<{ isHeader: boolean }>();

const appNav: NavLink[] = [
  { id: 1, label: "Главная", link: "/" },
  { id: 2, label: "Галерея", link: "/gallery" },
  { id: 3, label: "Проекты", link: "/projects" },
  { id: 4, label: "Сертификаты", link: "/certificates" },
  { id: 5, label: "Контакты", link: "/contacts" },
];

const route = useRoute();
</script>

<template>
  <ul>
    <li
      v-for="link in appNav"
      :key="link.id"
      :class="{
        'border-t-[1px] border-b-[1px] ': route.path === link.link && isHeader,
        'hover:border-b hover:text-zinc-400': isHeader,
        'hover:text-zinc-400': !isHeader,
      }"
      class="transition-all ease-in duration-100"
    >
      <RouterLink :to="link.link">{{ link.label }}</RouterLink>
    </li>
  </ul>
</template>
