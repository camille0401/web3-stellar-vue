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
                        href="#0" aria-label="Twitter">
                        <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                        </svg>
                      </a>
                    </li>
                    <li class="ml-2">
                      <a class="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
                        href="#0" aria-label="Dev.to">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                          <path class="w-8 h-8 fill-current"
                            d="M12.29 14.3a.69.69 0 0 0-.416-.155h-.623v3.727h.623a.689.689 0 0 0 .416-.156.543.543 0 0 0 .21-.466v-2.488a.547.547 0 0 0-.21-.462ZM22.432 8H9.568C8.704 8 8.002 8.7 8 9.564v12.872A1.568 1.568 0 0 0 9.568 24h12.864c.864 0 1.566-.7 1.568-1.564V9.564A1.568 1.568 0 0 0 22.432 8Zm-8.925 9.257a1.631 1.631 0 0 1-1.727 1.687h-1.657v-5.909h1.692a1.631 1.631 0 0 1 1.692 1.689v2.533ZM17.1 14.09h-1.9v1.372h1.163v1.057H15.2v1.371h1.9v1.056h-2.217a.72.72 0 0 1-.74-.7v-4.471a.721.721 0 0 1 .7-.739H17.1v1.054Zm3.7 4.118c-.471 1.1-1.316.88-1.694 0l-1.372-5.172H18.9l1.058 4.064 1.056-4.062h1.164l-1.378 5.17Z" />
                        </svg>
                      </a>
                    </li>
                    <li class="ml-2">
                      <a class="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
                        href="#0" aria-label="Github">
                        <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                        </svg>
                      </a>
                    </li>
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
                    <circle cx="8" cy="4" r="3"></circle>
                    <path d="M1 14c0-4.5 3.5-6 7-6s7 1.5 7 6"></path>
                  </g>
                </svg>
                <span class="mr-2">{{ walletAddress }}</span>
                <span
                  class="material-symbols-outlined tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out">
                  stat_minus_1
                </span>
              </a>
              <div
                class="dropdown-content border border-transparent [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] rounded-lg px-4 py-1.5">
                <a href="javascript:;"
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
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { ethers } from "ethers";




const LANGMAP = {
  zhCN: "CN",
  en: "EN"
}

export default {
  name: 'Header',
  setup() {

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
          let address = accounts[0];
          walletAddress.value = `${address.slice(0, 4)}...${address.slice(-4)}`;
          localStorage.setItem('walletAddress', walletAddress.value);
        } catch (error) {
          console.error("连接钱包失败", error);
        }
      } else {
        alert("请安装 MetaMask 钱包插件");
      }
    }


    window.ethereum?.on('accountsChanged', (accounts) => {
      if (accounts.length === 0) {
        walletAddress.value = null;
        localStorage.removeItem('walletAddress');
      } else {
        walletAddress.value = `${accounts[0].slice(0, 4)}...${accounts[0].slice(-4)}`;
        localStorage.setItem('walletAddress', walletAddress.value);
      }
    });

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
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
      walletAddress
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