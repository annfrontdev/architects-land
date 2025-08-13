<script lang="ts" setup>
import MainWrapper from "@/components/MainWrapper.vue";
import MainLink from "@/elements/MainLink.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { marked } from "marked";
import { onMounted, ref } from "vue";

const htmlContent = ref("");

async function fetchProject() {
  try {
    //  страницы ссылаются на один и тот же проект ибо это демо проект
    const res = await fetch(
      import.meta.env.BASE_URL + `/content/future-house.md`
    );
    const md = await res.text();
    return marked(md);
  } catch (e) {
    return "";
  }
}

onMounted(async () => {
  htmlContent.value = await fetchProject();
});
</script>

<template>
  <MainLayout>
    <MainWrapper>
      <MainLink to="/projects" mode="light" direction="left" class="mb-8">К проектам</MainLink>

      <div v-if="htmlContent">
        <div v-html="htmlContent" class="prose font-thin max-w-none"></div>
      </div>
      <div v-else>Проект не найден</div>
    </MainWrapper>
  </MainLayout>
</template>
