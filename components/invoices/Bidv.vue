<template>
  <div class="_overlay">
    <div class="_body">
      Quý khách đã chuyển thành công số tiền
      <span class="_money">{{ money }}</span>
      đến số tài khoản
      <span class="_account">{{ value.account }}</span>
      /
      <span class="_name">{{ value.name }}</span>
      /
      <span class="_bank">{{ value.bank }}</span>
      vào lúc
      <span class="_time">{{ $dayjs().format('DD/MM/YYYY HH:mm:ss') }}</span>.
      Nội dung: {{ value.content }}
    </div>
    <img class="_layer_1" src="/images/bidv_layer_1.jpg" alt="">

    <div class="_code">
      Số tham chiếu: <span>{{ value.code }}</span>
    </div>

    <img class="_layer_2" src="/images/bidv_layer_2.jpg" alt="">
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
._overlay {
  position: absolute;
  top: 115px;
  height: 265px;
  left: 25px;
  right: 25px;
  color: #3b3b48;
}

._overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 8px 0;
}

._body {
  line-height: 16px;
  font-weight: 500;
  font-size: 11px;
}

._body span {
  color: #006ab3;
}

._layer_1 {
  width: 50px;
}

._code {
  font-size: 10px;
  color: #90959b;
}

._code span {
  color: black;
  font-weight: 500;
}

._layer_2 {
  width: 180px;
}
</style>
