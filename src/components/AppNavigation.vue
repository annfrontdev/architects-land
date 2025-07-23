<script lang="ts" setup>
import { type NavLink } from "@/model/types";

const appNav: NavLink[] = [
  { label: "Проекты", link: "#projects" },
  { label: "Сертификаты", link: "#certifications" },
  { label: "Контакты", link: "#contacts" },
];
</script>

<template>
  <ul>
    <li><RouterLink to="/">Главная</RouterLink></li>
    <li v-for="(link, i) in appNav" :class="`order-${i}`">
      <a :href="link.link">{{ link.label }}</a>
    </li>
    <li class="order-1">
      <RouterLink to="/gallery">Галерея</RouterLink>
    </li>
  </ul>
</template>
