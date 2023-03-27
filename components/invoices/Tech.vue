<template>
  <div class="_tech">
    <div class="_item _name">
      {{ name }}
      <br>
      {{ money }}
    </div>

    <div class="_item _time">
      {{ $dayjs().format('D MMMM, YYYY') }}
    </div>

    <div class="_item _content">
      {{ value.content }}
    </div>

    <div class="_item _bank">
      {{ bank }}
    </div>

    <div class="_item _code">
      {{ value.code }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { InvoiceEntity } from '~/entities/invoice.entities'

const props = defineProps<{
  value: InvoiceEntity
}>()

const money = computed(() => 'VND ' + useMoneyFormat(Number(props.value.amount || 0)))
const name = computed(() => 'Chuyển thành công' + '\n tới ' + String(props.value.name).toUpperCase())
const bank = computed(() =>
  props.value.bank + '\n' + String(props.value.account).replace(/(\d{4})/g, '$1 ')
)

</script>

<style scoped>
._item {
  @apply absolute flex items-center justify-start whitespace-pre-line;
  line-height: normal;
  left: 16px;
  font-weight: 600;
  right: 16px;
  max-width: calc(100% - 32px);
  font-size: 11px;
  color: black;
}

._item._name {
  top: 195px;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
}

._time {
  top: 400px;
}
._content {
  top: 355px
}
._bank {
  top: 298px;
}
._code {
  top: 444px;
}
</style>
