<script lang="ts" setup>
import AppNavigation from "@/components/AppNavigation.vue";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import MainWrapper from "@/components/MainWrapper.vue";
import ContactsList from "@/elements/ContactsList.vue";
import { usePrivacyStore } from "@/stores/privacy";
const { openForReading } = usePrivacyStore();
</script>

<template>
  <footer class="bg-zinc-700 text-white mt-[120px] py-16 w-full">
    <MainWrapper>
      <div class="lg:flex w-full justify-center">
        <LogoIcon
          class="text-white shrink-0 lg:mr-20 mb-20 lg:mb-0"
          width="145"
        />

        <div class="w-full flex flex-col lg:flex-row gap-10 justify-between">
          <div>
            <p class="mb-8 font-semibold">Информация</p>
            <div class="grid gap-4">
              <AppNavigation :isHeader="false" class="grid gap-4" />
              <button @click="openForReading" type="button" class="text-left transition-all ease-in duration-100 hover:text-zinc-400 cursor-pointer">
                Политика конфиденциальности
              </button>
            </div>
          </div>

          <div class="flex flex-col">
            <p class="mb-8 font-semibold">Контакты</p>

            <ContactsList />
          </div>

          <div>
            <p class="mb-8 font-semibold">Соц сети</p>
            <ul class="flex gap-4">
              <li>
                <a
                  class="hover:text-zinc-400 transition-all ease-in duration-100 cursor-pointer"
                >
                  <i class="fa-brands fa-vk text-2xl"></i
                ></a>
              </li>
              <li>
                <a
                  class="hover:text-zinc-400 transition-all ease-in duration-100 cursor-pointer"
                >
                  <i class="fa-brands fa-telegram text-2xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 mt-16 font-thin text-center">
        <p class="text-center py-8">© 2023 Все права защищены</p>
        <p>
          За классным лендингом сюда <br />
          <a href="https://t.me/annmakeweb" class="underline font-bold"
            >Аня | Делаю сайты</a
          >
        </p>
      </div>
    </MainWrapper>
  </footer>
</template>
