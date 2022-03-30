<script setup lang="ts">
const props = defineProps({
  pathUrl: String,
  colorValue: String,
})

const cssVars = computed(() => {
  return {
    '--colorValue': props.colorValue,
  }
})


</script>

<template>
  <a :href="pathUrl" class="hover-underline-animation" :style="cssVars" display="inline-block" text="xl" pos="relative">
    <slot />
  </a>
</template>

<style scoped lang="scss">
.hover-underline-animation {
  color: var(--colorValue);
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--colorValue);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
