<template>
  <div>
    <div class="_item _money">
      {{ money }}
    </div>

    <div class="_item _money-text">
      {{ moneyText }} đồng
    </div>

    <div class="_item _date">
      {{ $dayjs().format('DD/MM/YYYY - HH:mm:ss') }}
    </div>

    <div class="_item _create_day">
      {{ $dayjs().format('DD/MM/YYYY') }}
    </div>

    <div class="_item _name uppercase">
      {{ value.name }}
    </div>

    <div class="_item _bank uppercase">
      {{ value.bank }}
    </div>

    <div class="_item _account uppercase">
      {{ value.account }}
    </div>

    <div class="_item _sender uppercase">
      {{ value.sender }}
    </div>

    <div class="_item _sender-account uppercase">
      {{ value.senderAccount }}
    </div>
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import VNnum2words from 'vn-num2words'
import { InvoiceEntity } from '~/entities/invoice.entities'
const props = defineProps<{
  value: InvoiceEntity
}>()

const money = computed(() => useMoneyFormat(Number(props.value.amount || 0)) + ' VND')
const moneyText = computed(
  () => String(VNnum2words(props.value.amount || 0))
    .toLowerCase()
    // firrst letter uppercase
    .replace(/^\w/, (c) => c.toUpperCase())
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
  right: 25px;
  font-weight: 400;
  color: #343e4a;
}
._item._money {
  top: 115px;
  font-weight: 700;
  right: 0;
  left: 0;
  justify-content: center;
  color: #0c6cc2;
  font-size: 16px;
}
._item._money-text {
  top: 140px;
  font-weight: 400;
  right: 0;
  left: 0;
  justify-content: center;
  font-size: 11px;
}

._item._date {
  top: 210px;
  text-transform: capitalize;
}

._item._create_day {
  top: 240px;
}

._name {
  top: 420px;
  font-size: 12px;
}

._bank {
  top: 433px;
  font-size: 12px;
}

._item._account {
  top: 510px;
  font-size: 12px;
}

._item._sender {
  justify-content: flex-start;
  top: 333px;
  left: 35px;
  font-size: 13px;
  color: #213e9b;
}

._item._sender-account {
  justify-content: flex-start;
  top: 350px;
  left: 35px;
  font-size: 13px;
  color: #213e9b;
  font-weight: bold;
}
</style>
