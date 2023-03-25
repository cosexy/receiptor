<template>
  <div>
    <a-divider orientation="left">
      Tuỳ Chỉnh Giao Diện
    </a-divider>

    <div class="px-7">
      <a-form layout="vertical">
        <a-form-item label="Tình trạng pin">
          <div class="_status_btr flex items-center">
            <button
              v-for="index in 3"
              :key="index"
              class="mr-3 cursor-pointer transition"
              :class="{
                'opacity-50': _value.battery !== index,
              }"
              @click="_value.battery = index"
            >
              <img :src="`/images/status/light/btr${index}.png`" alt="">
            </button>
          </div>
        </a-form-item>

        <a-form-item label="Cột sóng">
          <div class="_status_btr flex items-center">
            <button
              v-for="index in 4"
              :key="index"
              class="mr-3 cursor-pointer transition"
              :class="{
                'opacity-50': _value.network !== index,
              }"
              @click="_value.network = index"
            >
              <img :src="`/images/status/light/bt${index}.png`" alt="">
            </button>
          </div>
        </a-form-item>

        <a-form-item label="Wifi">
          <div class="_status_btr flex items-center">
            <button
              v-for="index in 3"
              :key="index"
              class="mr-3 cursor-pointer transition"
              :class="{
                'opacity-50': _value.wifi !== index,
              }"
              @click="_value.wifi = index"
            >
              <img :src="`/images/status/light/wifi${index}.png`" alt="">
            </button>
          </div>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IPhoneStatus } from '~/entities/status.entities'

const props = defineProps<{
  value: IPhoneStatus
}>()

const _value = ref(props.value)

// emits for v-model
// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (event: 'update:value', value: IPhoneStatus): void
}>()

watchEffect(() => {
  emits('update:value', _value.value)
})
</script>

<style scoped>
._status_btr button {
  height: 23px;
  padding: 3px;
  border-radius: 4px;
}

._status_btr button img {
  height: 100%;
  width: auto;
}
</style>
