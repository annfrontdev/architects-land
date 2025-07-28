<script lang="ts" setup>
import { type NavLink } from "@/model/types";

const appNav: NavLink[] = [
  { id: 1, label: "Главная", link: "/" },
  { id: 2, label: "Галерея", link: "/gallery" },
  { id: 3, label: "Проекты", link: "/projects" },
  { id: 4, label: "Сертификаты", link: "/" },
  { id: 5, label: "Контакты", link: "/" },
];
</script>

<template>
  <ul>
    <li v-for="link in appNav" :key="link.id">
      <RouterLink :to="link.link">{{ link.label }}</RouterLink>
    </li>
  </ul>
</template>
