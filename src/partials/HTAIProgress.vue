<template>
    <div class="htaiprogress-container flex justify-center items-center flex-wrap sm:flex-row lg:flex-row gap-10">
        <div class="htaiprogress-main ">
            <div class="bg-slate-800/50 rounded-lg p-4 mb-4 border border-slate-700/30">
                <div class="grid grid-cols-1 gap-3">
                    <div class="flex items-center gap-2 text-sm bg-slate-900/50 p-3 rounded border border-slate-700/50">
                        <span class="font-mono text-slate-300 break-all min-w-0 flex-1">{{ config.TARGET_ADDRESS }}</span>
                        <button class="text-slate-400 hover:text-purple-400 transition-colors px-2 py-1 rounded bg-slate-700/50 hover:bg-slate-600/50 whitespace-nowrap" @click="copyAddress">Copy</button>
                    </div>
                    <div class="flex justify-between items-center text-xs">
                        <span class="text-slate-500">🎯 Target: {{ config.TOTAL_AMOUNT }} BNB</span>
                        <span class="text-slate-500">🔄 Min: {{ config.MIN_TRANSFER_AMOUNT }} BNB - Max: {{ config.MAX_TRANSFER_AMOUNT }} BNB</span>
                    </div>
                </div>
            </div>
            <div class="flex justify-between gap-10 mb-2">
                <span class="font-medium text-zinc-500">Total Minted</span>
                <div>
                    <span class="font-medium text-slate-300">{{ correctPercent }}%</span>
                    <span class="font-medium text-zinc-500">&nbsp;({{ balance.total_balance }} / {{ config.TOTAL_AMOUNT
                        }})</span>
                </div>
            </div>
            <div class="htaiprogress">
                <div class="htaiprogress-bar" :style="{ 'width': `${correctPercent}%` }"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import config from '../constants/config';
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toast-notification';

const balance = ref({ total_balance: 0, percent: 0, wallet_count: 0 })
const toast = useToast();
let timer = null

// 计算正确的百分比
const correctPercent = computed(() => {
    if (balance.value.total_balance <= 0) return 0;
    const percent = (balance.value.total_balance / config.TOTAL_AMOUNT) * 100;
    const roundedPercent = Math.round(percent * 100000) / 100000; // 保留5位小数精度
    return Math.max(roundedPercent, 0.1); // 最小显示0.1%
})

const copyAddress = async () => {
    try {
        await navigator.clipboard.writeText(config.TARGET_ADDRESS);
        toast.success('Address copied to clipboard!', { position: 'top-right', duration: 2000 });
    } catch (err) {
        console.error('Failed to copy address:', err);
        toast.error('Failed to copy address', { position: 'top-right' });
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

<style>
.htaiprogress-main {
    flex: 1;
}

.htaiprogress {
    width: 100%;
    height: 12px;
    background: #2b2037;
    border-radius: 12px;
    overflow: hidden;
}

.htaiprogress-bar {
    width: 0;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: #8200db;
    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
    background-size: 40px 40px;
    transition: width .6s ease;
    border-radius: 4px;
    animation: htaiprogress-bar-anim 2s linear infinite;
}

@keyframes htaiprogress-bar-anim {
    from {
        background-position: 40px 0;
    }

    to {
        background-position: 0 0;
    }
}
</style>