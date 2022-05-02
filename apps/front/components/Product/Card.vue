<template>
  <div>
    Hello {{ product.id }}
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  product: Object,
})
</script>
