<template>
  <div
    class="_wrapper relative"
    :class="[darkTheme === true ? 'text-white' : '']"
  >
    <div class="_clock">
      {{ $dayjs().format('HH:mm') }}
    </div>

    <img class="relative z-10" :src="bank" alt="">

    <div class="status_right">
      <img
        class="_network"
        :src="network"
        alt=""
      >
      <img
        class="_wifi"
        :src="wifi"
        alt=""
      >
      <img
        class="_btr"
        :src="battery"
        alt=""
      >
    </div>

    <div class="absolute inset-0 z-[11]">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IPhoneStatus } from '~/entities/status.entities'

const props = defineProps<{
  bank: string
  theme: IPhoneStatus
}>()

const darkTheme = computed(() => /dark/.test(props.bank))

const network = computed(() => `/images/status/${darkTheme.value ? 'dark' : 'light'}/bt${props.theme.network}.png`)
const wifi = computed(() => `/images/status/${darkTheme.value ? 'dark' : 'light'}/wifi${props.theme.wifi}.png`)
const battery = computed(() => `/images/status/${darkTheme.value ? 'dark' : 'light'}/btr${props.theme.battery}.png`)
</script>

<style scoped>
.status_right {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  top: 10px;
  right: 14px;
  z-index: 12;
}

.status_right > img {
  height: 9px;
}

.status_right > img + img {
  margin-left: 4px;
}

._clock {
  position: absolute;
  z-index: 11;
  font-size: 10px;
  font-weight: 500;
  top: 9px;
  left: 14px;
}
</style>
