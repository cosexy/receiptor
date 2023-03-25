<template>
  <div id="default" class="text-[rgb(41 41 45)] h-screen">
    <div class="flex">
      <includes-sidebar class="z-10 shrink-0" />

      <div class="w-full">
        <includes-header class="z-9" />

        <div id="wrapper">
          <div id="content">
            <nuxt-page />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
#default {
  background-color: #f6f7fd;
}

#wrapper {
  @apply h-full;
  margin: 28px 28px 0 28px;
  max-height: calc(100vh - 80px - 28px)
}

#content {
  @apply h-full bg-white shadow-primary p-5 overflow-y-auto;
  max-height: calc(100vh - 80px - 28px);
}
</style>

<style>
button, html, input, select, textarea {
  font-size: 14px;
  line-height: 20px;
}
</style>
