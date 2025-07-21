<script lang="ts" setup>
import { type NavLink } from "@/model/types";

const appNav: NavLink[] = [
  { label: "Главная", link: "#main" },
  { label: "Галерея", link: "#gallery" },
  { label: "Проекты", link: "#projects" },
  { label: "Сертификаты", link: "#certifications" },
  { label: "Контакты", link: "#contacts" },
];
</script>

<template>
  <ul>
    <li v-for="link in appNav">
      <a :href="link.link">{{ link.label }}</a>
    </li>
  </ul>
</template>
