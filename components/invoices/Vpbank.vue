<template>
  <div>
    <div class="_item _money">
      {{ money }} <span class="ml-1">₫</span>
    </div>

    <div class="_item _money-text capitalize">
      {{ moneyText }} việt nam đồng
    </div>

    <div class="_avatar">
      <img :src="bankAvatar" alt="bank avatar">
    </div>

    <div class="_name _item uppercase">
      {{ value.name }}
    </div>

    <div class="_item _name _account">
      {{ value.account }}
    </div>

    <div class="_item _time">
      {{ $dayjs().format('DD/MM/YYYY') }}
    </div>

    <div class="_item _content">
      {{ value.content }}
    </div>
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import VNnum2words from 'vn-num2words'
import banksData from 'assets/json/banks.json'

import { InvoiceEntity } from '~/entities/invoice.entities'
const props = defineProps<{
  value: InvoiceEntity
}>()

const money = computed(() => useMoneyFormat(Number(props.value.amount || 0)).replaceAll(',', ' '))

const moneyText = computed(
  () => String(VNnum2words(props.value.amount || 0))
)

const currentBank = useArrayFind(banksData, (item) => item.name === props.value.bank)
const bankAvatar = computed(() => `/images/icons/logo_${currentBank.value?.shortName.toLowerCase()}.png`)

</script>

<style scoped>
._item {
  @apply absolute flex items-center justify-end whitespace-pre-line;
  line-height: normal;
  left: 16px;
  font-weight: 500;
  right: 16px;
  max-width: calc(100% - 32px);
  font-size: 11px;
  color: lightgrey;
}

._item._money {
  justify-content: center;
  top: 71px;
  font-size: 26px;
  font-weight: 600;
  color: lightgrey;
}

._item._money span {
  color: #8f9799;
}
._item._money-text {
  justify-content: center;
  top: 105px;
  font-size: 8px;
  color: #8f9799;
}

._avatar {
  width: 28px;
  height: 28px;
  top: 185px;
  left: 16px;
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  padding: 2px;
  background: white;
}

._name._item {
  justify-content: revert;
  top: 186px;
  left: 48px;
  color: lightgrey;
}

._item._name._account {
  top: 200px;
  font-size: 10px;
  color: #8d9798;
}
._item._time {
  top: 245px;
  font-size: 10px;
}

._item._content {
  top: 279px;
  font-size: 10px;
}
</style>
