<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="flex-1">
          <!-- Logo -->
          <router-link class="inline-flex" to="/" aria-label="Cruip">
            <img class="max-w-none" style="margin-top: 20px;" src="../images/logo.png" width="200" height="200"
              alt="Stellar">
          </router-link>
        </div>

        <!-- change language -->
        <div class="flex items-center">

          <!-- Desktop navigation -->
          <nav class="hidden md:flex md:grow">

            <!-- Desktop menu links -->
            <ul class="flex grow justify-center flex-wrap items-center">
              <li>
                <router-link
                  class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  to="/">{{ $t("global.nav1_name") }}</router-link>
              </li>
              <li>
                <router-link
                  class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  to="/integrations">{{ $t("global.nav2_name") }}</router-link>
              </li>
              <li>
                <router-link
                  class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  to="/changelog">{{ $t("global.nav3_name") }}</router-link>
              </li>
              <li>
                <a class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  :href="$t('global.whitepaper')" target="_blank">{{ $t("global.nav4_name") }}</a>
              </li>
              <li class="web-dropdown community-dropdown">
                <a href="javascript:;"
                  class="dropdown-btn font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out">
                  {{ $t("global.nav5_name") }}
                </a>
                <div
                  class="dropdown-content border border-transparent [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] rounded-lg px-4 py-1.5">
                  <ul class="flex">
                    <li>
                      <a class="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
                        href="https://x.com/healtraceAI" target="_blank" aria-label="Twitter">
                        <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                        </svg>
                      </a>
                    </li>
                    <li class="ml-2">
                      <a class="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
                        href="https://t.me/HealTraceAi" target="_blank" aria-label="Dev.to">
                        <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M16 0C7.164 0 0 7.163 0 16s7.164 16 16 16 16-7.163 16-16S24.836 0 16 0zm6.595 10.728-2.2 10.4c-.166.75-.623.93-1.263.578l-3.49-2.58-1.662 1.6c-.183.178-.336.328-.687.328l.247-3.455 6.291-5.686c.274-.244-.06-.381-.425-.137L10.74 17.48l-3.4-1.062c-.74-.23-.756-.74.157-1.097l13.522-5.213c.622-.24 1.16.159.923 1.62z"
                            transform="scale(0.6) translate(10 10)" />
                        </svg>

                      </a>
                    </li>
                    <!-- <li class="ml-2">
                      <a class="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
                        href="#0" aria-label="Github">
                        <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" 
                            />
                        </svg>
                      </a>
                    </li> -->
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>


        <!-- Desktop sign in links -->
        <ul class="flex-1 flex justify-end items-center">
          <li class="flex items-center">
            <div class="web-dropdown international-dropdown">
              <a href="javascript:;"
                class="dropdown-btn font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" class="mr-1">
                  <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                    stroke-width="2">
                    <path
                      d="M8 14.667c1.34 0 2.425-2.985 2.425-6.667S9.339 1.333 8 1.333 5.576 4.318 5.576 8 6.662 14.667 8 14.667M1.637 6.182h12.727M1.637 9.818h12.727">
                    </path>
                    <path d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334"></path>
                  </g>
                </svg>
                {{ lang }}
              </a>
              <div
                class="dropdown-content border border-transparent [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] rounded-lg px-4 py-1.5">
                <a href="javascript:;"
                  class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  @click="langHandler('en')">English</a>
                <a href="javascript:;"
                  class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  @click="langHandler('zhCN')">简体中文</a>
              </div>
            </div>
          </li>
          <li>
            <div v-if="walletAddress" class="web-dropdown walletAddress-dropdown">
              <a
                class="dropdown-btn btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group 
        [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,
        conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,
        var(--color-slate-400)_100%)_border-box] 
        relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" class="mr-2">
                  <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                    stroke-width="2">
                    <path
                      d="M3 5C3 3.343 4.343 2 6 2H14C15.657 2 17 3.343 17 5V11C17 12.657 15.657 14 14 14H6C4.343 14 3 12.657 3 11V5Z">
                    </path>
                    <path
                      d="M12 10C12.552 10 13 9.552 13 9C13 8.448 12.552 8 12 8C11.448 8 11 8.448 11 9C11 9.552 11.448 10 12 10Z">
                    </path>
                    <path d="M3 5H12C13.657 5 15 6.343 15 8V10C15 11.657 13.657 13 12 13H3"></path>
                  </g>
                </svg>
                <span class="mr-2">{{ walletAddress.slice(0, 4) + "..." + walletAddress.slice(-4) }}</span>
                <span
                  class="material-symbols-outlined tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out">
                  stat_minus_1
                </span>
              </a>
              <div
                class="dropdown-content border border-transparent [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] rounded-lg px-4 py-1.5">
                <a href="javascript:;" @click="disConnectWallet"
                  class="flex items-center justify-between font-medium text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out">
                  <span class="mr-4">{{ $t("global.wallet_disconnect") }}</span>
                  <span
                    class="material-symbols-outlined tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out"
                    style="font-size: 20px;">
                    logout
                  </span>
                </a>
              </div>
            </div>
            <a v-else
              class="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group 
        [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,
        conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,
        var(--color-slate-400)_100%)_border-box] 
        relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none cursor-pointer"
              @click="connectWallet">
              <span class="relative inline-flex items-center">
                {{ $t("global.connect") }}
                <span
                  class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </span>
            </a>
          </li>
        </ul>

        <!-- Mobile menu -->
        <div class="md:hidden flex items-center ml-4">

          <!-- Hamburger button -->
          <button
            class="group inline-flex w-8 h-8 text-slate-300 hover:text-white text-center items-center justify-center transition"
            ref="hamburger" aria-controls="mobile-nav" :aria-expanded="mobileNavOpen"
            @click.stop="mobileNavOpen = !mobileNavOpen">
            <span class="sr-only">Menu</span>
            <svg class="w-4 h-4 fill-current pointer-events-none" viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] -translate-y-[5px] group-aria-expanded:rotate-[315deg] group-aria-expanded:translate-y-0"
                y="7" width="16" height="2" rx="1"></rect>
              <rect
                class="origin-center group-aria-expanded:rotate-45 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
                y="7" width="16" height="2" rx="1"></rect>
              <rect
                class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] translate-y-[5px] group-aria-expanded:rotate-[135deg] group-aria-expanded:translate-y-0"
                y="7" width="16" height="2" rx="1"></rect>
            </svg>
          </button>

          <!-- Mobile navigation -->
          <nav id="mobile-nav"
            class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
            ref="mobileNav"
            :style="[mobileNavOpen ? { maxHeight: $refs.mobileNav.scrollHeight + 'px', opacity: 1 } : { maxHeight: 0, opacity: .8 }]"
            @click.outside="expanded = false" @keydown.escape.window="expanded = false">
            <ul
              class="border border-transparent [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] rounded-lg px-4 py-1.5">
              <li>
                <router-link class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5" to="/">{{
                  $t("global.nav1_name") }}</router-link>
              </li>
              <li>
                <router-link class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5"
                  to="/integrations">{{ $t("global.nav2_name") }}</router-link>
              </li>
              <li>
                <router-link class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5" to="/changelog">{{
                  $t("global.nav3_name") }}</router-link>
              </li>
              <li>
                <a class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5"
                  :href="$t('global.whitepaper')" target="_blank">{{ $t("global.nav4_name") }}</a>
              </li>
            </ul>
          </nav>

        </div>

      </div>
    </div>
  </header>
</template>

<script>
import config from '../constants/config';
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { ethers } from "ethers";
import { useAppStore } from '../stores/app'

const LANGMAP = {
  zhCN: "CN",
  en: "EN"
}

export default {
  name: 'Header',
  setup() {

    const appStore = useAppStore();
    const lang = ref(LANGMAP["en"])
    const I18n = useI18n()
    const langHandler = (target) => {
      lang.value = LANGMAP[target]
      I18n.locale.value = target
    }

    const mobileNavOpen = ref(false)
    const mobileNav = ref(null)
    const hamburger = ref(null)

    // close on click outside
    const clickHandler = ({ target }) => {
      if (!mobileNavOpen.value || mobileNav.value.contains(target) || hamburger.value.contains(target)) return
      mobileNavOpen.value = false
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen.value || keyCode !== 27) return
      mobileNavOpen.value = false
    }

    const walletAddress = ref(localStorage.getItem('walletAddress') || null);

    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const accounts = await provider.send("eth_requestAccounts", []);
          walletAddress.value = accounts[0];
          localStorage.setItem('walletAddress', walletAddress.value);
          const chainid = getChainId();
          if (chainid !== config.CHAIN_LIST[0].hex) {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: config.CHAIN_LIST[0].hex }],
            })
          }
          appStore.notify();
        } catch (error) {
          console.error("connect error", error);
          throw error
        }
      }
    }

    // Get the current network's chain ID
    const getChainId = async () => {
      const provider = new ethers.BrowserProvider(window.ethereum)
      const chain = await provider.getNetwork()
      return Number(chain.chainId)
    }

    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        walletAddress.value = null;
        localStorage.removeItem('walletAddress');
      } else {
        walletAddress.value = accounts[0];
        localStorage.setItem('walletAddress', walletAddress.value);
        appStore.notify();
      }
    }

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    const disConnectWallet = async () => {
      if (window.ethereum) {
        try {
          localStorage.removeItem('walletAddress');
          walletAddress.value = null;
          await window.ethereum.request({
            "method": "wallet_revokePermissions",
            "params": [
              {
                eth_accounts: {}
              }
            ],
          });

        } catch (error) {
          console.error("disconnect error", error);
        }
      }
    }

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    return {
      mobileNavOpen,
      mobileNav,
      hamburger,
      lang,
      langHandler,
      connectWallet,
      walletAddress,
      disConnectWallet
    }
  }
}
</script>


<style lang="css" scoped>
.web-dropdown {
  position: relative;
  display: inline-block;
  z-index: 10;
}

.web-dropdown .dropdown-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.web-dropdown .dropdown-content {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  min-width: 130px;
  padding: 10px;
  transition: all 0.5s ease-in-out;
}

.web-dropdown.international-dropdown:hover .dropdown-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 10px;
}

.web-dropdown.community-dropdown:hover .dropdown-content {
  display: block;
}

.web-dropdown.walletAddress-dropdown:hover .dropdown-content {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
}
</style>