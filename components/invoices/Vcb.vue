<template>
  <div>
    <div class="_bank _item">
      {{ bank }}
    </div>

    <div class="_item _name">
      {{ value.name }}
    </div>

    <div class="_item _account">
      {{ value.account }}
    </div>

    <div class="_item _code">
      {{ value.code }}
    </div>
    <div class="_item _content">
      {{ value.content }}
    </div>

    <div class="_item _money">
      {{ money }}
    </div>

    <div class="_item _date">
      {{ $dayjs().format('HH:mm dddd DD/MM/YYYY') }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { InvoiceEntity } from '~/entities/invoice.entities'

const props = defineProps<{
  value: InvoiceEntity
}>()

const money = computed(() => useMoneyFormat(Number(props.value.amount || 0)) + ' VND')

const bank = computed(() => props.value.bank.replace(/\s(TMCP)\s/g, ' ')
  .split(' ')
  .map((item: string) => item.charAt(0).toUpperCase() + item.slice(1))
  .join(' ')
  .replace('Hàng', 'hàng')
  .replace(/Việt Nam$/, '')
)

</script>

<style scoped>
._bank {
  top: 303px;
  right: 10px;
  width: 140px;
  height: 51px;
  font-size: 11px;
  max-width: 160px;
  font-weight: 500;
  line-height: normal;
}

._item {
  @apply absolute flex items-center justify-end whitespace-pre-line text-right;
  font-size: 11px;
  right: 10px;
  font-weight: 500;
}

._name {
  top: 226px;
  width: 150px;
  height: 39px;
}

._account {
  top: 265px;
  width: 150px;
  height: 38px;
}

._code {
  top: 353px;
  width: 140px;
  height: 39px;
  max-width: 200px;
}

._content {
  top: 392px;
  height: 50px;
}

._item._money {
  top: 170px;
  right: 0;
  left: 0;
  justify-content: center;
  color: #7cc40c;
  font-size: 16px;
}

._item._date {
  top: 195px;
  right: 0;
  left: 0;
  text-transform: capitalize;
  justify-content: center;
  color: #8c959b;
  font-size: 8px
}
</style>
