<script lang="ts" setup>
type Props = {
  error: string;
};
defineProps<Props>();
</script>

<template>
  <div
    :class="{
      'text-red-500': error.length,
    }"
  >
    <slot></slot>

    <p v-if="error.length" class="font-thin">{{ error }}</p>
  </div>
</template>
