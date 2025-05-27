<template>
    <div class="htaiprogress-container flex justify-center items-center flex-wrap sm:flex-row lg:flex-row gap-10">
        <div class="htaiprogress-main ">
            <div class="flex justify-between gap-10 mb-2">
                <span class="font-medium text-zinc-500">Total Minted</span>
                <div>
                    <span class="font-medium text-slate-300">{{ translog.percentage }}%</span>
                    <span class="font-medium text-zinc-500">&nbsp;({{ translog.trans_amount }} / {{ config.TOTAL_AMOUNT }})</span>
                </div>
            </div>
            <div class="htaiprogress">
                <div class="htaiprogress-bar" :style="{ 'width': `${translog.percentage}%` }"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import config from '../constants/config';
import translog from "../../public/walletbalance.json"

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