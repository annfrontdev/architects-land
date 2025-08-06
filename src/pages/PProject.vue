<script lang="ts" setup>
import MainWrapper from "@/components/MainWrapper.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { marked } from "marked";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const htmlContent = ref("");

async function fetchProject(slug: string) {
  try {
    const res = await fetch(import.meta.env.BASE_URL + `/content/${slug}.md`);
    const md = await res.text();
    return marked(md);
  } catch (e) {
    return "";
  }
}

onMounted(async () => {
  const slugParam = route.params.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  if (!slug) return;

  htmlContent.value = await fetchProject(slug);
});
</script>

<template>
  <MainLayout>
    <MainWrapper>
      <div v-if="htmlContent">
        <div v-html="htmlContent" class="prose font-thin max-w-none"></div>
      </div>
      <div v-else>Проект не найден</div>
    </MainWrapper>
  </MainLayout>
</template>
