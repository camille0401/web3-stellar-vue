<template>
    <div class="htaiprogress-container flex justify-center items-center flex-wrap sm:flex-row lg:flex-row gap-10">
        <div class="htaiprogress-main ">
            <div class="flex justify-between gap-10 mb-2">
                <span class="font-medium text-zinc-500">Total Minted</span>
                <div>
                    <span class="font-medium text-slate-300">{{ percentage }}%</span>
                    <span class="font-medium text-zinc-500">&nbsp;({{ percentage }} / 5000000)</span>
                </div>
            </div>
            <div class="htaiprogress">
                <div class="htaiprogress-bar" :style="{ 'width': `${percentage}%` }"></div>
            </div>
        </div>
        <!-- <div class="htaiprogress-aside">
            <button class="btn text-slate-900 bg-linear-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group"
            disabled>
                {{ $t("join.button") }}
                <span
                    class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </button>
        </div> -->
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Big from 'big.js'

const range = {
    0: 6,
    10: 5,
    20: 4,
    30: 3,
    40: 2,
    50: 1,
    60: 0.5,
    70: 0.1,
    80: 0.05,
    90: 0.01,
};
const percentage = ref(0);
const initStep = 5;
const frequency = 1000;
let step = initStep;
let timer = null;

const percentHandle = () => {
    timer = setInterval(() => {
        if (percentage.value >= 100) {
            percentage.value = 100;
            step = initStep;
            if (timer) {
                clearTimeout(timer)
                timer = null
            }
        } else {
            if (percentage.value >= 95) {
                step = 0.001;
            }
            if (percentage.value >= 98) {
                step = 0.0001;
            }
            percentage.value = new Big(percentage.value).plus(new Big(step));
            step = range[(parseInt((percentage.value / 10).toString()) * 10).toString()];
        }
    }, frequency)
}

// onMounted(() => percentHandle())

onUnmounted(() => {
    if (timer) {
        clearTimeout(timer)
        timer = null
    }
})

</script>

<style>
.htaiprogress-container {
    /* display: flex;
    align-items: center;
    justify-content: center; */
    /* column-gap: 20px; */
    /* width: 100%; */
}

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