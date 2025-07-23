<script lang="ts" setup></script>

<template>
  <div class="flex gap-4 text-zinc-300 font-extralight">
    <span>
      <slot name="index"></slot>
    </span>
    <span>/</span>
    <span>
      <slot name="quantity"></slot>
    </span>
  </div>
</template>
