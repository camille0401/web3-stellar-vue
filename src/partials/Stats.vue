<script setup>

import { ref, onMounted, onBeforeUnmount } from 'vue'
import Counter from './Counter.vue'
import config from '../constants/config';
import translog from "../../public/translog.json"
import balance from "../../public/walletbalance.json"


const wallettrans = ref(0)
const stats = ref([
  {
    number: config.TOTAL_AMOUNT_UNIT,
    suffix: 'M',
    text: 'join.module1',
    preffix: '$',
  },
  {
    number: balance.trans_amount,
    suffix: '',
    text: 'join.module2',
    preffix: '$',
  },
  {
    number: translog.trans_wallat_address.length,
    suffix: '',
    text: 'join.module3',
    preffix: '',
  },
  {
    number: wallettrans,
    suffix: '',
    text: 'join.module4',
    preffix: '$',
  },
])



const getTransInfo = ()=>{
// Get the wallet address from localStorage
const targetWallet = localStorage.getItem('walletAddress');
// Use a ternary expression to determine the value
wallettrans.value = targetWallet && targetWallet.trim()
    ? (translog.trans_wallat_address.find(entry => entry.wallet === targetWallet)?.value ?? 0)
    : 0;
  
}

onMounted(() => {
    getTransInfo();
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
              {{ stat.preffix }} <Counter :number="stat.number" /> {{ stat.suffix }}
            </h4>
            <p class="text-sm text-zinc-500">{{ $t(stat.text) }}</p>
          </div>
        </template>

      </div>

    </div>
  </section>
</template>
