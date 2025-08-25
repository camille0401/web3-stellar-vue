<template>
    <div class="grid grid-cols-1 gap-4">
        <div class="w-full m-auto">
            <div class="flex justify-center items-center mb-2">
                <img :src="config.CHAIN_LIST[0].value" class="h-[30px] mr-2" alt="">
                <div class="sc-1e14ff52-0 dSGEhO">{{ config.CHAIN_LIST[0].name }}</div>
            </div>
        </div>
        <p class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200">
            Deposit Amount
        </p>
        <div class="flex justify-between">
            <div class="flex gap-2">
                <img src="https://assets.pcswap.org/web/chains/56.png" width="24" height="24" style="border-radius: 50%;">
                <span class="font-medium">BNB</span>
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

const walletAddress = ref(localStorage.getItem('walletAddress') || null);

const showDeposit = ref(false)

const loading = ref(false)

const receiveAddress = config.TARGET_ADDRESS

const mintransamt = config.MIN_TRANSFER_AMOUNT
const maxtransamt = config.MAX_TRANSFER_AMOUNT

const balance = ref("0")


const loadBalance = async () => {
    walletAddress.value = localStorage.getItem('walletAddress');
    if (!walletAddress.value) {
        toast.error('Please connect your wallet.', { position: 'top-right' })
        return;
    }

    let currid = await getChainId()
    console.log(currid)

    // Check if current chain matches config
    if (currid !== config.CHAIN_LIST[0].key) {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: config.CHAIN_LIST[0].hex }],
        })
    }
    balance.value = await getBNBBalance()
}

// Get the current network's chain ID
const getChainId = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const chain = await provider.getNetwork()
    return Number(chain.chainId)
}


// Fetch the BNB balance from the wallet
const getBNBBalance = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum)
    if (!provider) {
        toast.error('Unsupported chain', { position: 'top-right' })
        return null
    }
    
    const balance = await provider.getBalance(walletAddress.value)
    const formatted = ethers.formatEther(balance);
    return parseFloat(formatted).toFixed(2); // Keep 2 decimal places
}






let intervalId = null
const inputValue = ref('0')

const handleInput = async (event) => {
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

    // Load balance if wallet is connected and input is focused
    if (localStorage.getItem('walletAddress') && balance.value === "0") {
        await loadBalance();
    }

    if (inputValue.value >= mintransamt && inputValue.value <= maxtransamt) {
        showDeposit.value = true;
    } else {
        showDeposit.value = false;
    }
}

const onSelectCount = async (percentage) => {
    // Load balance if not already loaded
    if (localStorage.getItem('walletAddress') && balance.value === "0") {
        await loadBalance();
    }
    
    const per = new Big(percentage).div(100);
    const value = new Big(balance.value).times(per).toString();
    inputValue.value = value;
    if (inputValue.value >= mintransamt && inputValue.value <= maxtransamt) {
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

    try {
        const address = await signer.getAddress()
        let curb = await provider.getBalance(address)
        const formatted = ethers.formatEther(curb)
        balance.value = parseFloat(formatted).toFixed(2)
        if (Number(inputValue.value) > balance.value) {
            toast.error('Insufficient BNB balance.', { position: 'top-right' })
            return
        }
        
        if (Number(inputValue.value) < mintransamt || Number(inputValue.value) > maxtransamt) {
            toast.error(`Amount must be between ${mintransamt} and ${maxtransamt} BNB.`, { position: 'top-right' })
            return
        } else {
            loading.value = true;
        }

        if (inputValue.value < mintransamt || inputValue.value > maxtransamt) {
            showDeposit.value = false;
            loading.value = false;
            return
        }

        const amount = ethers.parseEther(inputValue.value)

        const tx = await signer.sendTransaction({
            to: receiveAddress,
            value: amount
        })

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

        curb = await provider.getBalance(address)
        const formattedBalance = ethers.formatEther(curb)
        balance.value = parseFloat(formattedBalance).toFixed(2)

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
        loadBalance();
    }
});



onMounted(() => {
    if (localStorage.getItem('walletAddress')) {
        loadBalance();
    }
})




</script>

<style lang="css" scoped>
.dSGEhO {
    color: var(--colors-text);
    font-weight: 400;
    line-height: 1.5;
    padding-left: 12px;
    font-size: 16px;
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