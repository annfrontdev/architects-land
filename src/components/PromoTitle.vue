<script lang="ts" setup>
import SlideChanger from '@/elements/SlideChanger.vue';

defineEmits(['slidePrev', 'slideNext'])
defineProps<{ idx: number , title: string, quantity: number }>()
</script>

<template>
  <div>
    <p class="uppercase font-extralight lg:text-6xl text-4xl  mb-2">Project</p>

    <Transition name="jump-fade" mode="out-in">
      <p :key="idx" class="font-semibold lg:text-6xl text-4xl  mb-16">
        {{ title }}
      </p>
    </Transition>

    <SlideChanger
      :index="idx"
      :quantity="quantity"
      @decrease-index="$emit('slidePrev')"
      @increase-index="$emit('slideNext')"
      class="flex-col"
    />
  </div>
</template>
