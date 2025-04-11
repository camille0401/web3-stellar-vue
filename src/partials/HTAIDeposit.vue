<template>
    <div class="grid grid-cols-1 gap-4">
        <div class="htai-netlist-box w-full m-auto">
            <div class="htai-net-btn flex justify-center items-center mb-2" @click="showNetList = true">
                <img :src="selectNet" class=" h-[80%] mr-2" alt="">
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
        <button class="button w-full p-2 rounded-md bg-purple-500 cursor-pointer disabled" @click="onDeposit">SOON</button>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Big from 'big.js'
<<<<<<< HEAD
=======
import { ethers } from 'ethers'
import { useToast } from 'vue-toast-notification';
const toast = useToast();
>>>>>>> 1cbf9603be6cdafe0bf9c556d89a3b762bc48d19
const netList = [
    "https://assets.pcswap.org/web/chains/svg/1-l.svg",
    "https://assets.pcswap.org/web/chains/svg/56-l.svg",
    "https://assets.pcswap.org/web/chains/svg/8453-l.svg",
    "https://assets.pcswap.org/web/chains/svg/42161-l.svg",
<<<<<<< HEAD
 
=======
    // "https://assets.pcswap.org/web/chains/svg/324-l.svg",
    // "https://assets.pcswap.org/web/chains/svg/59144-l.svg",
    // "https://assets.pcswap.org/web/chains/svg/1101-l.svg",
    // "https://assets.pcswap.org/web/chains/svg/aptos-l.svg",
    // "https://assets.pcswap.org/web/chains/svg/204-l.svg"
>>>>>>> 1cbf9603be6cdafe0bf9c556d89a3b762bc48d19
]

// "https://assets.pcswap.org/web/chains/svg/324-l.svg",
//     "https://assets.pcswap.org/web/chains/svg/59144-l.svg",
//     "https://assets.pcswap.org/web/chains/svg/1101-l.svg",
//     "https://assets.pcswap.org/web/chains/svg/aptos-l.svg",
//     "https://assets.pcswap.org/web/chains/svg/204-l.svg"
const selectNet = ref(netList[0])
const showNetList = ref(false)
const onSelectNet = (ind) => {
    selectNet.value = netList[ind];
    showNetList.value = false;
}

const balance = ref("0")
let intervalId = null
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

const walletAddress = ref(localStorage.getItem('walletAddress') || null);


const chainUsdtAddressMap = {
    1: '0xdAC17F958D2ee523a2206206994597C13D831ec7',       // Ethereum
    56: '0x55d398326f99059fF775485246999027B3197955',      // BSC
    42161: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',    // Arbitrum
    8453: '0xd9aa7a7f7d22d97db1b9c208fe93888158e7e8f4',     // Base
}


// Check if the wallet is connected
const checkWalletConnection = async () => {
    if (!window.ethereum) return
    const accounts = await window.ethereum.request({ method: 'eth_accounts' })
    if (accounts.length > 0) {
        walletAddress.value = accounts[0] // Wallet is connected, set wallet address
        // Get the current network's chain ID
        const chainId = await getChainId()
        // Fetch USDT balance for the current network
        balance.value = await getUSDTBalance(chainId)
        if (balance !== null) {
            console.log(`USDT balance on chain ${chainId}: ${balance}`)
        }

    }
}

// Connect the wallet
const connectWallet = async () => {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            walletAddress.value = accounts[0] // Set the wallet address after successful connection
            // Get the current network's chain ID
            const chainId = await getChainId()
            // Log the current chain ID
            console.log('Current Chain ID:', chainId)
            // Fetch USDT balance for the current network
            balance.value = await getUSDTBalance(chainId)
            if (balance !== null) {
                console.log(`USDT balance on chain ${chainId}: ${balance}`)
            }
            toast.success('Wallet connected successfully!', { position: 'top-right' })
        } catch (error) {
            toast.error('Failed to connect wallet, please try again', { position: 'top-right' })
            return false
        }
    } else {
        toast.error('Please install MetaMask or another supported browser wallet', { position: 'top-right' })
        return false
    }
    return true
}

// Get the current network's chain ID
const getChainId = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const chain = await provider.getNetwork()
    return Number(chain.chainId)
}

// Fetch the USDT balance from a specific network (BSC, ERC-20, Arbitrum, or Base)
const getUSDTBalance = async (chainId) => {
    const provider = new ethers.BrowserProvider(window.ethereum)
    if (!provider) {
        toast.error('Unsupported chain', { position: 'top-right' })
        return null
    }
    const signer = await provider.getSigner()

    const usdtABI = [
        "function balanceOf(address owner) view returns (uint256)"
    ]
    const usdtContract = new ethers.Contract(chainUsdtAddressMap[chainId], usdtABI, signer)
    const balance = await usdtContract.balanceOf(walletAddress.value)
    return ethers.formatUnits(balance, 6); // USDT uses 6 decimal places
}

// Main method to handle deposit logic, checking wallet, fetching chain info, and balance
const onDeposit = async () => {
    // First, check if the wallet is connected
    await checkWalletConnection()
    // Ensure wallet address is available
    if (!walletAddress.value) {
        // If wallet is not connected, request to connect
        const connected = await connectWallet()
        if (!connected) {
            return
        }
    }
    // Get the current network's chain ID
    const chainId = await getChainId()
    // Log the current chain ID
    console.log('Current Chain ID:', chainId)
    // Fetch USDT balance for the current network
    balance.value = await getUSDTBalance(chainId)
    if (balance !== null) {
        console.log(`USDT balance on chain ${chainId}: ${balance}`)
    }
}

onMounted(() => {
    checkWalletConnection()
    intervalId = setInterval(checkWalletConnection, 3000) // 每 10 秒检查一次
})

onBeforeUnmount(() => {
    if (intervalId) clearInterval(intervalId)
})





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