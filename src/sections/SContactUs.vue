<script lang="ts" setup>
import MainWrapper from "@/components/MainWrapper.vue";
import { reactive, watch } from "vue";
import { isValidPhoneNumber } from "libphonenumber-js";
import InputWrapper from "@/elements/InputWrapper.vue";
import MainButton from "@/elements/MainButton.vue";
import { usePrivacyStore } from "@/stores/privacy";
import { storeToRefs } from "pinia";
import { useNotificationsStore } from "@/stores/notifications";

const { showNotification } = useNotificationsStore();

const store = usePrivacyStore();

const { isAccepted } = storeToRefs(store);

const { openForAccepting } = store;

const data = reactive({
  email: "",
  name: "",
  phone: "",
  theme: "",
  message: "",
  privacy: false,
});

type Errors = {
  email: string;
  name: string;
  phone: string;
  theme: string;
  message: string;
  privacy: string;
};

const errors = reactive<Errors>({
  email: [],
  name: [],
  phone: [],
  theme: [],
  message: [],
  privacy: [],
});

watch(isAccepted, (v) => {
  data.privacy = v;
});

function onSubmit() {
  // checkName();
  // checkTheme();
  // checkMessage();
  // checkPrivacy();

  // не проверяется ибо это демо-проект
  // checkEmail();
  // checkPhone();

  const result = Object.values(errors).findIndex((v) => v.length);

  if (result === -1) sendToGoogleSheet();
}

function checkName() {
  if (data.name.length) {
    errors.name = "";
    return true;
  }

  errors.name = "Поле Ваше имя не может быть пустым";
  return false;
}

function checkTheme() {
  if (data.theme.length) {
    errors.theme = "";
    return true;
  }

  errors.theme = "Поле Тема сообщения не может быть пустым";
  return false;
}

function checkMessage() {
  if (data.message.length) {
    errors.message = "";
    return true;
  }

  errors.message = "Поле Ваше сообщение не может быть пустым";
  return false;
}

function checkPhone() {
  if (data.phone && isValidPhoneNumber(data.phone, "RU")) {
    errors.phone = "";
    return true;
  }

  errors.phone = "Некорректный номер";
  return false;
}

function checkPrivacy() {
  if (data.privacy) {
    errors.privacy = "";
    return true;
  }

  errors.privacy =
    "Для отправки формы нужно ваше согласие на обработку персональных данных";
  return false;
}

function checkEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (data.email && emailRegex.test(data.email)) {
    errors.email = "";
    return true;
  }

  errors.email = "Некорректная почта";
  return false;
}

async function sendToGoogleSheet() {
  const formData = new URLSearchParams();
  formData.append("name", data.name);

  // не отправляется ибо это демо-проект
  // formData.append("email", data.email);
  // formData.append("phone", data.phone);

  formData.append("theme", data.theme);
  formData.append("message", data.message);

  try {
    await fetch(
      `https://script.google.com/macros/s/${
        import.meta.env.VITE_GOOGLE_SHEET_ID
      }/exec`,
      {
        body: formData,
        method: "POST",
      }
    );

    showNotification("Ваша заявка успешно отправлена", "success");
    clearForm();
  } catch (error) {
    console.log(error);
    // showNotification("Ваша заявка не отправлена", "error");
  }
}

function clearForm() {
  data.name = "";
  data.email = "";
  data.phone = "";
  data.theme = "";
  data.message = "";
  data.privacy = false;
}

// скрыто ибо это демо-проект
const isVisible = false;
</script>

<template>
  <section id="contacts" class="mt-[120px]">
    <MainWrapper>
      <h2 class="lg:text-6xl text-4xl text-zinc-400 font-thin mb-8">
        Оставьте заявку
      </h2>

      <p class="border border-orange-500 rounded mb-8 p-2 text-orange-500">
        ⚠️ Внимание: Данная форма создана для учебных целей в рамках
        демонстрационного проекта. <br /> Сайт не собирает и не хранит
        персональные данные пользователей.
      </p>

      <div class="grid lg:grid-cols-[400px_1fr] gap-8">
        <div>
          <form
            @submit.prevent="onSubmit"
            class="flex flex-col gap-4 justify-between h-full"
            ref="formRef"
          >
            <InputWrapper :error="errors.name">
              <input
                v-model="data.name"
                @input="checkName"
                type="text"
                placeholder="Ваше имя*"
                class="font-thin bg-zinc-100 min-h-[46px] px-5 py-3 w-full"
                :class="{ 'border border-red-500': errors.name.length }"
              />
            </InputWrapper>

            <InputWrapper v-if="isVisible" :error="errors.email">
              <input
                v-model="data.email"
                @input="checkEmail"
                type="email"
                placeholder="Ваша почта"
                class="font-thin bg-zinc-100 min-h-[46px] px-5 py-3 w-full"
                :class="{ 'border border-red-500': errors.name.length }"
              />
            </InputWrapper>

            <InputWrapper v-if="isVisible" :error="errors.phone">
              <input
                v-model="data.phone"
                @input="checkPhone"
                type="text"
                placeholder="Ваш номер телефона"
                class="font-thin bg-zinc-100 min-h-[46px] px-5 py-3 w-full"
                :class="{ 'border border-red-500': errors.name.length }"
              />
            </InputWrapper>

            <InputWrapper :error="errors.theme">
              <input
                v-model="data.theme"
                @input="checkTheme"
                type="text"
                placeholder="Тема сообщения*"
                class="font-thin bg-zinc-100 min-h-[46px] px-5 py-3 w-full"
                :class="{ 'border border-red-500': errors.name.length }"
              />
            </InputWrapper>

            <InputWrapper :error="errors.message">
              <textarea
                v-model="data.message"
                @input="checkMessage"
                class="font-thin bg-zinc-100 min-h-[46px] px-5 py-3 w-full"
                :class="{
                  'border border-red-500 text-red-50': errors.name.length,
                }"
                placeholder="Ваше сообщение*"
                rows="5"
              ></textarea>
            </InputWrapper>

            <InputWrapper :error="errors.privacy">
              <label>
                <input
                  type="checkbox"
                  v-model="data.privacy"
                  @change="checkPrivacy"
                />
                Я согласен(а) на обработку моих НЕ персональных данных*
              </label>
            </InputWrapper>

            <button
              @click="openForAccepting"
              type="button"
              class="underline self-start font-semibold text-zinc-400"
            >
              Демо-политика конфиденциальности
            </button>

            <MainButton mode="dark" type="submit">Отправить заявку</MainButton>
          </form>

          <p class="font-thin pt-4">* - обязательные поля</p>
        </div>

        <div class="hidden lg:block">
          <img src="/manager.webp" alt="Менеджер" class="object-cover h-full" />
        </div>
      </div>
    </MainWrapper>
  </section>
</template>
