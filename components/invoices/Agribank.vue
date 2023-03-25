<template>
  <div>
    <div class="_item _money">
      {{ money }}
    </div>

    <div class="_item _account">
      {{ value.account }}
    </div>

    <div class="_item _name uppercase">
      {{ value.name }}
    </div>

    <div class="_item _code">
      {{ value.code }}
    </div>

    <div class="_item _bank">
      {{ value.bank }}
    </div>

    <div class="_item _time">
      {{ $dayjs().format('HH:mm DD/MM/YYYY') }}
    </div>

    <div class="_item _content">
      <div class="_overlay relative">
        {{ value.content }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { InvoiceEntity } from '~/entities/invoice.entities'

const props = defineProps<{
  value: InvoiceEntity
}>()

const money = computed(() => useMoneyFormat(Number(props.value.amount || 0)) + ' VND')

</script>

<style scoped>
._item {
  @apply absolute flex items-center justify-start whitespace-pre-line;
  line-height: normal;
  left: 19px;
  font-weight: 500;
  right: 19px;
  max-width: calc(100% - 32px);
  font-size: 11px;
  color: #4a4a4a;
}

._item._money {
  top: 200px;
  font-size: 17px;
  font-weight: 600;
  color: white;
}

._item._account {
  top: 254px;
}

._item._name {
  top: 301px;
  color: #e0731a;
}

._item._code {
  top: 348px;
}

._item._bank {
  top: 395px;
}

._item._time {
  top: 490px;
}

._item._content {
  top: 537px;
}

._overlay {
  z-index: 1;
}

._overlay::before {
  @apply absolute;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  opacity: 0.5;
}
</style>
