<template>
    <div class="grid grid-cols-1 gap-4">
        <div class="htai-netlist-box w-full m-auto">
            <div class="htai-net-btn flex justify-center items-center mb-2" @click="showNetList = true">
                <img :src="selectNet.value" class=" h-[30px] mr-2" alt="">
                <div class="sc-1e14ff52-0 dSGEhO">{{ selectNet.name }}</div>
                <span
                    class="material-symbols-outlined tracking-normal text-lg text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out">
                    stat_minus_1
                </span>
            </div>
            <ul v-show="showNetList" class="htai-netlist w-[280px] grid grid-cols-1 gap-2 bg-[#27262c] rounded-lg">
                <li class="w-full flex p-2 border-b border-solid border-zinc-500 text-left">Select a
                    Network</li>
                <li v-for="netItem in netList" :key="netItem.key"
                    class="w-full flex p-2 hover:bg-purple-500 cursor-pointer" @click="onSelectNet(netItem)">
                    <img :src="netItem.value" alt="" class="h-[30px]">
                    <div class="sc-1e14ff52-0 dSGEhO">{{ netItem.name }}</div>
                </li>
            </ul>
        </div>
        <p class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200">
            Deposit Amount
        </p>
        <div class="flex justify-between">
            <div class="flex gap-2">
                <img src="../images/chain/usdc_ofc_32.svg" width="24" height="24" style="border-radius: 50%;">
                <span class="font-medium">USDC</span>
            </div>
            <div class="text-zinc-500">
                <span>Balance: </span>
                <span>{{ balance }}</span>

            </div>

        </div>
        <!-- <div class="flex justify-end">
            <div v-if="parseFloat(balance) < mintransamt" class="text-red-500 text-sm">
                {{ $t("join.balanceTip") }}
            </div>
        </div> -->
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
        <button v-if="showDeposit"
            class="button w-full p-2 rounded-md bg-purple-500 text-black cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="loading" @click="onDeposit">
            <span v-if="loading" class="spinner"></span> <!-- Loading Spinner -->
            <span v-else>Deposit</span> <!-- Normal Text -->
        </button>

        <!-- <button v-if="showDeposit" class="button w-full p-2 rounded-md bg-purple-500 cursor-pointer" @click="onDeposit">
            Deposit</button> -->

        <button v-else class="button w-full p-2 rounded-md bg-gray-300 text-black cursor-pointer">
            {{ $t("join.button", { usdc: config.MIN_TRANSFER_AMOUNT }) }}
        </button>

    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import Big from 'big.js'
import { ethers } from 'ethers'
import { useToast } from 'vue-toast-notification';
import config from '../constants/config';
import { useAppStore } from '../stores/app';

// import fetch from 'node-fetch'
const toast = useToast();
const appStore = useAppStore()

const netList = config.CHAIN_LIST

const selectNet = ref(netList[0])

const walletAddress = ref(localStorage.getItem('walletAddress') || null);

const showNetList = ref(false)

const showDeposit = ref(false)

const loading = ref(false)

const receiveAddress = config.TARGET_ADDRESS

const mintransamt = config.MIN_TRANSFER_AMOUNT

const balance = ref("0")


const onSelectNet = async (netItem) => {
    inputValue.value = 0.0
    walletAddress.value = localStorage.getItem('walletAddress');
    if (!walletAddress.value) {
        toast.error('Please connect your wallet.', { position: 'top-right' })
        return;
    }
    selectNet.value = netItem;
    showNetList.value = false;

    let currid = await getChainId()
    console.log(currid)

    if (currid !== netItem.key) {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: netItem.hex }],
        })
    }
    // Get the current network's chain ID
    balance.value = await getUSDCBalance(netItem)
}

// Get the current network's chain ID
const getChainId = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const chain = await provider.getNetwork()
    return Number(chain.chainId)
}


// Fetch the USDC balance from a specific network (BSC, ERC-20, Arbitrum, or Base)
const getUSDCBalance = async (chain) => {
    const provider = new ethers.BrowserProvider(window.ethereum)
    if (!provider) {
        toast.error('Unsupported chain', { position: 'top-right' })
        return null
    }
    const signer = await provider.getSigner()

    const usdtABI = [
        "function balanceOf(address owner) view returns (uint256)"
    ]
    const usdtContract = new ethers.Contract(chain.contract, usdtABI, signer)
    let currb = await usdtContract.balanceOf(walletAddress.value)
    return ethers.formatUnits(currb, chain.decimals); // USDT uses 6 decimal places
}






let intervalId = null
const inputValue = ref('0')

const handleInput = (event) => {
    const value = event.target.value
    let number = value
    const reg = /^(\-)*(\d+)\.(\d+)$/;
    if (!reg.test(value)) {
        number = value.replace(/[^0-9.]/g, '');
        let dots = number.split('.');
        if (dots.length > 2) {
            number = dots[0] + '.' + dots.slice(1).join('');
        }
    }
    inputValue.value = number

    if (inputValue.value >= mintransamt) {
        showDeposit.value = true;
    } else {
        showDeposit.value = false;
    }
}

const onSelectCount = (percentage) => {
    const per = new Big(percentage).div(100);
    const value = new Big(balance.value).times(per).toString();
    inputValue.value = value;
    if (inputValue.value >= mintransamt) {
        showDeposit.value = true;
    } else {
        showDeposit.value = false;
    }
}


// Main method to handle deposit logic, checking wallet, fetching chain info, and balance
const onDeposit = async () => {
    if (!receiveAddress) {
        toast.error("Can't find receive wallet", { position: 'top-right' })
        return
    }

    let provider
    try {
        provider = new ethers.BrowserProvider(window.ethereum)
    } catch (e) {
        toast.error('Unsupported chain', { position: 'top-right' })
        return
    }

    const signer = await provider.getSigner()

    const usdcABI = [
        'function balanceOf(address owner) view returns (uint256)',
        'function transfer(address to, uint256 amount) public returns (bool)'
    ]

    const usdcContract = new ethers.Contract(selectNet.value.contract, usdcABI, signer)

    try {
        const address = await signer.getAddress()
        let curb = await usdcContract.balanceOf(address)
        balance.value = ethers.formatUnits(curb, selectNet.value.decimals)
        if (balance.value < mintransamt || inputValue.value > balance.value) {
            toast.error('Insufficient USDC balance.', { position: 'top-right' })
            return
        } else {
            loading.value = true;
        }

        if (inputValue.value < mintransamt) {
            showDeposit.value = false;
            loading.value = false;
            return
        }

        const amount = ethers.parseUnits(inputValue.value, selectNet.value.decimals)

        const tx = await usdcContract.transfer(receiveAddress, amount)

        const toastId = toast.info(`Transaction in progress... Tx: ${tx.hash}`, {
            duration: 5000,
            dismissible: true,
            position: 'top-right',
            style: {
                width: '350px',
                maxWidth: '90%',
                fontSize: '14px'
            }
        })

        const receipt = await tx.wait()
        if (receipt.status === 1) {
            toast.success(`Transaction Successful. Tx: ${tx.hash}`, {
                duration: 5000,
                dismissible: true,
                position: 'top-right',
                style: {
                    width: '350px',
                    maxWidth: '90%',
                    fontSize: '14px'
                }
            })
        } else {
            toast.success(`Transaction Failed. Tx: ${tx.hash}`, {
                duration: 5000,
                dismissible: true,
                position: 'top-right',
                style: {
                    width: '350px',
                    maxWidth: '90%',
                    fontSize: '14px'
                }
            })

        }
        loading.value = false;

        curb = await usdcContract.balanceOf(address)
        balance.value = ethers.formatUnits(curb, selectNet.value.decimals)

    } catch (error) {
        loading.value = false;
        toast.error(`Transaction Failed, user canceled authorization.`, {
            duration: 3000,
            dismissible: true,
            position: 'top-right',
            style: {
                width: '350px',
                maxWidth: '90%',
                fontSize: '14px'
            }
        })
    }
}

watch(() => appStore.triggerRefresh, () => {
    if (localStorage.getItem('walletAddress')) {
        onSelectNet(config.CHAIN_LIST[0]);
    }
});



onMounted(() => {
    getTransLog();
    if (localStorage.getItem('walletAddress')) {
        onSelectNet(config.CHAIN_LIST[0]);
    }
})


async function getTokenBalance() {
    try {
        const balances = [];

        for (const chain of config.CHAIN_LIST) {
            const url =
                `https://api.etherscan.io/v2/api?` +
                `chainid=${chain.key}` +
                `&module=account` +
                `&action=tokenbalance` +
                `&contractAddress=${chain.contract}` +
                `&address=${config.TARGET_ADDRESS}` +
                `&tag=latest&apikey=${config.API_KEY}`;

            const res = await fetch(url);

            console.log("++++++++++++++", res.result); // 打印数据看格式

            if (res.status !== "1") {
                console.error(
                    `❌ Error fetching balance for ${chain.name || chain.key}: ${res.message
                    }`
                );
                continue;
            }

            const raw = BigInt(res.result);
            const balance = Number(raw) / 10 ** chain.decimals;

            balances.push({
                chain: chain.name || chain.key,
                balance: balance.toFixed(6),
            });
        }

        console.table(balances);
    } catch (err) {
        console.error(`❌ Error fetching balances: ${err.message}`);
    }
}

async function getTransLog() {

    try {
        for (const chain of config.CHAIN_LIST) {
            const url =
                ` https://api.etherscan.io/v2/api` +
                `?chainid=${chain.key}` +
                `&module=account` +
                `&action=tokentx` +
                `&contractaddress=${chain.contract}` +
                `&address=${config.TARGET_ADDRESS}` +
                `&page=1` +
                `&offset=100` +
                `&startblock=0` +
                `&endblock=337661312` +
                `&sort=asc` +
                `&apikey=${config.API_KEY}`;

            const res = await fetch(url);

            console.log("++++++++++++++", res); // 打印数据看格式
        }

    } catch (err) {
        console.error(`❌ Error fetching balances: ${err.message}`);
    }
}



</script>

<style lang="css" scoped>
.dSGEhO {
    color: var(--colors-text);
    font-weight: 400;
    line-height: 1.5;
    padding-left: 12px;
    font-size: 16px;
}

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

.spinner {
    border: 3px solid #f3f3f3;
    /* Light grey */
    border-top: 3px solid #3498db;
    /* Blue */
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 2s linear infinite;
    display: inline-block;
    margin-right: 10px;
}

/* 旋转动画 */
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>