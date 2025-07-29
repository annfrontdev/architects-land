<script lang="ts" setup>
import AppNavigation from "@/components/AppNavigation.vue";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import MainWrapper from "@/components/MainWrapper.vue";
</script>

<template>
  <footer class="bg-zinc-700 text-white">
    <MainWrapper class="flex flex-col lg:flex-row gap-15 lg:gap-30 py-20 justify-center">
      <LogoIcon class="text-white shrink-0" width="145" />

      <div>
        <p class="mb-8 font-semibold">Информация</p>
        <AppNavigation class="grid gap-4" />
      </div>

      <div class="flex flex-col">
        <p class="mb-8 font-semibold">Контакты</p>

        <ul class="flex-grow flex flex-col justify-between">
          <li>
            <i class="fa-solid fa-location-pin"></i>
            <span class="ml-2">
              1234 Sample Street <br />
              Austin Texas 78704
            </span>
          </li>
          <li>
            <i class="fa-solid fa-phone"></i>
            <span class="ml-2">512-333-2222</span>
          </li>
          <li>
            <i class="fa-solid fa-envelope"></i>
            <span class="ml-2">sampleemail@gmail.com</span>
          </li>
        </ul>
      </div>

      <div>
        <p class="mb-8 font-semibold">Соц сети</p>
        <ul class="flex gap-4">
          <li>
            <i class="fa-brands fa-vk"></i>
          </li>
          <li>
            <i class="fa-brands fa-telegram"></i>
          </li>
        </ul>
      </div>
    </MainWrapper>
  </footer>
</template>
