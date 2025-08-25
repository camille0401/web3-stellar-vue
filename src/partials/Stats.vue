<script setup>

import { ref, onMounted, onUnmounted, watch } from 'vue'
import Counter from './Counter.vue'
import config from '../constants/config';
import { computed } from 'vue';
import axios from 'axios'
import { useAppStore } from '../stores/app';


const wallettrans = ref(0.0)
const balance = ref({ total_balance: 0, percent: 0, wallet_count: 0 })
let timer = null
const appStore = useAppStore()

const stats = computed(() => [
  {
    number: config.TOTAL_AMOUNT_UNIT,
    suffix: ' BNB',
    text: 'join.module1',
    preffix: '',
  },
  {
    number: balance.value.total_balance,
    suffix: ' BNB',
    text: 'join.module2',
    preffix: '',
  },
  {
    number: balance.value.wallet_count,
    suffix: '',
    text: 'join.module3',
    preffix: '',
  },
  {
    number: wallettrans.value,
    suffix: ' BNB',
    text: 'join.module4',
    preffix: '',
  },
])

watch(() => appStore.triggerRefresh, () => {
  console.log("guale");
  getTransInfo();
});

const getTransInfo = async () => {
  // Get the wallet address from localStorage
  const targetWallet = localStorage.getItem('walletAddress');
  // Use a ternary expression to determine the value
  if (targetWallet) {
    const res = await axios.get(`${config.API_BASE_URL}/logs/wallet`, {
      params: { address: targetWallet }
    })
    if (res.data.flag === 1) {
      if (res.data.data) {
        wallettrans.value = res.data.data.map(i => i.value).reduce((total, val) => total + parseFloat(val), 0);
      }
    } else {
      wallettrans.value = 0
    }
  }
}


const getBanlanceInfo = async () => {
  // Use a ternary expression to determine the value
  const res = await axios.get(`${config.API_BASE_URL}/balance/total`)
  if (res.data.flag === 1) {
    if (res.data.data) {
      balance.value = res.data.data;
    }
  }
}

onMounted(() => {
  getTransInfo();
  getBanlanceInfo();
  timer = setInterval(getBanlanceInfo, 30000) // 每 30 秒刷新一次
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
})


</script>

<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div
        class="max-w-sm mx-auto grid gap-12 sm:grid-cols-2 md:grid-cols-4 md:-mx-5 md:gap-0 items-start md:max-w-none">

        <template v-for="stat in stats">
          <div
            class="relative text-center md:px-5 after:hidden md:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-8 after:border-l after:border-zinc-300 after:border-dashed last:after:hidden">
            <h4 class="font-inter-tight text-2xl md:text-3xl font-bold tabular-nums mb-2">
              {{ stat.preffix }}
              <Counter :number="stat.number" /> {{ stat.suffix }}
            </h4>
            <p class="text-sm text-zinc-500">{{ $t(stat.text) }}</p>
          </div>
        </template>

      </div>

    </div>
  </section>
</template>
