<template>
  <Teleport v-if="show" :to="to">
    <slot />
  </Teleport>
</template>

<script lang="ts" setup>
defineProps<{
  to: '#actions' | '#title'
}>()

const [show, toggleShow] = useToggle(false)
onMounted(() => nextTick(() => toggleShow()))
</script>

<style scoped></style>
