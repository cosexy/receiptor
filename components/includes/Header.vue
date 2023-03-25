<template>
  <div id="header">
    <div class="flex h-full items-center px-5">
      <button>
        <Icon size="26" name="material-symbols:arrow-back-rounded" />
      </button>

      <h1 id="title" class="ml-3 mr-auto mb-0 text-2xl" />

      <div id="actions" />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
#header {
  height: 80px;
  @apply shadow-primary bg-white w-full
}
</style>
