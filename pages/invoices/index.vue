<template>
  <div class="flex justify-center">
    <div class="w-full max-w-[440px] shrink-0">
      <a-form layout="vertical">
        <a-form-item label="">
          <ul class="-m-1.5 flex flex-wrap items-center">
            <li
              v-for="(bank, index) in banks"
              :key="index"
              class="p-1.5"
            >
              <button
                class="rounded-md border-2"
                :class="{
                  'border-primary-500': bank.value === currentBank.value,
                }"
                @click="currentBank = bank"
              >
                <img :src="bank.logo" alt="logo" class="h-[50px]">
              </button>
            </li>
          </ul>
        </a-form-item>

        <p v-if="currentBank.label === 'VPBank'" class="text-rose-500">
          VPbank chỉ là tính năng thử nghiệm, hiện tại chỉ hỗ trợ một số ngân hàng nhất định.
        </p>

        <a-form-item v-if="['VCB', 'Tech'].includes(currentBank.label)" label="Trạng Thái">
          <a-switch v-model:checked="isSuccess" />
        </a-form-item>

        <template v-if="currentBank.label === 'Acb'">
          <a-form-item label="STK người gửi">
            <a-input v-model:value="form.senderAccount" />
          </a-form-item>
          <a-form-item label="Tên người gửi">
            <a-input v-model:value="form.sender" />
          </a-form-item>
        </template>

        <a-form-item label="Tên người nhận">
          <a-input v-model:value="form.name" />
        </a-form-item>

        <a-form-item label="Số tài khoản">
          <a-input v-model:value="form.account" />
        </a-form-item>

        <a-form-item label="Ngân hàng">
          <a-select
            ref="select"
            v-model:value="form.bank"
            show-search
          >
            <a-select-option
              v-for="bank in banksData"
              :key="bank.id"
              :value="bank.name"
            >
              {{ bank.name }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="Số tiền">
          <a-input v-model:value="form.amount" />
        </a-form-item>

        <a-form-item v-if="currentBank.label !== 'VPBank'" label="Mã giao dịch">
          <a-input v-model:value="form.code" />
        </a-form-item>

        <a-form-item label="Nội dung">
          <a-input v-model:value="form.content" />
        </a-form-item>
      </a-form>
    </div>

    <div class="w-full">
      <invoices-theme v-model:value="statusBar" />
    </div>

    <invoices-wrapper ref="billRef" :bank="bankImage" :theme="statusBar" class="h-[606px] w-[280px] shrink-0">
      <component :is="currentBank.component" :value="form" />
    </invoices-wrapper>

    <includes-teleport to="#title">
      Hoá Đơn Chuyển Khoản
    </includes-teleport>

    <includes-teleport to="#actions">
      <button class="mr-6 rounded-md bg-gradient-to-r from-rose-500 to-rose-600 px-4 py-2 font-semibold text-white shadow-lg shadow-rose-300" @click="copyImage">
        Lưu Lại
      </button>

      <button class="from-primary-500 to-primary-600 shadow-primary-300 rounded-md bg-gradient-to-r px-4 py-2 font-semibold text-white shadow-lg" @click="exportImage">
        Tải Xuống
      </button>
    </includes-teleport>
  </div>
</template>

<script lang="ts" setup>
import { toBlob } from 'html-to-image'
import download from 'downloadjs'
import { message } from 'ant-design-vue'
import { BankEntity, InvoiceEntity } from '~/entities/invoice.entities'
import { InvoicesVcb, InvoicesTech, InvoicesAcb, InvoicesAgribank, InvoicesBidv, InvoicesVpbank } from '#components'
import banksData from 'assets/json/banks.json'
import { IPhoneStatus } from '~/entities/status.entities'

const form = reactive<InvoiceEntity>({
  amount: '',
  account: '',
  name: '',
  code: '',
  content: '',
  bank: '',
  sender: '',
  senderAccount: ''
})

const banks = shallowRef<BankEntity[]>([
  {
    label: 'VCB',
    value: '/images/banks/vcb_dark.jpg',
    logo: 'https://api.vietqr.io/img/VCB.png',
    component: InvoicesVcb,
    fail: '/images/banks/vcb2_dark.jpg'
  },
  {
    label: 'Tech',
    value: '/images/banks/tech_light.jpg',
    logo: 'https://api.vietqr.io/img/TCB.png',
    component: InvoicesTech,
    fail: '/images/banks/tech2_light.jpg'
  },
  {
    label: 'Acb',
    value: '/images/banks/acb_dark.png',
    logo: 'https://api.vietqr.io/img/ACB.png',
    component: InvoicesAcb,
    fail: '/images/banks/acb_dark.png'
  },
  {
    label: 'Agribank',
    value: '/images/banks/agribank_light.jpeg',
    logo: 'https://api.vietqr.io/img/VBA.png',
    component: InvoicesAgribank,
    fail: '/images/banks/agribank_light.jpeg'
  },
  {
    label: 'BIDV',
    value: '/images/banks/bidv_light.jpg',
    logo: 'https://api.vietqr.io/img/BIDV.png',
    component: InvoicesBidv,
    fail: '/images/banks/bidv_light.jpg'
  },
  {
    label: 'VPBank',
    value: '/images/banks/vpbank_dark.jpeg',
    logo: 'https://api.vietqr.io/img/VPB.png',
    component: InvoicesVpbank,
    fail: '/images/banks/vpbank_dark.jpeg'
  }
])

const currentBank = shallowRef(banks.value[0])
const [isSuccess] = useToggle(true)
const bankImage = computed(() => {
  if (isSuccess.value) {
    return currentBank.value.value
  }

  return currentBank.value.fail
})

/**
 * Status
 */
const statusBar = reactive<IPhoneStatus>({
  network: 1,
  wifi: 1,
  battery: 1
})

/**
 * Dowloadng image
 */
const billRef = ref()
const { width, height } = useElementSize(billRef)

const copyImage = async () => {
  if (!billRef.value) {
    return
  }

  const _file = await toBlob(billRef.value.$el, {
    canvasWidth: 600,
    canvasHeight: 600 * (height.value / width.value)
  })
  await navigator.clipboard.write([
    new ClipboardItem({
      'image/png': _file!
    })
  ])
  message.success('Đã lưu vào bộ nhớ tạm')
}
const exportImage = async () => {
  if (!billRef.value) {
    return
  }

  const _file = await toBlob(billRef.value.$el, {
    canvasWidth: 600,
    canvasHeight: 600 * (height.value / width.value)
  })
  if (_file) {
    download(_file, 'bill.png')
  }
}

</script>

<style scoped></style>
