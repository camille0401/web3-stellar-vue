<template>
    <div class="grid grid-cols-1 gap-4">
        <div class="htai-netlist-box w-full m-auto">
            <div class="htai-net-btn flex justify-center items-center mb-2" @click="showNetList = true">
                <img :src="selectNet" class="w-[100%] h-[100%] mr-2" alt="">
                <span
                    class="material-symbols-outlined tracking-normal text-lg text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out">
                    stat_minus_1
                </span>
            </div>
            <ul v-show="showNetList" class="htai-netlist w-[280px] grid grid-cols-1 gap-2 bg-[#27262c] rounded-lg">
                <li class="w-full flex p-2 border-b border-solid border-zinc-500 text-left">Select a
                    Network</li>
                <li v-for="(net, netId) in netList" :key="netId"
                    class="w-full flex p-2 hover:bg-purple-500 cursor-pointer" @click="onSelectNet(netId)">
                    <img :src="net" alt="" class="h-[30px]">
                </li>
            </ul>
        </div>
        <p class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200">
            Deposit Amount
        </p>
        <div class="flex justify-between">
            <div class="flex gap-2">
                <img src="../images/web3/usdt.png" width="24" height="24" style="border-radius: 50%;">
                <span class="font-medium">USDT</span>
            </div>
            <div class="text-zinc-500">
                <span>Balance: </span>
                <span>{{ balance }}</span>
            </div>
        </div>
        <div class="form p-3 rounded-md bg-slate-800">
            <input v-model.number="inputValue" @input="handleInput" class="form-input htai-deposit-input w-full"
                placeholder="0.0">
            <div class="flex justify-end gap-2 mt-5">
                <div class="htai-value-btn rounded-2xl border border-purple-500 cursor-default"
                    @click="onSelectCount(25)">25%
                </div>
                <div class="htai-value-btn rounded-2xl border border-purple-500 cursor-default"
                    @click="onSelectCount(50)">50%
                </div>
                <div class="htai-value-btn rounded-2xl border border-purple-500 cursor-default"
                    @click="onSelectCount(70)">70%
                </div>
                <div class="htai-value-btn rounded-2xl border border-purple-500 cursor-default"
                    @click="onSelectCount(100)">MAX
                </div>
            </div>
        </div>
        <button class="button w-full p-2 rounded-md bg-purple-500 cursor-pointer" @click="onDeposit">deposit</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Big from 'big.js'
console.log(Big)
const netList = [
    "https://assets.pcswap.org/web/chains/svg/56-l.svg",
    "https://assets.pcswap.org/web/chains/svg/1-l.svg",
    "https://assets.pcswap.org/web/chains/svg/8453-l.svg",
    "https://assets.pcswap.org/web/chains/svg/42161-l.svg",
    "https://assets.pcswap.org/web/chains/svg/324-l.svg",
    "https://assets.pcswap.org/web/chains/svg/59144-l.svg",
    "https://assets.pcswap.org/web/chains/svg/1101-l.svg",
    "https://assets.pcswap.org/web/chains/svg/aptos-l.svg",
    "https://assets.pcswap.org/web/chains/svg/204-l.svg"
]

const selectNet = ref(netList[0])
const showNetList = ref(false)
const onSelectNet = (ind) => {
    selectNet.value = netList[ind];
    showNetList.value = false;
}
const balance = ref("10")
const inputValue = ref('0')
const handleInput = (event) => {
    const value = event.target.value
    console.log(value)
    // 正则表达式匹配只包含数字和小数点的值
    let number = value
    const reg = /^(\-)*(\d+)\.(\d+)$/;
    if (!reg.test(value)) {
        // 如果输入的值不匹配，则移除最后输入的非法字符
        number = value.replace(/[^0-9.]/g, '');
        // 可选：进一步处理以保证只有一个小数点等
        let dots = number.split('.');
        if (dots.length > 2) { // 防止出现多个小数点
            number = dots[0] + '.' + dots.slice(1).join('');
        }
    }
    inputValue.value = number
}

const onSelectCount = (percentage) => {
    const per = new Big(percentage).div(100);
    const value = new Big(balance.value).times(per).toString();
    console.log(value)
    inputValue.value = value;
}

const onDeposit = () => {
    if (!inputValue.value) {
        return false;
    }


}

</script>

<style lang="css" scoped>
.htai-netlist-box {
    position: relative;
    display: inline-block;
    z-index: 10;
}

.htai-netlist {
    position: absolute;
    top: 100%;
    left: 0;
    transition: all 1s ease-in-out;
    height: 550px;
    min-width: 100%;
}

.htai-deposit-input {
    font-weight: 500;
    outline: none;
    border: none;
    flex: 1 1 auto;
    background-color: initial;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0;
    text-align: right;
}

.htai-value-btn {
    font-size: 12px;
    padding: 2px 10px;
}
</style>