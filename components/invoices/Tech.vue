<template>
  <div class="_tech">
    <div class="_item _name">
      {{ name }}
      <br>
      {{ money }}
    </div>

    <div class="_body">
      <div class="_doc">
        <div class="_label">
          Thông tin chi tiết
        </div>

        <div class="_content _bank">
          {{ value.bank }}
          <br>
          {{ account }}
        </div>
      </div>

      <div class="_doc">
        <div class="_label">
          Lời nhắn
        </div>

        <div class="_content _bank">
          {{ value.content }}
        </div>
      </div>

      <div class="_doc">
        <div class="_label">
          Ngày thực hiện
        </div>

        <div class="_content _bank">
          {{ $dayjs().format('D MMMM, YYYY') }}
        </div>
      </div>

      <div class="_doc">
        <div class="_label">
          Mã giao dịch
        </div>

        <div class="_content _bank">
          {{ value.code }}
        </div>
      </div>
    </div>

    <!--    <div class="_item _time">-->
    <!--      {{ $dayjs().format('D MMMM, YYYY') }}-->
    <!--    </div>-->

    <!--    <div class="_item _content">-->
    <!--      {{ value.content }}-->
    <!--    </div>-->

    <!--    <div class="_item _bank">-->
    <!--      {{ bank }}-->
    <!--    </div>-->

    <!--    <div class="_item _code">-->
    <!--      {{ value.code }}-->
    <!--    </div>-->
  </div>
</template>

<script lang="ts" setup>
import { InvoiceEntity } from '~/entities/invoice.entities'

const props = defineProps<{
  value: InvoiceEntity
}>()

const money = computed(() => 'VND ' + useMoneyFormat(Number(props.value.amount || 0)))
const name = computed(() => 'Chuyển thành công' + '\n tới ' + String(props.value.name).toUpperCase())
const account = computed(() =>
  String(props.value.account).replace(/(\d{4})/g, '$1 ')
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

._body {
  left: 15px;
  right: 15px;
  position: absolute;
  height: 240px;
  top: 282px;
  line-height: normal;
  font-weight: 600;
  font-size: 10px;
  color: black;
}

._label {
  color: #555554;
  margin-bottom: 5px;
}

._doc + ._doc {
  margin-top: 15px;
}
</style>
