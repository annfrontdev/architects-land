<script lang="ts" setup>
import AppNavigation from "@/components/AppNavigation.vue";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import MainWrapper from "@/components/MainWrapper.vue";
</script>

<template>
  <footer class="bg-zinc-700 text-white mt-[120px] py-16 w-full">
    <MainWrapper class="flex !px-0 w-full justify-center">
      <LogoIcon class="text-white shrink-0 mr-20" width="145" />

      <div class="w-full flex flex-col lg:flex-row lg:gap-10 justify-between">
        <div>
          <p class="mb-8 font-semibold">Информация</p>
          <AppNavigation class="grid gap-4" :isHeader="false"/>
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
      </div>
    </MainWrapper>
  </footer>
</template>
